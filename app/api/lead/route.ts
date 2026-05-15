import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const requests = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function rateLimit(ip: string) {
  const now = Date.now()
  const windowMs = 5 * 60 * 1000
  const max = 5
  const current = requests.get(ip)

  if (!current || current.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (current.count >= max) return false

  current.count += 1
  return true
}

export async function POST(request: Request) {
  const ip = getClientIp(request)

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please call us directly.' },
      { status: 429 },
    )
  }

  const body = await request.json()

  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  const name = String(body.name || '').trim()
  const phone = String(body.phone || '').trim()
  const email = String(body.email || '').trim()
  const damageType = String(body.damage_type || '').trim()
  const message = String(body.message || '').trim()
  const propertyAddress = String(body.property_address || '').trim()
  const urgency = String(body.urgency || '').trim()
  const insuranceCompany = String(body.insurance_company || '').trim()
  const claimNumber = String(body.claim_number || '').trim()

  if (!name || !phone) {
    return NextResponse.json(
      { error: 'Name and phone are required.' },
      { status: 400 },
    )
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: 'Lead capture is not configured. Please call us directly.' },
      { status: 500 },
    )
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const leadMessage = [
    `Property Address: ${propertyAddress}`,
    `Urgency: ${urgency}`,
    `Insurance Company: ${insuranceCompany}`,
    `Claim Number: ${claimNumber}`,
    '',
    message,
  ].join('\n')

  const { error } = await supabase.from('leads').insert({
    name,
    phone,
    email,
    damage_type: damageType,
    message: leadMessage,
  })

  if (error) {
    return NextResponse.json(
      { error: 'Lead submission failed. Please call us directly.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
