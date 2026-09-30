
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FileText,
  Receipt,
  SearchCheck,
  ShieldCheck,
  
  TrendingUp,
  WalletCards,
} from "lucide-react";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";

 
const MedicalBilling = () => {
   
    
  const billingServices = [
    {
      icon: ClipboardCheck,
      title: "Charge Entry",
      text: "Accurately capture and enter billable services from provider documentation and patient encounters.",
    },
    {
      icon: SearchCheck,
      title: "Claim Scrubbing",
      text: "Review claims for missing information, coding issues, and common errors before submission.",
    },
    {
      icon: FileCheck2,
      title: "Claims Submission",
      text: "Submit clean electronic claims to the appropriate insurance payers and clearinghouses.",
    },
    {
      icon: FileText,
      title: "Claim Follow-Up",
      text: "Monitor submitted claims, check status, and follow up on claims that remain unpaid.",
    },
    {
      icon: CreditCard,
      title: "Payment Posting",
      text: "Post insurance and patient payments accurately while maintaining organized account records.",
    },
    {
      icon: ShieldCheck,
      title: "Denial Management",
      text: "Identify denial reasons, make corrections, and support resubmissions and appeals.",
    },
    {
      icon: TrendingUp,
      title: "A/R Follow-Up",
      text: "Work outstanding accounts and aged receivables to keep payments moving.",
    },
    {
      icon: BarChart3,
      title: "Billing Reporting",
      text: "Track billing activity, collections, denials, and accounts receivable through regular reporting.",
    },
  ];

  const benefits = [
    "Cleaner claim submissions",
    "Consistent claim follow-up",
    "Faster payment processing",
    "Better denial visibility",
    "Organized accounts receivable",
    "Reduced administrative workload",
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
              <Receipt size={18} className="text-[#ed174c]" />

              <span className="text-sm font-semibold text-[#168be8]">
                Medical Billing Services
              </span>
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-[900px] text-center">

            <h1 className="text-4xl font-bold leading-[1.1] text-[#092957] sm:text-5xl lg:text-6xl">
              Smarter Billing.
              <br />
              <span className="text-[#ed174c]">Faster</span>{" "}
              <span className="text-[#168be8]">Reimbursement.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-base leading-8 text-[#71839e] sm:text-lg">
              Med-Heave manages the medical billing process from charge entry
              and claim preparation through submission, payment posting,
              denial management, and accounts receivable follow-up.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#billing-services"
                className="flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]"
              >
                Explore Billing Services

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
                <FileCheck2 size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Clean Claims
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Claims reviewed before submission to help prevent avoidable
                errors.
              </p>

            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#ed174c]">
                <CreditCard size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Payment Posting
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Insurance and patient payments posted and reconciled
                accurately.
              </p>

            </div>

            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-6 text-center backdrop-blur-sm">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <TrendingUp size={23} />
              </div>

              <h3 className="mt-4 font-bold text-[#092957]">
                Revenue Follow-Up
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71839e]">
                Outstanding claims and receivables are tracked through
                resolution.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* WHAT IS MEDICAL BILLING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                Medical Billing
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                From Patient Encounter
                <span className="text-[#ed174c]">
                  {" "}to Payment
                </span>
              </h2>

            </div>

            <div>

              <p className="leading-8 text-[#71839e]">
                Medical billing connects the healthcare services provided
                during a patient encounter with the insurance claim and
                payment process.
              </p>

              <p className="mt-4 leading-8 text-[#71839e]">
                A complete billing workflow includes charge entry, coding
                review, claim preparation, claim submission, payment posting,
                denial handling, and accounts receivable follow-up.
              </p>

            </div>

          </div>


          {/* BILLING FLOW */}
          <div className="mt-12 rounded-3xl border border-[#d9eafa] bg-white/70 p-6 backdrop-blur-sm sm:p-8">

            <div className="grid gap-4 md:grid-cols-4">

              {[
                "Charge Entry",
                "Claim Submission",
                "Payment Posting",
                "A/R Follow-Up",
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
        id="billing-services"
        className="px-5 py-20 sm:px-8 lg:px-12"
      >

        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
              What We Handle
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
              Complete Medical Billing Support
            </h2>

            <p className="mt-4 leading-7 text-[#71839e]">
              Med-Heave supports the operational steps that keep claims
              moving from preparation to payment and resolution.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {billingServices.map((service) => {

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


      {/* CLAIM PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="overflow-hidden rounded-[32px] bg-[#092957] p-7 sm:p-10 lg:p-14">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#5eb5ff]">
                The Billing Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Keep Every Claim
                <span className="text-[#ed174c]">
                  {" "}Moving Forward
                </span>
              </h2>

              <p className="mt-4 leading-7 text-[#b9c9dd]">
                A medical billing team needs to monitor a claim beyond the
                moment it is submitted. Med-Heave keeps track of billing
                activity through payment, rejection, denial, and follow-up.
              </p>

            </div>


            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Charge Capture",
                "Claim Scrubbing",
                "Electronic Submission",
                "Claim Tracking",
                "Payment Posting",
                "Denial Resolution",
                "A/R Follow-Up",
                "Final Resolution",
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


      {/* PAYMENT + AR */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-6 md:grid-cols-2">

            {/* PAYMENT POSTING */}
            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-7 backdrop-blur-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f5ff] text-[#168be8]">
                <CreditCard size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                Payment Posting & Reconciliation
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Accurate payment posting helps maintain clean patient
                accounts and reliable accounts receivable records. Insurance
                payments, adjustments, and patient payments are recorded and
                reconciled against the appropriate accounts.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "ERA and EOB payment posting",
                  "Insurance payment reconciliation",
                  "Patient payment posting",
                  "Adjustment review",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
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


            {/* A/R */}
            <div className="rounded-3xl border border-[#d9eafa] bg-white/70 p-7 backdrop-blur-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#ed174c]">
                <WalletCards size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#092957]">
                Accounts Receivable Follow-Up
              </h3>

              <p className="mt-4 leading-7 text-[#71839e]">
                Outstanding claims need consistent follow-up. Our billing
                workflow tracks unpaid claims, identifies the reason for
                delays, and keeps unresolved balances moving toward
                resolution.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Insurance claim follow-up",
                  "Aged A/R review",
                  "Outstanding balance tracking",
                  "Payer status follow-up",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

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

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                Why Medical Billing Matters
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#092957] sm:text-4xl">
                Organized Billing.
                <br />
                <span className="text-[#ed174c]">
                  Better Revenue Visibility.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#71839e]">
                A structured billing operation helps healthcare practices
                keep claims organized, identify issues earlier, and maintain
                visibility into outstanding revenue.
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


      {/* REPORTING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="rounded-[32px] border border-[#d9eafa] bg-white/70 p-7 sm:p-10">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-[#168be8]">
                  Billing Visibility
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#092957] sm:text-4xl">
                  Know Where Your
                  <span className="text-[#ed174c]">
                    {" "}Revenue Stands
                  </span>
                </h2>

                <p className="mt-4 leading-7 text-[#71839e]">
                  Regular billing reports help practices understand claim
                  activity, collections, denials, and accounts receivable
                  performance.
                </p>

              </div>


              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  "Claims activity",
                  "Payment collections",
                  "Denial trends",
                  "A/R aging",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-[#f4faff] p-4"
                  >

                    <BarChart3
                      size={19}
                      className="text-[#168be8]"
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
                Make Your Billing Process Work Smarter
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                Let Med-Heave support your billing operations from claim
                preparation through payment and follow-up.
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

export default MedicalBilling;

