import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  SearchCheck,
  Send,
  ShieldCheck,
  Stethoscope,
  XCircle,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const supportItems = [
  {
    title: "Authorization Requirement Check",
    description:
      "Determine whether a scheduled service requires prior authorization based on the payer, plan, service, and provider.",
    icon: SearchCheck,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Documentation Preparation",
    description:
      "Organize the clinical and administrative information needed to support the authorization request.",
    icon: FileText,
    color: "#ed174c",
    bg: "#fff0f4",
  },
  {
    title: "Authorization Submission",
    description:
      "Prepare and submit authorization requests through the appropriate payer channel.",
    icon: Send,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Payer Follow-Up",
    description:
      "Monitor pending requests and follow up when additional information or action is required.",
    icon: Clock3,
    color: "#ed174c",
    bg: "#fff0f4",
  },
  {
    title: "Approval Tracking",
    description:
      "Record authorization numbers, approved services, units, providers, and effective dates.",
    icon: BadgeCheck,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Denial & Escalation Support",
    description:
      "Identify denied requests and coordinate the next administrative step when additional review is available.",
    icon: AlertCircle,
    color: "#ed174c",
    bg: "#fff0f4",
  },
];

const workflow = [
  {
    number: "01",
    title: "Check Requirement",
    text: "Confirm whether the patient's plan requires authorization for the requested service.",
  },
  {
    number: "02",
    title: "Gather Information",
    text: "Collect the required patient, provider, service, and supporting clinical documentation.",
  },
  {
    number: "03",
    title: "Prepare Request",
    text: "Match the request with the payer's current submission requirements.",
  },
  {
    number: "04",
    title: "Submit to Payer",
    text: "Send the completed authorization request through the appropriate payer channel.",
  },
  {
    number: "05",
    title: "Track & Follow Up",
    text: "Monitor the request and respond to payer questions or additional information requests.",
  },
  {
    number: "06",
    title: "Close the Loop",
    text: "Document the decision and make sure the authorization details are available for billing.",
  },
];

const benefits = [
  "Identify authorization requirements before services are performed",
  "Reduce avoidable authorization-related claim problems",
  "Keep pending requests visible and organized",
  "Improve coordination between scheduling and billing",
  "Maintain authorization numbers and effective dates",
  "Give providers a structured pre-service workflow",
];

