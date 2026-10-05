import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  Monitor,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Cardiology = () => {
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
                  <HeartPulse className="h-4 w-4" />
                  Cardiology Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing support for
                  <span className="block text-blue-600">
                    cardiovascular care.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Cardiology billing often involves diagnostic testing,
                  monitoring, procedures, and detailed payer requirements.
                  Med-Heave helps organize the revenue cycle from eligibility
                  and authorization through coding, claims, and follow-up.
                </p>

                <div className="mt-8">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    View Cardiology Services
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
                        Cardiology Practice
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <HeartPulse className="h-6 w-6 text-blue-600" />
                    </div>

                  </div>


                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "Prior Authorization",
                      "Diagnostic & Procedure Coding",
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
                  Cardiology Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  More than office visits.
                  <span className="block text-blue-600">
                    More details in every claim.
                  </span>
                </h2>
              </div>


              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Cardiology practices can bill for office evaluations,
                  diagnostic testing, cardiac monitoring, imaging, and
                  interventional procedures. Each service can carry its own
                  coding, documentation, authorization, and payer
                  requirements.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Med-Heave supports the administrative workflow behind these
                  services, helping connect charge capture, coding, claim
                  submission, payment posting, denial management, and
                  accounts receivable follow-up.
                </p>
              </div>

            </div>


            {/* SERVICE TYPES */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: Monitor,
                  title: "Cardiac Testing",
                  text: "Billing support for ECGs, echocardiography, stress testing, and other diagnostic services.",
                },
                {
                  icon: Activity,
                  title: "Cardiac Monitoring",
                  text: "Revenue-cycle support for Holter, event, and other cardiac monitoring services.",
                },
                {
                  icon: Stethoscope,
                  title: "Cardiology Visits",
                  text: "Support for evaluation and management services across cardiology practices.",
                },
                {
                  icon: HeartPulse,
                  title: "Cardiac Procedures",
                  text: "Organized billing workflows for procedure-based and interventional cardiac services.",
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
                Cardiology Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Support across the cardiology revenue cycle.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                From patient coverage and authorization to coding, claims,
                payments, and outstanding balances, our workflow is built
                around the billing requirements of cardiovascular care.
              </p>

            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify coverage and benefit information before cardiology services are billed.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Prior Authorization",
                  text: "Support authorization workflows for services and procedures that require payer approval.",
                },
                {
                  icon: FileCheck2,
                  title: "Cardiology Coding",
                  text: "Support coding for visits, diagnostic tests, monitoring, and documented cardiac procedures.",
                },
                {
                  icon: Monitor,
                  title: "Diagnostic Billing",
                  text: "Organize billing workflows for ECG, echo, stress testing, and cardiac monitoring services.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Review denied claims, identify the billing issue, and support appropriate correction or follow-up.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track unpaid and underpaid claims while continuing follow-up on outstanding accounts.",
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
                  Cardiology claims often depend on
                  <span className="block text-blue-600">
                    precise billing details.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Diagnostic tests and procedures can involve different
                  billing components, documentation requirements, and payer
                  rules. Keeping those details aligned helps create a more
                  organized claim workflow.
                </p>

              </div>


              <div className="space-y-4">

                {[
                  "ECG and electrocardiogram billing",
                  "Echocardiography and cardiac imaging",
                  "Exercise and pharmacological stress testing",
                  "Holter and event monitoring",
                  "Professional and technical component billing",
                  "Procedure coding, modifiers, and payer edits",
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
                  Keep diagnostic and procedure claims moving.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Cardiology claims can require careful attention to
                  documentation, medical necessity, component billing,
                  authorization, and payer-specific edits. A connected
                  workflow makes it easier to identify issues before and
                  after submission.
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <div className="space-y-5">

                  {[
                    {
                      title: "Before Submission",
                      text: "Eligibility, authorization, documentation, coding, and claim review.",
                    },
                    {
                      title: "During Processing",
                      text: "Monitor payer responses, rejections, and claims requiring correction.",
                    },
                    {
                      title: "After Payment",
                      text: "Post payments, review denials, and follow up on outstanding balances.",
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
                From cardiac encounter to payment.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A connected process keeps patient information, coding,
                claims, payer responses, and follow-up organized.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Patient & Eligibility",
                  text: "Review coverage, benefits, and authorization requirements.",
                },
                {
                  number: "02",
                  title: "Coding & Charges",
                  text: "Process documentation and capture diagnostic and procedure charges.",
                },
                {
                  number: "03",
                  title: "Claim Submission",
                  text: "Prepare and submit claims while monitoring payer responses.",
                },
                {
                  number: "04",
                  title: "Denials & A/R",
                  text: "Address rejected or denied claims and follow up on outstanding balances.",
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
                Cardiology Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep your cardiology billing moving.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                Med-Heave supports the billing workflow behind diagnostic
                testing, procedures, claims, denials, and accounts
                receivable.
              </p>

              <div className="mt-8">
                <a
                  href="#billing-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  View Cardiology Services
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

export default Cardiology;