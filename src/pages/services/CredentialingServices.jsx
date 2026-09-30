
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar  from "../../components/ui/Navbar";

const CredentialingServices = () => {
    
  const credentialingServices = [
    {
      icon: UserCheck,
      title: "Initial Credentialing",
      text: "Prepare and manage provider credentialing applications with the documentation required by healthcare payers.",
    },
    {
      icon: Building2,
      title: "Payer Enrollment",
      text: "Support enrollment with Medicare, Medicaid, and commercial insurance plans.",
    },
    {
      icon: FileText,
      title: "CAQH Management",
      text: "Maintain provider information and support CAQH profile updates and attestations.",
    },
    {
      icon: ShieldCheck,
      title: "Primary Source Verification",
      text: "Review provider credentials and verify required professional information before submission.",
    },
    {
      icon: ClipboardCheck,
      title: "Application Management",
      text: "Coordinate payer applications, documentation, corrections, and submission requirements.",
    },
    {
      icon: BarChart3,
      title: "Status Follow-Up",
      text: "Track pending applications and follow up with payers to keep credentialing moving.",
    },
    {
      icon: RefreshCw,
      title: "Re-Credentialing",
      text: "Support recurring credentialing and revalidation requirements to help maintain payer participation.",
    },
    {
      icon: BadgeCheck,
      title: "License Tracking",
      text: "Monitor important provider credentials, licenses, certifications, and expiration dates.",
    },
  ];

  const benefits = [
    "Organized provider documentation",
    "Centralized credentialing tracking",
    "Consistent payer follow-up",
    "Reduced administrative workload",
    "Better visibility into application status",
    "Ongoing credential maintenance",
  ];

  const workflow = [
    "Provider Intake",
    "Document Review",
    "Application Preparation",
    "Payer Submission",
    "Status Follow-Up",
    "Approval & Maintenance",
  ];

  return (
   
      
    <div className="min-h-screen bg-[#f4faff]">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-160px] top-[-120px] h-[440px] w-[440px] rounded-full bg-[#cfeeff] blur-[100px]" />
          <div className="absolute right-[-120px] top-[80px] h-[380px] w-[380px] rounded-full bg-[#ffdce7] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bfe0f8] bg-white px-4 py-2 shadow-sm">
              <ShieldCheck size={18} className="text-[#ed174c]" />
              <span className="text-sm font-bold text-[#168be8]">
                Credentialing Services
              </span>
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-[900px] text-center">
            <h1 className="text-4xl font-bold leading-[1.08] text-[#092957] sm:text-5xl lg:text-6xl">
              Get Credentialed.
              <br />
              <span className="text-[#ed174c]">Stay</span>{" "}
              <span className="text-[#168be8]">Billing-Ready.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[740px] text-base leading-8 text-[#627b96] sm:text-lg">
              Med-Heave helps healthcare providers manage credentialing,
              payer enrollment, documentation, application follow-up, and
              ongoing credential maintenance.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#credentialing-services"
                className="group flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white shadow-lg shadow-[#ed174c]/20 transition hover:-translate-y-0.5 hover:bg-[#d91445]"
              >
                Explore Credentialing
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c] transition group-hover:translate-x-1">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* QUICK CARDS */}
          <div className="mx-auto mt-14 grid max-w-[1000px] gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-[#bfe0f8] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-lg shadow-[#168be8]/20">
                <Users size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Provider Credentialing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Organized provider information and credentialing support.
              </p>
            </div>

            <div className="rounded-3xl border border-[#ffc5d4] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed174c] text-white shadow-lg shadow-[#ed174c]/20">
                <Building2 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Payer Enrollment
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Support for commercial and government payer enrollment.
              </p>
            </div>

            <div className="rounded-3xl border border-[#bfe0f8] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-lg shadow-[#168be8]/20">
                <RefreshCw size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Ongoing Maintenance
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Re-credentialing, updates, and expiration tracking.
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
                Provider Credentialing
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Keep Your Providers
                <span className="text-[#ed174c]"> Payer-Ready</span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#627b96]">
                Credentialing verifies a provider's qualifications and
                supports participation with health insurance networks.
                Managing this process requires accurate documentation,
                payer-specific applications, and consistent follow-up.
              </p>

              <p className="mt-4 leading-8 text-[#627b96]">
                Med-Heave organizes these operational steps so providers and
                practices can maintain better visibility throughout the
                credentialing lifecycle.
              </p>
            </div>
          </div>

          {/* PROCESS STRIP */}
          <div className="mt-12 overflow-hidden rounded-[30px] border border-[#bfe0f8] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-3 md:grid-cols-6">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="relative rounded-2xl bg-[#edf8ff] p-5 transition hover:bg-[#dff2ff]"
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
        id="credentialing-services"
        className="px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
              What We Handle
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Complete Credentialing Support
            </h2>

            <p className="mt-4 leading-7 text-[#627b96]">
              From initial provider credentialing to payer applications and
              ongoing maintenance, Med-Heave supports the operational
              workflow behind provider enrollment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentialingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`group rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index % 3 === 1
                      ? "border-[#ffc7d5]"
                      : "border-[#bfe0f8]"
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

      {/* WORKFLOW */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[32px] bg-[#092957] p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#5eb5ff]">
                  Our Workflow
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  A Structured Approach to
                  <span className="text-[#ed174c]"> Credentialing</span>
                </h2>

                <p className="mt-5 leading-8 text-[#b9c9dd]">
                  Credentialing involves multiple documents, payer
                  requirements, and follow-up stages. A structured workflow
                  helps keep every application organized and visible.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Collect provider information",
                  "Review credentials and documents",
                  "Prepare payer applications",
                  "Submit enrollment materials",
                  "Track application status",
                  "Follow up on pending requests",
                  "Monitor approvals",
                  "Maintain credential records",
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

      {/* CAQH + PAYER */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#bfe0f8] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168be8] text-white shadow-md">
                <FileCheck2 size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                CAQH & Provider Records
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Provider information must remain accurate and current across
                credentialing systems. Med-Heave supports organized
                documentation and ongoing profile maintenance.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Provider profile updates",
                  "Documentation tracking",
                  "Attestation support",
                  "Credential expiration monitoring",
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

            <div className="rounded-3xl border border-[#ffc7d5] bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed174c] text-white shadow-md">
                <Building2 size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                Payer Application Follow-Up
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Payer applications can require ongoing communication and
                additional documentation. Our workflow keeps pending
                applications organized through the follow-up process.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Application status tracking",
                  "Payer correspondence",
                  "Additional information requests",
                  "Approval monitoring",
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

      {/* BENEFITS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#168be8]">
                Why Credentialing Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Organized Credentials.
                <br />
                <span className="text-[#ed174c]">
                  Better Operational Visibility.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#627b96]">
                A structured credentialing process helps practices keep
                provider information organized, monitor applications, and
                maintain important enrollment requirements.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[#bfe0f8] bg-white p-4 shadow-sm"
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
                Provider Support
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Simplify Your Credentialing Process
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                Let Med-Heave help organize provider credentialing, payer
                enrollment, application follow-up, and ongoing maintenance.
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

export default CredentialingServices;
