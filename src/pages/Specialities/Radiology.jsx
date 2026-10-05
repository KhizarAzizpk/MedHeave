import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Image,
  Monitor,
  RefreshCcw,
  ShieldCheck,
  ScanLine,
  Stethoscope,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Radiology = () => {
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

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  <ScanLine className="h-4 w-4" />
                  Radiology Billing
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#06162d] sm:text-5xl lg:text-6xl">
                  Billing support for
                  <span className="block text-blue-600">
                    diagnostic imaging.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Radiology billing requires accurate imaging codes, correct
                  professional and technical component billing, authorization,
                  medical-necessity review, and detailed claim follow-up.
                  Med-Heave keeps these moving together across the revenue
                  cycle.
                </p>

                <div className="mt-8">
                  <a
                    href="#billing-services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                  >
                    View Radiology Billing Services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Revenue Cycle Card */}
              <div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Revenue Cycle
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-[#06162d]">
                        Radiology & Imaging
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-blue-100 p-3">
                      <ScanLine className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Eligibility & Benefits",
                      "Imaging Prior Authorization",
                      "Professional / Technical Billing",
                      "Radiology Coding & Claims",
                      "Denial & A/R Follow-Up",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />

                        <span className="text-sm text-slate-600">
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

        {/* INTRO / IMAGING TYPES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Radiology Revenue Cycle
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  High-volume imaging.
                  <span className="block text-blue-600">
                    Detailed billing requirements.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Radiology practices and imaging centers may handle
                  diagnostic X-rays, CT, MRI, ultrasound, mammography, nuclear
                  medicine, and other imaging services.
                </p>

                <p className="mt-5 leading-7 text-slate-500">
                  Each study can depend on the modality, contrast status,
                  place of service, medical necessity, authorization, and who
                  performed and interpreted the service. Med-Heave helps
                  connect these details to the claim.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Image,
                  title: "X-Ray & Diagnostic Imaging",
                  text: "Billing support for routine diagnostic imaging and radiographic studies.",
                },
                {
                  icon: ScanLine,
                  title: "CT & MRI",
                  text: "Revenue-cycle support for advanced imaging with authorization and coding requirements.",
                },
                {
                  icon: Monitor,
                  title: "Ultrasound & Mammography",
                  text: "Support for ultrasound, screening, diagnostic mammography, and related imaging claims.",
                },
                {
                  icon: Stethoscope,
                  title: "Teleradiology",
                  text: "Billing workflow support for radiologists interpreting studies performed at external facilities.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3">
                      <Icon className="h-6 w-6 text-blue-600" />
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
        </section>

        {/* BILLING SERVICES */}
        <section id="billing-services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Radiology Billing Services
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                Billing support built around diagnostic imaging.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                From insurance verification and authorization to component
                billing, claim submission, denial management, and A/R
                recovery, our workflow covers the revenue cycle behind
                radiology services.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Eligibility & Benefits",
                  text: "Verify coverage, imaging benefits, patient responsibility, and payer-specific requirements.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Prior Authorization",
                  text: "Track authorization requirements for advanced imaging such as CT, MRI, and other studies.",
                },
                {
                  icon: FileCheck2,
                  title: "Radiology Coding",
                  text: "Support CPT, ICD-10-CM, HCPCS, modifier, contrast, and modality-specific coding requirements.",
                },
                {
                  icon: ScanLine,
                  title: "Professional & Technical Billing",
                  text: "Review professional, technical, and global billing based on the service and entity performing each component.",
                },
                {
                  icon: RefreshCcw,
                  title: "Denial Management",
                  text: "Address denials related to authorization, medical necessity, modifiers, bundling, coding, and documentation.",
                },
                {
                  icon: WalletCards,
                  title: "A/R Follow-Up",
                  text: "Track unpaid imaging claims, payer balances, underpayments, and outstanding accounts through resolution.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-100 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                      <Icon className="h-5 w-5 text-white" />
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
        </section>

        {/* PROFESSIONAL VS TECHNICAL */}
        <section className="bg-blue-50/60 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Specialty Billing Focus
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  One imaging study.
                  <span className="block text-blue-600">
                    Multiple billing considerations.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  A defining part of radiology billing is determining whether
                  the claim represents the physician's interpretation, the
                  technical service, or both. The professional component is
                  generally reported with modifier 26, while the technical
                  component uses modifier TC when separately billed.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Professional",
                    badge: "26",
                    text: "Radiologist interpretation and report.",
                  },
                  {
                    title: "Technical",
                    badge: "TC",
                    text: "Equipment, supplies, technologist, and technical service.",
                  },
                  {
                    title: "Global",
                    badge: "Global",
                    text: "Professional and technical components billed together when appropriate.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-blue-100 bg-white p-6"
                  >
                    <div className="inline-flex rounded-xl bg-blue-100 px-3 py-2 text-sm font-bold text-blue-700">
                      {item.badge}
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#06162d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RADIOLOGY-SPECIFIC CHALLENGES */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Radiology Claim Management
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06162d] sm:text-4xl">
                  Catch imaging billing issues
                  <span className="block text-blue-600">
                    before they become denials.
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Radiology billing resources consistently highlight
                  authorization gaps, professional/technical component errors,
                  medical-necessity issues, modifier problems, contrast
                  coding, and bundling edits as important areas for claim
                  review. 
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Professional versus technical component review",
                  "Prior authorization for advanced imaging",
                  "Medical-necessity and diagnosis-code linkage",
                  "Contrast and add-on service coding",
                  "Modifier and bundling edit review",
                  "Place-of-service and payer requirements",
                  "Teleradiology claim routing",
                  "Denial and underpayment follow-up",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mt-0.5 rounded-full bg-blue-50 p-1">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    </div>

                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Our Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06162d] sm:text-4xl">
                From imaging order to reimbursement.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A connected radiology billing process keeps authorization,
                coding, component billing, claims, payments, and follow-up
                aligned.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Eligibility & Authorization",
                  text: "Verify coverage, imaging benefits, medical-necessity requirements, and prior authorization.",
                },
                {
                  number: "02",
                  title: "Coding & Components",
                  text: "Review the imaging service, diagnosis, contrast, modifiers, and professional or technical component.",
                },
                {
                  number: "03",
                  title: "Claim Submission",
                  text: "Submit imaging claims after reviewing payer requirements, coding edits, and supporting documentation.",
                },
                {
                  number: "04",
                  title: "Denials & A/R",
                  text: "Resolve rejected and denied claims, review payments, identify underpayments, and follow up on outstanding A/R.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-[#06162d]">
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
                Radiology Billing
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Keep every imaging claim on track.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
                From eligibility and authorization to component billing,
                coding, claims, denials, payments, and A/R, Med-Heave supports
                the revenue cycle behind diagnostic imaging.
              </p>

              <div className="mt-8">
                <a
                  href="#billing-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  View Billing Services
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

export default Radiology;