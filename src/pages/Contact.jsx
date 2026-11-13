import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import {
  FiAlertTriangle,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import { emailjs, profile } from '../data/site'
import { fieldClass, labelClass } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
  {
    label: 'Téléphone',
    value: profile.phone,
    href: `tel:${profile.phoneRaw}`,
    icon: FiPhone,
  },
  {
    label: 'WhatsApp',
    value: profile.phoneAlt,
    href: `https://wa.me/${profile.phoneAltRaw.replace(/\D/g, '')}`,
    icon: FaWhatsapp,
  },
  {
    label: 'Localisation',
    value: profile.location,
    href: null,
    icon: FiMapPin,
  },
]

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [sending, setSending] = useState(false)

  usePageMeta(
    'Contact | TCHALLA Obafemi Gérard',
    'Contactez TCHALLA Obafemi Gérard pour discuter d’un site web, d’une application ou d’un système de gestion.',
  )

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setSending(true)
    setStatus({ type: 'loading', message: 'Envoi du message…' })

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjs.serviceId,
          template_id: emailjs.templateId,
          user_id: emailjs.publicKey,
          template_params: {
            from_name: data.get('name'),
            from_email: data.get('email'),
            subject: data.get('subject'),
            message: data.get('message'),
          },
        }),
      })

      if (!response.ok) {
        const details = await response.text()
        throw new Error(details || 'Échec de l’envoi du message.')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès. Merci, je vous répondrai dès que possible.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'L’envoi automatique n’a pas abouti. Vous pouvez m’écrire directement à gerardtchalla6@gmail.com.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHeader
        kicker="07 / Échange"
        title="Me contacter"
        intro="Une idée, un besoin ou une simple question ? Écrivez-moi ou retrouvez-moi sur mes réseaux."
      />

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-3xl glass p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Parlons de votre projet
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Je réponds généralement sous 24 à 48 heures. N’hésitez pas à préciser le contexte et
              le résultat attendu.
            </p>

            <ul className="mt-6 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-lg text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-gray-800 dark:text-gray-100">
                        {item.value}
                      </span>
                    </span>
                  </>
                )

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 rounded-2xl border border-transparent p-2 transition hover:border-blue-200 hover:bg-white/50 dark:hover:border-blue-400/20 dark:hover:bg-white/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-2">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 border-t border-gray-200/70 pt-5 dark:border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Réseaux
              </h3>
              <SocialLinks className="mt-3" size="sm" />
            </div>
          </Reveal>

          <Reveal delay={90} className="rounded-3xl glass p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Envoyer un message
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Les champs marqués d’un astérisque sont obligatoires.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Votre nom"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Sujet *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Site web, application de gestion…"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Décrivez votre besoin en quelques lignes."
                  className={fieldClass}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
              >
                <FiSend aria-hidden="true" />
                {sending ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>

              <div role="status" aria-live="polite" className="min-h-6">
                {status.type !== 'idle' && (
                  <p
                    className={
                      status.type === 'success'
                        ? 'inline-flex items-start gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300'
                        : status.type === 'error'
                          ? 'inline-flex items-start gap-2 rounded-xl bg-red-500/10 px-3 py-2 text-sm font-medium text-red-700 dark:text-red-300'
                          : 'text-sm text-gray-500 dark:text-gray-400'
                    }
                  >
                    {status.type === 'success' && <FiCheck aria-hidden="true" className="mt-0.5 shrink-0" />}
                    {status.type === 'error' && <FiAlertTriangle aria-hidden="true" className="mt-0.5 shrink-0" />}
                    <span>
                      {status.message}
                      {status.type === 'error' && (
                        <>
                          {' '}
                          <a
                            href={`mailto:${profile.email}?subject=${encodeURIComponent('Message depuis le portfolio')}`}
                            className="font-semibold underline underline-offset-2"
                          >
                            Écrire par email
                          </a>
                          .
                        </>
                      )}
                    </span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <Reveal className="overflow-hidden rounded-3xl glass p-2 sm:p-3">
          <iframe
            src={profile.mapEmbed}
            title={`Carte de localisation — ${profile.location}`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl"
          />
        </Reveal>
      </section>
    </>
  )
}
