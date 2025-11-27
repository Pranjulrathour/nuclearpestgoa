import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const serviceContent = {
  'rodent-control-goa': {
    name: 'Rodent Control Service in Goa',
    short: 'Rodent Control Goa',
    metaTitle: 'Rodent Control Goa | 24/7 Rodent Pest Control Services',
    metaDescription:
      'Book licensed rodent control services in Goa. Odorless baiting, proofing, and 24/7 emergency rat removal for homes, hotels, and warehouses.',
    hero: {
      heading: 'Rodent Control Service in Goa',
      subheading:
        'Low-odor rodent control for homes, villas, hotels, and factories across North & South Goa. Govt-licensed team removes rats and mice with proofing plus hygiene checklists.',
      image: 'https://sipc.in/images/pest-control/rodent-500x500.webp',
      alt: 'Rodent control expert in Goa',
      stats: [
        { value: '45 min', label: 'Emergency dispatch' },
        { value: '3-layer', label: 'Bait & trap grid' },
        { value: '120+', label: 'Goa pin codes' },
      ],
    },
    features: [
      {
        title: 'Odorless baiting and trapping',
        body: 'German-certified baits, snap traps, and glue boards designed for coastal humidity with no kitchen downtime.',
      },
      {
        title: 'Proofing & sanitation',
        body: 'Seal door gaps, AC sleeves, and service ducts while deploying HACCP-ready cleaning SOPs.',
      },
      {
        title: 'Digital visit reports',
        body: 'Receive WhatsApp reports with before/after photos, bait consumption logs, and recommendations for Goa properties.',
      },
    ],
    process: [
      'Inspect: thermal cameras map nests, droppings, and travel tunnels.',
      'Deploy: multi-bait grid with tamper-proof stations for indoor and outdoor zones.',
      'Proof: stainless-steel meshes and silicone barriers seal entry points.',
      'Monitor: weekly follow-ups with bait top-ups plus hygiene coaching.',
    ],
    serviceAreas: ['Panjim & Porvorim', 'Calangute & Candolim', 'Mapusa & Siolim', 'Margao & Colva', 'Vasco & Verna', 'Ponda & Cuncolim'],
    faqs: [
      {
        q: 'How fast can you start rodent control in Goa?',
        a: 'We reach most North and South Goa locations within 45 minutes for emergency rodent control and within 24 hours for scheduled AMC visits.',
      },
      {
        q: 'Are rodent control chemicals safe for kids and pets?',
        a: 'Yes. We use tamper-proof bait stations, low-odor formulations, and targeted trapping so kitchens, resorts, and schools remain safe.',
      },
      {
        q: 'Do you offer annual rodent AMC plans?',
        a: 'Our AMC includes monthly inspections, bait rotation, proofing repairs, and priority WhatsApp support across Goa.',
      },
    ],
  },
  'cockroach-control-goa': {
    name: 'Cockroach Control Service in Goa',
    short: 'Cockroach Control Goa',
    metaTitle: 'Cockroach Control Goa | Kitchen-Safe Pest Control Services',
    metaDescription:
      'Get kitchen-safe cockroach control in Goa with gel baiting and residual spray. Same-day treatment for homes, hotels, and restaurants.',
    hero: {
      heading: 'Cockroach Control Service in Goa',
      subheading:
        'Kitchen-safe German gel, residual spraying, and drain treatment eliminate German & American cockroaches in Goa apartments, restaurants, and hotels.',
      image: 'https://sipc.in/images/pest-control/cockroach-500x500.webp',
      alt: 'Cockroach control treatment in Goa kitchen',
      stats: [
        { value: '3 months', label: 'Service warranty' },
        { value: '2-in-1', label: 'Gel + spray combo' },
        { value: '24/7', label: 'Goa support desk' },
      ],
    },
    features: [
      {
        title: 'Food zone compliant',
        body: 'Odorless gels and micro-encapsulated sprays approved for cloud kitchens, bakeries, and hotel buffets.',
      },
      {
        title: 'Drain & duct sanitation',
        body: 'Bio-enzymatic drain flush and exhaust duct wiping block recurring infestations in humid Goa weather.',
      },
      {
        title: 'Service tracking',
        body: 'Digital service checklist logs every bait point, spray area, and sanitation recommendation.',
      },
    ],
    process: [
      'Survey wet walls, cabinets, and service shafts using UV flashlights.',
      'Apply gel bait behind hinges, appliances, and electrical points.',
      'Mist micro-encapsulated spray on skirting, drains, and garbage rooms.',
      'Share hygiene checklist covering waste disposal, cleaning, and follow-ups.',
    ],
    serviceAreas: ['Panjim & Caranzalem', 'Margao & Benaulim', 'Calangute & Baga', 'Candolim & Sinquerim', 'Mapusa & Porvorim', 'Vasco & Verna'],
    faqs: [
      {
        q: 'How often should I schedule cockroach control in Goa?',
        a: 'Homes typically need cockroach treatment every 3-4 months, while restaurants in Goa benefit from a monthly or bi-monthly AMC.',
      },
      {
        q: 'Do you use gel or spray for cockroach control?',
        a: 'We combine both—German gel bait for nests and a low-odor residual spray for travel paths and drains.',
      },
      {
        q: 'Can cockroach control be done when staff is working?',
        a: 'Yes. Our low-odor treatments allow kitchens, cafés, and hotel pantries to keep operating during service.',
      },
    ],
  },
  'bed-bug-treatment-goa': {
    name: 'Bed Bug Treatment Goa',
    short: 'Bed Bug Treatment',
    metaTitle: 'Bed Bug Treatment Goa | Steam & Chemical Bed Bug Removal',
    metaDescription:
      'Book professional bed bug treatment in Goa with steam, low-odor chemical spray, and 14-day inspection for homes, hotels, and homestays.',
    hero: {
      heading: 'Bed Bug Treatment in Goa',
      subheading:
        'Heat-assisted bed bug extermination for villas, boutique stays, and Airbnb listings. Steam, dusting, and mattress wrapping ensure zero bites.',
      image: 'https://sipc.in/images/pest-control/bedbug-500x500.webp',
      alt: 'Bed bug treatment in Goa hotel',
      stats: [
        { value: '14-day', label: 'Follow-up audit' },
        { value: '100%', label: 'Coverage guarantee' },
        { value: '24 hrs', label: 'Room ready time' },
      ],
    },
    features: [
      {
        title: 'Steam + chemical combo',
        body: 'High-heat steam kills eggs, while WHO-approved chemical spray wipes remaining colonies.',
      },
      {
        title: 'Mattress sealing',
        body: 'Protective mattress covers, vacuuming, and upholstery shampooing keep guest reviews spotless.',
      },
      {
        title: 'Hospitality SOPs',
        body: 'Room isolation charts, inventory tagging, and staff training tailored for Goa resorts.',
      },
    ],
    process: [
      'Assess room layout, luggage storage, and infestation level.',
      'Vacuum, steam, and dust all seams, skirting, and headboards.',
      'Apply residual spray plus growth regulator for long protection.',
      'Inspect after 14 days and re-treat if activity remains.',
    ],
    serviceAreas: ['Panjim & Dona Paula', 'Candolim & Calangute', 'Morjim & Mandrem', 'Margao & Colva', 'Varca & Cavelossim', 'Palolem & Agonda'],
    faqs: [
      {
        q: 'How long before I can use the room after bed bug treatment?',
        a: 'Rooms can be reoccupied after 24 hours once ventilation is complete, keeping bedding protected with fresh liners.',
      },
      {
        q: 'Do you treat luggage and wardrobes?',
        a: 'Yes, we cover luggage, wardrobes, bedside tables, and curtains because bed bugs hide in all touchpoints.',
      },
      {
        q: 'Is there warranty on bed bug treatment in Goa?',
        a: 'We include a 14-day follow-up inspection and retreat critical spots if we detect any activity.',
      },
    ],
  },
  'mosquito-control-goa': {
    name: 'Mosquito Control Service Goa',
    short: 'Mosquito Control',
    metaTitle: 'Mosquito Control Goa | Fogging & ULV Misting Services',
    metaDescription:
      'Professional mosquito control in Goa with thermal fogging, ULV misting, and larvae treatment for villas, resorts, and communities.',
    hero: {
      heading: 'Mosquito Control in Goa',
      subheading:
        'Dengue and malaria prevention with coastal-ready fogging, ULV misting, and larvae site elimination for Goa communities and resorts.',
      image: 'https://sipc.in/images/pest-control/mosquito-500x500.webp',
      alt: 'Mosquito fogging in Goa',
      stats: [
        { value: '2X', label: 'Fog + ULV combo' },
        { value: '72 hrs', label: 'Larvae follow-up' },
        { value: 'Beach & city', label: 'Coverage' },
      ],
    },
    features: [
      {
        title: 'Thermal fogging',
        body: 'Hot fog knocks down adult mosquitoes during dawn/dusk windows across landscapes and parking zones.',
      },
      {
        title: 'ULV misting',
        body: 'Ultra-low volume mist coats indoor lobbies, banquet halls, and gyms without residue.',
      },
      {
        title: 'Larvae control',
        body: 'Treat stagnant pools, gutters, and planters with eco larvicides and bacterial briquettes.',
      },
    ],
    process: [
      'Survey property for breeding hotspots and water storage.',
      'Schedule fogging for dawn or dusk to hit peak mosquito activity.',
      'Misting inside common areas plus guest corridors.',
      'Revisit within 72 hours to inspect larvae levels and re-dose sites.',
    ],
    serviceAreas: ['Panjim & Dona Paula', 'Candolim & Calangute', 'Siolim & Morjim', 'Margao & Varca', 'Vasco & Chicalim', 'Quepem & Canacona'],
    faqs: [
      {
        q: 'How long does mosquito fogging protection last?',
        a: 'Outdoor fogging suppresses mosquitoes for 10-14 days. We recommend fortnightly service during Goa monsoons.',
      },
      {
        q: 'Is mosquito control safe for pools and pets?',
        a: 'Yes, we cover pools before fogging and use pet-safe larvicides approved by Indian regulators.',
      },
      {
        q: 'Do you offer AMC for gated communities?',
        a: 'We set up weekly or fortnightly mosquito control calendars for gated villas, townships, and resorts.',
      },
    ],
  },
  'housefly-control-goa': {
    name: 'Housefly Control Goa',
    short: 'Housefly Control',
    metaTitle: 'Housefly Control Goa | Food-Safe Fly Management',
    metaDescription:
      'Food-safe housefly control in Goa for bakeries, cafés, cloud kitchens, and resorts with bait stations and UV traps.',
    hero: {
      heading: 'Housefly Control Service in Goa',
      subheading:
        'Housefly prevention for food courts, hotels, and industrial canteens with bait stations, UV traps, and hygiene SOPs approved for Goa kitchens.',
      image: 'https://sipc.in/images/pest-control/housefly-500x500.webp',
      alt: 'Housefly control setup in Goa restaurant',
      stats: [
        { value: 'Food-safe', label: 'Bait program' },
        { value: 'UV', label: 'Trap installation' },
        { value: 'HACCP', label: 'Compliance' },
      ],
    },
    features: [
      {
        title: 'Bait & lure program',
        body: 'Outdoor granular baits and indoor gel spots keep flies away from Goa kitchens and bars.',
      },
      {
        title: 'UV trap layout',
        body: 'Install shatter-proof UV traps near doors and service counters with catch tray monitoring.',
      },
      {
        title: 'Audit-ready paperwork',
        body: 'Receive hygiene checklists, trap servicing logs, and photographic evidence for audits.',
      },
    ],
    process: [
      'Inspect garbage rooms, drains, and delivery docks.',
      'Deploy bait stations outdoors and UV traps indoors.',
      'Calibrate sanitation SOPs covering waste segregation and ventilation.',
      'Schedule bi-weekly servicing of traps and bait refills.',
    ],
    serviceAreas: ['Panjim & Miramar', 'Mapusa & Assagao', 'Calangute & Candolim', 'Vasco & Verna', 'Margao & Fatorda', 'Colva & Benaulim'],
    faqs: [
      {
        q: 'Are UV traps effective against houseflies?',
        a: 'Yes, when positioned strategically away from direct sunlight and combined with baiting, UV traps drastically cut fly counts.',
      },
      {
        q: 'Do you provide documentation for FSSAI audits?',
        a: 'Every visit ends with a digital hygiene checklist, trap map, and sanitation advice for FSSAI inspections.',
      },
      {
        q: 'Can you service cloud kitchens at night?',
        a: 'We offer night schedules so delivery kitchens across Goa can operate without downtime.',
      },
    ],
  },
  'termite-control-goa': {
    name: 'Termite Control Service Goa',
    short: 'Termite Control',
    metaTitle: 'Termite Control Goa | 5-Year Termite Treatment Warranty',
    metaDescription:
      'Pre and post construction termite control in Goa with soil injection, wood treatment, and 5-year warranty for homes and resorts.',
    hero: {
      heading: 'Termite Control Service in Goa',
      subheading:
        '5-year termite warranty with pre-construction barrier, post-construction drilling, and wood protection for villas, apartments, and businesses across Goa.',
      image: 'https://sipc.in/images/pest-control/termite-500x500.webp',
      alt: 'Termite control technician treating wood in Goa',
      stats: [
        { value: '5 years', label: 'Warranty' },
        { value: 'Dual', label: 'Soil + wood' },
        { value: 'Digital', label: 'Inspection report' },
      ],
    },
    features: [
      {
        title: 'Pre-construction barrier',
        body: 'Create anti-termite soil barrier with IS standards for foundations, columns, and plinth beams.',
      },
      {
        title: 'Post-construction drilling',
        body: 'Drill-pump-seal treatment covers skirting, expansion joints, and bath traps without damaging interiors.',
      },
      {
        title: 'Wood protection',
        body: 'Inject chlorpyrifos-free chemicals into door frames, wardrobes, and rafters to halt drywood termites.',
      },
    ],
    process: [
      'Survey floor plan, soil type, and infestation zone.',
      'Inject termiticide along foundations or drill lines inside the property.',
      'Treat wood fixtures, lofts, and cabinets with oil-based solutions.',
      'Issue digital certificate with warranty, maps, and maintenance guide.',
    ],
    serviceAreas: ['North Goa coastal belt', 'Panjim & Porvorim apartments', 'Margao & Fatorda homes', 'Industrial estates in Verna', 'Heritage homes in Fontainhas', 'Beach villas in Candolim'],
    faqs: [
      {
        q: 'Do you provide termite inspection reports for banks?',
        a: 'Yes, we share detailed termite inspection reports with photos, recommended treatments, and warranty details for loans and insurance.',
      },
      {
        q: 'Is the termite treatment safe during monsoons?',
        a: 'We use monsoon-tested chemicals with soil retention additives to last through heavy Goa rains.',
      },
      {
        q: 'How do you maintain the 5-year warranty?',
        a: 'Annual inspections are scheduled proactively. Any termite activity is treated free under the warranty.',
      },
    ],
  },
  'wood-borer-control-goa': {
    name: 'Wood Borer Control Goa',
    short: 'Wood Borer Control',
    metaTitle: 'Wood Borer Control Goa | Furniture & Door Protection Experts',
    metaDescription:
      'Protect wooden furniture, doors, and heritage artefacts in Goa with microscopic injection and fumigation dome treatment.',
    hero: {
      heading: 'Wood Borer Control Service in Goa',
      subheading:
        'Save bespoke doors, teak furniture, and heritage pieces from wood borer beetles with micro injection and fumigation dome service.',
      image: 'https://sipc.in/images/pest-control/wood-borer-500x500.webp',
      alt: 'Wood borer treatment on Goan furniture',
      stats: [
        { value: '48 hrs', label: 'Turnaround' },
        { value: 'Micron', label: 'Injection needles' },
        { value: 'Moisture', label: 'Tracking reports' },
      ],
    },
    features: [
      {
        title: 'Microscopic drilling',
        body: '1 mm drill holes target galleries without damaging polish, followed by oil-based chemical injection.',
      },
      {
        title: 'Fumigation dome',
        body: 'Portable bubble encloses artefacts, infuses fumigant, and exhausts safely.',
      },
      {
        title: 'Moisture audits',
        body: 'Digital moisture meters record readings ensuring long-term prevention.',
      },
    ],
    process: [
      'Inspect powdery dust, exit holes, and live larvae traces.',
      'Drill micro holes and inject specialized chemical into galleries.',
      'Seal holes and polish touch-ups, or set up fumigation dome for antiques.',
      'Share maintenance tips covering ventilation and varnish schedules.',
    ],
    serviceAreas: ['Fontainhas heritage homes', 'Panjim & Porvorim apartments', 'Morjim & Siolim villas', 'Margao & Colva bungalows', 'Old Goa churches', 'Assagao & Parra studios'],
    faqs: [
      {
        q: 'Can wood borer spread between furniture?',
        a: 'Yes, adult beetles fly to new furniture. We treat the entire room and adjacent pieces to stop spread.',
      },
      {
        q: 'Will the treatment damage polish?',
        a: 'We use microscopic needles and provide minor touch-ups so premium finishes stay intact.',
      },
      {
        q: 'Do you offer preventive coating after treatment?',
        a: 'Yes, we apply borate-based sealant to deter reinfestation in humid Goa weather.',
      },
    ],
  },
  'honey-bee-removal-goa': {
    name: 'Honey Bee Removal Goa',
    short: 'Honey Bee Removal',
    metaTitle: 'Honey Bee Removal Goa | Humane Honey Bee Relocation',
    metaDescription:
      'Humane honey bee removal and relocation in Goa for balconies, schools, and resorts by apiary-trained experts.',
    hero: {
      heading: 'Honey Bee Removal Service in Goa',
      subheading:
        'Apiary-trained technicians relocate honey bee colonies safely while shielding balconies, resorts, and schools from stings.',
      image: 'https://sipc.in/images/pest-control/honey-bee-500x500.webp',
      alt: 'Honey bee removal in Goa resort',
      stats: [
        { value: 'Humane', label: 'Relocation' },
        { value: '90 min', label: 'Typical job time' },
        { value: 'Safety', label: 'Netting & PPE' },
      ],
    },
    features: [
      {
        title: 'Live hive rescue',
        body: 'Vacuum boxes gently collect bees and transfer them to partner apiaries in Goa.',
      },
      {
        title: 'Protective netting',
        body: 'Install temporary nets, screens, or acrylic panels to keep balconies and skylights safe.',
      },
      {
        title: 'Honey & wax cleanup',
        body: 'Clean residual honey to prevent ants or future swarms.',
      },
    ],
    process: [
      'Survey hive size, height, and access.',
      'Wear PPE suits, deploy lifts or rope access if required.',
      'Vacuum bees, cut combs, and transfer to transport box.',
      'Clean area, spray repellant oils, and add preventive netting.',
    ],
    serviceAreas: ['Panjim & Dona Paula', 'Candolim & Nerul', 'Baga & Anjuna', 'Morjim & Ashwem', 'Margao & Betalbatim', 'South Goa resorts'],
    faqs: [
      {
        q: 'Do you kill the bees?',
        a: 'No. We relocate honey bees to local apiaries so pollinators stay protected and Goa homes stay safe.',
      },
      {
        q: 'What time do you remove honey bee hives?',
        a: 'Early morning or evening slots keep bee activity calm and make removal safer.',
      },
      {
        q: 'Can you work on high-rise facades?',
        a: 'Yes, we coordinate with facade teams and use boom lifts or rope access for tall hotels and apartments.',
      },
    ],
  },
  'snake-control-goa': {
    name: 'Snake Control Goa',
    short: 'Snake Control',
    metaTitle: 'Snake Control Goa | 24/7 Snake Catcher Services',
    metaDescription:
      'Emergency snake control services in Goa with certified snake catchers, GPS dispatch, and habitat proofing for resorts and gated communities.',
    hero: {
      heading: 'Snake Control Service in Goa',
      subheading:
        '24/7 certified snake handlers on standby for resorts, industries, and gated communities with GPS dispatch and habitat proofing.',
      image: 'https://sipc.in/images/pest-control/snake-500x500.webp',
      alt: 'Snake control expert in Goa',
      stats: [
        { value: '24/7', label: 'Emergency team' },
        { value: 'GPS', label: 'Live tracking' },
        { value: 'Proofing', label: 'Post-removal' },
      ],
    },
    features: [
      {
        title: 'Certified catchers',
        body: 'Wildlife-authorized snake catchers remove venomous and non-venomous species safely.',
      },
      {
        title: 'Habitat survey',
        body: 'Identify rodent trails, water sources, and vegetation that attract snakes.',
      },
      {
        title: 'Reporting & awareness',
        body: 'Provide incident reports, signage, and staff training for Goa resorts and factories.',
      },
    ],
    process: [
      'Receive snake photo/video via WhatsApp for quick ID.',
      'Dispatch nearby catcher with protective gear and GPS updates.',
      'Relocate snake following forest department protocol.',
      'Audit site and share preventive proofing recommendations.',
    ],
    serviceAreas: ['Panjim & Bambolim', 'Candolim & Nerul', 'Aldona & Siolim', 'Margao & Nuvem', 'Vasco & Sancoale', 'Quepem & Canacona'],
    faqs: [
      {
        q: 'How quickly can a snake catcher reach my property?',
        a: 'Average ETA is 45 minutes across coastal Goa. Remote villages may take up to 90 minutes depending on traffic.',
      },
      {
        q: 'Do you relocate or kill snakes?',
        a: 'All snakes are safely captured and released in forest zones per wildlife laws.',
      },
      {
        q: 'Can you help prevent future snake entries?',
        a: 'Yes. We map entry gaps, control rodents, trim vegetation, and add deterrent grids around vulnerable zones.',
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const service = serviceContent[params.slug]
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.hero.image],
    },
  }
}

