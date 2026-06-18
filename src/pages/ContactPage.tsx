import PageTransition from '@/components/layout/PageTransition'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactAvailability from '@/components/sections/contact/ContactAvailability'

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <ContactHero />
        <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto pb-16">
          <div className="mb-8">
            <ContactAvailability />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
