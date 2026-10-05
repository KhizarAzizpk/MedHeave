import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f4faff] text-blue-950">
      {/* ================= FLOATING NAVBAR ================= */}
      <div className="fixed left-0 right-0 top-4 z-50">
        <Navbar />
      </div>

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
          {/* Background Glows */}
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#dff2ff] blur-3xl" />
          <div className="pointer-events-none absolute right-[-140px] top-20 h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              {/* ================= LEFT CONTENT ================= */}
              <div className="pt-4">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                  <MessageCircle size={16} />
                  Let's Talk
                </div>

                <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-[#06162d] md:text-6xl">
                  Let's talk about your
                  <span className="block text-blue-700">
                    revenue cycle.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                  Tell us about your practice, your specialty, and the areas
                  where your billing operation needs support. We'll help you
                  explore the right solution for your revenue cycle.
                </p>

                {/* Trust Points */}
                <div className="mt-9 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="font-semibold text-[#06162d]">
                        Practice-focused conversations
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Tell us what you're trying to improve instead of
                        starting with a generic sales conversation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="font-semibold text-[#06162d]">
                        Billing and RCM expertise
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Discuss medical billing, coding, claims, denials,
                        credentialing, or broader RCM needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="font-semibold text-[#06162d]">
                        No patient information required
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        This form is for business inquiries only. Do not submit
                        PHI or patient-specific information.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small Contact Cards */}
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Mail size={18} />
                    </div>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#06162d]">
                      Get in touch with our team
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-100 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Clock3 size={18} />
                    </div>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Response
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#06162d]">
                      We'll get back to you
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= CONTACT FORM ================= */}
              <div
                id="contact-form"
                className="relative"
              >
                <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_25px_70px_rgba(30,64,175,0.10)] md:p-8">
                  <div className="mb-7">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                      Contact Med-Heave
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#06162d]">
                      Tell us about your practice.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      A few details will help us understand what you're
                      looking for.
                    </p>
                  </div>

                  <form className="space-y-5">
                    {/* Name */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          First Name *
                        </label>

                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          Last Name *
                        </label>

                        <input
                          type="text"
                          placeholder="Last name"
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        />
                      </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          Work Email *
                        </label>

                        <input
                          type="email"
                          placeholder="you@practice.com"
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          Phone
                        </label>

                        <input
                          type="tel"
                          placeholder="Phone number"
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        />
                      </div>
                    </div>

                    {/* Practice */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-blue-950">
                        Practice / Organization *
                      </label>

                      <input
                        type="text"
                        placeholder="Practice or organization name"
                        className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    {/* Specialty */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          Specialty *
                        </label>

                        <select
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        >
                          <option value="" disabled>
                            Select specialty
                          </option>
                          <option>Family Medicine</option>
                          <option>Internal Medicine</option>
                          <option>Cardiology</option>
                          <option>Orthopedics</option>
                          <option>Behavioral Health</option>
                          <option>Physical Therapy</option>
                          <option>Urgent Care</option>
                          <option>Dermatology</option>
                          <option>Neurology</option>
                          <option>OB/GYN</option>
                          <option>Radiology</option>
                          <option>Podiatry</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-blue-950">
                          Service of Interest
                        </label>

                        <select
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                        >
                          <option value="" disabled>
                            Select service
                          </option>
                          <option>Revenue Cycle Management</option>
                          <option>Medical Billing</option>
                          <option>Medical Coding</option>
                          <option>Credentialing</option>
                          <option>Provider Enrollment</option>
                          <option>Eligibility Verification</option>
                          <option>Prior Authorization</option>
                          <option>Claims Management</option>
                          <option>Payment Posting</option>
                          <option>AR Recovery</option>
                          <option>Denial Management</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Billing Challenge */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-blue-950">
                        What can we help with?
                      </label>

                      <select
                        defaultValue=""
                        className="w-full rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      >
                        <option value="" disabled>
                          Select your current challenge
                        </option>
                        <option>Claim denials</option>
                        <option>Slow reimbursements</option>
                        <option>Accounts receivable</option>
                        <option>Medical coding</option>
                        <option>Eligibility and authorization</option>
                        <option>Credentialing / enrollment</option>
                        <option>Complete RCM support</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-blue-950">
                        Message
                      </label>

                      <textarea
                        rows="4"
                        placeholder="Briefly tell us about your current billing workflow or what you would like to improve..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fcff] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    {/* PHI Notice */}
                    <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                      <ShieldCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-blue-700"
                      />

                      <p className="text-xs leading-5 text-slate-600">
                        Please do not include patient names, medical records,
                        insurance numbers, or other patient-specific health
                        information in this form.
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ed174c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
                    >
                      Send Inquiry
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CONTACT US ================= */}
        <section className="relative overflow-hidden bg-white py-24 md:py-28">
          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Start With Your Needs
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#06162d] md:text-5xl">
                Bring us the part of your revenue cycle that needs attention.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need support with one part of your billing workflow
                or broader RCM operations, the conversation starts with
                understanding your current process.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="rounded-3xl border border-blue-100 bg-[#f8fcff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Stethoscope size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Your Specialty
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Tell us what type of practice you operate so the conversation
                  can focus on the workflows that matter to you.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-blue-100 bg-[#f8fcff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <MessageCircle size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Your Challenge
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share the operational issue you're seeing, from denials and
                  A/R to coding or claim submission.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-blue-100 bg-[#f8fcff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <ShieldCheck size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Your Workflow
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Give us context about your current billing process and where
                  you want additional support.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-3xl border border-blue-100 bg-[#f8fcff] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <ArrowRight size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Your Next Step
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We'll review your inquiry and determine the most useful next
                  conversation for your practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT HAPPENS NEXT ================= */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#dff2ff] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                What Happens Next
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#06162d] md:text-5xl">
                A straightforward path forward.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Once you send your inquiry, our team can review your needs and
                determine the right next conversation.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                  01
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Tell us about your needs
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Submit your practice details and tell us what you're looking
                  to improve.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                  02
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  We review your inquiry
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Our team reviews your specialty, service needs, and the
                  billing challenges you've shared.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                  03
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Discuss the right next step
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We'll connect with you to discuss your situation and the
                  potential ways Med-Heave can help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT OPTIONS ================= */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Email */}
              <div className="rounded-[1.75rem] border border-blue-100 bg-[#f8fcff] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Mail size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Email Our Team
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For business inquiries and questions about our services,
                  reach out directly to the Med-Heave team.
                </p>

                <p className="mt-5 text-sm font-bold text-blue-700">
                  Contact information coming soon
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-[1.75rem] border border-blue-100 bg-[#f8fcff] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Phone size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Talk With Us
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prefer a conversation? Contact our team to discuss your
                  practice and revenue cycle requirements.
                </p>

                <p className="mt-5 text-sm font-bold text-blue-700">
                  Phone information coming soon
                </p>
              </div>

              {/* Location */}
              <div className="rounded-[1.75rem] border border-blue-100 bg-[#f8fcff] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <MapPin size={21} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#06162d]">
                  Our Location
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Add the official Med-Heave office and operating information
                  here once the public business details are finalized.
                </p>

                <p className="mt-5 text-sm font-bold text-blue-700">
                  Location information coming soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-24 md:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#06162d] px-7 py-14 md:px-12 md:py-16">
              <div className="pointer-events-none absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                  <MessageCircle size={25} />
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Have questions about your billing operation?
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                  Start a conversation with Med-Heave and tell us where your
                  practice needs support.
                </p>

                <a
                  href="#contact-form"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ed174c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Contact;