import {
  ArrowRight,
  Bone,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Image,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  Syringe,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

const Orthopedics = () => {
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

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <Bone className="h-4 w-4" />
                  Orthopedic Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing support for
                  <span className="block text-blue-600">
                    orthopedic care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Orthopedic billing can involve office visits, imaging,
                  injections, fracture care, surgical procedures, implants,
                  and post-operative services. Med-Heave helps keep the
                  billing workflow connected from authorization through
                  reimbursement.
                </p>

                <div className="mt-8">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    View Orthopedic Billing Services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Revenue Cycle Card */}
              <div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Revenue Cycle
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-[#06162d]">
                        Orthopedic Practice
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Bone className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "Prior Authorization",
                      "Orthopedic Coding",
                      "Surgical Claim Submission",
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

        {/* INTRO / SERVICE TYPES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Orthopedic Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Procedure-heavy care.
                  <span className="block text-blue-600">
                    Specialized billing requirements.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Orthopedic practices can manage everything from routine
                  musculoskeletal visits and joint injections to fracture
                  treatment, arthroscopy, joint replacement, spine procedures,
                  and post-operative care.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Each encounter may require accurate diagnosis coding,
                  procedure coding, laterality, authorization, documentation,
                  modifier review, and global-period tracking. Med-Heave
                  organizes these requirements throughout the revenue cycle.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Stethoscope,
                  title: "Orthopedic Visits",
                  text: "Billing support for new and established patient visits, follow-ups, and musculoskeletal evaluations.",
                },
                {
                  icon: Syringe,
                  title: "Injections & Procedures",
                  text: "Support for joint injections, aspirations, minor procedures, and related documentation.",
                },
                {
                  icon: Bone,
                  title: "Fracture & Surgical Care",
                  text: "Revenue-cycle support for fracture treatment, arthroscopy, joint replacement, and orthopedic surgery.",
                },
                {
                  icon: Image,
                  title: "Imaging Services",
                  text: "Billing workflow support for orthopedic imaging and services that may require payer authorization.",
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
                Orthopedic Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Support for every stage of the orthopedic revenue cycle.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                From coverage verification and authorization to surgical
                claims, payment posting, denials, and A/R follow-up, our
                workflow is built around the billing requirements of
                orthopedic practices.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify insurance coverage, benefits, patient responsibility, and applicable orthopedic service requirements.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Prior Authorization",
                  text: "Track authorization requirements for surgeries, imaging, injections, and other services requiring payer approval.",
                },
                {
                  icon: FileCheck2,
                  title: "Orthopedic Coding",
                  text: "Support CPT, ICD-10-CM, HCPCS, laterality, modifiers, and procedure-specific coding requirements.",
                },
                {
                  icon: Bone,
                  title: "Surgical Billing",
                  text: "Manage claims involving orthopedic procedures, surgical documentation, implants, and global-period considerations.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denials related to authorization, coding, modifiers, medical necessity, documentation, and bundling.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track unpaid orthopedic claims, payer balances, underpayments, and outstanding accounts through resolution.",
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
                  Specialty Billing Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Orthopedic billing depends on
                  <span className="block text-blue-600">
                    details beyond the procedure code.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Orthopedic claims often depend on laterality, global
                  surgical periods, modifier usage, medical necessity,
                  authorization, and documentation supporting the service.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Surgical procedures and global-period billing",
                  "Left, right, and bilateral procedure reporting",
                  "Fracture care and encounter-specific diagnosis coding",
                  "Joint injections, aspirations, and related procedures",
                  "Arthroscopy and other orthopedic surgical services",
                  "Imaging, DME, braces, and orthotic-related billing",
                  "Medical necessity and prior-authorization requirements",
                  "Modifier and NCCI edit review",
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

        {/* CLAIM MANAGEMENT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Claim Management
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Connect the procedure,
                  <span className="block text-blue-600">
                    documentation, and claim.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Orthopedic billing can become complicated when procedure
                  details, authorization, modifiers, diagnosis coding, or
                  global-period rules do not match the claim. A structured
                  review helps identify these issues before and after
                  submission.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="space-y-5">
                  {[
                    {
                      title: "Before the Procedure",
                      text: "Verify eligibility, benefits, authorization, medical-necessity requirements, and patient information.",
                    },
                    {
                      title: "During Coding",
                      text: "Review the procedure, diagnosis, laterality, modifiers, documentation, and applicable billing rules.",
                    },
                    {
                      title: "After Submission",
                      text: "Monitor payer responses, correct rejected claims, manage denials, post payments, and follow up on A/R.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#06162d]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Our Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                From orthopedic visit to reimbursement.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A connected workflow keeps coverage, coding, authorization,
                claims, payments, and follow-up aligned.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Eligibility & Authorization",
                  text: "Verify coverage, benefits, medical-necessity requirements, and prior authorization.",
                },
                {
                  number: "02",
                  title: "Coding & Charge Capture",
                  text: "Review diagnoses, procedures, laterality, modifiers, documentation, and applicable services.",
                },
                {
                  number: "03",
                  title: "Claim Submission",
                  text: "Submit orthopedic claims after reviewing payer requirements and potential billing edits.",
                },
                {
                  number: "04",
                  title: "Denials & A/R",
                  text: "Resolve denials, review payer payments, identify outstanding balances, and continue A/R follow-up.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
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
                Orthopedic Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep orthopedic billing organized.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                From eligibility and authorization to coding, surgical claims,
                denials, payments, and A/R, Med-Heave supports the revenue
                cycle behind orthopedic care.
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

export default Orthopedics;