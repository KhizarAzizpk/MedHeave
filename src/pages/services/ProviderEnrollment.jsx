
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Landmark,
  RefreshCw,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const ProviderEnrollment = () => {
  const enrollmentServices = [
    {
      icon: UserCheck,
      title: "Provider Enrollment",
      text: "Prepare and manage enrollment applications for individual healthcare providers with selected insurance payers.",
    },
    {
      icon: Landmark,
      title: "Medicare Enrollment",
      text: "Support Medicare enrollment and related application requirements through the appropriate CMS enrollment process.",
    },
    {
      icon: Building2,
      title: "Medicaid Enrollment",
      text: "Coordinate state Medicaid enrollment requirements and maintain organized application records.",
    },
    {
      icon: ShieldCheck,
      title: "Commercial Payer Enrollment",
      text: "Prepare and track enrollment requests with commercial insurance plans and payer networks.",
    },
    {
      icon: FileText,
      title: "CAQH Coordination",
      text: "Support CAQH profile setup, information updates, documentation, and attestation requirements.",
    },
    {
      icon: Send,
      title: "Application Submission",
      text: "Prepare complete enrollment applications and coordinate submission according to payer requirements.",
    },
    {
      icon: BarChart3,
      title: "Enrollment Tracking",
      text: "Track submitted applications, payer responses, pending requirements, and enrollment progress.",
    },
    {
      icon: RefreshCw,
      title: "Revalidation & Maintenance",
      text: "Monitor ongoing enrollment requirements, revalidation activities, and important payer updates.",
    },
  ];

  const workflow = [
    "Provider Intake",
    "Payer Selection",
    "Document Preparation",
    "Application Submission",
    "Payer Follow-Up",
    "Effective Date",
  ];

  const benefits = [
    "Centralized enrollment tracking",
    "Organized payer applications",
    "Medicare & Medicaid support",
    "Commercial payer coordination",
    "Clear application status visibility",
    "Ongoing enrollment maintenance",
  ];

  return (
    <div className="min-h-screen bg-[#f4faff]">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-170px] top-[-130px] h-[450px] w-[450px] rounded-full bg-[#c8ecff] blur-[100px]" />
          <div className="absolute right-[-150px] top-[40px] h-[420px] w-[420px] rounded-full bg-[#ffd6e2] blur-[105px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">

          {/* BADGE */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b8def8] bg-white px-4 py-2 shadow-sm">
              <Landmark size={18} className="text-[#ed174c]" />

              <span className="text-sm font-bold text-[#168be8]">
                Provider Enrollment
              </span>
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="mx-auto mt-7 max-w-[900px] text-center">
            <h1 className="text-4xl font-bold leading-[1.08] text-[#092957] sm:text-5xl lg:text-6xl">
              Get Enrolled.
              <br />
              <span className="text-[#ed174c]">Get</span>{" "}
              <span className="text-[#168be8]">Billing-Ready.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[750px] text-base leading-8 text-[#627b96] sm:text-lg">
              Med-Heave manages provider enrollment with Medicare, Medicaid,
              and commercial payers—from application preparation and
              submission to payer follow-up and ongoing maintenance.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#enrollment-services"
                className="group flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white shadow-lg shadow-[#ed174c]/20 transition hover:-translate-y-0.5 hover:bg-[#d91445]"
              >
                Explore Enrollment Services

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c] transition group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* QUICK CARDS */}
          <div className="mx-auto mt-14 grid max-w-[1000px] gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-[#b8def8] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-lg shadow-[#168be8]/20">
                <Landmark size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Government Payers
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Support for Medicare and Medicaid enrollment processes.
              </p>
            </div>

            <div className="rounded-3xl border border-[#ffc5d4] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed174c] text-white shadow-lg shadow-[#ed174c]/20">
                <Building2 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Commercial Payers
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Organized enrollment support for commercial insurance plans.
              </p>
            </div>

            <div className="rounded-3xl border border-[#b8def8] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-lg shadow-[#168be8]/20">
                <BarChart3 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Application Tracking
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Follow applications from submission through payer decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
                Provider Enrollment
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Connect Providers With
                <span className="text-[#ed174c]"> The Right Payers</span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#627b96]">
                Provider enrollment is the process of registering a healthcare
                provider with a specific health plan so the payer can
                recognize the provider for billing and reimbursement.
              </p>

              <p className="mt-4 leading-8 text-[#627b96]">
                Med-Heave helps manage the administrative workflow behind
                enrollment, including payer selection, documentation,
                application submission, follow-up, and effective-date
                tracking.
              </p>
            </div>

          </div>

          {/* PROCESS STRIP */}
          <div className="mt-12 overflow-hidden rounded-[30px] border border-[#b8def8] bg-white p-6 shadow-sm sm:p-8">

            <div className="grid gap-3 md:grid-cols-6">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#edf8ff] p-5 transition hover:bg-[#dff2ff]"
                >
                  <span className="text-xs font-extrabold text-[#ed174c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-sm font-bold leading-5 text-[#092957]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="enrollment-services"
        className="px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
              What We Handle
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Complete Provider Enrollment Support
            </h2>

            <p className="mt-4 leading-7 text-[#627b96]">
              Med-Heave supports the enrollment lifecycle across government
              and commercial payers, helping practices keep applications
              organized and visible from submission through activation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {enrollmentServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`group rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index % 3 === 1
                      ? "border-[#ffc7d5]"
                      : "border-[#b8def8]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition group-hover:scale-105 ${
                      index % 3 === 1
                        ? "bg-[#ed174c] shadow-[#ed174c]/20"
                        : "bg-[#168be8] shadow-[#168be8]/20"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#092957]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#71839e]">
                    {service.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ENROLLMENT WORKFLOW */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="overflow-hidden rounded-[32px] bg-[#092957] p-7 sm:p-10 lg:p-14">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#5eb5ff]">
                  Enrollment Workflow
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  From Application
                  <br />
                  <span className="text-[#ed174c]">
                    To Effective Date
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-[#b9c9dd]">
                  Provider enrollment involves more than submitting an
                  application. Every payer can have different requirements,
                  follow-up steps, and processing stages.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  "Collect provider information",
                  "Identify target payers",
                  "Review enrollment requirements",
                  "Prepare payer applications",
                  "Submit enrollment requests",
                  "Track payer responses",
                  "Resolve additional requests",
                  "Confirm effective date",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ed174c] text-xs font-bold text-white">
                      {index + 1}
                    </div>

                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MEDICARE + COMMERCIAL */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-6 md:grid-cols-2">

            {/* MEDICARE */}
            <div className="rounded-3xl border border-[#b8def8] bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-md">
                <Landmark size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                Medicare & Medicaid Enrollment
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Government payer enrollment requires accurate provider
                information and payer-specific application processes.
                Med-Heave helps organize the required information and track
                enrollment progress.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Medicare enrollment support",
                  "Medicaid enrollment coordination",
                  "Provider information review",
                  "Application status tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#168be8]"
                    />

                    <span className="text-sm font-semibold text-[#092957]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* COMMERCIAL */}
            <div className="rounded-3xl border border-[#ffc7d5] bg-white p-7 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed174c] text-white shadow-md">
                <Building2 size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                Commercial Payer Enrollment
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Commercial payer enrollment connects providers with the
                insurance networks they need to participate in. Our workflow
                keeps payer applications and follow-up organized.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Commercial payer applications",
                  "Payer documentation coordination",
                  "Application follow-up",
                  "Enrollment status monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#ed174c]"
                    />

                    <span className="text-sm font-semibold text-[#092957]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* APPLICATION TRACKING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="rounded-[32px] border border-[#b8def8] bg-white p-7 shadow-sm sm:p-10">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
                  Enrollment Visibility
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
                  Know Where Every
                  <span className="text-[#ed174c]"> Application Stands</span>
                </h2>

                <p className="mt-4 leading-7 text-[#627b96]">
                  Enrollment can involve multiple payers and multiple
                  applications at the same time. Organized tracking helps
                  practices understand what has been submitted, what is
                  pending, and what needs attention.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  {
                    icon: ClipboardCheck,
                    title: "Submitted",
                  },
                  {
                    icon: FileCheck2,
                    title: "Under Review",
                  },
                  {
                    icon: BarChart3,
                    title: "Follow-Up",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Approved",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl bg-[#edf8ff] p-4 transition hover:bg-[#dff2ff]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168be8] text-white">
                        <Icon size={19} />
                      </div>

                      <span className="text-sm font-bold text-[#092957]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
                Why Enrollment Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Organized Enrollment.
                <br />
                <span className="text-[#ed174c]">
                  Better Billing Readiness.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#627b96]">
                Keeping payer enrollment organized helps practices maintain
                visibility into provider participation and the administrative
                steps required before billing a payer.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[#b8def8] bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#168be8]"
                  />

                  <span className="text-sm font-semibold text-[#092957]">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#092957] via-[#0b5fa8] to-[#168be8] px-6 py-12 text-center shadow-xl sm:px-10">

            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#ed174c]/30 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                Payer Enrollment Support
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Make Provider Enrollment Easier
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                Let Med-Heave organize your payer enrollment workflow from
                application preparation through follow-up and ongoing
                maintenance.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 font-semibold text-[#092957] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ed174c] text-white">
                  <ArrowRight size={17} />
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default ProviderEnrollment;

