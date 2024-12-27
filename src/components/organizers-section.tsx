import Image from "next/image"

export function OrganizersSection() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Organizers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#c17f59] text-center mb-12">
            ORGANISERS
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <Image
              src="/c3-sdf.jpg"
              alt="LNMIIT Logo"
              width={150}
              height={150}
              className="rounded-full bg-white p-2"
            />
            <Image
              src="/logo3.jpg"
              alt="Technology Foundation Logo"
              width={150}
              height={150}
              className="rounded-full bg-white p-2"
            />
          </div>
        </div>

        {/* Associates */}
        <div>
          <h2 className="text-3xl font-bold text-[#c17f59] text-center mb-12">
            IN COOPERATION WITH
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {/* <Image
              src="/logo2.jpg"
              alt="Mathematical Society Logo"
              width={150}
              height={150}
              className="rounded-full bg-white p-2"
            /> */}
            {/* <Image
              src="/logo3.jpg"
              alt="CRSI Logo"
              width={150}
              height={150}
              className="rounded-full bg-white p-2"
            /> */}
            <Image
              src="/crsi.jpg"
              alt="Research Society Logo"
              width={150}
              height={150}
              className="rounded-full bg-white p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

