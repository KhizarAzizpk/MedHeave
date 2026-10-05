import {
  ArrowRight,
  Bone,
  Brain,
  CheckCircle2,
  HeartPulse,
  Image,
  PersonStanding,
  ScanLine,
  Stethoscope,
  Users,
} from "lucide-react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

const Specialities = () => {
  const specialities = [
    {
      icon: Users,
      title: "Family Medicine",
      description:
        "Complete billing support for family practices, from preventive care and routine visits to chronic condition management.",
      path: "/specialities/family-medicine",
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description:
        "Billing support for internal medicine providers managing complex adult care, chronic conditions, and preventive services.",
      path: "/specialities/internal-medicine",
    },
    {
      icon: HeartPulse,
      title: "Cardiology",
      description:
        "Cardiology coding, claims, authorization, and revenue cycle support for cardiovascular care and diagnostic services.",
      path: "/specialities/cardiology",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Specialized billing support for orthopedic visits, procedures, imaging, injections, surgery, and follow-up care.",
      path: "/specialities/orthopedics",
    },
    {
      icon: PersonStanding,
      title: "Pediatrics",
      description:
        "Pediatric billing and claims management for preventive visits, vaccinations, sick visits, and ongoing care.",
      path: "/specialities/pediatrics",
    },
    {
      icon: ScanLine,
      title: "Dermatology",
      description:
        "Dermatology billing and coding support for medical visits, biopsies, procedures, and surgical services.",
      path: "/specialities/dermatology",
    },
    {
      icon: Brain,
      title: "Behavioral Health",
      description:
        "Revenue cycle support for therapy, psychiatry, behavioral programs, authorization, claims, and A/R.",
      path: "/specialities/behavioral-health",
    },
    {
      icon: Image,
      title: "Radiology",
      description:
        "Imaging claims and specialty billing support for diagnostic studies, authorization, coding, and component billing.",
      path: "/specialities/radiology",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-950">
      {/* Fixed floating navbar */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-36">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <Stethoscope className="h-4 w-4" />
                Medical Billing Specialities
              </div>

              <h1 className="text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                Billing expertise across
                <span className="block text-blue-600">
                  multiple medical specialities.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Every medical speciality has its own coding, documentation,
                payer, and revenue-cycle requirements. Med-Heave provides
                billing support designed around the way each practice delivers
                care.
              </p>
            </div>
          </div>
        </section>

        {/* SPECIALITIES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Our Specialities
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Specialized billing for specialized care.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Explore our medical billing support by speciality and see how
                the revenue cycle can be structured around each area of care.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {specialities.map((speciality) => {
                const Icon = speciality.icon;

                return (
                  <a
                    key={speciality.title}
                    href={speciality.path}
                    className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>

                      <ArrowRight className="h-5 w-5 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-[#06162d]">
                      {speciality.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                      {speciality.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Explore speciality
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY SPECIALIZED BILLING */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Why Speciality Matters
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Billing workflows should reflect
                  <span className="block text-blue-600">
                    the care being delivered.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  A family medicine claim does not follow the same workflow
                  as a cardiology procedure or a radiology study. Coding,
                  authorization, documentation, claim requirements, and payer
                  rules can vary significantly by speciality.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Our speciality-focused approach keeps those differences in
                  view while maintaining a consistent revenue-cycle process.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="space-y-5">
                  {[
                    "Specialty-specific coding requirements",
                    "Eligibility and payer requirements",
                    "Authorization and medical-necessity checks",
                    "Accurate claim preparation and submission",
                    "Denial management and claim correction",
                    "Payment posting and A/R follow-up",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="mt-0.5 rounded-full bg-blue-50 p-1">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      </div>

                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-blue-50/60 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Across Every Speciality
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                One connected revenue cycle.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                While billing requirements differ between specialities, the
                core revenue-cycle process stays connected from patient
                coverage through reimbursement.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Eligibility",
                  text: "Verify coverage, benefits, patient responsibility, and payer requirements.",
                },
                {
                  number: "02",
                  title: "Coding & Claims",
                  text: "Apply speciality-specific coding and prepare accurate claims for submission.",
                },
                {
                  number: "03",
                  title: "Payment & Denials",
                  text: "Review payer responses, post payments, and address rejected or denied claims.",
                },
                {
                  number: "04",
                  title: "A/R Follow-Up",
                  text: "Track outstanding balances and continue payer follow-up through resolution.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-blue-100 bg-white p-6"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-[#06162d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-[#06162d] px-7 py-12 text-center sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Medical Billing Support
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Find the billing support for your speciality.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                Explore our speciality-focused billing services and learn how
                Med-Heave supports the revenue cycle behind different areas of
                medical care.
              </p>

              <div className="mt-8">
                <a
                  href="#specialities"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Explore Specialities
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specialities;