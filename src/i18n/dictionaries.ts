import { en, type Dictionary } from './en.ts'
import { mk } from './mk.ts'
import { sq } from './sq.ts'
import type { Lang } from './languages.ts'

export type { Dictionary }

export const dictionaries: Record<Lang, Dictionary> = { en, mk, sq }
