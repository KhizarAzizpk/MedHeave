import {
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

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const FamilyMedicine = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-blue-950">

      {/* Floating Navbar */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#06162d]">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}
              <div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                  <HeartPulse className="h-4 w-4" />
                  Family Medicine Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Billing built for
                  <span className="block text-blue-400">
                    family medicine.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
                  Family medicine practices manage a wide range of patient
                  needs. Our billing support helps keep coding, claims,
                  payments, and follow-up organized across everyday and
                  ongoing care.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="#what-we-handle"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Explore Billing Services
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#workflow"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    See Our Workflow
                  </a>

                </div>

              </div>

              {/* RIGHT */}
              <div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm">

                  <div className="mb-6 flex items-center justify-between">

                    <div>
                      <p className="text-sm text-blue-200/60">
                        Revenue Cycle
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-white">
                        Family Practice
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-400/10 p-3">
                      <Stethoscope className="h-6 w-6 text-blue-300" />
                    </div>

                  </div>

                  <div className="space-y-3">

                    {[
                      "Eligibility & Benefits",
                      "Medical Coding",
                      "Claim Submission",
                      "Denial Management",
                      "A/R Follow-Up",
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

        {/* INTRODUCTION */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Family Practice Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  One practice.
                  <span className="block text-blue-600">
                    Many types of care.
                  </span>
                </h2>

              </div>

              <div>

                <p className="text-lg leading-8 text-slate-600">
                  Family medicine practices handle preventive visits, chronic
                  conditions, acute illnesses, wellness services, and
                  routine office care. Each service can require accurate
                  documentation, coding, claim submission, and payer
                  follow-up.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Med-Heave helps organize these revenue-cycle activities so
                  your practice can spend more time managing patients and
                  less time dealing with billing administration.
                </p>

              </div>

            </div>

            {/* CARE TYPES */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: HeartPulse,
                  title: "Preventive Care",
                  text: "Support for wellness visits, preventive services, and related billing workflows.",
                },
                {
                  icon: RefreshCcw,
                  title: "Chronic Care",
                  text: "Organized billing support for ongoing management of chronic conditions.",
                },
                {
                  icon: Stethoscope,
                  title: "Sick Visits",
                  text: "Accurate processing for common acute and problem-oriented office visits.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Office Services",
                  text: "Revenue-cycle support across routine services delivered in family practice.",
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

        {/* WHAT WE HANDLE */}
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
                Keep the billing process organized from visit to payment.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our workflow covers the core revenue-cycle activities that
                family medicine practices depend on.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify coverage and benefits information before services are billed.",
                },
                {
                  icon: FileCheck2,
                  title: "Medical Coding",
                  text: "Support accurate coding based on documentation and the services provided.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Clean Claim Submission",
                  text: "Prepare and submit claims while helping reduce avoidable billing errors.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denied claims, identify issues, and support the appropriate next steps.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track outstanding balances and follow up on unresolved payer accounts.",
                },
                {
                  icon: CheckCircle2,
                  title: "Payment Posting",
                  text: "Keep payment information organized and reconcile activity against submitted claims.",
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

        {/* BILLING FOCUS */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Billing Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Billing support that follows the way family medicine
                  actually works.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Different encounters can involve different documentation,
                  coding, payer requirements, and follow-up. A structured
                  process helps keep each part of the revenue cycle moving.
                </p>

              </div>

              <div className="space-y-4">

                {[
                  "Preventive versus problem-oriented visits",
                  "Evaluation and management coding support",
                  "Chronic-care and wellness services",
                  "Payer follow-up and outstanding claims",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >

                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

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
                A structured path from patient visit to payment.
              </h2>

              <p className="mt-5 leading-7 text-blue-100/60">
                Each stage is connected so issues can be identified and
                addressed before they become larger revenue-cycle problems.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Patient & Eligibility",
                  text: "Review patient and coverage information before billing activity begins.",
                },
                {
                  number: "02",
                  title: "Coding & Claims",
                  text: "Process documentation and prepare claims for submission.",
                },
                {
                  number: "03",
                  title: "Payments & Denials",
                  text: "Track payer responses, payments, and claims requiring attention.",
                },
                {
                  number: "04",
                  title: "A/R Follow-Up",
                  text: "Continue follow-up on unresolved balances and outstanding claims.",
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

        {/* CTA */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            <div
              id="contact"
              className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#06162d] to-blue-950 px-7 py-12 text-center sm:px-12"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Family Medicine Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep your team focused on patient care.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/60">
                A consistent revenue-cycle process can help your practice stay
                organized across claims, payments, denials, and outstanding
                accounts.
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

export default FamilyMedicine;