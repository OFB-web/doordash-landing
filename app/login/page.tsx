'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center px-4 relative overflow-hidden">
      {/* Bg orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,217,245,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">DoorDash</span>
          </Link>
          <h1 className="text-3xl font-black text-white mb-2">Welcome back</h1>
          <p className="text-slate-400">Sign in to your account to continue</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-300">Password</label>
                <a href="#" className="text-xs text-primary hover:text-accent-orange transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-300 hover:shadow-glow"
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-slate-500">or continue with</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {['Google', 'Apple'].map(provider => (
              <button key={provider} className="glass border border-white/8 rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:border-white/20 transition-all duration-200">
                {provider === 'Google' ? (
                  <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6545455,4.90909091 15.1636364,5.47272727 16.3636364,6.40909091 L19.2181818,3.55454545 C17.2909091,1.79090909 14.7818182,0.727272727 12,0.727272727 C7.27272727,0.727272727 3.23636364,3.52272727 1.26452941,7.56363636 L5.26620003,9.76452941 Z" /><path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,16.3439044 C3.19279051,20.3984932 7.26500293,23.1818182 12,23.1818182 C14.6327973,23.1818182 17.0992997,22.2551952 18.9991834,20.5591914 L16.0407269,18.0125889 Z" /><path fill="#4A90E2" d="M18.9991834,20.5591914 C20.9587206,18.7915833 22.1818182,16.1961667 22.1818182,12 C22.1818182,11.2181818 22.0636364,10.4 21.8727273,9.63636364 L12,9.63636364 L12,14.5454545 L17.7818182,14.5454545 C17.5045455,15.9636364 16.7272727,17.1454545 15.5090909,17.9454545 L18.9991834,20.5591914 Z" /><path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23746264,7.58369247 C0.44552459,9.14259538 0,10.9021072 0,12 C0,13.0858732 0.44552459,14.8635182 1.23746264,16.3439044 L5.27698177,14.2678769 Z" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" /></svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don&apos;t have an account?{' '}
            <Link href="/get-started" className="text-primary font-semibold hover:text-accent-orange transition-colors">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
