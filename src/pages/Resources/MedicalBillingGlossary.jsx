
import { useState } from "react";
import {
  ArrowRight,
  Search,
  BookOpen,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  Code2,
  ShieldCheck,
  WalletCards,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const glossaryTerms = [
  {
    term: "Accounts Receivable (A/R)",
    letter: "A",
    category: "Revenue Cycle",
    definition:
      "Money owed to a healthcare provider for services that have already been provided but have not yet been collected.",
  },
  {
    term: "Allowed Amount",
    letter: "A",
    category: "Insurance",
    definition:
      "The maximum amount a health plan recognizes for a covered service under the applicable plan or agreement.",
  },
  {
    term: "Appeal",
    letter: "A",
    category: "Denials",
    definition:
      "A formal request to a health plan to review and reconsider a payment decision, denial, or other claim determination.",
  },
  {
    term: "Claim",
    letter: "C",
    category: "Claims",
    definition:
      "A request submitted to a health insurance payer for payment or reimbursement for healthcare services provided to a patient.",
  },
  {
    term: "Claim Adjustment Reason Code (CARC)",
    letter: "C",
    category: "Payments",
    definition:
      "A standardized code used on remittance information to explain why a claim or claim line was adjusted.",
  },
  {
    term: "Clean Claim",
    letter: "C",
    category: "Claims",
    definition:
      "A claim submitted with the required information and without errors or missing data that would prevent normal processing.",
  },
  {
    term: "Coinsurance",
    letter: "C",
    category: "Insurance",
    definition:
      "The percentage of an allowed healthcare service cost that the patient is responsible for after applicable plan requirements are met.",
  },
  {
    term: "Copayment",
    letter: "C",
    category: "Insurance",
    definition:
      "A fixed amount a patient may be required to pay for a covered healthcare service.",
  },
  {
    term: "CPT",
    letter: "C",
    category: "Coding",
    definition:
      "Current Procedural Terminology, a standardized code set used primarily to describe medical procedures and professional healthcare services.",
  },
  {
    term: "Deductible",
    letter: "D",
    category: "Insurance",
    definition:
      "The amount a patient may have to pay for covered healthcare services before the insurance plan begins paying according to its benefits.",
  },
  {
    term: "Denial",
    letter: "D",
    category: "Denials",
    definition:
      "A payer decision that a submitted claim or claim line will not be paid as billed.",
  },
  {
    term: "Eligibility Verification",
    letter: "E",
    category: "Eligibility",
    definition:
      "The process of checking whether a patient's insurance coverage is active and reviewing applicable benefits and requirements.",
  },
  {
    term: "Electronic Remittance Advice (ERA)",
    letter: "E",
    category: "Payments",
    definition:
      "An electronic document containing claim adjudication and payment information sent by a payer after claim processing.",
  },
  {
    term: "Explanation of Benefits (EOB)",
    letter: "E",
    category: "Insurance",
    definition:
      "A statement from a health plan explaining how a claim was processed, including charges, allowed amounts, payments, adjustments, and patient responsibility.",
  },
  {
    term: "HCPCS",
    letter: "H",
    category: "Coding",
    definition:
      "Healthcare Common Procedure Coding System, a standardized code system used to identify healthcare services, supplies, products, and equipment.",
  },
  {
    term: "ICD-10-CM",
    letter: "I",
    category: "Coding",
    definition:
      "The U.S. clinical modification of ICD-10 used to report and classify diagnoses in healthcare settings.",
  },
  {
    term: "Medical Necessity",
    letter: "M",
    category: "Claims",
    definition:
      "A determination that a healthcare service or item meets applicable clinical and coverage requirements for the patient's condition.",
  },
  {
    term: "Modifier",
    letter: "M",
    category: "Coding",
    definition:
      "A coding character or indicator used with a procedure code to provide additional information about how a service was performed.",
  },
  {
    term: "Patient Responsibility",
    letter: "P",
    category: "Payments",
    definition:
      "The portion of a healthcare charge that the patient is responsible for paying under the applicable insurance benefits or billing arrangement.",
  },
  {
    term: "Prior Authorization",
    letter: "P",
    category: "Authorization",
    definition:
      "A payer requirement for approval before certain healthcare services, procedures, medications, or supplies are provided or covered.",
  },
  {
    term: "Provider Credentialing",
    letter: "P",
    category: "Provider",
    definition:
      "The process of verifying a healthcare professional's qualifications and establishing participation with a health plan or organization.",
  },
  {
    term: "Rejection",
    letter: "R",
    category: "Claims",
    definition:
      "A claim that is returned because it contains an error or fails a required validation before it can enter normal adjudication.",
  },
  {
    term: "Remittance Advice",
    letter: "R",
    category: "Payments",
    definition:
      "Information from a payer explaining how submitted claims were adjudicated and how payments and adjustments were applied.",
  },
  {
    term: "Revenue Cycle Management (RCM)",
    letter: "R",
    category: "Revenue Cycle",
    definition:
      "The coordinated financial and administrative process that manages healthcare revenue from patient registration through final payment.",
  },
  {
    term: "Timely Filing",
    letter: "T",
    category: "Claims",
    definition:
      "The deadline established by a payer for submitting a claim after a healthcare service has been provided.",
  },
  {
    term: "Write-Off",
    letter: "W",
    category: "Payments",
    definition:
      "An amount removed from a patient's or payer's outstanding balance according to the applicable contractual or billing rules.",
  },
];

const categories = [
  "All",
  "Insurance",
  "Claims",
  "Coding",
  "Denials",
  "Payments",
  "Revenue Cycle",
  "Eligibility",
  "Authorization",
  "Provider",
];

const letters = [
  "All",
  "A",
  "C",
  "D",
  "E",
  "H",
  "I",
  "M",
  "P",
  "R",
  "T",
  "W",
];

const MedicalBillingGlossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState("All");

  const filteredTerms = glossaryTerms.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.term.toLowerCase().includes(search) ||
      item.definition.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesLetter =
      activeLetter === "All" || item.letter === activeLetter;

    return matchesSearch && matchesCategory && matchesLetter;
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

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

              {/* LEFT */}
              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
                  <BookOpen size={16} />
                  Medical Billing Glossary
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                  Medical billing terms,
                  <span className="block text-blue-700">
                    explained simply.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                  Explore commonly used medical billing, coding, insurance,
                  claims, payment, and revenue cycle terminology in one
                  practical reference.
                </p>

                {/* Search */}
                <div className="mt-9 max-w-2xl">

                  <div className="flex items-center rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-blue-300 focus-within:shadow-md">

                    <Search
                      size={20}
                      className="mr-3 shrink-0 text-blue-500"
                    />

                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search a billing term..."
                      className="w-full bg-transparent text-sm text-blue-950 outline-none placeholder:text-gray-400"
                    />

                  </div>

                </div>

              </div>


              {/* RIGHT */}
              <div className="hidden lg:block">

                <div className="relative rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm">

                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/70 blur-3xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                        <CircleHelp
                          size={23}
                          className="text-blue-600"
                        />
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                        Quick Reference
                      </span>

                    </div>

                    <h2 className="mt-7 text-2xl font-bold text-blue-950">
                      Know the language of the revenue cycle.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      Find definitions for the terms that appear in
                      eligibility checks, claims, coding, remittance advice,
                      denials, and A/R workflows.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      {[
                        {
                          icon: Code2,
                          title: "Coding",
                        },
                        {
                          icon: FileCheck2,
                          title: "Claims",
                        },
                        {
                          icon: ShieldCheck,
                          title: "Insurance",
                        },
                        {
                          icon: WalletCards,
                          title: "Payments",
                        },
                      ].map((item) => {

                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="flex items-center gap-2 rounded-xl bg-[#f4faff] p-3"
                          >
                            <Icon
                              size={16}
                              className="text-blue-600"
                            />

                            <span className="text-xs font-medium text-blue-900">
                              {item.title}
                            </span>
                          </div>
                        );
                      })}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= GLOSSARY CONTENT ================= */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            {/* Header */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Glossary
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-950 md:text-4xl">
                  Medical billing terms
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  Search or browse the glossary to find definitions for
                  commonly used healthcare billing and revenue cycle terms.
                </p>

              </div>

              <div className="text-sm text-gray-400">
                {filteredTerms.length}{" "}
                {filteredTerms.length === 1 ? "term" : "terms"}
              </div>

            </div>


            {/* Category filters */}
            <div className="mt-10">

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Browse by category
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2">

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

            </div>


            {/* Alphabet */}
            <div className="mt-8">

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Browse by letter
              </p>

              <div className="flex flex-wrap gap-2">

                {letters.map((letter) => (

                  <button
                    key={letter}
                    onClick={() => setActiveLetter(letter)}
                    className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-semibold transition ${
                      activeLetter === letter
                        ? "bg-blue-700 text-white"
                        : "border border-blue-100 bg-white text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {letter}
                  </button>

                ))}

              </div>

            </div>


            {/* Terms */}
            <div className="mt-12">

              {filteredTerms.length > 0 ? (

                <div className="grid gap-4 md:grid-cols-2">

                  {filteredTerms.map((item) => (

                    <article
                      key={item.term}
                      className="group rounded-2xl border border-blue-100 bg-[#f4faff] p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex min-w-0 items-start gap-4">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
                            {item.letter}
                          </div>

                          <div>

                            <div className="flex flex-wrap items-center gap-2">

                              <h3 className="text-lg font-bold text-blue-950 transition group-hover:text-blue-700">
                                {item.term}
                              </h3>

                            </div>

                            <span className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-blue-600">
                              {item.category}
                            </span>

                          </div>

                        </div>

                        <ChevronRight
                          size={18}
                          className="mt-1 shrink-0 text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        />

                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-600">
                        {item.definition}
                      </p>

                    </article>

                  ))}

                </div>

              ) : (

                <div className="rounded-3xl border border-blue-100 bg-[#f4faff] px-6 py-20 text-center">

                  <Search
                    size={34}
                    className="mx-auto text-blue-300"
                  />

                  <h3 className="mt-4 text-lg font-semibold text-blue-950">
                    No terms found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Try another search term, category, or letter.
                  </p>

                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                      setActiveLetter("All");
                    }}
                    className="mt-6 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Clear filters
                  </button>

                </div>

              )}

            </div>

          </div>
        </section>


        {/* ================= COMMON TERMS ================= */}
        <section className="bg-[#eef8ff] py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Start Here
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
                  New to medical billing?
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Start with the terms that appear most often throughout the
                  billing and reimbursement process.
                </p>

                <Link
                  to="/resources/billing-guides/medical-billing-101"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 transition-all hover:gap-3"
                >
                  Read Medical Billing 101
                  <ArrowRight size={18} />
                </Link>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    icon: FileCheck2,
                    title: "Claim",
                    text: "A request for payment submitted to a payer.",
                  },
                  {
                    icon: Code2,
                    title: "CPT",
                    text: "Codes primarily used to describe procedures and services.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "EOB",
                    text: "A health plan statement explaining how a claim was processed.",
                  },
                  {
                    icon: RefreshCcw,
                    title: "Denial",
                    text: "A payer decision not to pay a claim or claim line as submitted.",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-blue-100 bg-white p-5"
                    >

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                        <Icon
                          size={19}
                          className="text-blue-600"
                        />
                      </div>

                      <h3 className="mt-4 font-semibold text-blue-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* ================= NOTE ================= */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-blue-100 bg-[#f4faff] p-7 md:p-9">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <CircleHelp
                    size={21}
                    className="text-blue-700"
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-blue-950">
                    A note about billing terminology
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Definitions can vary depending on the payer, healthcare
                    program, contract, or billing context. This glossary is
                    intended as a practical educational reference. Always
                    verify applicable payer requirements and current coding
                    guidance when working on actual claims.
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
              Need More Than Definitions?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Explore our billing resources.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-200">
              Go deeper with MedHeave billing guides, insights, and practical
              resources covering the healthcare revenue cycle.
            </p>

            <Link
              to="/resources/billing-guides"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Explore Billing Guides
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

export default MedicalBillingGlossary;
