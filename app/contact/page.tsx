'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    const lead = {
      name: String(formData.get('name')),
      phone: String(formData.get('phone')),
      email: String(formData.get('email')),
      damage_type: String(formData.get('damage_type')),
      message: [
        `Property Address: ${String(formData.get('property_address'))}`,
        `Urgency: ${String(formData.get('urgency'))}`,
        `Insurance Company: ${String(formData.get('insurance_company'))}`,
        `Claim Number: ${String(formData.get('claim_number'))}`,
        '',
        String(formData.get('message')),
      ].join('\n'),
    }

    const { error } = await supabase.from('leads').insert(lead)

    if (error) {
      setStatus('Something went wrong. Please call us directly.')
      return
    }

    setStatus('Thank you. Your request has been submitted.')
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact ONA Restoration
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Request an inspection or project review.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Tell us what happened, where the damage is, whether insurance is
            involved, and how urgent the situation is.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-neutral-500">Service Area</p>
              <h2 className="mt-3 text-2xl font-medium">
                Vancouver WA & Clark County
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-neutral-500">Project Types</p>
              <h2 className="mt-3 text-2xl font-medium">
                Water · Fire · Mold · Remodel
              </h2>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Need urgent help?
            </p>

            <a
              href="tel:+13600000000"
              className="mt-4 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <form action={handleSubmit} className="space-y-5">
            <input name="name" required type="text" placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />
            <input name="phone" required type="tel" placeholder="Phone" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />
            <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />
            <input name="property_address" type="text" placeholder="Property address" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />

            <select name="damage_type" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none">
              <option value="Water Damage">Water Damage</option>
              <option value="Fire & Smoke Damage">Fire & Smoke Damage</option>
              <option value="Mold Remediation">Mold Remediation</option>
              <option value="Reconstruction">Reconstruction</option>
              <option value="Kitchen Remodeling">Kitchen Remodeling</option>
              <option value="Bathroom Remodeling">Bathroom Remodeling</option>
              <option value="Insurance Claim Support">Insurance Claim Support</option>
            </select>

            <select name="urgency" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none">
              <option value="Emergency / ASAP">Emergency / ASAP</option>
              <option value="This week">This week</option>
              <option value="Planning project">Planning project</option>
              <option value="Insurance estimate review">Insurance estimate review</option>
            </select>

            <input name="insurance_company" type="text" placeholder="Insurance company, if applicable" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />
            <input name="claim_number" type="text" placeholder="Claim number, if applicable" className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none" />

            <textarea
              name="message"
              placeholder="Tell us what happened, where the damage is, and what you need help with."
              className="min-h-44 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none"
            />

            <button className="w-full rounded-full bg-white px-8 py-4 font-medium text-black">
              Submit Request
            </button>
          </form>

          {status && (
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-neutral-300">
              {status}
            </p>
          )}

          <p className="mt-6 text-sm leading-6 text-neutral-500">
            ONA Restoration is not a public adjuster and does not make insurance
            coverage determinations. Coverage depends on your policy and carrier.
          </p>
        </div>
      </section>
    </main>
  )
}
