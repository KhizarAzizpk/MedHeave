import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  FileText,
  RefreshCcw,
  SearchCheck,
  ShieldCheck,
  Timer,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

export default function PaymentPosting() {
  const postingServices = [
    {
      icon: FileCheck2,
      title: "ERA Posting",
      text: "Process electronic remittance advice and apply payments to the correct claims and service lines.",
    },
    {
      icon: FileText,
      title: "EOB Posting",
      text: "Accurately post paper and electronic EOB information, including payments, adjustments, and patient responsibility.",
    },
    {
      icon: CreditCard,
      title: "Patient Payment Posting",
      text: "Apply copayments, deductibles, coinsurance, and other patient payments to the appropriate accounts.",
    },
    {
      icon: RefreshCcw,
      title: "Adjustment Posting",
      text: "Review contractual adjustments, write-offs, and other payer adjustments before finalizing account balances.",
    },
    {
      icon: SearchCheck,
      title: "Underpayment Detection",
      text: "Identify payments that fall below expected reimbursement and flag them for further review.",
    },
    {
      icon: AlertCircle,
      title: "Denial Identification",
      text: "Identify denied or zero-pay claim lines during posting so they can move into the appropriate follow-up workflow.",
    },
    {
      icon: WalletCards,
      title: "Deposit Reconciliation",
      text: "Compare posted payments against deposits and remittance information to identify discrepancies.",
    },
    {
      icon: BarChart3,
      title: "Posting Reports",
      text: "Provide visibility into posting activity, exceptions, reconciliation status, and outstanding issues.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Remittance Intake",
      text: "ERA, EOB, EFT, and payment information is collected and organized for processing.",
    },
    {
      number: "02",
      title: "Payment Posting",
      text: "Payments are matched to the appropriate patient, claim, and service line.",
    },
    {
      number: "03",
      title: "Adjustment Review",
      text: "Contractual adjustments, write-offs, and patient responsibility are reviewed and applied.",
    },
    {
      number: "04",
      title: "Variance Detection",
      text: "Underpayments, unexpected adjustments, denials, and posting exceptions are identified.",
    },
    {
      number: "05",
      title: "Reconciliation",
      text: "Posted transactions are compared against deposits and remittance totals.",
    },
    {
      number: "06",
      title: "Reporting & Follow-Up",
      text: "Exceptions and unresolved payment issues are documented and routed for follow-up.",
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
              <CreditCard size={16} />
              Payment Posting
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Every Payment.
              <span className="block text-[#168be8]">
                Posted. Reconciled.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#71839e]">
              Keep your financial records current with accurate ERA and EOB
              posting, payment application, adjustment review, and
              reconciliation support.
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

          {/* Payment Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-5 shadow-[0_25px_70px_rgba(9,41,87,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-[#edf3f8] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Payment Overview
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#092957]">
                    Posting Activity
                  </h3>
                </div>

                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <WalletCards size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Payments Posted
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    $84,620
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Current posting cycle
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f4faff] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Reconciled
                  </p>

                  <p className="mt-2 text-2xl font-extrabold">
                    $81,940
                  </p>

                  <p className="mt-1 text-xs text-[#168be8]">
                    Matched to deposits
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff7f8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Variances
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#ed174c]">
                    14
                  </p>

                  <p className="mt-1 text-xs text-[#ed174c]">
                    Review required
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f3fbf8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#71839e]">
                    Underpayments
                  </p>

                  <p className="mt-2 text-2xl font-extrabold text-[#168b72]">
                    8
                  </p>

                  <p className="mt-1 text-xs text-[#168b72]">
                    Flagged for follow-up
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#e3edf5] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold">
                    Recent Remittances
                  </span>

                  <span className="text-xs font-semibold text-[#168be8]">
                    View Activity
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    ["ERA-20482", "$12,480", "Posted"],
                    ["EOB-10479", "$8,920", "Reconciled"],
                    ["ERA-10473", "$6,740", "Review"],
                  ].map(([id, amount, status]) => (
                    <div
                      key={id}
                      className="flex items-center justify-between rounded-xl bg-[#f8fbfe] px-3 py-3"
                    >
                      <div>
                        <p className="text-sm font-bold">{id}</p>
                        <p className="text-xs text-[#71839e]">
                          Remittance received
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold">{amount}</p>

                        <span
                          className={`text-xs font-semibold ${
                            status === "Review"
                              ? "text-[#ed174c]"
                              : status === "Reconciled"
                                ? "text-[#168b72]"
                                : "text-[#168be8]"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#d9eafa] bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#e8f5ff] p-2 text-[#168be8]">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#71839e]">
                    Payment Control
                  </p>

                  <p className="font-bold">
                    Reconciled & Verified
                  </p>
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
              icon: FileCheck2,
              title: "ERA & EOB Posting",
              text: "Accurately apply electronic and paper remittance information.",
            },
            {
              icon: RefreshCcw,
              title: "Daily Reconciliation",
              text: "Compare posted transactions against payment and deposit records.",
            },
            {
              icon: TrendingDown,
              title: "Variance Detection",
              text: "Identify underpayments, denials, and unexpected adjustments.",
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
              Payment Posting
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Turn Remittances Into
              <span className="text-[#168be8]">
                {" "}
                Accurate Records.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-[#71839e]">
              Payment posting is the point where payer decisions become
              financial records. Payments, adjustments, patient responsibility,
              denials, and other remittance details need to be applied to the
              correct accounts.
            </p>

            <p className="mt-4 leading-8 text-[#71839e]">
              Med Heave organizes this process around accurate posting,
              exception review, reconciliation, and clear follow-up so your
              accounts receivable reflects what has actually been paid.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {postingServices.slice(0, 4).map((item) => {
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

      {/* Services */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#168be8]">
              What We Handle
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Complete Payment Posting Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              From remittance intake to reconciliation, every part of the
              payment posting workflow is handled with accuracy and visibility
              in mind.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {postingServices.map((item) => {
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
              Our Posting Workflow
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              From Remittance to Reconciliation
            </h2>

            <p className="mt-4 leading-7 text-blue-100/70">
              A structured posting process helps keep accounts accurate while
              making payment exceptions easier to identify and resolve.
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

      {/* Reconciliation */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d9eafa] bg-white p-8 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#e8f5ff] p-3 text-[#168be8]">
                  <RefreshCcw size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Payment reconciliation
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Make the Numbers Match
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Reconciliation compares posted payment activity with the
                corresponding remittance and deposit information. This helps
                identify missing, duplicate, or mismatched transactions.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Match payments to remittance details",
                  "Compare posted totals with deposits",
                  "Identify unmatched transactions",
                  "Document and resolve discrepancies",
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
                  <TrendingUp size={23} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#71839e]">
                    Revenue visibility
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    Catch What Needs Attention
                  </h3>
                </div>
              </div>

              <p className="leading-7 text-[#71839e]">
                Accurate posting can surface payment exceptions that require
                additional work, including underpayments, unexpected
                adjustments, and denied claim lines.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Flag payments below expected amounts",
                  "Identify denial-related adjustments",
                  "Review unusual payment variances",
                  "Route exceptions for follow-up",
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
              Why Payment Posting Matters
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Accurate Payments. Clearer A/R.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CheckCircle2,
                title: "Accurate Accounts",
                text: "Keep patient and payer balances aligned with actual payment activity.",
              },
              {
                icon: Timer,
                title: "Timely Posting",
                text: "Reduce posting delays so financial records stay current.",
              },
              {
                icon: TrendingUp,
                title: "Underpayment Visibility",
                text: "Surface payment variances that may require additional review.",
              },
              {
                icon: ShieldCheck,
                title: "Better Reconciliation",
                text: "Create a clearer connection between remittances, postings, and deposits.",
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
          <CreditCard className="mx-auto mb-5" size={34} />

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Keep Every Payment Accounted For.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Build a cleaner payment workflow with accurate posting,
            reconciliation, variance detection, and reporting support.
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