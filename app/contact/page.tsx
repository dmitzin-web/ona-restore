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
      message: String(formData.get('message')),
    }

    const { error } = await supabase.from('leads').insert(lead)

    if (error) {
      setStatus('Something went wrong. Please call us directly.')
      return
    }

    setStatus('Thank you. Your request has been submitted.')
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          ONA Restore
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Request an Inspection
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300">
          Tell us about your project or property damage and we will contact you.
        </p>

        <form action={handleSubmit} className="mt-12 space-y-6">
          <input name="name" required type="text" placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none" />
          <input name="phone" required type="tel" placeholder="Phone" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none" />

          <select name="damage_type" className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none">
            <option value="Water Damage">Water Damage</option>
            <option value="Fire & Smoke Damage">Fire & Smoke Damage</option>
            <option value="Mold Remediation">Mold Remediation</option>
            <option value="Reconstruction">Reconstruction</option>
            <option value="Remodeling">Remodeling</option>
          </select>

          <textarea name="message" placeholder="Tell us what happened" className="min-h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none" />

          <button className="w-full rounded-full bg-white px-8 py-4 font-medium text-black">
            Submit Request
          </button>
        </form>

        {status && <p className="mt-6 text-neutral-300">{status}</p>}
      </div>
    </main>
  )
}