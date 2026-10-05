import { useState } from "react";
import {
  ArrowRight,
  Search,
  BookOpen,
  FileCheck2,
  ShieldCheck,
  ClipboardCheck,
  RefreshCcw,
  WalletCards,
  Stethoscope,
  Code2,
  ReceiptText,
  CircleDollarSign,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";


import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

const guides = [
  {
    category: "Billing Basics",
    icon: BookOpen,
    title: "Medical Billing 101",
    description:
      "Understand the basic medical billing process, from patient registration and insurance verification to claim submission and payment.",
    readTime: "8 min read",
    slug: "medical-billing-101",
  },
  {
    category: "Eligibility",
    icon: ShieldCheck,
    title: "Insurance Eligibility & Benefits Guide",
    description:
      "Learn what to verify before a patient visit, including active coverage, benefits, copayments, deductibles, and authorization requirements.",
    readTime: "7 min read",
    slug: "insurance-eligibility-benefits",
  },
  {
    category: "Coding",
    icon: Code2,
    title: "CPT, ICD-10 & HCPCS Guide",
    description:
      "A practical introduction to the coding systems used to describe diagnoses, procedures, services, supplies, and equipment.",
    readTime: "10 min read",
    slug: "cpt-icd10-hcpcs-guide",
  },
  {
    category: "Claims",
    icon: FileCheck2,
    title: "Clean Claim Submission Guide",
    description:
      "Review the key information that should be checked before submitting a claim and understand common causes of claim rejection.",
    readTime: "8 min read",
    slug: "clean-claim-submission",
  },
  {
    category: "Denials",
    icon: RefreshCcw,
    title: "Medical Claim Denials Guide",
    description:
      "Explore common denial causes, claim review steps, correction workflows, and practical approaches to denial prevention.",
    readTime: "9 min read",
    slug: "medical-claim-denials-guide",
  },
  {
    category: "Accounts Receivable",
    icon: WalletCards,
    title: "A/R Follow-Up Guide",
    description:
      "Learn how organized accounts receivable follow-up can help track unpaid claims, payer responses, and outstanding balances.",
    readTime: "7 min read",
    slug: "accounts-receivable-follow-up",
  },
  {
    category: "Prior Authorization",
    icon: ClipboardCheck,
    title: "Prior Authorization Guide",
    description:
      "Understand when authorization may be required, what information should be tracked, and how authorization issues can affect claims.",
    readTime: "8 min read",
    slug: "prior-authorization-guide",
  },
  {
    category: "Payment Posting",
    icon: CircleDollarSign,
    title: "Payment Posting Guide",
    description:
      "Understand how payer payments, patient responsibility, adjustments, and remaining balances fit into the billing workflow.",
    readTime: "7 min read",
    slug: "payment-posting-guide",
  },
  {
    category: "Specialty Billing",
    icon: Stethoscope,
    title: "Behavioral Health Billing Guide",
    description:
      "Review the billing considerations that can affect behavioral health services, including documentation, authorization, coding, and claims.",
    readTime: "9 min read",
    slug: "behavioral-health-billing-guide",
  },
];

const categories = [
  "All",
  "Billing Basics",
  "Eligibility",
  "Coding",
  "Claims",
  "Denials",
  "Accounts Receivable",
  "Prior Authorization",
  "Payment Posting",
  "Specialty Billing",
];

const BillingGuides = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory =
      activeCategory === "All" || guide.category === activeCategory;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      guide.title.toLowerCase().includes(search) ||
      guide.description.toLowerCase().includes(search) ||
      guide.category.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f4faff] text-blue-950">

      {/* ================= FLOATING NAVBAR ================= */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-28">

          <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-[#dff2ff] blur-3xl" />

          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
                <BookOpen size={16} />
                MedHeave Billing Guides
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                Practical guides for a{" "}
                <span className="text-blue-700">
                  better billing workflow.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                Explore practical guides covering medical billing, insurance
                eligibility, coding, claims, denials, A/R, authorization,
                payment posting, and specialty billing.
              </p>

            </div>

            {/* Search */}
            <div className="mt-10 max-w-2xl">

              <div className="flex items-center rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-blue-300 focus-within:shadow-md">

                <Search
                  size={20}
                  className="mr-3 shrink-0 text-blue-500"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search billing guides..."
                  className="w-full bg-transparent text-sm text-blue-950 outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

          </div>
        </section>


        {/* ================= BILLING WORKFLOW ================= */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Billing Workflow
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-950 md:text-4xl">
                Understand the process behind every claim.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Medical billing connects several administrative and revenue
                cycle steps. These guides break those steps into practical
                areas that billing teams can review and apply.
              </p>

            </div>


            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Verify",
                  text: "Check eligibility, benefits, coverage, and authorization requirements.",
                },
                {
                  number: "02",
                  title: "Code",
                  text: "Connect documented diagnoses and services with the appropriate coding workflow.",
                },
                {
                  number: "03",
                  title: "Submit",
                  text: "Review claim information and submit accurate billing data to the payer.",
                },
                {
                  number: "04",
                  title: "Follow Up",
                  text: "Track payer responses, denials, payments, and outstanding A/R.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="rounded-3xl border border-blue-100 bg-[#f4faff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >

                  <span className="text-sm font-bold text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </section>


        {/* ================= FEATURED GUIDE ================= */}
        <section className="bg-[#eef8ff] py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Featured Guide
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-950 md:text-4xl">
                Start with the fundamentals.
              </h2>

            </div>


            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                {/* Visual */}
                <div className="relative min-h-[350px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-8 md:p-10">

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                  <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative flex h-full flex-col justify-between">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100 backdrop-blur">
                        Billing Basics
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <BookOpen
                          size={24}
                          className="text-blue-100"
                        />
                      </div>

                    </div>


                    <div className="mt-16">

                      <p className="text-sm text-blue-200">
                        Featured resource
                      </p>

                      <h3 className="mt-3 max-w-lg text-2xl font-bold leading-tight text-white md:text-3xl">
                        Medical Billing 101
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100/80">
                        A practical starting point for understanding how
                        patient information moves through the billing and
                        reimbursement process.
                      </p>

                    </div>

                  </div>
                </div>


                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10">

                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                    <CheckCircle2 size={16} />
                    Billing fundamentals
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-blue-950 md:text-3xl">
                    From patient registration to payment
                  </h3>

                  <p className="mt-5 leading-7 text-gray-600">
                    Learn how the major stages of medical billing connect,
                    including patient information, insurance verification,
                    coding, claim submission, payer processing, payment
                    posting, denials, and accounts receivable follow-up.
                  </p>

                  <Link
                    to="/resources/billing-guides/medical-billing-101"
                    className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-blue-700 transition-all hover:gap-3"
                  >
                    Read the guide
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= GUIDE LIBRARY ================= */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Guide Library
              </p>

              <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <div>

                  <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
                    Explore our billing guides
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                    Browse guides by billing function or search for a specific
                    topic.
                  </p>

                </div>

              </div>

            </div>


            {/* Category Filters */}
            <div className="mb-10 flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-blue-900 text-white shadow-sm"
                      : "border border-blue-100 bg-[#f4faff] text-gray-600 hover:bg-blue-50 hover:text-blue-900"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>


            {/* Guide Cards */}
            {filteredGuides.length > 0 ? (

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {filteredGuides.map((guide) => {

                  const Icon = guide.icon;

                  return (
                    <article
                      key={guide.slug}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                      {/* Card Visual */}
                      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-[#e8f5ff] to-white">

                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl" />

                        <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-cyan-100/70 blur-2xl" />

                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

                          <Icon
                            size={25}
                            className="text-blue-700"
                          />

                        </div>

                      </div>


                      {/* Card Content */}
                      <div className="flex flex-1 flex-col p-6">

                        <div className="flex items-center justify-between gap-3">

                          <span className="text-xs font-semibold text-blue-600">
                            {guide.category}
                          </span>

                          <span className="text-xs text-gray-400">
                            {guide.readTime}
                          </span>

                        </div>


                        <h3 className="mt-4 text-lg font-bold leading-6 text-blue-950 transition group-hover:text-blue-700">
                          {guide.title}
                        </h3>


                        <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                          {guide.description}
                        </p>


                        <div className="mt-6 border-t border-gray-100 pt-4">

                          <Link
                            to={`/resources/billing-guides/${guide.slug}`}
                            className="flex items-center gap-1 text-sm font-semibold text-blue-700 transition-all group-hover:gap-2"
                          >
                            Read guide
                            <ChevronRight size={16} />
                          </Link>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            ) : (

              <div className="rounded-3xl border border-blue-100 bg-[#f4faff] px-6 py-16 text-center">

                <Search
                  size={32}
                  className="mx-auto text-blue-300"
                />

                <h3 className="mt-4 text-lg font-semibold text-blue-950">
                  No billing guides found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search term or select a different category.
                </p>

              </div>

            )}

          </div>
        </section>


        {/* ================= WHAT GUIDES COVER ================= */}
        <section className="bg-[#eef8ff] py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  What You Can Learn
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
                  Guides built around real billing workflows.
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Medical billing involves multiple connected steps. Our
                  guides organize those steps into practical topics that
                  billing teams and healthcare practices can reference.
                </p>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: ShieldCheck,
                    title: "Eligibility",
                    text: "Coverage and benefit verification.",
                  },
                  {
                    icon: Code2,
                    title: "Coding",
                    text: "Diagnosis and procedure coding basics.",
                  },
                  {
                    icon: ReceiptText,
                    title: "Claims",
                    text: "Submission and claim workflow guidance.",
                  },
                  {
                    icon: RefreshCcw,
                    title: "Denials",
                    text: "Common issues and follow-up workflows.",
                  },
                  {
                    icon: WalletCards,
                    title: "A/R",
                    text: "Outstanding claim and balance follow-up.",
                  },
                  {
                    icon: CircleDollarSign,
                    title: "Payments",
                    text: "Payment posting and reconciliation basics.",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-blue-100 bg-white p-5"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">

                          <Icon
                            size={19}
                            className="text-blue-600"
                          />

                        </div>

                        <div>

                          <h3 className="font-semibold text-blue-950">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {item.text}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* ================= RESOURCE NOTE ================= */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-blue-100 bg-[#f4faff] p-7 md:p-9">

              <div className="flex flex-col gap-5 md:flex-row md:items-start">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">

                  <BookOpen
                    size={22}
                    className="text-blue-700"
                  />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-blue-950">
                    Use current payer and coding guidance
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Billing requirements can vary by payer, provider type,
                    service, and program. Use these guides as educational
                    resources and verify applicable payer policies, coding
                    requirements, coverage rules, and claim instructions
                    before submitting claims.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="bg-[#06162d] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Need More Than Guides?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Let's strengthen your revenue cycle.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-200">
              From medical billing and coding to denial management and
              A/R follow-up, MedHeave helps healthcare providers keep
              their revenue cycle moving.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Talk to MedHeave
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default BillingGuides;