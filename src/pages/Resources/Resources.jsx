import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FileText,
  Search,
  BookMarked,
  Lightbulb,
  ShieldCheck,
  Calculator,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Resources = () => {
  const resourceCards = [
    {
      icon: Lightbulb,
      title: "Insights",
      description:
        "Practical insights on medical billing, revenue cycle management, coding, denials, and healthcare operations.",
      link: "/resources/insights",
      label: "Explore Insights",
    },
    {
      icon: BookOpen,
      title: "Billing Guides",
      description:
        "Step-by-step guidance covering claims, billing workflows, reimbursement, denials, and the revenue cycle.",
      link: "/resources/billing-guides",
      label: "Browse Guides",
    },
    {
      icon: BookMarked,
      title: "Medical Billing Glossary",
      description:
        "Clear explanations of common medical billing, coding, insurance, claims, and RCM terminology.",
      link: "/resources/medical-billing-glossary",
      label: "View Glossary",
    },
  ];

  const topicCards = [
    {
      icon: TrendingUp,
      title: "Revenue Cycle Management",
      description:
        "Understand the complete journey from patient registration through claim submission, payment, and A/R follow-up.",
    },
    {
      icon: ClipboardCheck,
      title: "Medical Billing",
      description:
        "Learn the fundamentals of eligibility, claims, payment posting, denials, and payer follow-up.",
    },
    {
      icon: FileText,
      title: "Medical Coding",
      description:
        "Explore practical information around CPT, ICD-10-CM, HCPCS, modifiers, and coding accuracy.",
    },
    {
      icon: ShieldCheck,
      title: "Denials & Compliance",
      description:
        "Build a stronger understanding of denial prevention, appeals, payer requirements, and billing compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4faff] text-blue-950">
      {/* ================= FLOATING NAVBAR ================= */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#dff2ff] blur-3xl" />
          <div className="pointer-events-none absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                  <BookOpen size={16} />
                  Med-Heave Resource Center
                </div>

                <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#06162d] md:text-6xl lg:text-7xl">
                  Knowledge that
                  <span className="block text-blue-700">
                    moves healthcare forward.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  Explore practical resources for medical billing, coding,
                  revenue cycle management, claims, denials, and healthcare
                  operations.
                </p>

                {/* SEARCH */}
                <div className="mt-9 max-w-2xl">
                  <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-2 shadow-[0_15px_45px_rgba(37,99,235,0.08)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4faff] text-blue-600">
                      <Search size={21} />
                    </div>

                    <input
                      type="text"
                      placeholder="Search billing, coding, claims, RCM..."
                      className="w-full bg-transparent px-1 text-sm text-blue-950 outline-none placeholder:text-slate-400 md:text-base"
                    />

                    <button className="hidden rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:block">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT RESOURCE PANEL */}
              <div className="relative">
                <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_25px_70px_rgba(30,64,175,0.10)] md:p-8">
                  <div className="mb-7 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                        Start here
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-[#06162d]">
                        Explore our resources
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <BookOpen size={23} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/resources/insights"
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fcff] p-4 transition hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <Lightbulb size={19} />
                        </div>

                        <div>
                          <p className="font-semibold text-[#06162d]">
                            Insights
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Latest industry knowledge
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={19}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      />
                    </Link>

                    <Link
                      to="/resources/billing-guides"
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fcff] p-4 transition hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <FileText size={19} />
                        </div>

                        <div>
                          <p className="font-semibold text-[#06162d]">
                            Billing Guides
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Practical billing guidance
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={19}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      />
                    </Link>

                    <Link
                      to="/resources/medical-billing-glossary"
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fcff] p-4 transition hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <BookMarked size={19} />
                        </div>

                        <div>
                          <p className="font-semibold text-[#06162d]">
                            Medical Billing Glossary
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Understand billing terminology
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={19}
                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RESOURCE TYPES ================= */}
        <section className="relative bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Resource Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#06162d] md:text-5xl">
                Everything you need to understand the revenue cycle.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From practical billing guides to industry insights and
                terminology, explore resources designed around the real
                workflows of healthcare revenue cycle management.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {resourceCards.map((resource) => {
                const Icon = resource.icon;

                return (
                  <Link
                    key={resource.title}
                    to={resource.link}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-[#f8fcff] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_55px_rgba(37,99,235,0.10)]"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#e8f5ff] blur-2xl transition group-hover:bg-blue-100" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                        <Icon size={25} />
                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-[#06162d]">
                        {resource.title}
                      </h3>

                      <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-slate-600">
                        {resource.description}
                      </p>

                      <div className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-700">
                        {resource.label}
                        <ArrowRight
                          size={17}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= TOPICS ================= */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-[#dff2ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                  Browse by Topic
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#06162d] md:text-5xl">
                  Find the information you need.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Explore key areas of medical billing and revenue cycle
                  operations.
                </p>
              </div>

              <Link
                to="/resources/insights"
                className="inline-flex w-fit items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
              >
                View all insights
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {topicCards.map((topic) => {
                const Icon = topic.icon;

                return (
                  <div
                    key={topic.title}
                    className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5ff] text-blue-700">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FEATURED GUIDE ================= */}
        <section className="relative py-10 pb-24 md:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#06162d] px-7 py-12 md:px-12 md:py-14 lg:px-16">
              <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div className="max-w-3xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200">
                    <BookOpen size={16} />
                    Featured Resource
                  </div>

                  <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    Start with the fundamentals of medical billing.
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                    Learn how eligibility, coding, claims submission, payment
                    posting, denials, and follow-up connect across the
                    healthcare revenue cycle.
                  </p>
                </div>

                <Link
                  to="/resources/billing-guides"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
                >
                  Explore Billing Guides
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Calculator size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-[#06162d] md:text-5xl">
              Looking for something specific?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Browse our resource library or explore the topics most relevant
              to your practice, billing workflow, and revenue cycle.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/resources/insights"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Explore Resources
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Resources;