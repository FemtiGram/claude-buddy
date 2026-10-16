# Render buddy skins to PNGs to look at them without a pane: the big buddy (eyes,
# arms down, feet) and its five minis, on a dark and on a white terminal.
# Usage: python3 tools/render.py <out-dir> hooks/skins/<name>.ts [...]
import re, sys, zlib, struct, pathlib

def png(path, w, h, px):
    raw = b''.join(b'\x00' + bytes(c for p in px[y*w:(y+1)*w] for c in p) for y in range(h))
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    pathlib.Path(path).write_bytes(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b''))

def parse(src):
    consts = {m[0]: int(m[1], 16) for m in re.findall(r'const (\w+) = 0x([0-9a-fA-F]+)', src)}
    val = lambda v: int(v, 16) if v.startswith('0x') else consts.get(v)
    def colors(block):
        out = {}
        for k, v in re.findall(r"""(?:'(.)'|(\w))\s*:\s*(0x[0-9a-fA-F]+|\w+)""", block) and [(a or b, c) for a, b, c in re.findall(r"""(?:'(.)'|(\w))\s*:\s*(0x[0-9a-fA-F]+|\w+)""", block)]:
            if val(v) is not None: out[k] = val(v)
        return out
    def strs(block): return re.findall(r"'([^']*)'", block)
    body = src.split('critters:')[0]
    rows = strs(re.search(r'rows:\s*\[(.*?)\]', body, re.S).group(1))
    cols = colors(re.search(r'colors:\s*\{(.*?)\}', body, re.S).group(1))
    eyes = [tuple(map(int, e)) for e in re.findall(r'\[(\d+),\s*(\d+)\]', re.search(r'eyes:\s*\[(.*?)\]\s*,\s*\n', body, re.S).group(1))]
    ec = re.search(r'\beyeColor:\s*(0x[0-9a-fA-F]+|\w+)', body); ec = val(ec.group(1)) if ec else 0x1a1a1a
    arms = re.search(r'arms:\s*\{\s*color:\s*(0x[0-9a-fA-F]+|\w+),\s*down:\s*\[(.*?)\]\s*,\s*up', body, re.S)
    armc, armd = (val(arms.group(1)), [tuple(map(int, e)) for e in re.findall(r'\[(\d+),\s*(\d+)\]', arms.group(2))]) if arms else (None, [])
    feet = re.search(r'feet:\s*\{\s*color:\s*(0x[0-9a-fA-F]+|\w+),\s*at:\s*\[([\d,\s]*)\]', body)
    feetc, feetat = (val(feet.group(1)), [int(x) for x in feet.group(2).split(',') if x.strip()]) if feet else (None, [])
    crit = []
    for role in ['Explore', 'Plan', 'fork', "'general-purpose'", 'other']:
        m = re.search(re.escape(role) + r":\s*\{\s*rows:\s*\[(.*?)\],(.*?)tint", src.split('critters:')[1], re.S)
        r = strs(m.group(1)); rest = m.group(2)
        eye = int(re.search(r'\beye:\s*(\d+)', rest).group(1))
        es = re.search(r'\beyes:\s*\[([\d,\s]*)\]', rest); es = [int(x) for x in es.group(1).split(',')] if es else [2, 5]
        cec = re.search(r'\beyeColor:\s*(0x[0-9a-fA-F]+|\w+)', rest); cec = val(cec.group(1)) if cec else 0x1a1a1a
        cc = colors(re.search(r'colors:\s*\{(.*?)\}', rest, re.S).group(1))
        nofeet = re.search(r'feet:\s*false', rest) is not None
        crit.append((r, eye, es, cec, cc, nofeet))
    return rows, cols, eyes, ec, armc, armd, feetc, feetat, crit

def render(name, src, out, S=10):
    rows, cols, eyes, ec, armc, armd, feetc, feetat, crit = parse(src)
    W, H = 10 + 1 + 5 * 9, 13
    grid = [[None] * W for _ in range(H)]
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            if ch != '.' and ch in cols: grid[y][x] = cols[ch]
    for x, y in eyes: grid[y][x] = ec
    for x, y in armd: grid[y][x] = armc
    for x in feetat: grid[len(rows)][x] = feetc
    for i, (r, eye, es, cec, cc, nofeet) in enumerate(crit):
        ox, oy = 11 + i * 9, H - 6
        main = cc.get('#')
        for y, row in enumerate(r):
            for x, ch in enumerate(row):
                c = main if ch == '#' else (int(''.join(f'{int(((main >> s) & 255) * .72):02x}' for s in (16, 8, 0)), 16) if ch == '-' and main is not None else cc.get(ch))
                if ch != '.' and c is not None: grid[oy + y][ox + x] = c
        for x in es: grid[oy + eye][ox + x] = cec
        if not nofeet:
            for x in (2, 5): grid[oy + 4][ox + x] = int(''.join(f'{int(((main >> s) & 255) * .6):02x}' for s in (16, 8, 0)), 16)
    pw, ph = (W + 2) * S, (H + 1) * 2 * S
    px = []
    for py in range(ph):
        half = py // ((H + 1) * S); bg = (0x1e, 0x1e, 0x1e) if half == 0 else (0xff, 0xff, 0xff)
        gy = (py - half * (H + 1) * S) // S
        for pxx in range(pw):
            gx = pxx // S - 1
            c = grid[gy][gx] if 0 <= gy < H and 0 <= gx < W else None
            px.append(bg if c is None else ((c >> 16) & 255, (c >> 8) & 255, c & 255))
    png(out, pw, ph, px)

for path in sys.argv[2:]:
    p = pathlib.Path(path)
    try: render(p.stem, p.read_text(), f'{sys.argv[1]}/{p.stem}.png')
    except Exception as e: print('FAIL', p.stem, repr(e))
