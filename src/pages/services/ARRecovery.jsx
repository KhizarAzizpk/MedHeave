import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Flag,
  RefreshCcw,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

export default function ARRecovery() {
  const recoveryServices = [
    {
      icon: BarChart3,
      title: "A/R Aging Analysis",
      text: "Review outstanding balances by aging bucket, payer, claim status, and dollar value.",
    },
    {
      icon: Target,
      title: "Recovery Prioritization",
      text: "Build focused worklists around high-value balances, payer requirements, and filing deadlines.",
    },
    {
      icon: Search,
      title: "Payer Follow-Up",
      text: "Follow up on unpaid claims through payer portals, calls, and documented status requests.",
    },
    {
      icon: RefreshCcw,
      title: "Claim Rework",
      text: "Identify claims requiring correction, resubmission, reprocessing, or additional documentation.",
    },
    {
      icon: AlertCircle,
      title: "Denial & Appeal Support",
      text: "Route denied balances into the appropriate correction, reconsideration, or appeal workflow.",
    },
    {
      icon: TrendingUp,
      title: "Underpayment Recovery",
      text: "Review payment variances and identify balances that may require additional payer follow-up.",
    },
    {
      icon: Clock3,
      title: "Deadline Monitoring",
      text: "Track claims approaching payer filing or appeal deadlines so recoverable balances are not overlooked.",
    },
    {
      icon: FileCheck2,
      title: "Recovery Reporting",
      text: "Track worked accounts, payer responses, recovered payments, and remaining aged balances.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "A/R Analysis",
      text: "Review the aging report and identify where outstanding revenue is concentrated.",
    },
    {
      number: "02",
      title: "Segment & Prioritize",
      text: "Group accounts by age, payer, value, status, and recovery considerations.",
    },
    {
      number: "03",
      title: "Investigate",
      text: "Determine why each balance remains unpaid and identify the appropriate next action.",
    },
    {
      number: "04",
      title: "Payer Follow-Up",
      text: "Contact payers through available channels and document each response and commitment.",
    },
    {
      number: "05",
      title: "Resolve",
      text: "Correct, resubmit, appeal, request reprocessing, or escalate the balance as appropriate.",
    },
    {
      number: "06",
      title: "Track & Report",
      text: "Monitor recovery activity and report movement across the aging buckets.",
    },
  ];

  const agingBuckets = [
    {
      age: "0–30",
      title: "Monitor",
      text: "Confirm claims are progressing and identify early exceptions.",
      icon: Clock3,
    },
    {
      age: "31–60",
      title: "Active Follow-Up",
      text: "Investigate unpaid claims and address payer or claim issues.",
      icon: Search,
    },
    {
      age: "61–90",
      title: "Escalate",
      text: "Increase follow-up and address claims approaching important deadlines.",
      icon: AlertCircle,
    },
    {
      age: "90+",
      title: "Recovery Focus",
      text: "Review aged balances for viable recovery, appeals, corrections, or closure.",
      icon: Target,
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
              <TrendingUp size={16} />
              A/R Recovery
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Recover Aging
              <span className="block text-[#168be8]">
                Revenue.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71839e]">
              Turn aged accounts receivable into a structured recovery
              workflow with focused aging analysis, payer follow-up, claim
              resolution, and recovery reporting.
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
                Explore Recovery Process
              </button>
            </div>
          </div>

          {/* A/R Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-5 shadow-[0_25px_70px_rgba(9,41,87,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-[#edf3f8] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    A/R Recovery Overview
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Aging Receivables
                  </h3>
                </div>

                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <BarChart3 size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Total A/R
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    $284K
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Open balances
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Active Queue
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    426
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Accounts being worked
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff7f8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    90+ Days
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#ed174c]">
                    $76K
                  </p>

                  <p className="mt-1 text-xs text-[#ed174c]">
                    Recovery focus
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3fbf8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Recovered
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#168b72]">
                    $42K
                  </p>

                  <p className="mt-1 text-xs text-[#168b72]">
                    Current cycle
                  </p>
                </div>
              </div>

              {/* Aging Bars */}
              <div className="mt-6 rounded-2xl border border-[#e3edf5] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold">
                    A/R Aging
                  </span>

                  <span className="text-xs font-semibold text-[#168be8]">
                    Recovery Queue
                  </span>
                </div>

                {[
                  ["0–30", "34%", "bg-[#58b7ff]"],
                  ["31–60", "27%", "bg-[#168be8]"],
                  ["61–90", "22%", "bg-[#ed174c]"],
                  ["90+", "17%", "bg-[#092957]"],
                ].map(([label, width, color]) => (
                  <div key={label} className="mb-4 last:mb-0">
                    <div className="mb-1 flex justify-between text-xs font-semibold">
                      <span>{label} days</span>
                      <span>{width}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#edf3f8]">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recovery Status */}
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#f4faff] p-4">
                <div className="rounded-xl bg-white p-2 text-[#168be8] shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#71839e]">
                    Recovery Control
                  </p>

                  <p className="font-bold">
                    Priority Claims Identified
                  </p>
                </div>

                <CheckCircle2
                  size={20}
                  className="ml-auto text-[#168b72]"
                />
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
              icon: BarChart3,
              title: "Aging Analysis",
              text: "Understand where outstanding revenue is sitting across your A/R.",
            },
            {
              icon: Target,
              title: "Focused Recovery",
              text: "Prioritize balances using age, value, payer, and recovery considerations.",
            },
            {
              icon: RefreshCcw,
              title: "Resolution Support",
              text: "Move stalled claims toward payment, correction, appeal, or closure.",
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

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

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
              A/R Recovery
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Give Aging A/R
              <span className="text-[#168be8]">
                {" "}
                Dedicated Attention.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-[#71839e]">
              Aged accounts receivable can contain unpaid claims,
              underpayments, unresolved denials, pending information requests,
              and balances that have simply lacked consistent follow-up.
            </p>

            <p className="mt-4 leading-8 text-[#71839e]">
              Med Heave approaches recovery as a structured work queue:
              analyze the aging, identify why balances remain open, determine
              the appropriate action, and document the outcome.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recoveryServices.slice(0, 4).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9eafa] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aging Buckets */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#168be8]">
              Aging Strategy
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Every Aging Bucket Needs a Plan
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              A/R is commonly organized into aging buckets. The appropriate
              action depends on the payer, claim status, balance, and applicable
              filing or appeal requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {agingBuckets.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.age}
                  className="relative overflow-hidden rounded-2xl border border-[#d9eafa] bg-[#f4faff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#168be8]">
                      {item.age}
                    </span>

                    <div className="rounded-xl bg-white p-3 text-[#168be8] shadow-sm">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-6 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Services */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
              What We Handle
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Complete A/R Recovery Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              From aging analysis to final resolution, our recovery workflow
              keeps outstanding balances visible and actively worked.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recoveryServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#d9eafa] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5ff] text-[#168be8] transition group-hover:bg-[#168be8] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#71839e]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery Workflow */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#092957] p-8 text-white md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#58b7ff]">
              Recovery Workflow
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              From Aging Report to Resolution
            </h2>

            <p className="mt-4 leading-7 text-blue-100/70">
              A disciplined recovery process helps determine why a balance is
              still open and what action should happen next. A structured
              workflow keeps segmentation, prioritization, follow-up, and
              reporting connected.
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

                <h3 className="mt-6 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Focus */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <Wallet size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Insurance A/R
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Work the Payer Side
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Insurance balances may require claim-status checks,
                reprocessing requests, corrected claims, appeals, or
                underpayment review depending on the reason payment has not
                been received.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Verify current claim status",
                  "Identify the reason for non-payment",
                  "Follow up with the payer",
                  "Correct, appeal, or escalate when appropriate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f4faff] p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#168be8]"
                    />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#fff0f3] p-3 text-[#ed174c]">
                  <Flag size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Recovery Control
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Protect Time-Sensitive A/R
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Not every old balance follows the same recovery path. Payer
                rules, claim history, documentation, and filing or appeal
                deadlines need to be considered before deciding the next step.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Flag approaching deadlines",
                  "Review claim documentation",
                  "Identify viable recovery paths",
                  "Document the final outcome",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f4faff] p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#168be8]"
                    />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>
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
              Why A/R Recovery Matters
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Turn Outstanding Balances Into Actionable Work
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Focused Worklists",
                text: "Organize aging so teams can focus on the balances that require attention.",
              },
              {
                icon: Clock3,
                title: "Deadline Awareness",
                text: "Identify accounts approaching payer filing or appeal limits.",
              },
              {
                icon: TrendingUp,
                title: "Recovery Visibility",
                text: "Track movement across aging buckets and recovery activity.",
              },
              {
                icon: ShieldCheck,
                title: "Documented Follow-Up",
                text: "Maintain clear records of payer responses, actions, and next steps.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9eafa] p-6"
                >
                  <Icon size={25} className="text-[#168be8]" />

                  <h3 className="mt-5 font-bold">
                    {item.title}
                  </h3>

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
          <TrendingUp className="mx-auto mb-5" size={34} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Put Your Aging A/R to Work.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Build a structured recovery program around aging analysis, payer
            follow-up, claim resolution, and clear recovery reporting.
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