"use client";

export default function PartnersPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-4">
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-white to-blue-100 overflow-hidden">
        {/* Subtle logo overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'url(/quadco-logo.png) center/cover no-repeat',
            opacity: 0.08,
          }}
        />
        {/* Color overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-white/40 to-blue-100/60 z-0" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-16">
          <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-4 drop-shadow-lg">
            Quadco Consults
          </h1>
          <p className="text-2xl font-bold text-blue-700 text-center">
            Simplifying work, accelerating growth.
          </p>
        </div>
        {/* Partners grid and other content should be wrapped in a relative z-10 container below */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <section className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-10 text-blue-900">
              Our Partners
            </h1>
            <div className="bg-gray-50 rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-700">
                Strategic Business Partners
              </h2>
              {/* PartnerSlider component removed */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
