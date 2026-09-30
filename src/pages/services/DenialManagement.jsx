import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Flag,
  RefreshCcw,
  Search,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";

import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

export default function DenialManagement() {
  const denialTypes = [
    {
      icon: ShieldCheck,
      title: "Eligibility Issues",
      text: "Identify coverage, eligibility, and coordination-of-benefits issues that can prevent successful claim payment.",
    },
    {
      icon: FileCheck2,
      title: "Authorization Issues",
      text: "Review missing, incorrect, or expired authorization information and determine the appropriate correction.",
    },
    {
      icon: ClipboardCheck,
      title: "Coding Issues",
      text: "Review coding, modifiers, diagnosis-to-procedure relationships, and payer-specific requirements.",
    },
    {
      icon: FileText,
      title: "Documentation Gaps",
      text: "Identify documentation requirements that may affect medical necessity or claim adjudication.",
    },
    {
      icon: AlertCircle,
      title: "Medical Necessity",
      text: "Review the payer's stated reason and supporting records to determine whether reconsideration or appeal is appropriate.",
    },
    {
      icon: Flag,
      title: "Timely Filing",
      text: "Flag claims affected by filing deadlines and organize the appropriate follow-up or appeal documentation.",
    },
    {
      icon: RefreshCcw,
      title: "Claim Processing",
      text: "Investigate payer processing issues, corrected claims, reprocessing requests, and other resolution paths.",
    },
    {
      icon: BarChart3,
      title: "Recurring Trends",
      text: "Analyze repeated denial patterns by payer, reason, service, provider, or workflow source.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Capture",
      text: "Identify denied claims from remittance information and organize them into a managed worklist.",
    },
    {
      number: "02",
      title: "Categorize",
      text: "Classify the denial by payer, reason, priority, and potential recovery path.",
    },
    {
      number: "03",
      title: "Find the Root Cause",
      text: "Look beyond the denial message to determine where the underlying problem originated.",
    },
    {
      number: "04",
      title: "Correct or Appeal",
      text: "Choose the appropriate response: correction, resubmission, reconsideration, appeal, or other payer process.",
    },
    {
      number: "05",
      title: "Follow Up",
      text: "Track the claim or appeal through payer response and document each action taken.",
    },
    {
      number: "06",
      title: "Prevent Recurrence",
      text: "Feed recurring denial patterns back into the upstream billing workflow for corrective action.",
    },
  ];

  const outcomes = [
    {
      icon: CheckCircle2,
      title: "Correctable",
      text: "The claim contains an issue that can be corrected and submitted again.",
    },
    {
      icon: TrendingUp,
      title: "Appealable",
      text: "The denial may warrant reconsideration or a formal appeal with supporting documentation.",
    },
    {
      icon: Search,
      title: "Needs Review",
      text: "Additional claim, payer, coding, eligibility, or documentation review is required.",
    },
    {
      icon: XCircle,
      title: "Not Recoverable",
      text: "The available information does not support further recovery and the outcome is documented.",
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
              <AlertCircle size={16} />
              Denial Management
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Appeals With
              <span className="block text-[#ed174c]">
                Root-Cause Fixes.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71839e]">
              Resolve denied claims with structured analysis, accurate
              corrections, payer-focused appeals, and feedback that helps
              prevent recurring denial patterns.
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
                View Denial Process
              </button>
            </div>
          </div>

          {/* Denial Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-5 shadow-[0_25px_70px_rgba(9,41,87,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-[#edf3f8] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Denial Management
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Resolution Queue
                  </h3>
                </div>

                <div className="rounded-xl bg-[#fff0f3] p-3 text-[#ed174c]">
                  <AlertCircle size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    New Denials
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    47
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Awaiting review
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff7f8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Under Review
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    18
                  </p>

                  <p className="mt-1 text-xs text-[#ed174c]">
                    Root cause analysis
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3fbf8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    In Appeal
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#168b72]">
                    12
                  </p>

                  <p className="mt-1 text-xs text-[#168b72]">
                    Follow-up required
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Resolved
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#168be8]">
                    31
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Resolution recorded
                  </p>
                </div>
              </div>

              {/* Denial Categories */}
              <div className="mt-6 rounded-2xl border border-[#e3edf5] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold">
                    Common Root Causes
                  </span>

                  <span className="text-xs font-semibold text-[#168be8]">
                    Current Queue
                  </span>
                </div>

                {[
                  ["Authorization", "31%", "bg-[#ed174c]"],
                  ["Eligibility", "24%", "bg-[#168be8]"],
                  ["Coding", "21%", "bg-[#58b7ff]"],
                  ["Documentation", "14%", "bg-[#092957]"],
                  ["Other", "10%", "bg-[#71839e]"],
                ].map(([label, width, color]) => (
                  <div key={label} className="mb-3 last:mb-0">
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
                  <TrendingDown size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#71839e]">
                    Prevention Focus
                  </p>

                  <p className="font-bold">
                    Recurring Causes Identified
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
              icon: Search,
              title: "Root-Cause Analysis",
              text: "Go beyond the denial code to identify where the problem originated.",
            },
            {
              icon: FileCheck2,
              title: "Appeals & Corrections",
              text: "Select the appropriate resolution path based on the denial and supporting information.",
            },
            {
              icon: TrendingDown,
              title: "Prevention Feedback",
              text: "Use recurring denial trends to improve upstream billing workflows.",
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
              Denial Resolution
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Don't Just Work the Denial.
              <span className="text-[#168be8]">
                {" "}
                Find the Cause.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-[#71839e]">
              Denial management starts with understanding why the payer did
              not pay the claim. The denial response, claim information,
              eligibility, authorization, coding, documentation, and payer
              requirements may all need to be reviewed before deciding the
              appropriate next step.
            </p>

            <p className="mt-4 leading-8 text-[#71839e]">
              The objective is not simply to clear a denial from a queue. It
              is to resolve the current claim when appropriate and identify
              recurring workflow problems that can create future denials.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {denialTypes.slice(0, 4).map((item) => {
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

      {/* Denial Types */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#168be8]">
              What We Analyze
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Every Denial Has a Reason
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              Denials can originate at different points in the revenue cycle.
              Categorizing them helps determine both the immediate resolution
              path and the upstream issue that needs attention.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {denialTypes.map((item) => {
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
              Denial Workflow
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              From Denial to Resolution
            </h2>

            <p className="mt-4 leading-7 text-blue-100/70">
              A structured denial workflow keeps every claim moving through
              identification, analysis, resolution, follow-up, and prevention.
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

      {/* Resolution Paths */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ed174c]">
                Resolution Strategy
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                The Right Denial Needs the Right Response
              </h2>

              <p className="mt-5 leading-8 text-[#71839e]">
                Not every denial follows the same path. Depending on the
                payer's reason and available documentation, a claim may need
                correction, resubmission, reconsideration, formal appeal,
                additional review, or documented closure.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {outcomes.map((item) => {
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

      {/* Root Cause Section */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9eafa] bg-[#f4faff] p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#fff0f3] p-3 text-[#ed174c]">
                  <Search size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Claim-Level Review
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Find What Went Wrong
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Review the payer response together with the claim, patient
                information, coding, authorization, documentation, and
                applicable billing requirements.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Review denial and remittance information",
                  "Check claim and patient details",
                  "Review coding and documentation",
                  "Verify eligibility and authorization",
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
                  <TrendingDown size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-100/60">
                    Prevention Feedback
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Fix the Upstream Problem
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-blue-100/70">
                When the same denial appears repeatedly, the resolution should
                not stop with the individual claim. The recurring cause can be
                reviewed and communicated back to the workflow where it
                originated.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Eligibility workflow",
                  "Authorization process",
                  "Coding and charge entry",
                  "Documentation requirements",
                  "Claim submission rules",
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
              Denial Management Benefits
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Recovery With Better Visibility
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Prioritized Work",
                text: "Organize denial queues around reason, urgency, recoverability, and payer requirements.",
              },
              {
                icon: FileCheck2,
                title: "Structured Appeals",
                text: "Build appeal and reconsideration workflows around the actual denial reason and supporting records.",
              },
              {
                icon: BarChart3,
                title: "Trend Visibility",
                text: "See which denial categories and payers are creating recurring revenue-cycle problems.",
              },
              {
                icon: TrendingDown,
                title: "Prevention Focus",
                text: "Use denial trends to identify upstream workflow improvements and reduce repeat issues.",
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#ed174c] px-8 py-14 text-center text-white md:px-12">
          <AlertCircle className="mx-auto mb-5" size={34} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Turn Denials Into Action.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-pink-50">
            Build a denial management process that combines claim resolution,
            appeals, root-cause analysis, and prevention.
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