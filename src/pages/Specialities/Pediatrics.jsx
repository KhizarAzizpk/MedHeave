import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  RefreshCcw,
  ShieldCheck,
  Syringe,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Pediatrics = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-blue-950">

      {/* Floating Navbar */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#06162d]">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}
              <div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                  <Baby className="h-4 w-4" />
                  Pediatric Medical Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Billing built around
                  <span className="block text-blue-400">
                    pediatric care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
                  From well-child visits and immunizations to sick visits,
                  screenings, and ongoing pediatric care, Med-Heave helps
                  keep your revenue cycle organized around the needs of your
                  practice.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="#what-we-handle"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Explore Pediatric Billing
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#workflow"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    See Our Process
                  </a>

                </div>

              </div>

              {/* RIGHT */}
              <div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm">

                  <div className="mb-6 flex items-center justify-between">

                    <div>
                      <p className="text-sm text-blue-200/60">
                        Pediatric Revenue Cycle
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-white">
                        Practice Billing
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-400/10 p-3">
                      <Baby className="h-6 w-6 text-blue-300" />
                    </div>

                  </div>

                  <div className="space-y-3">

                    {[
                      "Well-Child Visit Billing",
                      "Vaccine & Immunization Billing",
                      "Developmental Screening",
                      "Medicaid & CHIP Support",
                      "Denial & A/R Management",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-400" />

                        <span className="text-sm text-blue-100/80">
                          {item}
                        </span>
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Pediatric Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Pediatric billing has
                  <span className="block text-blue-600">
                    its own challenges.
                  </span>
                </h2>

              </div>

              <div>

                <p className="text-lg leading-8 text-slate-600">
                  Pediatric practices handle preventive visits, vaccinations,
                  acute illnesses, developmental screenings, and ongoing
                  conditions across different age groups and payer
                  requirements.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Med-Heave helps keep the billing process aligned with the
                  services actually provided, from eligibility and charge
                  capture through claim submission, payment posting, and
                  follow-up.
                </p>

              </div>

            </div>

            {/* CARE AREAS */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: Baby,
                  title: "Well-Child Visits",
                  text: "Billing support for routine preventive visits and age-based pediatric care.",
                },
                {
                  icon: Syringe,
                  title: "Immunizations",
                  text: "Support for vaccine products, administration, and applicable program requirements.",
                },
                {
                  icon: HeartPulse,
                  title: "Sick Visits",
                  text: "Accurate billing support for acute illnesses and problem-oriented pediatric visits.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Screenings",
                  text: "Capture of documented developmental, behavioral, vision, and hearing services.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#06162d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHAT WE HANDLE
        ===================================================== */}
        <section
          id="what-we-handle"
          className="bg-slate-50 py-20"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                What We Handle
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Pediatric billing support from eligibility to A/R.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We focus on the billing activities that commonly affect
                pediatric practices, helping keep claims complete and
                follow-up consistent.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify coverage and benefits before visits to help identify eligibility issues early.",
                },
                {
                  icon: FileCheck2,
                  title: "Well-Child Coding",
                  text: "Support preventive visit coding according to the patient's documented service and age.",
                },
                {
                  icon: Syringe,
                  title: "Vaccine Billing",
                  text: "Capture vaccine products and administration services while accounting for applicable requirements.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Screening Services",
                  text: "Review documented developmental and behavioral screening services for appropriate billing.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review rejected and denied claims, identify causes, and coordinate corrections or appeals.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track outstanding pediatric claims and continue payer follow-up on unresolved balances.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7"
                  >

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06162d]">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#06162d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            BILLING FOCUS
        ===================================================== */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Pediatric Billing Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  More than standard
                  <span className="block text-blue-600">
                    office visit billing.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Pediatric practices deal with preventive care, vaccines,
                  screenings, public insurance programs, and visits where
                  preventive and problem-oriented services may occur together.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Our billing workflow is designed around these different
                  encounter types so documented services are not overlooked
                  during the revenue cycle.
                </p>

              </div>

              <div className="space-y-4">

                {[
                  {
                    title: "Preventive & Problem-Oriented Visits",
                    text: "Review documented services when a well-child visit and a separate illness or problem are addressed during the same encounter.",
                  },
                  {
                    title: "Immunization Administration",
                    text: "Keep vaccine product and administration activity properly represented in the claim.",
                  },
                  {
                    title: "Medicaid & CHIP",
                    text: "Support eligibility and payer-specific requirements common across pediatric populations.",
                  },
                  {
                    title: "Developmental & Behavioral Screening",
                    text: "Capture documented screening services performed alongside preventive care.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >

                    <div className="flex items-start gap-4">

                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                      <div>

                        <h3 className="font-semibold text-[#06162d]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WORKFLOW
        ===================================================== */}
        <section
          id="workflow"
          className="bg-[#06162d] py-20"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Our Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A pediatric billing process built around the full revenue cycle.
              </h2>

              <p className="mt-5 leading-7 text-blue-100/60">
                From checking coverage before the appointment to following up
                on unpaid claims, every stage stays connected.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Eligibility",
                  text: "Review patient coverage, benefits, and applicable payer requirements before the visit.",
                },
                {
                  number: "02",
                  title: "Coding & Claims",
                  text: "Process documented services and prepare complete pediatric claims for submission.",
                },
                {
                  number: "03",
                  title: "Payments & Denials",
                  text: "Track payer responses, payments, rejections, and claims requiring correction.",
                },
                {
                  number: "04",
                  title: "A/R Recovery",
                  text: "Follow up on outstanding balances and unresolved pediatric claims.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
                >

                  <span className="text-sm font-bold text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-blue-100/60">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            <div
              id="contact"
              className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#06162d] to-blue-950 px-7 py-12 text-center sm:px-12"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Pediatric Medical Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep your pediatric practice focused on its patients.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/60">
                Let your team focus on pediatric care while your revenue cycle
                stays organized across visits, vaccines, claims, payments,
                and follow-up.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="#what-we-handle"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Back to Top
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

export default Pediatrics;