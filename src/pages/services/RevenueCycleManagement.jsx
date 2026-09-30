import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HandCoins,
  Receipt,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  WalletCards,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const RevenueCycleManagement = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Patient Registration",
      text: "Accurate patient and insurance information captured from the start.",
    },
    {
      icon: SearchCheck,
      title: "Eligibility Verification",
      text: "Verify coverage and benefits before services are provided.",
    },
    {
      icon: ShieldCheck,
      title: "Prior Authorization",
      text: "Manage authorization requirements to reduce preventable delays.",
    },
    {
      icon: FileText,
      title: "Medical Coding",
      text: "Accurate ICD-10, CPT, and HCPCS coding based on documentation.",
    },
    {
      icon: FileCheck2,
      title: "Claims Management",
      text: "Prepare, review, and submit clean claims to insurance payers.",
    },
    {
      icon: Receipt,
      title: "Payment Posting",
      text: "Post insurance and patient payments accurately and efficiently.",
    },
    {
      icon: HandCoins,
      title: "A/R Follow-Up",
      text: "Track outstanding balances and follow up on unpaid claims.",
    },
    {
      icon: BarChart3,
      title: "Denial Management",
      text: "Identify denial causes, correct claims, and manage appeals.",
    },
  ];

  const benefits = [
    "Streamlined billing operations",
    "Improved claim accuracy",
    "Better accounts receivable management",
    "Reduced administrative workload",
    "Consistent claim follow-up",
    "Clear revenue cycle visibility",
  ];

  return (
    <div className="min-h-screen bg-[#f4faff]">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        {/* Soft background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#dff2ff] blur-[110px]" />

          <div className="absolute right-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-[#e8f5ff] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">

          {/* Label */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9eafa] bg-white/70 px-4 py-2 backdrop-blur-sm">
              <Stethoscope
                size={18}
                className="text-[#ed174c]"
              />

              <span className="text-sm font-semibold text-[#168be8]">
                Revenue Cycle Management
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mx-auto mt-7 max-w-[900px] text-center">
            <h1 className="text-4xl font-bold leading-[1.1] text-[#092957] sm:text-5xl lg:text-6xl">
              Simplify Your Revenue Cycle.
              <br />
              <span className="text-[#ed174c]">Strengthen</span>{" "}
              <span className="text-[#168be8]">Your Practice.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-[#71839e] sm:text-lg">
              Med-Heave provides comprehensive revenue cycle management
              solutions that help healthcare providers manage billing,
              claims, payments, denials, and accounts receivable more
              efficiently.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#rcm-services"
                className="flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]"
              >
                Explore Our RCM Services

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c]">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* RCM visual cards */}
          <div className="mx-auto mt-14 grid max-w-[950px] gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <WalletCards size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Revenue Management
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Manage every stage of the revenue cycle.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#ed174c]">
                <FileCheck2 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Claims & Billing
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Keep claims accurate and moving through the system.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <BarChart3 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                A/R Management
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Monitor outstanding revenue and follow up consistently.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS RCM */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                Revenue Cycle Management
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Managing the Financial Side of
                <span className="text-[#ed174c]">
                  {" "}Healthcare
                </span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#71839e]">
                Revenue Cycle Management covers the complete financial
                journey of a patient's healthcare experience. From
                registration and insurance verification to claim submission,
                payment posting, and accounts receivable follow-up, each
                stage plays an important role in maintaining a healthy
                revenue cycle.
              </p>

              <p className="mt-4 leading-8 text-[#71839e]">
                Med-Heave brings these processes together into a structured
                billing workflow designed for healthcare providers.
              </p>
            </div>

          </div>

          {/* Process */}
          <div className="mt-12 rounded-3xl border border-[#d9eafa] bg-white/70 p-6 backdrop-blur-sm sm:p-8">

            <div className="grid gap-4 md:grid-cols-4">

              {[
                "Patient Registration",
                "Insurance Verification",
                "Coding & Claims",
                "Payment & A/R",
              ].map((item, index) => (
                <div
                  key={item}
                  className="relative rounded-2xl bg-[#f4faff] p-5"
                >
                  <span className="text-xs font-bold text-[#ed174c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 font-bold text-[#092957]">
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
        id="rcm-services"
        className="px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
              What We Handle
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Complete RCM Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              Our revenue cycle services cover the key billing and
              administrative processes healthcare providers depend on.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-[#d9eafa] bg-white/70 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9dcf7] hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8] transition group-hover:bg-[#168be8] group-hover:text-white">
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

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#5eb5ff]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                One Connected
                <span className="text-[#ed174c]">
                  {" "}Revenue Cycle
                </span>
              </h2>

              <p className="mt-4 leading-7 text-[#b9c9dd]">
                Every stage of the billing process is connected. This helps
                keep patient information, claims, payments, and outstanding
                balances organized throughout the revenue cycle.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Registration",
                "Eligibility",
                "Authorization",
                "Coding",
                "Claims",
                "Payments",
                "Denials",
                "A/R Follow-Up",
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
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                Why RCM Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                More Organized Billing.
                <br />
                <span className="text-[#ed174c]">
                  Better Revenue Management.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#71839e]">
                An organized revenue cycle can help providers spend less
                time dealing with administrative billing processes and more
                time focusing on their patients.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[#d9eafa] bg-white/70 p-4"
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

          <div className="relative overflow-hidden rounded-[32px] bg-[#168be8] px-6 py-12 text-center sm:px-10">

            <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Partner With Med-Heave
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Take Control of Your Revenue Cycle
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                Let Med-Heave support your billing operations with a
                structured approach to revenue cycle management.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 font-semibold text-[#092957] transition hover:scale-105"
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

export default RevenueCycleManagement;