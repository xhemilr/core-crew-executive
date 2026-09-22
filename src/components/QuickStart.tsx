import { useState, type FormEvent } from 'react'
import { Button } from './ui/Primitives'
import { IconArrowRight } from './ui/icons'
import { quickStart } from '../data/site'
import type { Selection } from '../types'

const fieldLabel =
  'text-xs font-semibold tracking-[0.1em] uppercase text-ink-muted'
const select =
  'min-h-12 w-full cursor-pointer rounded-xl border border-ivory-line bg-white px-3 text-base font-medium text-ink transition-colors duration-200 hover:border-ink-muted focus:border-navy focus:outline-none'

/** The ivory bar under the hero: four choices that pre-fill the quote form. */
export function QuickStart({ onStart }: { onStart: (selection: Selection) => void }) {
  const [type, setType] = useState(quickStart.types[0])
  const [level, setLevel] = useState(quickStart.levels[0])
  const [count, setCount] = useState(quickStart.counts[0].value)
  const [when, setWhen] = useState(quickStart.starts[0])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onStart({ type, level, count, when })
  }

  return (
    <div className="relative z-20 mt-12 lg:mt-16">
      <form
        onSubmit={handleSubmit}
        aria-label="Start a workforce request"
        className="grid items-end gap-[18px] rounded-[var(--radius-xl2)] bg-ivory/97 p-[22px] text-ink shadow-(--shadow-soft) ring-1 ring-black/5 backdrop-blur-sm md:grid-cols-2 md:p-7 lg:grid-cols-[auto_1.25fr_1fr_auto_1fr_auto]"
      >
        <p className="self-center font-serif text-[28px] leading-tight md:col-span-2 lg:col-span-1 lg:border-r lg:border-ivory-line lg:pr-2.5">
          <small className="mb-1 block font-sans text-xs font-semibold tracking-[0.14em] uppercase text-gold-ink">
            Quick start
          </small>
          Start a request
        </p>

        <div className="flex min-w-0 flex-col gap-1.5">
          <label className={fieldLabel} htmlFor="b-type">
            I need
          </label>
          <select id="b-type" className={select} value={type} onChange={(e) => setType(e.target.value)}>
            {quickStart.types.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5">
          <label className={fieldLabel} htmlFor="b-level">
            Level
          </label>
          <select
            id="b-level"
            className={select}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {quickStart.levels.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5" role="radiogroup" aria-labelledby="b-count-l">
          <span className={fieldLabel} id="b-count-l">
            Workers
          </span>
          <div className="flex overflow-hidden rounded-xl border border-ivory-line bg-white">
            {quickStart.counts.map((option, index) => (
              <label key={option.value} className="relative flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="count"
                  value={option.value}
                  checked={count === option.value}
                  onChange={() => setCount(option.value)}
                  className="peer absolute inset-0 cursor-pointer opacity-0"
                />
                <span
                  className={`grid min-h-[46px] min-w-[46px] place-items-center px-2.5 text-[15px] font-semibold text-ink transition-colors duration-200 peer-hover:bg-ivory-2 peer-checked:bg-navy peer-checked:text-gold ${
                    index === 0 ? '' : 'border-l border-ivory-line'
                  }`}
                >
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5">
          <label className={fieldLabel} htmlFor="b-when">
            Start
          </label>
          <select id="b-when" className={select} value={when} onChange={(e) => setWhen(e.target.value)}>
            {quickStart.starts.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <Button type="submit" className="min-h-12 rounded-xl md:col-span-2 lg:col-span-1">
          Continue <IconArrowRight className="h-[18px] w-[18px]" />
        </Button>
      </form>
    </div>
  )
}
