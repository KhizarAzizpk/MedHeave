import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,

  PhoneCall,
  RefreshCcw,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

export default function AccountsReceivableFollowUp() {
  const followUpServices = [
    {
      icon: BarChart3,
      title: "A/R Aging Review",
      text: "Review outstanding balances by payer, aging bucket, claim status, provider, and balance.",
    },
    {
      icon: Target,
      title: "Priority Worklists",
      text: "Prioritize accounts using age, value, payer status, deadlines, and recovery considerations.",
    },
    {
      icon: Search,
      title: "Claim Status Verification",
      text: "Check payer portals, electronic status information, and other available channels to determine claim position.",
    },
    {
      icon: PhoneCall,
      title: "Payer Follow-Up",
      text: "Contact payers regarding unpaid claims and document status, reference information, and next actions.",
    },
    {
      icon: FileCheck2,
      title: "Additional Information",
      text: "Identify requests for documentation, corrected information, or other requirements needed to continue processing.",
    },
    {
      icon: RefreshCcw,
      title: "Rework & Resubmission",
      text: "Route claims requiring correction, resubmission, reprocessing, or additional review into the appropriate workflow.",
    },
    {
      icon: AlertCircle,
      title: "Denial & Escalation",
      text: "Move denied or stalled claims into denial, appeal, or escalation workflows instead of leaving them unresolved.",
    },
    {
      icon: Clock3,
      title: "Deadline Monitoring",
      text: "Identify accounts approaching payer filing or appeal deadlines and flag them for appropriate action.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Review A/R",
      text: "Start with the receivable inventory and identify open claims that require attention.",
    },
    {
      number: "02",
      title: "Prioritize",
      text: "Organize the worklist using aging, balance, payer status, deadlines, and workability.",
    },
    {
      number: "03",
      title: "Verify Status",
      text: "Determine where the claim currently sits and what information is available from the payer.",
    },
    {
      number: "04",
      title: "Take Action",
      text: "Follow up, provide requested information, correct the claim, or route it to the appropriate workflow.",
    },
    {
      number: "05",
      title: "Document",
      text: "Record the payer response, reference details, action taken, and expected next step.",
    },
    {
      number: "06",
      title: "Track Resolution",
      text: "Continue monitoring the account until payment, adjustment, appeal outcome, or another final resolution.",
    },
  ];

  const statusCards = [
    {
      icon: Clock3,
      title: "Pending",
      text: "The claim is still moving through payer processing and needs continued visibility.",
    },
    {
      icon: FileCheck2,
      title: "Action Required",
      text: "Additional information, correction, documentation, or another response is needed.",
    },
    {
      icon: AlertCircle,
      title: "Escalation",
      text: "The claim is stalled, denied, or approaching a deadline and requires additional attention.",
    },
    {
      icon: CheckCircle2,
      title: "Resolved",
      text: "The account reaches payment, appropriate adjustment, appeal resolution, or documented closure.",
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
              <PhoneCall size={16} />
              Accounts Receivable Follow-up
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Keep Every Claim
              <span className="block text-[#168be8]">
                Moving Forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71839e]">
              Dedicated A/R follow-up that keeps unpaid claims visible,
              prioritized, documented, and actively moving toward resolution.
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
                Explore Follow-up Process
              </button>
            </div>
          </div>

          {/* A/R Follow-up Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-5 shadow-[0_25px_70px_rgba(9,41,87,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-[#edf3f8] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    A/R Follow-up
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Active Work Queue
                  </h3>
                </div>

                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <PhoneCall size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Open A/R
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    326
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Active accounts
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Follow-up Due
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    84
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Next action required
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff7f8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Escalation
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#ed174c]">
                    21
                  </p>

                  <p className="mt-1 text-xs text-[#ed174c]">
                    Needs attention
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3fbf8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Resolved
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#168b72]">
                    58
                  </p>

                  <p className="mt-1 text-xs text-[#168b72]">
                    Closed this cycle
                  </p>
                </div>
              </div>

              {/* Aging Queue */}
              <div className="mt-6 rounded-2xl border border-[#e3edf5] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold">
                    Follow-up Queue
                  </span>

                  <span className="text-xs font-semibold text-[#168be8]">
                    By Aging
                  </span>
                </div>

                {[
                  ["0–30 Days", "38%", "bg-[#58b7ff]"],
                  ["31–60 Days", "29%", "bg-[#168be8]"],
                  ["61–90 Days", "21%", "bg-[#ed174c]"],
                  ["90+ Days", "12%", "bg-[#092957]"],
                ].map(([label, width, color]) => (
                  <div key={label} className="mb-4 last:mb-0">
                    <div className="mb-1 flex justify-between text-xs font-semibold">
                      <span>{label}</span>
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

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#f4faff] p-4">
                <div className="rounded-xl bg-white p-2 text-[#168be8] shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#71839e]">
                    Follow-up Control
                  </p>

                  <p className="font-bold">
                    Next Actions Documented
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
              icon: Target,
              title: "Dedicated Worklists",
              text: "Organize open receivables by payer, age, balance, status, and next action.",
            },
            {
              icon: PhoneCall,
              title: "Payer Follow-up",
              text: "Confirm claim status and determine what needs to happen next.",
            },
            {
              icon: FileText,
              title: "Documented Actions",
              text: "Keep follow-up notes, payer responses, references, and next steps visible.",
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
              Dedicated A/R Follow-up
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Don't Let Open Claims
              <span className="text-[#168be8]">
                {" "}
                Sit Unworked.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-[#71839e]">
              A/R follow-up begins after claims have been submitted and
              continues while balances remain unresolved. The work involves
              determining where a claim is in the payer process, identifying
              what is preventing resolution, and assigning the appropriate
              next action.
            </p>

            <p className="mt-4 leading-8 text-[#71839e]">
              Effective follow-up is more than checking claim status. Each
              account needs an owner, a documented action, and a clear path
              toward payment, correction, escalation, appeal, adjustment, or
              closure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {followUpServices.slice(0, 4).map((item) => {
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

      {/* What We Handle */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#168be8]">
              What We Handle
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Complete A/R Follow-up Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              A structured follow-up queue helps keep unpaid accounts visible
              while routing each issue toward the workflow that can resolve it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {followUpServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#d9eafa] bg-[#f4faff] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#168be8] shadow-sm transition group-hover:bg-[#168be8] group-hover:text-white">
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

      {/* Workflow */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#092957] p-8 text-white md:p-12 lg:p-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#58b7ff]">
              Follow-up Workflow
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              From Open A/R to Final Resolution
            </h2>

            <p className="mt-4 leading-7 text-blue-100/70">
              A consistent workflow makes it easier to know which accounts
              need attention, what action was taken, and what needs to happen
              next.
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

      {/* Account Status */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
                Account Control
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Every Follow-up Needs a Next Action
              </h2>

              <p className="mt-5 leading-8 text-[#71839e]">
                A claim should not disappear after a status call. The payer
                response needs to be recorded, the next action identified, and
                the account placed back into the appropriate queue until it
                reaches resolution.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {statusCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#d9eafa] bg-white p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                        <Icon size={21} />
                      </div>

                      <h3 className="font-bold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#71839e]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance AR vs Patient AR */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9eafa] bg-[#f4faff] p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Insurance A/R
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Payer-Side Follow-up
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Insurance receivables may require claim-status verification,
                payer communication, additional documentation, corrected
                claims, reprocessing requests, or escalation.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Verify claim receipt and processing status",
                  "Document payer responses and reference information",
                  "Respond to information or documentation requests",
                  "Route denials and stalled claims appropriately",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-3"
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

            <div className="rounded-3xl bg-[#092957] p-8 text-white md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3 text-[#58b7ff]">
                  <Wallet size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-100/60">
                    Follow-up Visibility
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Know What Happens Next
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-blue-100/70">
                A well-managed A/R queue gives billing teams visibility into
                current status, previous actions, pending responses, deadlines,
                and the next follow-up step.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Current claim status",
                  "Last action and payer response",
                  "Next follow-up date",
                  "Escalation or resolution path",
                  "Final account outcome",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3"
                  >
                    <ArrowRight
                      size={17}
                      className="shrink-0 text-[#58b7ff]"
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
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
              Why Dedicated Follow-up
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              More Visibility. More Consistent Action.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Prioritized Work",
                text: "Focus follow-up on accounts based on aging, value, status, deadlines, and recoverability.",
              },
              {
                icon: PhoneCall,
                title: "Consistent Follow-up",
                text: "Keep payer communication organized instead of relying on occasional status checks.",
              },
              {
                icon: FileText,
                title: "Clear Documentation",
                text: "Record payer responses, reference information, actions, and next steps.",
              },
              {
                icon: TrendingUp,
                title: "Better Visibility",
                text: "Track movement across the A/R queue and identify recurring sources of delay.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#d9eafa] bg-white p-6"
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
          <PhoneCall className="mx-auto mb-5" size={34} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Give Every Open Claim a Next Step.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Build a dedicated A/R follow-up workflow around prioritized
            worklists, payer communication, documented actions, and clear
            resolution paths.
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