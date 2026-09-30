import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  HeartPulse,
  SearchCheck,
  ShieldCheck,
  UserCheck,
  XCircle,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const verificationItems = [
  {
    title: "Insurance Eligibility",
    description:
      "Confirm that the patient's coverage is active for the scheduled date of service.",
    icon: ShieldCheck,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Benefits Verification",
    description:
      "Review copays, deductibles, coinsurance, coverage limits, and service benefits.",
    icon: BadgeCheck,
    color: "#ed174c",
    bg: "#fff0f4",
  },
  {
    title: "Patient Responsibility",
    description:
      "Identify expected patient responsibility so practices can prepare accurate collection information.",
    icon: UserCheck,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Authorization Requirements",
    description:
      "Flag services that require prior authorization before the patient's visit.",
    icon: FileCheck2,
    color: "#ed174c",
    bg: "#fff0f4",
  },
  {
    title: "Coordination of Benefits",
    description:
      "Review primary and secondary coverage information to help route claims correctly.",
    icon: HeartPulse,
    color: "#168be8",
    bg: "#e8f5ff",
  },
  {
    title: "Coverage Exceptions",
    description:
      "Identify inactive plans, missing information, network issues, and other coverage problems.",
    icon: CircleAlert,
    color: "#ed174c",
    bg: "#fff0f4",
  },
];

const workflow = [
  {
    number: "01",
    title: "Patient & Insurance Data",
    text: "Collect the patient's demographic and insurance information before the verification begins.",
  },
  {
    number: "02",
    title: "Eligibility Check",
    text: "Verify active coverage and plan information through available payer channels.",
  },
  {
    number: "03",
    title: "Benefits Review",
    text: "Review financial and service-specific benefits relevant to the scheduled visit.",
  },
  {
    number: "04",
    title: "Issue Identification",
    text: "Flag inactive coverage, payer mismatches, authorization requirements, or missing information.",
  },
  {
    number: "05",
    title: "Results Delivered",
    text: "Provide a clear verification summary for the front desk, clinical team, and billing staff.",
  },
];

const benefits = [
  "Fewer eligibility-related claim problems",
  "Better visibility into patient responsibility",
  "Less manual verification work for front-desk staff",
  "Earlier identification of coverage issues",
  "More accurate information before the visit",
  "Better coordination between scheduling and billing",
];

