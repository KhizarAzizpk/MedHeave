import {
  ArrowRight,
  BadgeCheck,
  Code2,
  FileCheck2,
  ShieldCheck,
  Stethoscope,
  WalletCards,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

import computer_illustration from "../../assets/images/computer_illustration2.png"

const Services = () => {
  const services = [
    {
      title: "Revenue Cycle Management",
      description:
        "End-to-end revenue cycle solutions that help healthcare practices improve collections and maintain a healthy cash flow.",
      icon: WalletCards,
      link: "/services/revenue-cycle-management",
    },
    {
      title: "Medical Billing",
      description:
        "Accurate and efficient billing support designed to reduce errors, improve claim submission, and accelerate payments.",
      icon: FileCheck2,
      link: "#",
    },
    {
      title: "Medical Coding",
      description:
        "Precise coding services that align clinical documentation with ICD-10, CPT, and HCPCS requirements.",
      icon: Code2,
      link: "#",
    },
    {
      title: "Credentialing",
      description:
        "Provider credentialing and enrollment support to help practices stay connected with insurance networks.",
      icon: BadgeCheck,
      link: "#",
    },
    {
      title: "Prior Authorization",
      description:
        "Streamlined authorization support to help reduce treatment delays and administrative workload.",
      icon: ShieldCheck,
      link: "#",
    },
    {
      title: "Denial Management",
      description:
        "Focused denial analysis, correction, appeals, and follow-up to recover revenue that would otherwise be lost.",
      icon: Stethoscope,
      link: "#",
    },
  ];

  return (
    <div className="bg-[#f4faff]">
         <div className="sticky top-0 z-50 pt-4">
        <Navbar />
      </div>  

      {/* Hero */}
      <section className="relative w-full overflow-hidden py-20">

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />

          <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:px-12">

          {/* Left */}
          <div className="w-full lg:w-1/2">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9eafa] bg-white/70 px-4 py-2 backdrop-blur-sm">
              <div className="flex h-5 w-5 items-center justify-center">
                <Stethoscope
                  size={19}
                  strokeWidth={2}
                  className="text-[#ed174c]"
                />
              </div>

              <span className="text-sm font-semibold text-[#168be8]">
                Our Services
              </span>
            </div>

            <h1 className="max-w-[650px] text-4xl font-bold leading-tight text-[#092957] sm:text-5xl lg:text-6xl">
              Complete Solutions.
              <br />
              <span className="text-[#ed174c]">Stronger</span>{" "}
              <span className="text-[#168be8]">Healthcare.</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#71839e]">
              From revenue cycle management and medical billing to coding,
              credentialing, and denial management, MedHeave helps healthcare
              providers simplify their administrative operations and improve
              financial performance.
            </p>

            <button className="mt-8 flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]">
              Explore Our Services

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c]">
                <ArrowRight size={17} strokeWidth={2} />
              </span>
            </button>

          </div>

          {/* Right Image */}
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:mr-[-48px]">
            <img
              src={computer_illustration}
              alt="Healthcare management illustration"
              className="h-auto w-full max-w-[580px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden px-5 pb-24 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
              What We Provide
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Healthcare Revenue Solutions
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              Our services are designed to connect the different parts of
              healthcare administration into one streamlined workflow.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href={service.link}
                  className="group rounded-3xl border border-[#d9eafa] bg-white/70 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#b9dcf7] hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8] transition group-hover:bg-[#168be8] group-hover:text-white">
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#092957]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#71839e]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#168be8]">
                    Explore Service

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                </a>
              );
            })}

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;