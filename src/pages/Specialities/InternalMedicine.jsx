import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

const InternalMedicine = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-blue-950">

      {/* Floating Navbar */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <HeartPulse className="h-4 w-4" />
                  Internal Medicine Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing support for
                  <span className="block text-blue-600">
                    complex adult care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Internal medicine practices manage patients with multiple
                  conditions, ongoing care needs, and detailed documentation.
                  Med-Heave supports the billing workflow from eligibility and
                  coding through claims, payments, and follow-up.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Explore Billing Services
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#workflow"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    See Our Workflow
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">

                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Revenue Cycle
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-[#06162d]">
                        Internal Medicine
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Stethoscope className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "E/M Coding Review",
                      "Chronic Care Billing",
                      "Claim Submission",
                      "Denial & A/R Follow-Up",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />

                        <span className="text-sm text-slate-600">
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


        {/* INTRODUCTION */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Internal Medicine Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Built around
                  <span className="block text-blue-600">
                    complex adult care.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Internal medicine billing can involve complex evaluation
                  and management visits, preventive services, chronic
                  condition management, and patients with multiple diagnoses.
                  Accurate documentation and coding are central to a clean
                  revenue cycle.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Med-Heave helps organize the administrative side of this
                  process, from coverage verification and claim preparation
                  to denial review, payment posting, and accounts receivable
                  follow-up.
                </p>
              </div>

            </div>


            {/* CARE TYPES */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: HeartPulse,
                  title: "Chronic Care",
                  text: "Billing support for ongoing management of patients with chronic conditions.",
                },
                {
                  icon: Activity,
                  title: "Complex Visits",
                  text: "Support for evaluation and management services involving multiple conditions.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Preventive Care",
                  text: "Organized billing workflows for wellness and preventive services.",
                },
                {
                  icon: RefreshCcw,
                  title: "Care Follow-Up",
                  text: "Revenue-cycle support for continuing care and unresolved billing activity.",
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


        {/* BILLING SERVICES */}
        <section id="billing-services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Internal Medicine Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Support across the internal medicine revenue cycle.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                From front-end verification to claims and outstanding
                balances, our billing workflow is designed around the
                documentation and reimbursement needs of internal medicine
                practices.
              </p>
            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify coverage, benefits, and patient responsibility information before billing activity begins.",
                },
                {
                  icon: FileCheck2,
                  title: "E/M Coding Support",
                  text: "Review evaluation and management coding against the documentation and services provided.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Chronic Care Billing",
                  text: "Support billing workflows for eligible ongoing chronic-care management services.",
                },
                {
                  icon: Activity,
                  title: "Preventive Services",
                  text: "Organize billing for wellness visits and other preventive care services.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denied claims, identify billing issues, and coordinate appropriate follow-up.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track outstanding balances and follow up on unresolved payer accounts.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-100 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                      <Icon className="h-5 w-5 text-white" />
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


        {/* SPECIALTY FOCUS */}
        <section className="bg-blue-50/60 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Specialty Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Internal medicine billing requires attention to the
                  details of each encounter.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Patients may present with several conditions during the
                  same visit, while preventive services and ongoing care can
                  add additional billing considerations. A structured process
                  helps connect documentation, coding, claims, and payer
                  follow-up.
                </p>
              </div>


              <div className="space-y-4">

                {[
                  "Complex evaluation and management visits",
                  "Multiple chronic conditions and diagnoses",
                  "Chronic and transitional care services",
                  "Preventive and wellness services",
                  "Payer requirements and claim follow-up",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5"
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
        </section>


        {/* WORKFLOW */}
        <section id="workflow" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Our Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                From patient information to payment.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Each stage connects with the next so billing issues can be
                identified and addressed throughout the revenue cycle.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Eligibility",
                  text: "Review patient coverage and benefit information before the claim process begins.",
                },
                {
                  number: "02",
                  title: "Coding",
                  text: "Review documentation and assign appropriate codes for the services provided.",
                },
                {
                  number: "03",
                  title: "Claims",
                  text: "Prepare, submit, and monitor claims through the payer process.",
                },
                {
                  number: "04",
                  title: "Follow-Up",
                  text: "Work denials, unpaid claims, and outstanding accounts through resolution.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
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


        {/* CTA */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            <div
              id="contact"
              className="overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-12 text-center sm:px-12"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Internal Medicine Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep complex billing organized.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/80">
                Give your practice a structured billing process for coding,
                claims, denials, payments, and outstanding accounts.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="#billing-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
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

export default InternalMedicine;