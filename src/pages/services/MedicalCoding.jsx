
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  Tags,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

const MedicalCoding = () => {
  const codingServices = [
    {
      icon: ClipboardCheck,
      title: "Clinical Documentation Review",
      text: "Review clinical documentation to support accurate and complete coding based on the services provided.",
    },
    {
      icon: Tags,
      title: "CPT Coding",
      text: "Accurate reporting of procedures and healthcare services using the appropriate CPT code.",
    },
    {
      icon: FileText,
      title: "ICD-10-CM Coding",
      text: "Assign diagnosis codes that accurately represent the conditions documented in the patient's record.",
    },
    {
      icon: FileCheck2,
      title: "HCPCS Coding",
      text: "Apply appropriate HCPCS codes for applicable products, supplies, and healthcare services.",
    },
    {
      icon: SearchCheck,
      title: "Coding Review & Validation",
      text: "Review assigned codes for accuracy, consistency, and alignment with supporting documentation.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Support",
      text: "Support coding practices that follow applicable coding guidelines and payer requirements.",
    },
    {
      icon: BarChart3,
      title: "Audit Support",
      text: "Identify coding patterns and documentation issues that may require additional review.",
    },
    {
      icon: Stethoscope,
      title: "Specialty Coding",
      text: "Coding support tailored to the documentation and services associated with different medical specialties.",
    },
  ];

  const benefits = [
    "Improved coding accuracy",
    "Cleaner claim submission",
    "Better documentation alignment",
    "Reduced coding-related errors",
    "Consistent coding workflows",
    "Stronger compliance support",
  ];

  return (
    <div className="min-h-screen bg-[#f4faff]">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#dff2ff] blur-[110px]" />
          <div className="absolute right-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-[#e8f5ff] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9eafa] bg-white/70 px-4 py-2 backdrop-blur-sm">
              <FileCheck2 size={18} className="text-[#ed174c]" />

              <span className="text-sm font-semibold text-[#168be8]">
                Medical Coding Services
              </span>
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-[900px] text-center">
            <h1 className="text-4xl font-bold leading-[1.1] text-[#092957] sm:text-5xl lg:text-6xl">
              Accurate Coding.
              <br />
              <span className="text-[#ed174c]">Stronger</span>{" "}
              <span className="text-[#168be8]">Claims.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-[#71839e] sm:text-lg">
              Med-Heave provides medical coding support designed to connect
              clinical documentation with accurate coding and billing
              workflows, helping healthcare providers maintain cleaner and
              more consistent claims.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#coding-services"
                className="flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]"
              >
                Explore Coding Services

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c]">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* QUICK OVERVIEW */}
          <div className="mx-auto mt-14 grid max-w-[950px] gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <Tags size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                CPT Coding
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Coding procedures and healthcare services accurately.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#ed174c]">
                <FileText size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                ICD-10-CM
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Reporting diagnoses based on documented conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <FileCheck2 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                HCPCS
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Coding applicable supplies, products, and services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS MEDICAL CODING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                Medical Coding
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Turning Clinical Documentation Into
                <span className="text-[#ed174c]">
                  {" "}Accurate Codes
                </span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-[#71839e]">
                Medical coding translates documented diagnoses, procedures,
                and healthcare services into standardized code sets used
                throughout the healthcare billing process.
              </p>

              <p className="mt-4 leading-8 text-[#71839e]">
                CPT codes describe procedures and services, while ICD-10-CM
                codes identify diagnoses. HCPCS Level II codes are used for
                additional products, supplies, and services not represented
                by CPT.
              </p>
            </div>

          </div>

          {/* CODING FLOW */}
          <div className="mt-12 rounded-3xl border border-[#d9eafa] bg-white/70 p-6 backdrop-blur-sm sm:p-8">

            <div className="grid gap-4 md:grid-cols-4">

              {[
                "Documentation",
                "Diagnosis",
                "Procedure",
                "Claim Ready",
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
        id="coding-services"
        className="px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
              What We Handle
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Complete Medical Coding Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              Our coding services support the key documentation, coding,
              review, and quality processes involved in preparing healthcare
              claims.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {codingServices.map((service) => {
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

      {/* CODING FRAMEWORK */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="overflow-hidden rounded-[32px] bg-[#092957] p-7 sm:p-10 lg:p-14">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#5eb5ff]">
                Coding Framework
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Connecting
                <span className="text-[#ed174c]">
                  {" "}Documentation & Coding
                </span>
              </h2>

              <p className="mt-4 leading-7 text-[#b9c9dd]">
                Accurate coding depends on clear documentation and the
                appropriate application of the relevant code set and coding
                guidelines.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">

              {[
                {
                  title: "ICD-10-CM",
                  text: "What condition or diagnosis is documented?",
                },
                {
                  title: "CPT",
                  text: "What procedure or service was performed?",
                },
                {
                  title: "HCPCS",
                  text: "What applicable product, supply, or service is reported?",
                },
              ].map((item, index) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ed174c] text-xs font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-4 font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#b9c9dd]">
                    {item.text}
                  </p>
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
                Why Accurate Coding Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Better Coding.
                <br />
                <span className="text-[#ed174c]">
                  Cleaner Billing Workflows.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#71839e]">
                Accurate coding helps create consistency between clinical
                documentation, coded services, and the claims process.
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
                Strengthen Your Coding Workflow
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                Let Med-Heave support your coding operations with structured
                processes focused on accuracy, consistency, and claim
                readiness.
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

export default MedicalCoding;

