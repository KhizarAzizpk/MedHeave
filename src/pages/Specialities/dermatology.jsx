import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Microscope,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Dermatology = () => {
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
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <Sparkles className="h-4 w-4" />
                  Dermatology Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing built around
                  <span className="block text-blue-600">
                    dermatology care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Dermatology visits can combine evaluations, procedures,
                  biopsies, pathology, and payer-specific requirements.
                  Med-Heave helps keep the billing process organized from
                  charge capture through reimbursement.
                </p>

                <div className="mt-8">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Explore Dermatology Billing
                    <ArrowRight className="h-4 w-4" />
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
                        Dermatology Practice
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Sparkles className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "Dermatology Coding",
                      "Procedure & Charge Capture",
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
                  Dermatology Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Different procedures.
                  <span className="block text-blue-600">
                    One organized billing process.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Dermatology billing can involve routine evaluations,
                  biopsies, lesion procedures, excisions, Mohs surgery,
                  pathology coordination, and other services within the same
                  practice.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  These different services can require precise documentation,
                  coding, modifiers, claim preparation, and payer follow-up.
                  Med-Heave helps bring those activities into one structured
                  revenue-cycle workflow.
                </p>
              </div>

            </div>


            {/* SERVICE TYPES */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: Sparkles,
                  title: "Medical Dermatology",
                  text: "Billing support for evaluation and treatment of common and ongoing skin conditions.",
                },
                {
                  icon: Microscope,
                  title: "Biopsies & Pathology",
                  text: "Organized billing workflows for biopsy procedures and related pathology processes.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Surgical Procedures",
                  text: "Support for procedure-heavy encounters including excisions and other dermatologic services.",
                },
                {
                  icon: RefreshCcw,
                  title: "Ongoing Care",
                  text: "Revenue-cycle support for follow-up visits, treatment management, and outstanding claims.",
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
                Dermatology Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Support for the details that matter in dermatology billing.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our revenue-cycle workflow covers the core administrative
                activities needed to move dermatology claims from patient
                encounter to payment.
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
                  title: "Dermatology Coding",
                  text: "Support coding for office visits, procedures, diagnoses, and documented services.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Charge Capture",
                  text: "Help ensure documented services and procedures are reflected in the billing workflow.",
                },
                {
                  icon: Microscope,
                  title: "Pathology Coordination",
                  text: "Keep pathology-related billing information organized alongside the associated procedure workflow.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denied claims, identify billing issues, and support appropriate follow-up.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track outstanding payer balances and continue follow-up on unresolved accounts.",
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


        {/* SPECIALTY BILLING DETAILS */}
        <section className="bg-blue-50/60 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Specialty Billing Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Dermatology billing is often
                  <span className="block text-blue-600">
                    procedure-driven.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  A single dermatology encounter may include an evaluation
                  along with one or more procedures. Accurate documentation,
                  coding, modifier use, and service separation can therefore
                  become important parts of the claim process.
                </p>
              </div>


              <div className="space-y-4">

                {[
                  "Evaluation and management visits",
                  "Biopsy and lesion-related procedures",
                  "Excision and surgical services",
                  "Mohs surgery and staged procedures",
                  "Medical versus cosmetic service separation",
                  "Modifier and payer-specific billing requirements",
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
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Our Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                From dermatology encounter to payment.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A connected workflow helps keep patient information,
                documentation, coding, claims, and follow-up moving together.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Eligibility",
                  text: "Review patient coverage and benefits before billing activity begins.",
                },
                {
                  number: "02",
                  title: "Coding & Charges",
                  text: "Process documentation and capture the services and procedures provided.",
                },
                {
                  number: "03",
                  title: "Claims",
                  text: "Prepare and submit claims while monitoring payer responses.",
                },
                {
                  number: "04",
                  title: "Follow-Up",
                  text: "Work rejections, denials, unpaid claims, and outstanding balances.",
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
              className="overflow-hidden rounded-[2rem] bg-[#06162d] px-7 py-12 text-center sm:px-12"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Dermatology Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep dermatology billing organized.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                From coding and charge capture to claims, denials, and
                accounts receivable, Med-Heave supports the billing process
                behind your dermatology practice.
              </p>

              <div className="mt-8">
                <a
                  href="#billing-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  View Billing Services
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

export default Dermatology;