export default function EligibilityVerification() {
  return (
    <main className="min-h-screen bg-[#f4faff] text-[#092957] ">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  
      {/* HERO */}
      <section className="relative pt-24 pb-20 px-6 md:px-10 lg:px-16">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#dff2ff] rounded-full blur-3xl opacity-80" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#ffe4ec] rounded-full blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#bfe0f8] text-[#168be8] text-sm font-semibold mb-6 shadow-sm">
              <SearchCheck size={17} />
              Insurance Eligibility & Benefits
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Verify Coverage.
              <br />
              <span className="text-[#168be8]">Prevent Billing Problems.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#71839e] max-w-xl leading-relaxed">
              Confirm insurance eligibility, benefits, patient responsibility,
              and authorization requirements before the patient receives care.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-3.5 rounded-xl bg-[#ed174c] text-white font-semibold hover:bg-[#d91445] transition shadow-lg shadow-[#ed174c]/20">
                Get Started
              </button>

              <button className="px-7 py-3.5 rounded-xl bg-white border border-[#bfe0f8] text-[#092957] font-semibold hover:bg-[#e8f5ff] transition">
                Explore Our Process
              </button>
            </div>
          </div>

          {/* VERIFICATION DASHBOARD VISUAL */}
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-br from-[#dff2ff] to-[#ffe4ec] blur-2xl opacity-70 rounded-[2rem]" />

            <div className="relative bg-white rounded-[2rem] border border-[#c9e5f7] shadow-2xl shadow-[#168be8]/10 p-5 md:p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-[#71839e] uppercase tracking-wider font-semibold">
                    Eligibility Check
                  </p>
                  <h3 className="text-xl font-bold mt-1">
                    Patient Coverage
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[#e8f5ff] flex items-center justify-center">
                  <ShieldCheck className="text-[#168be8]" size={24} />
                </div>
              </div>

              <div className="rounded-2xl bg-[#f4faff] p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">Insurance Plan</p>
                    <p className="text-xs text-[#71839e] mt-1">
                      Commercial Health Plan
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                    <CheckCircle2 size={17} />
                    Active
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-[#d9eafa]">
                  <p className="text-xs text-[#71839e]">Copay</p>
                  <p className="text-xl font-bold mt-1">$25</p>
                </div>

                <div className="p-4 rounded-xl border border-[#d9eafa]">
                  <p className="text-xs text-[#71839e]">Coinsurance</p>
                  <p className="text-xl font-bold mt-1">20%</p>
                </div>

                <div className="p-4 rounded-xl border border-[#d9eafa]">
                  <p className="text-xs text-[#71839e]">Deductible</p>
                  <p className="text-xl font-bold mt-1">$500</p>
                </div>

                <div className="p-4 rounded-xl border border-[#d9eafa]">
                  <p className="text-xs text-[#71839e]">Auth</p>
                  <div className="flex items-center gap-1.5 mt-1 text-green-600 font-semibold">
                    <CheckCircle2 size={17} />
                    Verified
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between p-4 rounded-xl bg-[#fff0f4] border border-[#ffc7d5]">
                <div className="flex items-center gap-3">
                  <CalendarCheck className="text-[#ed174c]" size={22} />
                  <div>
                    <p className="font-semibold text-sm">
                      Verification Complete
                    </p>
                    <p className="text-xs text-[#71839e] mt-0.5">
                      Ready for scheduled visit
                    </p>
                  </div>
                </div>

                <CheckCircle2 className="text-green-600" size={21} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {[
            {
              icon: SearchCheck,
              title: "Coverage Verification",
              text: "Confirm active insurance before the visit.",
            },
            {
              icon: BadgeCheck,
              title: "Benefits Review",
              text: "Understand coverage and patient responsibility.",
            },
            {
              icon: CalendarCheck,
              title: "Pre-Visit Checks",
              text: "Identify problems before they reach billing.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#c9e5f7] shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    index === 1 ? "bg-[#fff0f4]" : "bg-[#e8f5ff]"
                  }`}
                >
                  <Icon
                    size={23}
                    className={index === 1 ? "text-[#ed174c]" : "text-[#168be8]"}
                  />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

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
              Why Eligibility Matters
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Know the Coverage Before the Visit
            </h2>

            <p className="text-[#71839e] text-lg leading-relaxed mt-6">
              Insurance eligibility verification is an important front-end
              revenue cycle step. Instead of discovering coverage problems
              after a claim is submitted, practices can identify them before
              the patient arrives.
            </p>

            <p className="text-[#71839e] text-lg leading-relaxed mt-4">
              Med-Heave helps organize coverage information into a clear,
              actionable summary for your team.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Active or inactive coverage",
                "Plan and network information",
                "Copays and deductibles",
                "Coinsurance and coverage limits",
                "Authorization requirements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="text-[#168be8] flex-shrink-0"
                  />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#092957] p-7 md:p-9 text-white shadow-2xl shadow-[#092957]/20">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-[#168be8] flex items-center justify-center">
                <SearchCheck size={23} />
              </div>

              <div>
                <p className="font-bold text-lg">Pre-Visit Verification</p>
                <p className="text-blue-200 text-sm">
                  Coverage review workflow
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Coverage", "Active", true],
                ["Benefits", "Reviewed", true],
                ["Patient Responsibility", "Calculated", true],
                ["Authorization", "Checked", true],
                ["Exceptions", "None Found", true],
              ].map(([label, value], ) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-blue-100">{label}</span>

                  <span className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={17} className="text-[#43d17c]" />
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-blue-200">
                Result
              </p>
              <p className="font-semibold mt-1">
                Patient is ready for the scheduled visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE VERIFY */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-[#168be8] font-bold uppercase tracking-widest text-sm">
              Complete Verification Support
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              More Than an Active / Inactive Check
            </h2>

            <p className="text-[#71839e] text-lg mt-4 leading-relaxed">
              A useful eligibility review goes beyond confirming that an
              insurance plan exists. It should give your team the information
              needed to prepare for the visit and billing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verificationItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-6 border border-[#bfe0f8] hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={23} style={{ color: item.color }} />
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>

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
              Our Verification Workflow
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              From Patient Data to Verified Coverage
            </h2>

            <p className="text-blue-100 mt-4 text-lg leading-relaxed">
              A structured verification process helps your team identify
              coverage issues before they become downstream billing problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflow.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="text-[#55b9ff] font-bold text-sm">
                  STEP {step.number}
                </div>

                <h3 className="text-lg font-bold mt-4">{step.title}</h3>

                <p className="text-blue-100 text-sm leading-relaxed mt-3">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="px-6 md:px-10 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-[#ffc7d5] bg-[#fff5f8] p-7 md:p-9">
            <div className="w-12 h-12 rounded-xl bg-[#ed174c]/10 flex items-center justify-center mb-6">
              <XCircle className="text-[#ed174c]" size={25} />
            </div>

            <h3 className="text-2xl font-bold">
              When Coverage Isn't Checked
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Inactive insurance discovered after the visit",
                "Incorrect payer information",
                "Unexpected patient responsibility",
                "Authorization requirements missed",
                "Additional billing and follow-up work",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={18}
                    className="text-[#ed174c] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#71839e]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#bfe0f8] bg-[#f4faff] p-7 md:p-9">
            <div className="w-12 h-12 rounded-xl bg-[#168be8]/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="text-[#168be8]" size={25} />
            </div>

            <h3 className="text-2xl font-bold">
              With Proactive Verification
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Coverage is reviewed before service",
                "Benefits are clearly documented",
                "Potential issues are flagged early",
                "Patient responsibility is easier to understand",
                "Billing starts with better information",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#168be8] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#71839e]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#ed174c] font-bold uppercase tracking-widest text-sm">
              Why Med-Heave
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Build a Stronger Front-End RCM Process
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
                    index % 2 === 0 ? "bg-[#e8f5ff]" : "bg-[#fff0f4]"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className={
                      index % 2 === 0 ? "text-[#168be8]" : "text-[#ed174c]"
                    }
                  />
                </div>

                <span className="font-medium">{benefit}</span>
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
              Start Before the Visit
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Make Insurance Verification Part of a Smarter Billing Workflow.
            </h2>

            <p className="text-blue-100 text-lg mt-4 leading-relaxed">
              Give your team clearer coverage information before services are
              rendered and help prevent avoidable billing complications.
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