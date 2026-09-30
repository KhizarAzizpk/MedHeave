import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  RefreshCcw,
  SearchCheck,
  Send,
  ShieldCheck,
  Timer,
  TrendingUp,
  XCircle,
} from "lucide-react";

import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

export default function ClaimsManagement() {
  const claimServices = [
    {
      icon: SearchCheck,
      title: "Claim Scrubbing",
      text: "Review claims for coding, demographic, modifier, and payer-specific issues before submission.",
    },
    {
      icon: Send,
      title: "Electronic Submission",
      text: "Submit clean claims through the appropriate clearinghouse or payer channel and monitor transmission.",
    },
    {
      icon: Timer,
      title: "Claim Status Tracking",
      text: "Track claims after submission and identify claims that require payer follow-up or additional action.",
    },
    {
      icon: RefreshCcw,
      title: "Rejection Resolution",
      text: "Identify clearinghouse and payer rejection reasons, correct claim issues, and prepare claims for resubmission.",
    },
    {
      icon: AlertCircle,
      title: "Denial Handling",
      text: "Review denied claims, identify the underlying issue, and coordinate corrected claims or appeals.",
    },
    {
      icon: TrendingUp,
      title: "Claim Follow-Up",
      text: "Maintain structured follow-up on outstanding claims so unresolved items do not remain unattended.",
    },
    {
      icon: CheckCircle2,
      title: "Payment Tracking",
      text: "Monitor claim outcomes through payment and identify items that need reconciliation or additional review.",
    },
    {
      icon: BarChart3,
      title: "Claims Reporting",
      text: "Track submission activity, rejections, denials, outstanding claims, and resolution trends.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Claim Preparation",
      text: "Charges, patient information, coding, and payer details are reviewed before submission.",
    },
    {
      number: "02",
      title: "Claim Scrubbing",
      text: "Claims are checked for missing information, coding issues, and payer-specific requirements.",
    },
    {
      number: "03",
      title: "Electronic Submission",
      text: "Validated claims are submitted through the appropriate electronic channel.",
    },
    {
      number: "04",
      title: "Acceptance Tracking",
      text: "Submission acknowledgments and claim status are monitored to identify problems quickly.",
    },
    {
      number: "05",
      title: "Correction & Follow-Up",
      text: "Rejected or stalled claims are investigated, corrected, resubmitted, or followed up.",
    },
    {
      number: "06",
      title: "Resolution",
      text: "Claims are tracked toward adjudication, payment, appeal, or final resolution.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4faff] text-[#092957]">
      {/* Navbar */}
      <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 lg:px-16">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#dff2ff] blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#e8f5ff] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe7fb] bg-white px-4 py-2 text-sm font-semibold text-[#168be8] shadow-sm">
              <FileCheck2 size={16} />
              Claims Management
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Scrub. Submit.
              <span className="block text-[#168be8]">
                Track. Resolve.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71839e]">
              Keep every claim moving from preparation to payment with a
              structured claims management workflow designed to catch errors
              early, monitor submissions, and resolve issues efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-[#ed174c] px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5">
                Talk to Our Team
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-[#cfe2f4] bg-white px-6 py-3.5 font-semibold text-[#092957] transition hover:border-[#168be8] hover:text-[#168be8]">
                Explore Our Process
              </button>
            </div>
          </div>

          {/* Claims Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-5 shadow-[0_25px_70px_rgba(9,41,87,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-[#edf3f8] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Claims Overview
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#092957]">
                    Current Claim Pipeline
                  </h3>
                </div>

                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <BarChart3 size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Submitted
                  </p>
                  <p className="mt-2 text-2xl font-extrabold">428</p>
                  <p className="mt-1 text-xs text-[#168be8]">
                    Claims in process
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Accepted
                  </p>
                  <p className="mt-2 text-2xl font-extrabold">392</p>
                  <p className="mt-1 text-xs text-[#168be8]">
                    Through clearinghouse
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff7f8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Needs Review
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#ed174c]">
                    18
                  </p>
                  <p className="mt-1 text-xs text-[#ed174c]">
                    Attention required
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3fbf8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Resolved
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#168b72]">
                    310
                  </p>
                  <p className="mt-1 text-xs text-[#168b72]">
                    Successfully worked
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#e3edf5] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold">Recent Claims</span>
                  <span className="text-xs font-semibold text-[#168be8]">
                    View Activity
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    ["CLM-10482", "Submitted", "BlueCross"],
                    ["CLM-10479", "Needs Review", "Aetna"],
                    ["CLM-10473", "Accepted", "UnitedHealthcare"],
                  ].map(([id, status, payer]) => (
                    <div
                      key={id}
                      className="flex items-center justify-between rounded-xl bg-[#f8fbfe] px-3 py-3"
                    >
                      <div>
                        <p className="text-sm font-bold">{id}</p>
                        <p className="text-xs text-[#71839e]">{payer}</p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          status === "Needs Review"
                            ? "bg-[#fff0f3] text-[#ed174c]"
                            : status === "Accepted"
                              ? "bg-[#edf9f5] text-[#168b72]"
                              : "bg-[#e8f5ff] text-[#168be8]"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#d9eafa] bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#fff0f3] p-2 text-[#ed174c]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#71839e]">Claim Quality</p>
                  <p className="font-bold">Pre-Submission Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              icon: ClipboardCheck,
              title: "Clean Claim Review",
              text: "Identify preventable issues before claims are submitted.",
            },
            {
              icon: Send,
              title: "Submission Monitoring",
              text: "Track claims through electronic submission and payer response.",
            },
            {
              icon: TrendingUp,
              title: "Resolution Focus",
              text: "Work rejected, denied, and stalled claims toward resolution.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d9eafa] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#71839e]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
              Claims Management
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Keep Every Claim
              <span className="text-[#168be8]"> Moving Forward.</span>
            </h2>

            <p className="mt-5 leading-8 text-[#71839e]">
              Claims management is more than sending a claim to a payer.
              Every claim needs to be reviewed, submitted correctly, monitored,
              and followed through until its status is understood and the
              appropriate next action is taken.
            </p>

            <p className="mt-4 leading-8 text-[#71839e]">
              Med Heave brings these steps into one organized workflow so
              providers have better visibility across their claim pipeline.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {claimServices.slice(0, 4).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9eafa] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Services */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#168be8]">
              What We Handle
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Complete Claims Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              From the first validation check to final resolution, our claims
              workflow is designed around visibility, accuracy, and timely
              follow-up.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {claimServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#d9eafa] bg-[#f4faff] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#168be8] shadow-sm transition group-hover:bg-[#168be8] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#092957] p-8 text-white md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#58b7ff]">
              Our Claims Workflow
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              From Claim Creation to Resolution
            </h2>

            <p className="mt-4 leading-7 text-blue-100/70">
              A structured process helps keep claims visible at every stage
              and makes it easier to identify what needs attention.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition hover:bg-white/[0.09]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#58b7ff]">
                    {item.number}
                  </span>

                  <div className="rounded-full bg-white/10 p-2">
                    <ArrowRight size={17} />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-blue-100/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejections / Denials */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#fff0f3] p-3 text-[#ed174c]">
                  <XCircle size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    When a claim is rejected
                  </p>
                  <h3 className="text-2xl font-extrabold">
                    Correct & Resubmit
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Rejected claims can often be addressed by identifying the
                clearinghouse or payer edit, correcting the relevant
                information, and resubmitting the claim through the appropriate
                channel.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Identify the rejection reason",
                  "Review claim information",
                  "Correct the issue",
                  "Resubmit and monitor",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f4faff] p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#168be8]"
                    />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <AlertCircle size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    When a claim is denied
                  </p>
                  <h3 className="text-2xl font-extrabold">
                    Review & Resolve
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Denied claims require a different workflow. The reason for the
                denial is reviewed, supporting information is assessed, and the
                appropriate correction, reconsideration, or appeal path is
                determined.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Identify the denial reason",
                  "Review documentation and claim data",
                  "Determine the appropriate action",
                  "Track correction or appeal",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f4faff] p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#168be8]"
                    />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
              Why Claims Management Matters
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              More Visibility. Less Guesswork.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Fewer Preventable Errors",
                text: "Identify common claim issues before submission.",
              },
              {
                icon: Timer,
                title: "Faster Issue Detection",
                text: "Find rejected or stalled claims before they disappear into the queue.",
              },
              {
                icon: TrendingUp,
                title: "Stronger Follow-Up",
                text: "Keep outstanding claims organized and actively monitored.",
              },
              {
                icon: BarChart3,
                title: "Better Visibility",
                text: "Understand claim activity and resolution trends through reporting.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9eafa] p-6"
                >
                  <Icon size={25} className="text-[#168be8]" />

                  <h3 className="mt-5 font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#168be8] px-8 py-14 text-center text-white md:px-12">
          <FileText className="mx-auto mb-5" size={34} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Keep Your Claims Moving.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Build a more organized claims workflow with structured scrubbing,
            submission monitoring, follow-up, and resolution support.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#092957] shadow-lg transition hover:-translate-y-0.5">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

