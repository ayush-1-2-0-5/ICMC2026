export function WelcomeSection() {
  return (
    <section className="relative py-24 bg-cover bg-center min-h-[60vh]" style={{ backgroundImage: 'url(/centralplaza.jpg?height=800&width=1600)' }}>
      {/* Light overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
            12th International Conference on Mathematics and Computing
          </h2>
          <h3 className="text-3xl md:text-4xl text-indigo-800 font-semibold">
            ICMC 2026
          </h3>
          <p className="text-xl md:text-2xl text-indigo-900 font-medium tracking-wide">
           8th-10th January, 2026 | Jaipur, India
          </p>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
            This edition of the conference will be held at Jaipur, India. It will be held under the aegis of Cryptology Research Society of India (CRSI), jointly organized by Society for Electronic Transactions and Security (SETS), The Institute of Mathematical Sciences (IMSc) and Chennai Mathematical Institute (CMI).
          </p>
        </div>
      </div>
    </section>
  )
}

