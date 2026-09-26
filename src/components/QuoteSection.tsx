import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, Heading, Kicker, Reveal, Rich, Section, Wrap } from './ui/Primitives'
import { IconArrowRight, IconChat, IconMail, IconPhone, IconPin } from './ui/icons'
import { company } from '../data/site'
import { useLanguage } from '../i18n/context'
import type { Selection } from '../types'

type Fields = {
  company: string
  person: string
  phone: string
  email: string
  type: string
  count: string
  location: string
  start: string
  duration: string
  notes: string
}

const empty: Fields = {
  company: '',
  person: '',
  phone: '',
  email: '',
  type: '',
  count: '',
  location: '',
  start: '',
  duration: '',
  notes: '',
}

function Field({
  id,
  label,
  required,
  full,
  children,
}: {
  id: string
  label: string
  required?: boolean
  full?: boolean
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-[7px] ${full ? 'md:col-span-2' : ''}`}>
      <label htmlFor={id} className="text-[13px] font-semibold tracking-[0.06em] uppercase text-ink-muted">
        {label} {required && <span className="text-gold-ink">*</span>}
      </label>
      {children}
    </div>
  )
}

const input =
  'min-h-12 w-full rounded-lg border-0 border-b-[1.5px] border-ivory-line bg-white px-1.5 py-2 text-base font-medium text-ink transition-colors duration-200 placeholder:text-ink-muted/70 hover:border-ink-muted focus:border-navy focus:bg-ivory/50 focus:outline-none'

function ContactRow({
  href,
  icon,
  label,
  value,
}: {
  href?: string
  icon: ReactNode
  label: string
  value: string
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-gold shadow-[0_8px_18px_-10px_rgba(11,24,48,0.8)]">{icon}</span>
      <span>
        <small className="block text-xs font-semibold tracking-[0.12em] uppercase text-ink-muted">
          {label}
        </small>
        <strong className="text-lg font-semibold break-words">{value}</strong>
      </span>
    </>
  )
  const className =
    'grid grid-cols-[44px_1fr] items-center gap-4 rounded-xl border-b border-ivory-line px-2 py-4 text-ink no-underline transition-colors duration-200'
  return href ? (
    <a href={href} className={`${className} hover:bg-white/70 hover:[&_strong]:text-gold-ink`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  )
}

export function QuoteSection({ selection }: { selection: Selection | null }) {
  const { t } = useLanguage()
  const { quickStart: qs, quote } = t
  const [fields, setFields] = useState<Fields>(empty)
  const [applied, setApplied] = useState<Selection | null>(null)
  const firstField = useRef<HTMLInputElement>(null)

  // A new quick-start selection fills in what it already knows. Adjusting
  // state during render (rather than in an effect) keeps it to one pass.
  if (selection && selection !== applied) {
    setApplied(selection)
    setFields((current) => ({
      ...current,
      type: `${qs.types[selection.type]} — ${qs.levelPhrases[selection.level]}`,
      count: qs.counts[selection.count],
      start: qs.starts[selection.when],
    }))
  }

  // Move the cursor into the form once the smooth scroll has arrived.
  useEffect(() => {
    if (!selection) return
    const timer = window.setTimeout(() => firstField.current?.focus({ preventScroll: true }), 600)
    return () => window.clearTimeout(timer)
  }, [selection])

  function set<K extends keyof Fields>(key: K) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.target.setCustomValidity('')
      setFields((current) => ({ ...current, [key]: event.target.value }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    // Our own wording for the browser's "please fill in" bubbles, so they
    // follow the page language instead of the browser's.
    for (const element of Array.from(form.elements)) {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.setCustomValidity('')
        if (element.validity.valueMissing) element.setCustomValidity(quote.validation.required)
        else if (element.validity.typeMismatch) element.setCustomValidity(quote.validation.email)
      }
    }
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    const { mail } = quote
    const lines = [
      `${mail.company}: ${fields.company}`,
      `${mail.person}: ${fields.person}`,
      `${mail.phone}: ${fields.phone}`,
      `${mail.email}: ${fields.email}`,
      `${mail.type}: ${fields.type}`,
      `${mail.count}: ${fields.count}`,
      `${mail.location}: ${fields.location}`,
      `${mail.start}: ${fields.start || '-'}`,
      `${mail.duration}: ${fields.duration || '-'}`,
      '',
      `${mail.notes}:`,
      fields.notes || '-',
    ]
    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      mail.subject(fields.company),
    )}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <Section id="quote" tone="light">
      <Wrap className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Kicker tone="light">{quote.kicker}</Kicker>
          <Heading>
            <Rich text={quote.title} tone="light" />
          </Heading>
          <p className="mt-6 text-lg text-ink-muted">
            {quote.text}
          </p>

          <div className="mt-8 border-t border-ivory-line">
            <ContactRow
              href={company.phoneHref}
              icon={<IconPhone className="h-[18px] w-[18px]" />}
              label={quote.phone}
              value={company.phone}
            />
            <ContactRow
              href={company.emailHref}
              icon={<IconMail className="h-[18px] w-[18px]" />}
              label={quote.email}
              value={company.email}
            />
            <ContactRow
              href={company.whatsapp}
              icon={<IconChat className="h-[18px] w-[18px]" />}
              label={quote.whatsapp}
              value={quote.whatsappValue}
            />
            <ContactRow
              icon={<IconPin className="h-[18px] w-[18px]" />}
              label={quote.office}
              value={t.company.office}
            />
          </div>
        </div>

        <Reveal delay={100} className="rounded-[var(--radius-xl2)] border border-ivory-line bg-white p-5 shadow-[0_30px_70px_-45px_rgba(11,24,48,0.5)] md:p-10">
          {selection && (
            <p className="mb-6 rounded-r-xl border-l-[3px] border-gold bg-ivory px-4 py-3.5 text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              {quote.selectionLabel}{' '}
              <b className="font-bold">
                {quote.workers(qs.counts[selection.count])} · {qs.types[selection.type]}
              </b>{' '}
              · {qs.levelPhrases[selection.level]} · {quote.start} {qs.starts[selection.when]}
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2 md:gap-x-[18px]">
              <Field id="f-company" label={quote.fields.company} required>
                <input
                  id="f-company"
                  ref={firstField}
                  className={input}
                  autoComplete="organization"
                  required
                  value={fields.company}
                  onChange={set('company')}
                />
              </Field>
              <Field id="f-person" label={quote.fields.person} required>
                <input
                  id="f-person"
                  className={input}
                  autoComplete="name"
                  required
                  value={fields.person}
                  onChange={set('person')}
                />
              </Field>
              <Field id="f-phone" label={quote.fields.phone} required>
                <input
                  id="f-phone"
                  type="tel"
                  className={input}
                  autoComplete="tel"
                  required
                  value={fields.phone}
                  onChange={set('phone')}
                />
              </Field>
              <Field id="f-email" label={quote.fields.email} required>
                <input
                  id="f-email"
                  type="email"
                  className={input}
                  autoComplete="email"
                  required
                  value={fields.email}
                  onChange={set('email')}
                />
              </Field>
              <Field id="f-type" label={quote.fields.type} required>
                <input
                  id="f-type"
                  className={input}
                  placeholder={quote.placeholders.type}
                  required
                  value={fields.type}
                  onChange={set('type')}
                />
              </Field>
              <Field id="f-count" label={quote.fields.count} required>
                <input
                  id="f-count"
                  className={input}
                  inputMode="numeric"
                  placeholder={quote.placeholders.count}
                  required
                  value={fields.count}
                  onChange={set('count')}
                />
              </Field>
              <Field id="f-location" label={quote.fields.location} required>
                <input
                  id="f-location"
                  className={input}
                  placeholder={quote.placeholders.location}
                  required
                  value={fields.location}
                  onChange={set('location')}
                />
              </Field>
              <Field id="f-start" label={quote.fields.start}>
                <input
                  id="f-start"
                  className={input}
                  placeholder={quote.placeholders.start}
                  value={fields.start}
                  onChange={set('start')}
                />
              </Field>
              <Field id="f-duration" label={quote.fields.duration} full>
                <input
                  id="f-duration"
                  className={input}
                  placeholder={quote.placeholders.duration}
                  value={fields.duration}
                  onChange={set('duration')}
                />
              </Field>
              <Field id="f-notes" label={quote.fields.notes} full>
                <textarea
                  id="f-notes"
                  className={`${input} min-h-24 resize-y border-[1.5px] p-3`}
                  placeholder={quote.placeholders.notes}
                  value={fields.notes}
                  onChange={set('notes')}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[300px] text-[13px] text-ink-muted">
                {quote.sendNote(company.email)}
              </p>
              <Button variant="navy" type="submit">
                {t.common.requestQuote} <IconArrowRight className="h-[18px] w-[18px]" />
              </Button>
            </div>
          </form>
        </Reveal>
      </Wrap>
    </Section>
  )
}
