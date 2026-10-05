import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";


import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
const Locations = () => {
  const regions = [
    {
      title: "West Coast",
      locations: "California • Arizona • Nevada • Washington",
    },
    {
      title: "South",
      locations: "Texas • Florida • Georgia • North Carolina",
    },
    {
      title: "Northeast",
      locations: "New York • Pennsylvania • New Jersey",
    },
    {
      title: "Midwest",
      locations: "Illinois • Ohio • Michigan • Indiana",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-950">
      {/* Fixed floating navbar */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <Globe2 className="h-4 w-4" />
                  Nationwide Medical Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Medical billing support,
                  <span className="block text-blue-600">
                    wherever you practice.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Med-Heave provides medical billing and revenue cycle support
                  for healthcare practices across the United States, with
                  workflows built around specialty, payer, and practice
                  requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#service-area"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    Explore Our Coverage
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Coverage Card */}
              <div className="relative">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Service Coverage
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-[#06162d]">
                        United States
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                      <Globe2 className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {[
                      "Medical Billing",
                      "Medical Coding",
                      "Revenue Cycle Management",
                      "Credentialing & Enrollment",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="service-area" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Where We Serve
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Nationwide support with regional understanding.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Healthcare practices operate under different payer
                environments and regional requirements. Our billing workflow
                can be adapted to the market and specialty of each practice.
              </p>
            </div>

            {/* Region Cards */}
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {regions.map((region) => (
                <div
                  key={region.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#06162d]">
                    {region.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {region.locations}
                  </p>
                </div>
              ))}
            </div>

            {/* Nationwide Message */}
            <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50/70 p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                    <Globe2 className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#06162d]">
                      Nationwide coverage
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Don't see your state listed above? Contact us to discuss
                      billing support for your practice.
                    </p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE PROVIDE */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Beyond Location
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Your location is only one part of the billing equation.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Effective revenue cycle management also depends on your
                  specialty, payer mix, services, documentation, coding, and
                  existing billing workflow.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Stethoscope,
                    title: "Specialty-Focused",
                    text: "Billing workflows built around the services and requirements of your medical specialty.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Payer-Aware",
                    text: "Eligibility, authorization, claims, denials, and follow-up organized around payer requirements.",
                  },
                  {
                    icon: Users,
                    title: "Practice-Focused",
                    text: "Support designed for independent providers, growing practices, and medical groups.",
                  },
                  {
                    icon: Globe2,
                    title: "Nationwide",
                    text: "Remote revenue-cycle support for practices operating across the United States.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>

                      <h3 className="text-lg font-semibold text-[#06162d]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE PROCESS */}
        <section className="bg-blue-50/60 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Getting Started
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Wherever your practice is located.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We start by understanding your practice and build the billing
                workflow around its needs.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Tell Us About Your Practice",
                  text: "Share your specialty, location, payer mix, and current billing workflow.",
                },
                {
                  number: "02",
                  title: "Build the Workflow",
                  text: "Identify the billing, coding, credentialing, and RCM support your practice needs.",
                },
                {
                  number: "03",
                  title: "Manage the Revenue Cycle",
                  text: "Keep claims, payments, denials, and A/R moving through one connected process.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-blue-100 bg-white p-7"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-[#06162d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-[#06162d] px-7 py-12 text-center sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Nationwide Medical Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Wherever you practice, let's talk billing.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                Tell us about your practice and location, and we'll discuss
                the revenue-cycle support that fits your needs.
              </p>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;