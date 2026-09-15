import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import navbarlogo from "../../assets/images/navbarlogo.png";
import {
 
 FileText,
 ClipboardCheck,
  Activity,
  Calculator,
  HeartPulse,
  Brain,
  Stethoscope,
  ShieldCheck,
  Scan,
  Baby,
  Eye,
  Smile,
  Accessibility,
  Clock,
  UserCheck,
  BadgeCheck,
  MapPin,
  Phone,
CalendarCheck,
MessageCircle,

  FileCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  BarChart3,
  BookOpen,
  PlayCircle,
  HelpCircle,
   Building2,
  Target,
  Users,
  Sparkles,
  Handshake,
  
 

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

   <div className="relative group">

  {/* Services */}
  <a
    href="#services"
    className="flex items-center gap-1 whitespace-nowrap"
  >
    Services
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>


  {/* Services Mega Menu */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
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
          href="#services"
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
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 2. Medical Billing Services */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 3. Medical Coding */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 4. Credentialing Services */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 5. Provider Enrollment */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 6. Eligibility Verification */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 7. Prior Authorization */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 8. Claims Management */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 9. Payment Posting */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 10. AR Recovery */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 11. Denial Management */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


        {/* 12. Accounts Receivable Follow-up */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">

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

        </div>


      </div>


      {/* Bottom Link */}
      <div className="mt-4 pt-4 border-t border-gray-100">

        <a
          href="#services"
          className="
            text-sm
            font-semibold
            text-blue-900
            hover:text-blue-600
            transition
          "
        >
          View all services →
        </a>

      </div>

    </div>

  </div>

</div>

  
{/* SPECIALITIES */}
<div className="relative group">

  <a
    href="#"
    className="flex items-center gap-1"
  >
    Specialities
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>

  {/* Mega Menu */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
      hidden
      group-hover:block
      z-50
    "
  >
    <div
      className="
        w-[850px]
        max-h-[500px]
        overflow-y-auto
        bg-white
        rounded-2xl
        shadow-2xl
        border
        border-gray-100
        p-5

        scrollbar-thin
        scrollbar-thumb-blue-900
        scrollbar-track-gray-100
      "
    >

      {/* Heading */}
      <div className="mb-4 px-2">
        <h3 className="text-lg font-bold text-blue-950">
          Medical Specialities
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Specialty-matched billing teams across healthcare disciplines
        </p>
      </div>


      {/* Two Columns */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">

        {/* LEFT COLUMN */}

        <div>

          {/* Family Medicine */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>


          {/* Internal Medicine */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <HeartPulse size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Internal Medicine
              </h4>
              <p className="text-xs text-gray-500">
                Billing solutions for internal medicine providers
              </p>
            </div>
          </div>


          {/* Cardiology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <HeartPulse size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Cardiology
              </h4>
              <p className="text-xs text-gray-500">
                Cardiology coding, claims and revenue cycle
              </p>
            </div>
          </div>


          {/* Orthopedics */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>


          {/* Psychiatry */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Brain size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Psychiatry
              </h4>
              <p className="text-xs text-gray-500">
                Behavioral and psychiatric billing expertise
              </p>
            </div>
          </div>


          {/* Neurology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Brain size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Neurology
              </h4>
              <p className="text-xs text-gray-500">
                Accurate neurology coding and claims
              </p>
            </div>
          </div>


          {/* Dermatology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>


          {/* Radiology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>

        </div>


        {/* RIGHT COLUMN */}

        <div>

          {/* Urgent Care */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <ShieldCheck size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Urgent Care
              </h4>
              <p className="text-xs text-gray-500">
                Fast and accurate urgent care billing
              </p>
            </div>
          </div>


          {/* Physical Therapy */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Activity size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Physical Therapy
              </h4>
              <p className="text-xs text-gray-500">
                PT billing, coding and reimbursement
              </p>
            </div>
          </div>


          {/* Pain Management */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Activity size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Pain Management
              </h4>
              <p className="text-xs text-gray-500">
                Specialized pain management billing
              </p>
            </div>
          </div>


          {/* Behavioral Health */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>


          {/* Pediatrics */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
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
          </div>


          {/* Gastroenterology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Activity size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Gastroenterology
              </h4>
              <p className="text-xs text-gray-500">
                GI coding, claims and billing support
              </p>
            </div>
          </div>


          {/* Ophthalmology */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Eye size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Ophthalmology
              </h4>
              <p className="text-xs text-gray-500">
                Eye care billing and coding services
              </p>
            </div>
          </div>


          {/* Dental Billing */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Smile size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Dental Billing
              </h4>
              <p className="text-xs text-gray-500">
                Dental claims and reimbursement support
              </p>
            </div>
          </div>


          {/* Chiropractic Billing */}
          <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Accessibility size={20} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Chiropractic Billing
              </h4>
              <p className="text-xs text-gray-500">
                Chiropractic coding and billing solutions
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* Bottom Link */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href="#specialities"
          className="text-sm font-semibold text-blue-900 hover:text-red-500"
        >
          View all specialities →
        </a>
      </div>

    </div>
  </div>

</div>



        {/* LOCATION */}
<div className="relative group">

  <a
    href="#"
    className="flex items-center gap-1"
  >
    Location
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>

  {/* Location Mega Menu */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
      hidden
      group-hover:block
      z-50
    "
  >
    <div
      className="
        w-[560px]
        max-h-[380px]
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

      {/* Heading */}
      <div className="mb-5 px-2">

        <h3 className="text-lg font-bold text-blue-950">
          Medical Billing Locations
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Local expertise and revenue cycle support across America
        </p>

      </div>


      {/* All States */}
      <div
        className="
          mb-3
          flex
          items-center
          gap-4
          p-4
          rounded-xl
          bg-blue-50
          hover:bg-blue-100
          transition
        "
      >

        <div
          className="
            h-11
            w-11
            shrink-0
            rounded-xl
            bg-blue-900
            flex
            items-center
            justify-center
          "
        >
          <MapPin
            size={21}
            className="text-white"
          />
        </div>

        <div>
          <h4 className="font-semibold text-blue-950">
            All States
          </h4>

          <p className="text-xs text-gray-500">
            Medical billing, credentialing & RCM across all 50 states
          </p>
        </div>

      </div>


      {/* States */}
      <div className="grid grid-cols-2 gap-2">

        {/* California */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              California
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* Texas */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Texas
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* Florida */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Florida
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* New York */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              New York
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* Illinois */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Illinois
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* Pennsylvania */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Pennsylvania
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>


        {/* Arizona */}
        <div className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">

          <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <MapPin size={18} className="text-blue-900" />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Arizona
            </h4>

            <p className="text-xs text-gray-500">
              Billing & RCM support
            </p>
          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">

        <p className="text-xs text-gray-400">
          50-state coverage in progress
        </p>

        <a
          href="#locations"
          className="
            text-sm
            font-semibold
            text-blue-900
            hover:text-red-500
            transition
          "
        >
          View all locations →
        </a>

      </div>

    </div>
  </div>

</div>

{/* RESOURCES */}
<div className="relative group">

  {/* Resources */}
  <a
    href="#"
    className="flex items-center gap-1 whitespace-nowrap"
  >
    Resources
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>


  {/* Resources Mega Menu */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
      hidden
      group-hover:block
      z-50
    "
  >

    <div
      className="
        w-[700px]
        max-h-[460px]
        overflow-y-auto
        scrollbar-thin
        scrollbar-thumb-blue-900
        scrollbar-track-gray-100
        bg-white
        border
        border-gray-100
        rounded-2xl
        shadow-2xl
        p-5
      "
    >

      {/* Header */}
      <div className="flex items-start justify-between mb-4 px-3">

        <div>
          <h3 className="text-lg font-bold text-blue-950">
            Resources
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Practical tools, guides and billing resources for healthcare practices
          </p>
        </div>

        <a
          href="#resources"
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
          View all resources
          <ArrowRight size={16} />
        </a>

      </div>


      {/* TWO COLUMNS */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">


        {/* ================= LEFT COLUMN ================= */}
        <div>

          {/* CPT Codes */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <FileText size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                CPT Codes
              </h4>

              <p className="text-xs text-gray-500">
                Common procedural terminology guides
              </p>
            </div>

          </a>


          {/* ICD-10 */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <ClipboardCheck size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                ICD-10 Codes
              </h4>

              <p className="text-xs text-gray-500">
                Diagnosis codes and documentation tips
              </p>
            </div>

          </a>


          {/* HCPCS */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <FileCheck size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                HCPCS Codes
              </h4>

              <p className="text-xs text-gray-500">
                Supply, DME and service code resources
              </p>
            </div>

          </a>


          {/* Modifiers */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <BadgeCheck size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Billing Modifiers
              </h4>

              <p className="text-xs text-gray-500">
                Modifier guides to prevent denials
              </p>
            </div>

          </a>


          {/* Denial Codes */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <AlertCircle size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Denial Codes
              </h4>

              <p className="text-xs text-gray-500">
                CARC/RARC explanations and appeals
              </p>
            </div>

          </a>


          {/* Billing Glossary */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <BookOpen size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Billing Glossary
              </h4>

              <p className="text-xs text-gray-500">
                Plain-language RCM terminology
              </p>
            </div>

          </a>

        </div>


        {/* ================= RIGHT COLUMN ================= */}
        <div>

          {/* Denial Prevention */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <BookOpen size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Denial Prevention Playbook
              </h4>

              <p className="text-xs text-gray-500">
                A practical framework for reducing claim denials
              </p>
            </div>

          </a>


          {/* RCM Benchmark */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <BarChart3 size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                State of RCM in Small Practices
              </h4>

              <p className="text-xs text-gray-500">
                Benchmarks for collections, denials and days in AR
              </p>
            </div>

          </a>


          {/* Prior Auth */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <PlayCircle size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Prior Auth Automation
              </h4>

              <p className="text-xs text-gray-500">
                Improve prior authorization workflows
              </p>
            </div>

          </a>


          {/* Billing Partner */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <HelpCircle size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Choosing a Billing Partner
              </h4>

              <p className="text-xs text-gray-500">
                27 questions to ask before choosing a partner
              </p>
            </div>

          </a>


          {/* Revenue Calculator */}
          <a
            href="#"
            className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
          >

            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
              <Calculator size={19} className="text-blue-900" />
            </div>

            <div>
              <h4 className="font-semibold text-blue-950 text-sm">
                Practice Revenue Health Calculator
              </h4>

              <p className="text-xs text-gray-500">
                Benchmark your practice revenue and KPIs
              </p>
            </div>

          </a>

        </div>

      </div>


      {/* Bottom Link */}
      <div className="mt-4 pt-4 border-t border-gray-100">

        <a
          href="#resources"
          className="
            text-sm
            font-semibold
            text-blue-900
            hover:text-blue-600
            transition
          "
        >
          View all resources →
        </a>

      </div>

    </div>

  </div>

</div>

        {/* COMPANY */}
<div className="relative group">

  <a
    href="#"
    className="flex items-center gap-1"
  >
    Company
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>


  {/* Company Dropdown */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
      hidden
      group-hover:block
      z-50
    "
  >

    <div
      className="
        w-[580px]
        max-h-[420px]
        overflow-y-auto
        scrollbar-thin
        scrollbar-thumb-blue-900
        scrollbar-track-gray-100
        bg-white
        border
        border-gray-100
        rounded-2xl
        shadow-2xl
        p-5
      "
    >

      {/* Header */}
      <div className="mb-5 px-2">

        <h3 className="text-lg font-bold text-blue-950">
          About Med-Heave
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Learn more about our company, mission and healthcare vision
        </p>

      </div>


      {/* Company Items */}
      <div className="grid grid-cols-2 gap-2">


        {/* About Us */}
        <a
          href="#about"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Building2
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              About Us
            </h4>

            <p className="text-xs text-gray-500">
              Learn about Med-Heave and what we do
            </p>
          </div>

        </a>


        {/* Our Mission */}
        <a
          href="#mission"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Target
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Our Mission
            </h4>

            <p className="text-xs text-gray-500">
              Our vision for better healthcare operations
            </p>
          </div>

        </a>


        {/* Our Team */}
        <a
          href="#team"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Users
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Our Team
            </h4>

            <p className="text-xs text-gray-500">
              Meet the people behind Med-Heave
            </p>
          </div>

        </a>


        {/* Why Med-Heave */}
        <a
          href="#why-us"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Sparkles
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Why Med-Heave
            </h4>

            <p className="text-xs text-gray-500">
              What makes our approach different
            </p>
          </div>

        </a>


        {/* Partners */}
        <a
          href="#partners"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Handshake
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Partners
            </h4>

            <p className="text-xs text-gray-500">
              Healthcare partnerships and collaborations
            </p>
          </div>

        </a>


        {/* Contact Us */}
        <a
          href="#contact"
          className="
            flex
            gap-3
            p-3
            rounded-xl
            hover:bg-blue-50
            transition
          "
        >

          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
            <Phone
              size={19}
              className="text-blue-900"
            />
          </div>

          <div>
            <h4 className="font-semibold text-blue-950 text-sm">
              Contact Us
            </h4>

            <p className="text-xs text-gray-500">
              Get in touch with our team
            </p>
          </div>

        </a>

      </div>


      {/* Bottom */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">

        <p className="text-xs text-gray-400">
          Healthcare billing made smarter
        </p>

        <a
          href="#about"
          className="
            text-sm
            font-semibold
            text-blue-900
            hover:text-red-500
            transition
          "
        >
          Learn more →
        </a>

      </div>

    </div>

  </div>

</div>
        {/* ================= CONTACT ================= */}
<div className="relative group">

  {/* Contact */}
  <a
    href="#contact"
    className="flex items-center gap-1 whitespace-nowrap"
  >
    Contact
    <ChevronDown size={16} strokeWidth={2.5} />
  </a>


  {/* Contact Dropdown */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      pt-4
      hidden
      group-hover:block
      z-50
    "
  >

    <div
      className="
        w-[300px]
        bg-white
        border
        border-gray-100
        rounded-2xl
        shadow-2xl
        p-4
      "
    >

      {/* Contact Us */}
      <a
        href="#contact"
        className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
      >
        <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
          <Phone size={19} className="text-blue-900" />
        </div>

        <div>
          <h4 className="font-semibold text-blue-950 text-sm">
            Contact Us
          </h4>

          <p className="text-xs text-gray-500">
            Talk to our healthcare billing team
          </p>
        </div>
      </a>


      {/* Request Demo */}
      <a
        href="#demo"
        className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
      >
        <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
          <CalendarCheck size={19} className="text-blue-900" />
        </div>

        <div>
          <h4 className="font-semibold text-blue-950 text-sm">
            Request a Demo
          </h4>

          <p className="text-xs text-gray-500">
            See how Med-Heave can help your practice
          </p>
        </div>
      </a>


      {/* Support */}
      <a
        href="#support"
        className="flex gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
      >
        <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center">
          <MessageCircle size={19} className="text-blue-900" />
        </div>

        <div>
          <h4 className="font-semibold text-blue-950 text-sm">
            Support
          </h4>

          <p className="text-xs text-gray-500">
            Get help with your billing needs
          </p>
        </div>
      </a>

    </div>

  </div>

</div>

      </div>

      {/* Contact Button - Desktop */}
      <div className="hidden lg:block">
        <button
  className="
    hidden lg:flex
    bg-red-500 hover:bg-red-600
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

    </div>
  );
};
  
export default Navbar;