export default function ServicePage({ params }) {
  const service = serviceContent[params.slug]
  if (!service) return notFound()

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-b from-white/10 via-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">{service.short}</p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{service.hero.heading}</h1>
              <p className="text-lg text-white/80 leading-relaxed">{service.hero.subheading}</p>
              <div className="grid grid-cols-3 gap-4">
                {service.hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#service-contact"
                  className="rounded-full bg-white text-gray-900 px-6 py-3 font-semibold flex items-center gap-2"
                >
                  Book {service.short}
                  <span className="text-xl">→</span>
                </a>
                <Link
                  href="tel:+917020062681"
                  className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white/80 hover:text-white"
                >
                  Call +91 70200 62681
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-500/20 via-white/0 to-accent-400/20 blur-3xl" />
              <div className="relative rounded-[32px] bg-white text-gray-900 p-8 shadow-2xl space-y-6">
                <div className="relative w-full h-72 rounded-[32px] overflow-hidden">
                  <Image src={service.hero.image} alt={service.hero.alt} fill className="object-contain" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{service.metaDescription}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-500">
                  {service.serviceAreas.slice(0, 4).map((area) => (
                    <span key={area} className="px-3 py-1 rounded-full bg-gray-100">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/15 bg-white/5 p-6 space-y-3">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </section>

          <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Treatment blueprint</h3>
              <ol className="space-y-5">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center font-semibold">{index + 1}</span>
                    <p className="text-sm text-white/80 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Service areas & industries</h3>
              <p className="text-sm text-white/80">We cover North Goa, South Goa, and interior talukas with lightning-fast WhatsApp updates.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.serviceAreas.map((area) => (
                  <div key={area} className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-semibold">FAQs about {service.short}</h3>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                  <p className="font-semibold mb-2">{faq.q}</p>
                  <p className="text-sm text-white/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="service-contact" className="rounded-[32px] border border-white/15 bg-white text-gray-900 p-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Need faster support?</p>
                <h3 className="text-3xl font-bold mt-2">Share photos on WhatsApp & get a treatment plan in 5 minutes.</h3>
                <p className="text-gray-600 mt-2">Send infestation photos, floor plans, or Google Maps location. Our Goa command desk replies 24/7.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917020062681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-6 py-4 font-semibold shadow-soft hover:bg-primary-500 transition"
                >
                  WhatsApp Now
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-4 font-semibold text-gray-800 hover:bg-gray-900 hover:text-white transition"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
