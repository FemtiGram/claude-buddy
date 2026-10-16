import type { SkinLook } from './types'
import { look as mario } from './mario'
import { look as moogle } from './moogle'
import { look as pikachu } from './pikachu'
import { look as slime } from './slime'
import { look as barba } from './barba'
import { look as moomin } from './moomin'
import { look as tomte } from './tomte'
import { look as kirby } from './kirby'
import { look as creeper } from './creeper'
import { look as soot } from './soot'

// Every skin drawn from data, by its `/buddy` word.
export const LOOKS = { mario, moogle, pikachu, slime, barba, moomin, tomte, kirby, creeper, soot } satisfies Record<string, SkinLook>
