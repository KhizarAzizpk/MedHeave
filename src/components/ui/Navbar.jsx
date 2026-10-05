import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import navbarlogo from "../../assets/images/navbarlogo.png";
import {

  FileText,
  ClipboardCheck,
  Activity,

  HeartPulse,
  Brain,
  Stethoscope,
  ShieldCheck,
  Scan,
  Baby,

  Clock,
  UserCheck,
  BadgeCheck,
  MapPin,


  FileCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  BarChart3,
  BookOpen,





} from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-[50px] w-[70%] lg:w-[70%] md:w-[85%] sm:w-[90%] w-[94%] mx-auto flex items-center rounded-3xl bg-white justify-between px-4 sm:px-6">

      {/* Logo */}
      <div>
        <img
          src={navbarlogo}
          alt="Logo"
          className="h-20 w-20 object-contain "
        />
      </div>

      {/* Navigation - Desktop */}
      <div className="hidden lg:flex items-center gap-4 text-blue-900 font-semibold">
        {/* Home */}
        <Link
          to="/components/ui/mainscreen"
          className="flex items-center gap-1 whitespace-nowrap"
        >
          Home
          {/* <ChevronDown size={16} strokeWidth={2.5} /> */}
        </Link>


        <div className="relative group">



          {/* Services */}
          <Link
            to="/services"
            className="flex items-center gap-1 whitespace-nowrap"
          >
            Services
            <ChevronDown size={16} strokeWidth={2.5} />
          </Link>


          {/* Services Mega Menu */}
          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      p-2
      hidden
      group-hover:block
      z-50
    "
          >

            <div
              className="
        w-[700px]
        max-h-[500px]
        overflow-y-auto
        scrollbar-thin
        scrollbar-thumb-blue-900
        scrollbar-track-gray-100
        bg-white
        rounded-2xl
        shadow-2xl
        border
        border-gray-100
        p-5
      "
            >

              {/* Header */}
              <div className="flex items-start justify-between mb-4 px-3">

                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Services
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Complete revenue cycle, end-to-end
                  </p>
                </div>

                <a
                  href="/services"
                  className="
            text-sm
            font-semibold
            text-blue-900
            flex
            items-center
            gap-1
            hover:gap-2
            transition-all
          "
                >
                  View all services
                  <ArrowRight size={16} />
                </a>

              </div>


              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">


                {/* 1. Revenue Cycle Management */}

                <Link to="/services/revenue-cycle-management"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Activity size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Revenue Cycle Management
                    </h4>

                    <p className="text-xs text-gray-500">
                      End-to-end RCM operations
                    </p>
                  </div>

                </Link>


                {/* 2. Medical Billing Services */}
                <Link to="/service/MedicalBilling"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Medical Billing Services
                    </h4>

                    <p className="text-xs text-gray-500">
                      Claims from submit to payment
                    </p>
                  </div>

                </Link>


                {/* 3. Medical Coding */}
                <Link to="/services/MedicalCoding"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <ClipboardCheck size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Medical Coding
                    </h4>

                    <p className="text-xs text-gray-500">
                      CPT, ICD-10 & HCPCS accuracy
                    </p>
                  </div>

                </Link>


                {/* 4. Credentialing Services */}
                <Link to="/services/credentialing"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Credentialing Services
                    </h4>

                    <p className="text-xs text-gray-500">
                      Payer enrollment & CAQH
                    </p>
                  </div>

                </Link>


                {/* 5. Provider Enrollment */}
                <Link
                  to="/services/ProviderEnrollment"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <UserCheck size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Provider Enrollment
                    </h4>

                    <p className="text-xs text-gray-500">
                      New provider onboarding
                    </p>
                  </div>

                </Link>


                {/* 6. Eligibility Verification */}
                <Link
                  to="/services/eligibility-verification"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <BadgeCheck size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Eligibility Verification
                    </h4>

                    <p className="text-xs text-gray-500">
                      Benefits checked before visits
                    </p>
                  </div>

                </Link>


                {/* 7. Prior Authorization */}
                <Link
                  to="/services/prior-authorization"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Clock size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Prior Authorization
                    </h4>

                    <p className="text-xs text-gray-500">
                      Fast auth submission & follow-up
                    </p>
                  </div>

                </Link>


                {/* 8. Claims Management */}
                <Link
                  to="/services/claims-management"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileCheck size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Claims Management
                    </h4>

                    <p className="text-xs text-gray-500">
                      Scrub, submit, track, resolve
                    </p>
                  </div>

                </Link>


                {/* 9. Payment Posting */}
                <Link
                  to="/services/payment-posting"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <CreditCard size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Payment Posting
                    </h4>

                    <p className="text-xs text-gray-500">
                      Same-day ERA/EOB posting
                    </p>
                  </div>

                </Link>


                {/* 10. AR Recovery */}
                <Link
                  to="/services/ar-recovery"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      AR Recovery
                    </h4>

                    <p className="text-xs text-gray-500">
                      Aged AR recovery programs
                    </p>
                  </div>

                </Link>


                {/* 11. Denial Management */}
                <Link
                  to="/services/denial-management"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <AlertCircle size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Denial Management
                    </h4>

                    <p className="text-xs text-gray-500">
                      Appeals with root-cause fixes
                    </p>
                  </div>

                </Link>


                {/* 12. Accounts Receivable Follow-up */}
                <Link
                  to="/services/accounts-receivable-follow-up"
                  className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                    <BarChart3 size={20} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Accounts Receivable Follow-up
                    </h4>

                    <p className="text-xs text-gray-500">
                      Dedicated AR follow-up
                    </p>
                  </div>

                </Link>


              </div>


            </div>

          </div>

        </div>


        {/* SPECIALITIES */}
        <div className="relative group">

          <Link
            to="/specialities"
            className="flex items-center gap-1"
          >
            Specialities
            <ChevronDown size={16} strokeWidth={2.5} />
          </Link>

          {/* Mega Menu */}
          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-2
      hidden
      group-hover:block
      z-50
    "
          >
            <div
              className="
        w-[850px]
        bg-white
        rounded-2xl
        shadow-2xl
        border
        border-gray-100
        p-5
      "
            >

              {/* Heading */}
              <div className="mb-4 px-2">
                <h3 className="text-lg font-bold text-blue-950">
                  Medical Specialities
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Billing solutions tailored to leading healthcare specialties
                </p>
              </div>


              {/* Two Columns */}
              <div className="grid grid-cols-2 gap-x-4">

                {/* LEFT COLUMN */}
                <div>

                  {/* Family Medicine */}
                  <Link
                    to="/specialities/family-medicine"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Stethoscope size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Family Medicine
                      </h4>
                      <p className="text-xs text-gray-500">
                        Complete billing support for family practices
                      </p>
                    </div>
                  </Link>


                  {/* Internal Medicine */}
                  <Link
                    to="/specialities/internal-medicine"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <HeartPulse size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Internal Medicine
                      </h4>
                      <p className="text-xs text-gray-500">
                        Billing support for internal medicine providers
                      </p>
                    </div>
                  </Link>


                  {/* Cardiology */}
                  <Link
                    to="/specialities/cardiology"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <HeartPulse size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Cardiology
                      </h4>
                      <p className="text-xs text-gray-500">
                        Cardiology coding, claims and revenue cycle support
                      </p>
                    </div>
                  </Link>


                  {/* Orthopedics */}
                  <Link
                    to="/specialities/orthopedics"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Activity size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Orthopedics
                      </h4>
                      <p className="text-xs text-gray-500">
                        Specialized orthopedic billing and coding
                      </p>
                    </div>
                  </Link>

                </div>


                {/* RIGHT COLUMN */}
                <div>

                  {/* Pediatrics */}
                  <Link
                    to="/specialities/pediatrics"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Baby size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Pediatrics
                      </h4>
                      <p className="text-xs text-gray-500">
                        Pediatric billing and claims management
                      </p>
                    </div>
                  </Link>


                  {/* Dermatology */}
                  <Link
                    to="/specialities/dermatology"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Activity size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Dermatology
                      </h4>
                      <p className="text-xs text-gray-500">
                        Dermatology billing and coding services
                      </p>
                    </div>
                  </Link>


                  {/* Behavioral Health */}
                  <Link
                    to="/specialities/behavioral-health"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Brain size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Behavioral Health
                      </h4>
                      <p className="text-xs text-gray-500">
                        Behavioral health revenue cycle support
                      </p>
                    </div>
                  </Link>


                  {/* Radiology */}
                  <Link
                    to="/specialities/radiology"
                    className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Scan size={20} className="text-blue-900" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-950 text-sm">
                        Radiology
                      </h4>
                      <p className="text-xs text-gray-500">
                        Imaging claims and specialty billing
                      </p>
                    </div>
                  </Link>

                </div>

              </div>


              {/* Bottom Link */}
              {/* <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          to="/specialities/specialities"
          className="text-sm font-semibold text-blue-900 hover:text-red-500"
        >
          View all specialities →
        </Link>
      </div> */}

            </div>
          </div>

        </div>



        {/* LOCATION */}
        <div className="relative group">
          <a
            href="/locations"
            className="flex items-center gap-1"
          >
            Location
            {/* <ChevronDown size={16} strokeWidth={2.5} /> */}
          </a>

          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-2
      hidden
     
      z-50
    "
          >
            <div className="w-[420px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">
              <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  <MapPin size={21} className="text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-blue-950">
                    Nationwide Medical Billing
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Medical billing and revenue cycle support for healthcare practices
                    across the United States.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  "West Coast",
                  "South",
                  "Northeast",
                  "Midwest",
                ].map((region) => (
                  <div
                    key={region}
                    className="rounded-xl border border-gray-100 p-3"
                  >
                    <p className="text-sm font-semibold text-blue-950">
                      {region}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/locations"
                className="
          mt-4
          flex
          items-center
          justify-between
          border-t
          border-gray-100
          pt-4
          text-sm
          font-semibold
          text-blue-900
          transition
          hover:text-red-500
        "
              >
                View Service Areas
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* RESOURCES */}
        <div className="relative group">

          {/* Resources */}
          <Link
            to="/resources"
            className="flex items-center gap-1 whitespace-nowrap"
          >
            Resources
            <ChevronDown size={16} strokeWidth={2.5} />
          </Link>


          {/* Resources Mega Menu */}
          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-2
      hidden
      group-hover:block
      z-50
    "
          >

            <div
              className="
        w-[520px]
        bg-white
        border
        border-gray-100
        rounded-2xl
        shadow-2xl
        p-5
      "
            >

              {/* Header */}
              <div className="flex items-start justify-between mb-4 px-2">

                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Resources
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Practical billing insights, guides and resources
                  </p>
                </div>

                <Link
                  to="/resources"
                  className="
            text-sm
            font-semibold
            text-blue-900
            flex
            items-center
            gap-1
            hover:gap-2
            transition-all
          "
                >
                  View all
                  <ArrowRight size={16} />
                </Link>

              </div>


              {/* RESOURCE ITEMS */}
              <div className="grid grid-cols-1 gap-1">


                {/* Insights & Articles */}
                <Link
                  to="/resources/insights"
                  className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
                >

                  <div
                    className="
              h-10
              w-10
              shrink-0
              rounded-lg
              bg-blue-100
              flex
              items-center
              justify-center
            "
                  >
                    <FileText size={19} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Insights & Articles
                    </h4>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Practical insights on medical billing and revenue cycle management
                    </p>
                  </div>

                </Link>


                {/* Billing Guides */}
                <Link
                  to="/resources/Billing-Guides"
                  className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
                >

                  <div
                    className="
              h-10
              w-10
              shrink-0
              rounded-lg
              bg-blue-100
              flex
              items-center
              justify-center
            "
                  >
                    <BookOpen size={19} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Billing Guides
                    </h4>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Clear guides covering billing, coding, denials and RCM workflows
                    </p>
                  </div>

                </Link>


                {/* Medical Billing Glossary */}
                <Link
                  to="/resources/Medical-Billing-Glossary"
                  className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
                >

                  <div
                    className="
              h-10
              w-10
              shrink-0
              rounded-lg
              bg-blue-100
              flex
              items-center
              justify-center
            "
                  >
                    <BookOpen size={19} className="text-blue-900" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-950 text-sm">
                      Medical Billing Glossary
                    </h4>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Plain-language explanations of common billing and RCM terms
                    </p>
                  </div>

                </Link>

              </div>


              {/* Bottom Link
      <div className="mt-4 pt-4 border-t border-gray-100">

        <Link
          to="/resources"
          className="
            flex
            items-center
            justify-between
            text-sm
            font-semibold
            text-blue-900
            hover:text-red-500
            transition
          "
        >
          Explore the Resource Center

          <ArrowRight size={16} />

        </Link>

      </div> */}

            </div>

          </div>

        </div>

        {/* ================= CONTACT ================= */}
        <div className="relative group">

          {/* Contact */}
          <a
            href="/contact"
            className=" flex items-center gap-1 whitespace-nowrap"
          >
            Contact
            {/* <ChevronDown size={16} strokeWidth={2.5} /> */}
          </a>


          {/* Contact Dropdown */}


        </div>

      </div>

      {/* Contact Button - Desktop */}
      {/* Contact Button - Desktop */}
<div className="hidden lg:block">
  <button
  href="/Contact"
    className="
      hidden lg:flex
      bg-[#e31b3f]
      hover:bg-[#c91636]
      rounded-full
      text-white
      px-2 sm:px-3
      py-1.5
      items-center
      gap-1 sm:gap-2
      text-sm sm:text-base
      whitespace-nowrap
    "
  >
    Contact Us

    <span className="bg-white rounded-full h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center">
      <ArrowRight
        size={15}
        className="sm:w-[17px] sm:h-[17px] text-black"
        strokeWidth={1.5}
      />
    </span>
  </button>
</div>

{/* Mobile Menu */}
<button className="lg:hidden text-blue-900">
  <Menu size={26} />
</button>

      {/* Mobile Menu */}
      <button className="lg:hidden text-blue-900">
        <Menu size={26} />
      </button>

    </div>
  );
};

export default Navbar;