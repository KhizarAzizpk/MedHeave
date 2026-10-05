import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const BehavioralHealth = () => {
  return (
    <div className="min-h-screen bg-white text-blue-950">

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
                  <Brain className="h-4 w-4" />
                  Behavioral Health Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing support for
                  <span className="block text-blue-600">
                    behavioral health care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Behavioral health billing depends on accurate session
                  documentation, coding, authorization, provider
                  credentials, and payer requirements. Med-Heave helps keep
                  these moving together throughout the revenue cycle.
                </p>

                <div className="mt-8">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    View Behavioral Health Services
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
                        Behavioral Health
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <Brain className="h-6 w-6 text-blue-600" />
                    </div>

                  </div>


                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "Authorization Tracking",
                      "Behavioral Health Coding",
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
                  Behavioral Health Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Session-based care.
                  <span className="block text-blue-600">
                    Specialized billing requirements.
                  </span>
                </h2>

              </div>


              <div>

                <p className="text-lg leading-8 text-slate-600">
                  Behavioral health practices may provide psychotherapy,
                  psychiatric evaluations, medication management, group
                  therapy, family therapy, crisis services, and other
                  behavioral health programs.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Each service can involve different coding, documentation,
                  authorization, provider, and payer requirements. Med-Heave
                  helps organize these details from eligibility through
                  reimbursement.
                </p>

              </div>

            </div>


            {/* SERVICE TYPES */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: MessageCircle,
                  title: "Therapy Services",
                  text: "Billing support for individual, family, and group behavioral health sessions.",
                },
                {
                  icon: Brain,
                  title: "Psychiatry",
                  text: "Revenue-cycle support for psychiatric evaluations and ongoing medication-management services.",
                },
                {
                  icon: Users,
                  title: "Behavioral Programs",
                  text: "Support for structured behavioral health programs and care pathways.",
                },
                {
                  icon: RefreshCcw,
                  title: "Ongoing Care",
                  text: "Follow-up support for recurring sessions, claims, denials, and outstanding balances.",
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
                Behavioral Health Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Support for the details behind every behavioral health claim.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our workflow covers the administrative and revenue-cycle
                activities that behavioral health practices rely on from
                patient coverage through payment.
              </p>

            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify behavioral health coverage, benefits, patient responsibility, and applicable visit limitations.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Prior Authorization",
                  text: "Track authorization requirements, approved services, and authorization periods.",
                },
                {
                  icon: FileCheck2,
                  title: "Behavioral Health Coding",
                  text: "Support coding for therapy, psychiatric services, and other documented behavioral health care.",
                },
                {
                  icon: MessageCircle,
                  title: "Session Documentation",
                  text: "Help align billed services with the documentation and session details provided.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denials related to authorization, coding, documentation, payer routing, and other claim issues.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track outstanding payer balances and continue follow-up on unresolved behavioral health claims.",
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
                  Behavioral health billing is
                  <span className="block text-blue-600">
                    documentation-driven.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Many behavioral health services are session-based and can
                  depend on documented time, service type, authorization,
                  provider credentials, and payer-specific requirements.
                </p>

              </div>


              <div className="space-y-4">

                {[
                  "Individual and family psychotherapy",
                  "Group therapy services",
                  "Psychiatric diagnostic evaluations",
                  "Psychiatric evaluation and management services",
                  "Telehealth behavioral health services",
                  "Authorization and session-limit tracking",
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
                  Keep every session connected to the claim.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Behavioral health claims can be affected by authorization
                  status, session duration, documentation, provider
                  credentials, telehealth requirements, and payer routing.
                  Keeping these details aligned helps create a more
                  consistent billing workflow.
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <div className="space-y-5">

                  {[
                    {
                      title: "Before the Session",
                      text: "Verify eligibility, behavioral health benefits, authorization status, and provider information.",
                    },
                    {
                      title: "During Billing",
                      text: "Review the documented service, session details, coding, modifiers, and claim information.",
                    },
                    {
                      title: "After Submission",
                      text: "Monitor payer responses, correct rejections, manage denials, and follow up on unpaid claims.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4"
                    >
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
                From patient session to payment.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A connected process keeps eligibility, authorization,
                documentation, coding, claims, and follow-up organized.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Eligibility",
                  text: "Review behavioral health coverage, benefits, and authorization requirements.",
                },
                {
                  number: "02",
                  title: "Documentation & Coding",
                  text: "Match the documented service and session details with the appropriate billing workflow.",
                },
                {
                  number: "03",
                  title: "Claim Submission",
                  text: "Prepare and submit claims while monitoring payer responses and rejections.",
                },
                {
                  number: "04",
                  title: "Denials & A/R",
                  text: "Address denials and continue follow-up on unpaid and outstanding claims.",
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
                Behavioral Health Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep behavioral health billing organized.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                From eligibility and authorization to coding, claims,
                denials, and A/R, Med-Heave supports the revenue cycle behind
                behavioral health care.
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

export default BehavioralHealth;