export default function PriorAuthorization() {
  return (
    <main className="min-h-screen bg-[#f4faff] text-[#092957] ">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* HERO */}
      <section className="relative pt-24 pb-20 px-6 md:px-10 lg:px-16">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#dff2ff] rounded-full blur-3xl opacity-80" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-[#ffe1ea] rounded-full blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#bfe0f8] text-[#168be8] text-sm font-semibold mb-6 shadow-sm">
              <ShieldCheck size={17} />
              Prior Authorization Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Get Authorization.
              <br />
              <span className="text-[#168be8]">
                Keep Care Moving.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#71839e] max-w-xl leading-relaxed">
              From requirement checks and documentation to payer submission,
              follow-up, and approval tracking, Med-Heave keeps the
              authorization process organized from start to finish.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-3.5 rounded-xl bg-[#ed174c] text-white font-semibold hover:bg-[#d91445] transition shadow-lg shadow-[#ed174c]/20">
                Get Started
              </button>

              <button className="px-7 py-3.5 rounded-xl bg-white border border-[#bfe0f8] text-[#092957] font-semibold hover:bg-[#e8f5ff] transition flex items-center gap-2">
                See Our Process
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* AUTHORIZATION DASHBOARD */}
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-br from-[#dff2ff] to-[#ffe3eb] blur-2xl opacity-70 rounded-[2rem]" />

            <div className="relative bg-white rounded-[2rem] border border-[#c9e5f7] shadow-2xl shadow-[#168be8]/10 p-5 md:p-7">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-[#71839e] uppercase tracking-wider font-semibold">
                    Authorization Tracker
                  </p>

                  <h3 className="text-xl font-bold mt-1">
                    Request Status
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[#e8f5ff] flex items-center justify-center">
                  <ShieldCheck
                    className="text-[#168be8]"
                    size={24}
                  />
                </div>
              </div>

              {/* STATUS */}
              <div className="rounded-2xl bg-[#f4faff] p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">
                      MRI Authorization
                    </p>

                    <p className="text-xs text-[#71839e] mt-1">
                      Commercial Health Plan
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#168be8] text-sm font-semibold">
                    <Clock3 size={17} />
                    In Review
                  </div>
                </div>
              </div>

              {/* TRACKING */}
              <div className="space-y-4">

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5ff] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      size={17}
                      className="text-[#168be8]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">
                      Requirement Confirmed
                    </p>

                    <p className="text-xs text-[#71839e]">
                      Authorization required
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5ff] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      size={17}
                      className="text-[#168be8]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">
                      Documentation Submitted
                    </p>

                    <p className="text-xs text-[#71839e]">
                      Clinical information attached
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#fff0f4] flex items-center justify-center flex-shrink-0">
                    <Clock3
                      size={17}
                      className="text-[#ed174c]"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">
                      Payer Review
                    </p>

                    <p className="text-xs text-[#71839e]">
                      Awaiting decision
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-6 rounded-xl bg-[#092957] p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">
                      Authorization ID
                    </p>

                    <p className="font-semibold mt-1">
                      PA-48291
                    </p>
                  </div>

                  <FileCheck2 size={22} className="text-[#55b9ff]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">

          {[
            {
              icon: SearchCheck,
              title: "Requirement Check",
              text: "Identify services that need payer authorization.",
            },
            {
              icon: Send,
              title: "Request Submission",
              text: "Prepare and submit complete authorization requests.",
            },
            {
              icon: Clock3,
              title: "Status Follow-Up",
              text: "Track pending requests through payer decision.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#c9e5f7] shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    index === 1
                      ? "bg-[#fff0f4]"
                      : "bg-[#e8f5ff]"
                  }`}
                >
                  <Icon
                    size={23}
                    className={
                      index === 1
                        ? "text-[#ed174c]"
                        : "text-[#168be8]"
                    }
                  />
                </div>

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-[#71839e] mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 md:px-10 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-[#ed174c] font-bold uppercase tracking-widest text-sm">
              Why Prior Authorization Matters
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Handle Authorization Before It Becomes a Billing Problem
            </h2>

            <p className="text-[#71839e] text-lg leading-relaxed mt-6">
              Prior authorization is a pre-service process in which a health
              plan may require approval before certain services are performed.
              Requirements can vary by payer, plan, service, and provider.
            </p>

            <p className="text-[#71839e] text-lg leading-relaxed mt-4">
              Med-Heave gives your team a structured workflow for identifying
              requirements, preparing requests, following up with payers, and
              documenting decisions.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Check whether authorization is required",
                "Gather required supporting information",
                "Submit through the appropriate payer channel",
                "Track pending requests",
                "Document the final decision",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="text-[#168be8] flex-shrink-0"
                  />

                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL CARD */}
          <div className="rounded-[2rem] bg-[#092957] p-7 md:p-9 text-white shadow-2xl shadow-[#092957]/20">

            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#168be8] flex items-center justify-center">
                <Stethoscope size={23} />
              </div>

              <div>
                <p className="font-bold text-lg">
                  Pre-Service Authorization
                </p>

                <p className="text-blue-200 text-sm">
                  Request readiness checklist
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {[
                ["Patient Coverage", "Verified"],
                ["Authorization Required", "Yes"],
                ["Clinical Documentation", "Ready"],
                ["Request Submitted", "Complete"],
                ["Payer Follow-Up", "Active"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-blue-100">
                    {label}
                  </span>

                  <span className="flex items-center gap-2 font-semibold">
                    <CheckCircle2
                      size={17}
                      className="text-[#43d17c]"
                    />

                    {value}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-7 rounded-xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-blue-200">
                Workflow Status
              </p>

              <p className="font-semibold mt-1">
                Request is actively being monitored.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-10 lg:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-12">

            <p className="text-[#168be8] font-bold uppercase tracking-widest text-sm">
              Complete Authorization Support
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              From Requirement Check to Payer Decision
            </h2>

            <p className="text-[#71839e] text-lg mt-4 leading-relaxed">
              Keep every authorization request moving through a structured
              workflow with clear ownership and status visibility.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-6 border border-[#bfe0f8] hover:shadow-xl hover:-translate-y-1 transition"
                >

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: item.bg,
                    }}
                  >
                    <Icon
                      size={23}
                      style={{
                        color: item.color,
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-[#71839e] mt-2 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 md:px-10 lg:px-16 py-20 bg-[#092957] text-white">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-12">

            <p className="text-[#55b9ff] font-bold uppercase tracking-widest text-sm">
              Our Authorization Workflow
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              A Clear Path From Request to Decision
            </h2>

            <p className="text-blue-100 mt-4 text-lg leading-relaxed">
              A structured workflow makes it easier to know what has been
              submitted, what is still pending, and what needs attention.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {workflow.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >

                <div className="flex items-center justify-between">

                  <div className="text-[#55b9ff] font-bold text-sm">
                    STEP {step.number}
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-blue-300"
                  />

                </div>

                <h3 className="text-lg font-bold mt-5">
                  {step.title}
                </h3>

                <p className="text-blue-100 text-sm leading-relaxed mt-3">
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* APPROVAL / DENIAL */}
      <section className="px-6 md:px-10 lg:px-16 py-20 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-[#ed174c] font-bold uppercase tracking-widest text-sm">
              Decision Management
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Keep Every Authorization Outcome Organized
            </h2>

            <p className="text-[#71839e] text-lg mt-4">
              Whether a request is approved, pending, or denied, the next
              administrative step should be visible to your team.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-[#bfe0f8] bg-[#f4faff] p-7">

              <div className="w-12 h-12 rounded-xl bg-[#e8f5ff] flex items-center justify-center mb-5">
                <CheckCircle2
                  className="text-[#168be8]"
                  size={25}
                />
              </div>

              <h3 className="text-xl font-bold">
                Approved
              </h3>

              <p className="text-[#71839e] mt-3 leading-relaxed">
                Record the authorization number, approved service, units,
                provider, and applicable dates for the billing workflow.
              </p>

            </div>

            <div className="rounded-2xl border border-[#bfe0f8] bg-[#f4faff] p-7">

              <div className="w-12 h-12 rounded-xl bg-[#fff0f4] flex items-center justify-center mb-5">
                <Clock3
                  className="text-[#ed174c]"
                  size={25}
                />
              </div>

              <h3 className="text-xl font-bold">
                Pending
              </h3>

              <p className="text-[#71839e] mt-3 leading-relaxed">
                Keep pending requests visible and follow up according to the
                payer's process and expected response timeline.
              </p>

            </div>

            <div className="rounded-2xl border border-[#bfe0f8] bg-[#f4faff] p-7">

              <div className="w-12 h-12 rounded-xl bg-[#fff0f4] flex items-center justify-center mb-5">
                <XCircle
                  className="text-[#ed174c]"
                  size={25}
                />
              </div>

              <h3 className="text-xl font-bold">
                Denied
              </h3>

              <p className="text-[#71839e] mt-3 leading-relaxed">
                Review the stated reason and coordinate the appropriate
                reconsideration, peer review, or appeal process when available.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-10 lg:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-[#168be8] font-bold uppercase tracking-widest text-sm">
              Why Med-Heave
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              A More Organized Authorization Process
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-white rounded-xl p-5 border border-[#d9eafa] flex items-center gap-3 hover:border-[#168be8] transition"
              >

                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0
                      ? "bg-[#e8f5ff]"
                      : "bg-[#fff0f4]"
                  }`}
                >

                  <CheckCircle2
                    size={18}
                    className={
                      index % 2 === 0
                        ? "text-[#168be8]"
                        : "text-[#ed174c]"
                    }
                  />

                </div>

                <span className="font-medium">
                  {benefit}
                </span>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">

        <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#092957] via-[#0b3975] to-[#168be8] p-8 md:p-12 text-white relative overflow-hidden">

          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#ed174c]/30 blur-3xl" />

          <div className="relative z-10 max-w-3xl">

            <p className="text-[#8fd3ff] font-semibold uppercase tracking-widest text-sm">
              Keep Requests Moving
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Make Prior Authorization a Managed Workflow.
            </h2>

            <p className="text-blue-100 text-lg mt-4 leading-relaxed">
              Give your team better visibility from the first requirement
              check to the final payer decision.
            </p>

            <button className="mt-7 px-7 py-3.5 rounded-xl bg-[#ed174c] text-white font-semibold hover:bg-[#d91445] transition shadow-lg">
              Talk to Med-Heave
            </button>

          </div>
        </div>
      </section>
      <Footer />

    </main>
  );
}