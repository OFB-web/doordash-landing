export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight">DoorDash</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The fastest way to send and receive anything across Kenya. Built on speed, trust and the belief that delivery should just work.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                {
                  name: 'twitter',
                  path: <path d="M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74A11.64 11.64 0 013 4.79a4.1 4.1 0 001.27 5.47A4.07 4.07 0 012.8 9.7v.05a4.1 4.1 0 003.29 4 4.19 4.19 0 01-1.53.18 4.13 4.13 0 003.83 2.84A8.22 8.22 0 012 18.27 11.57 11.57 0 008.29 20c7.55 0 11.68-6.26 11.68-11.67 0-.18 0-.36-.02-.53A8.18 8.18 0 0022 5.8z" />,
                },
                {
                  name: 'instagram',
                  path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
                },
                {
                  name: 'linkedin',
                  path: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />,
                },
              ].map(({ name, path }) => (
                <a key={name} href="#"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/40 border border-white/5 transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">{path}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Product', items: ['Features', 'Pricing', 'API', 'Changelog'] },
            { title: 'Drivers', items: ['Earn with DoorDash', 'Requirements', 'Support', 'Community'] },
            { title: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 DoorDash Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
