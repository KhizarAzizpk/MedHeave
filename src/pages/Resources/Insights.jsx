import { useState } from "react";
import {
  ArrowRight,
  Search,
  FileText,
  Clock3,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const articles = [
  {
    category: "Medical Billing",
    title: "Common Medical Billing Errors That Can Delay Reimbursement",
    description:
      "Understand common billing mistakes that can create claim delays, rework, and unnecessary revenue leakage.",
    date: "October 1, 2026",
    readTime: "7 min read",
    slug: "common-medical-billing-errors",
  },
  {
    category: "Revenue Cycle",
    title: "Understanding the Medical Revenue Cycle From Start to Finish",
    description:
      "A practical look at the key stages of the healthcare revenue cycle and where practices can lose revenue.",
    date: "September 26, 2026",
    readTime: "9 min read",
    slug: "understanding-medical-revenue-cycle",
  },
  {
    category: "Denial Management",
    title: "Why Medical Claims Get Denied and How to Prevent Them",
    description:
      "Explore common denial causes and workflow practices that can help reduce avoidable claim issues.",
    date: "September 22, 2026",
    readTime: "8 min read",
    slug: "medical-claim-denials",
  },
  {
    category: "Medical Coding",
    title: "CPT, ICD-10 and HCPCS: Understanding the Basics",
    description:
      "A straightforward introduction to the coding systems used throughout the medical billing process.",
    date: "September 18, 2026",
    readTime: "6 min read",
    slug: "cpt-icd10-hcpcs-basics",
  },
  {
    category: "Accounts Receivable",
    title: "How Effective A/R Follow-Up Supports Practice Revenue",
    description:
      "Learn how organized accounts receivable follow-up can help identify unpaid claims and keep revenue moving.",
    date: "September 12, 2026",
    readTime: "7 min read",
    slug: "accounts-receivable-follow-up",
  },
  {
    category: "Credentialing",
    title: "Why Provider Credentialing Matters for Timely Reimbursement",
    description:
      "See how payer enrollment and credentialing affect provider participation and the revenue cycle.",
    date: "September 8, 2026",
    readTime: "6 min read",
    slug: "provider-credentialing",
  },
];

const categories = [
  "All",
  "Medical Billing",
  "Revenue Cycle",
  "Denial Management",
  "Medical Coding",
  "Accounts Receivable",
  "Credentialing",
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(search) ||
      article.description.toLowerCase().includes(search) ||
      article.category.toLowerCase().includes(search);

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

          <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
                <FileText size={16} />
                MedHeave Insights
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                Insights for a{" "}
                <span className="text-blue-700">
                  healthier revenue cycle.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                Practical insights on medical billing, coding, denials,
                accounts receivable and revenue cycle management — built
                to help healthcare providers make informed decisions.
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
                  placeholder="Search billing insights..."
                  className="w-full bg-transparent text-sm text-blue-950 outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

          </div>
        </section>


        {/* ================= FEATURED INSIGHT ================= */}
        <section className="pb-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-7">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Featured Insight
              </p>

              <h2 className="mt-2 text-2xl font-bold text-blue-950 md:text-3xl">
                Practical knowledge for better billing
              </h2>

            </div>

            <div className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:shadow-lg">

              <div className="grid lg:grid-cols-2">

                {/* Featured visual */}
                <div className="relative min-h-[330px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-8 md:p-10">

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                  <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative flex h-full flex-col justify-between">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100 backdrop-blur">
                        Revenue Cycle
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <FileText
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
                        Where does revenue get lost in the healthcare
                        billing cycle?
                      </h3>

                    </div>

                  </div>
                </div>


                {/* Featured content */}
                <div className="flex flex-col justify-center p-8 md:p-10">

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">

                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      October 2, 2026
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={14} />
                      8 min read
                    </span>

                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-blue-950 md:text-3xl">
                    Understanding the Revenue Cycle:
                    From Patient Visit to Payment
                  </h3>

                  <p className="mt-5 leading-7 text-gray-600">
                    Follow the key stages of the healthcare revenue cycle,
                    understand where common bottlenecks occur, and see how
                    better billing workflows can support consistent
                    reimbursement.
                  </p>

                  <Link
                    to="/resources/insights/revenue-cycle-basics"
                    className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-blue-700 transition-all hover:gap-3"
                  >
                    Read the insight
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= LATEST INSIGHTS ================= */}
        <section className="border-t border-blue-100 bg-[#eef8ff] py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Latest Insights
              </p>

              <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <h2 className="text-3xl font-bold text-blue-950">
                  Explore our latest articles
                </h2>

                <p className="max-w-xl text-sm leading-6 text-gray-500">
                  Practical resources covering the everyday challenges
                  that affect healthcare billing and revenue cycle
                  performance.
                </p>

              </div>

            </div>


            {/* Category filters */}
            <div className="mb-10 flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-blue-900 text-white shadow-sm"
                      : "border border-blue-100 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-900"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>


            {/* Article cards */}
            {filteredArticles.length > 0 ? (

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {filteredArticles.map((article) => (

                  <article
                    key={article.slug}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-[#e8f5ff] to-white">

                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-200/40 blur-2xl" />

                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

                        <FileText
                          size={25}
                          className="text-blue-700"
                        />

                      </div>

                    </div>


                    <div className="flex flex-1 flex-col p-6">

                      <div className="flex items-center justify-between gap-3">

                        <span className="text-xs font-semibold text-blue-600">
                          {article.category}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock3 size={13} />
                          {article.readTime}
                        </span>

                      </div>


                      <h3 className="mt-4 text-lg font-bold leading-6 text-blue-950 transition group-hover:text-blue-700">
                        {article.title}
                      </h3>


                      <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                        {article.description}
                      </p>


                      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

                        <span className="text-xs text-gray-400">
                          {article.date}
                        </span>

                        <Link
                          to={`/resources/insights/${article.slug}`}
                          className="flex items-center gap-1 text-sm font-semibold text-blue-700 transition-all group-hover:gap-2"
                        >
                          Read article
                          <ChevronRight size={16} />
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="rounded-2xl border border-blue-100 bg-white px-6 py-16 text-center">

                <Search
                  size={32}
                  className="mx-auto text-blue-300"
                />

                <h3 className="mt-4 text-lg font-semibold text-blue-950">
                  No insights found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search term or select a different category.
                </p>

              </div>

            )}

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="bg-[#06162d] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Need More Than Insights?
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

export default Insights;