// The shape of a skin drawn from data, one file per skin in this folder.
// register.tsx draws every one of them the same way (see `drawLook` there).

// The agent roles a skin gives a creature each: `other` is any other type.
export type Role = 'Explore' | 'Plan' | 'fork' | 'general-purpose' | 'other'

// A mini, 8×6 pixels: 4 rows (8 wide) over a pair of feet. '#' is its main
// colour, '-' that colour shaded, other letters from `colors`. `eye` is the
// row its eyes sit on, `eyes` their columns (2 and 5 unless said), `eyeColor`
// theirs (dark unless said); `feet: false` for one that rolls or floats,
// `arms: false` for one with none. `tint` colours its agent's name.
export type CritterLook = {
  rows: string[]
  eye: number
  eyes?: number[]
  eyeColor?: number
  feet?: boolean
  arms?: boolean
  colors: { '#': number } & Record<string, number>
  tint: number
}

export type Cell = [x: number, y: number]

// The big buddy, 10 pixels wide and at most 11 rows tall, the first two rows
// headroom for ears, hats or horns ('.' empty, any other letter a colour from
// `colors`). Cells are [column, row] into `rows`.
//
// How the moods come out of it:
// - chilling: he bobs; now and then the eyes blink (each eye takes the colour
//   of the pixel under it);
// - thinking: the eyes dart one pixel left and right, never off his face;
// - working: arms up and down, feet stepping apart and back;
// - done: a jump, arms up, the `smile` cells drawn dark, sparkles;
// - oh no: he sinks a pixel and a tear blinks on the `tear` cell.
export type SkinLook = {
  // What `/buddy <name>` answers.
  said: string
  // Where `/buddy list` puts it, e.g. 'Games', 'Star Wars', 'Horror'.
  group: string
  rows: string[]
  colors: Record<string, number>
  // His eyes, each on a pixel of his face.
  eyes: Cell[]
  eyeColor?: number
  // Drawn when he's happy, on pixels of his face: dark unless `smileColor`
  // says (a lamp or lights that switch on, say).
  smile?: Cell[]
  smileColor?: number
  // Where his tear shows when he's sad, on a pixel of his face.
  tear: Cell
  // Hands or paws beside him, on empty cells: `down` most of the time, `up`
  // when he's happy or pumping his arms.
  arms?: { color: number; down: Cell[]; up: Cell[] }
  // Feet on the row below `rows`, at these columns; while he works the left
  // ones step one left and the right ones one right.
  feet?: { color: number; at: number[] }
  captions?: { idle?: string; happy?: string }
  critters: Record<Role, CritterLook>
}
