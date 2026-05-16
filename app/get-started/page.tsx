'use client'
import Link from 'next/link'
import { useState } from 'react'

const roles = [
  { id: 'sender', label: 'I want to send packages', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>), color: '#FF3D2E' },
  { id: 'driver', label: 'I want to earn as a rider', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" /><path d="M12 8v4l3 3" /></svg>), color: '#00FFB3' },
  { id: 'business', label: 'Business delivery solution', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>), color: '#00D9F5' },
]

export default function GetStartedPage() {
  const [selectedRole, setSelectedRole] = useState('')
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,179,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="w-full max-w-lg relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">DoorDash</span>
          </Link>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'text-white' : 'bg-white/8 text-slate-400'}`}
                  style={step >= s ? { background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' } : {}}>
                  {s}
                </div>
                {s < 2 && <div className={`w-12 h-0.5 transition-all duration-300 ${step > s ? 'bg-primary' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-black text-white mb-2">
            {step === 1 ? 'Choose your role' : 'Create your account'}
          </h1>
          <p className="text-slate-400">
            {step === 1 ? 'How do you plan to use DoorDash?' : 'Fill in your details to get started'}
          </p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/8">
          {step === 1 ? (
            <div className="space-y-3">
              {roles.map(role => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-200 ${selectedRole === role.id ? 'border-opacity-50' : 'border-white/8 hover:border-white/15'}`}
                  style={selectedRole === role.id ? { borderColor: `${role.color}50`, background: `${role.color}08`, boxShadow: `0 0 20px ${role.color}12` } : {}}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ background: `${role.color}15`, border: `1px solid ${role.color}30`, color: role.color }}>
                    {role.icon}
                  </div>
                  <span className="font-semibold text-white">{role.label}</span>
                  {selectedRole === role.id && (
                    <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: role.color }}>
                      <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                  )}
                </button>
              ))}
              <button
                disabled={!selectedRole}
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-300 mt-4 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-glow"
                style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}
              >
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {[
                { label: 'Full name', value: name, set: setName, placeholder: 'Amara Johnson', type: 'text' },
                { label: 'Email address', value: email, set: setEmail, placeholder: 'you@example.com', type: 'email' },
                { label: 'Phone number', value: phone, set: setPhone, placeholder: '+254 700 000 000', type: 'tel' },
              ].map(field => (
                <div key={field.label}>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={e => field.set(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 transition-all duration-200"
                  />
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold hover:border-white/20 transition-all duration-200">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-glow"
                  style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
                  Create Account
                </button>
              </div>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-primary font-semibold hover:text-accent-orange transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
