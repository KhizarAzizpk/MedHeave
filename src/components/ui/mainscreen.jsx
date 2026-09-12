import Navbar from "./Navbar";

import hipaaIcon from "../../assets/images/hipaa-icon.png";
import reimbursementsIcon from "../../assets/images/reimbursements-icon.png";
import revenueCycleIcon from "../../assets/images/revenue-cycle-icon.png";

import medheaveMain from "../../assets/images/medheave_main.png";
import heroBg from "../../assets/images/hero-bg.png";

import ourImpact from "../../assets/images/secondimage.png";
import leftImage from "../../assets/images/lefticon.png";
import rightImage from "../../assets/images/righticon.png";
import card1S3 from "../../assets/images/card_1S3.png";
import card2S3 from "../../assets/images/card_2S3.png";
import card3S3 from "../../assets/images/card_3S3.png";
import card4S3 from "../../assets/images/card_4S3.png";
import card5S3 from "../../assets/images/card_5S3.png";
import card6S3 from "../../assets/images/card_6S3.png";
import card7S3 from "../../assets/images/card_7S3.png";
import card8S3 from "../../assets/images/card_8S3.png";
import card9S3 from "../../assets/images/card_9S3.png";
import card1 from "../../assets/images/card_1.png";
import card2 from "../../assets/images/card_2.png";
import card3 from "../../assets/images/card_3.png";
import card4 from "../../assets/images/card_4.png";
import card5 from "../../assets/images/card_5.png";
import card6 from "../../assets/images/card_6.png";
import computer_illustration from "../../assets/images/computer_illustration2.png"

import {
  UserRound,
  Code2,
  FileText,
  ShieldCheck,
  CreditCard,
  BarChart3,
  ArrowRight,
  ArrowDown,
  Activity,
  HeartCrack,

  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  HeartPulse,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MainScreen = () => {
  return (
    <div className="relative overflow-hidden pt-4">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">

          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
            Smarter Medical
            <br />
            <span className="text-red-500">Billing</span>.
            <br />
            Better Healthcare.
          </h1>

          <p className="text-base sm:text-lg text-blue-400 max-w-xl">
            Streamline your revenue cycle with our HIPAA-compliant medical
            billing services. Faster claims, higher reimbursements, and
            improved cash flow for your practice.
          </p>

          {/* Three Features */}
          <div className="mt-3 flex flex-wrap gap-5 sm:gap-8">

            <div className="flex items-center gap-2">
              <img
                src={hipaaIcon}
                alt="HIPAA"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  HIPAA
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Compliant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={reimbursementsIcon}
                alt="Reimbursements"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Reimbursements
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Higher payments
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={revenueCycleIcon}
                alt="Revenue Cycle"
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Revenue Cycle
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Streamlined management
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="self-start bg-red-500 rounded-full text-white px-3 py-2 flex items-center gap-2 hover:bg-red-600">

            Get Started

            <span className="bg-white rounded-full h-7 w-7 flex items-center justify-center">
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="text-black"
              />
            </span>

          </button>

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">

          <img
            src={medheaveMain}
            alt="Medical billing dashboard"
            className="w-full max-w-[550px] h-auto object-contain"
          />

        </div>

      </div>


      {/* =====================================================
          OUR IMPACT SECTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={ourImpact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />


        {/* =================================================
            LEFT TRANSPARENT ILLUSTRATION
        ================================================== */}

       <img
  src={leftImage}
  alt=""
  className="hidden 
  xl:block 
  absolute
   left-[-15px] 
   bottom-[50px] 
   w-[350px] 
   h-auto 
   object-contain
    z-[1]"
        />


        {/* =================================================
            RIGHT TRANSPARENT ILLUSTRATION
        ================================================== */}

        <img
          src={rightImage}
          alt=""
          className="
          hidden
          xl:block
            absolute
            right-[-35px]
              bottom-[45px]
            
            w-[380px]
          
            h-auto
            object-contain
            z-[1]
          "
        />


        {/* =================================================
            OUR IMPACT CONTENT
        ================================================== */}

        <div className="relative z-10 flex flex-col items-center pt-10 lg:pt-12 pb-8">


          {/* Small Label */}
          <div className="flex items-center gap-2 bg-[#e8eaff] rounded-full px-5 py-2 mb-4">

            <span className="text-indigo-600 text-lg">
              ▥
            </span>

            <span className="text-indigo-600 font-semibold text-sm">
              Our Impact
            </span>

          </div>


          {/* Heading */}
          <h2 className="text-center text-3xl sm:text-4xl lg:text-[39px] font-bold text-[#142957] leading-tight">

            These aren’t{" "}

            <span className="text-[#ed3f62]">
              aspirational
            </span>{" "}

            targets.

          </h2>


          {/* Description */}
          <p className="text-center text-[#71809d] text-sm sm:text-base mt-2 leading-relaxed">

            These metrics are what we deliver, consistently, across all
            practices and specialties we work with.

            <br />

            Real results. Measurable impact.

          </p>


          {/* =================================================
              SIX MIDDLE CARDS
          ================================================== */}

          <div
            className="
              relative z-10 mt-6 grid
              w-full max-w-[620px]
              grid-cols-2 justify-items-center gap-2
              sm:grid-cols-3 sm:max-w-[700px] sm:gap-3
              lg:grid-cols-6 lg:max-w-[660px] lg:gap-3
              xl:max-w-[700px]
            "
          >
            {[card1, card2, card3, card4, card5, card6].map((card, index) => (
              <img
                key={index}
                src={card}
                alt={`Impact card ${index + 1}`}
                className="
                  h-auto
                  w-full
                  max-w-[150px]
                  object-contain
                "
              />
            ))}
          </div>

        </div>

      </section>
      {/* =====================================================

{/* =====================================================
    MEDICAL BILLING SERVICES SECTION
===================================================== */}

<section className="relative w-full overflow-hidden bg-[#f4faff] px-4 pt-5 pb-14">

  {/* =================================================
      BACKGROUND GLOW
  ================================================== */}

  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-blue-100/30 blur-3xl" />

    <div className="absolute bottom-0 left-[-200px] w-[500px] h-[300px] rounded-full bg-blue-100/20 blur-3xl" />

  </div>


  {/* =================================================
      TOP HEADING AREA
  ================================================== */}

  <div className="relative z-10 flex flex-col items-center text-center">

    {/* Badge */}

    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eee5ff] to-[#e4f3ff] px-4 py-2 mb-4">

      <Activity
        size={17}
        strokeWidth={2}
        className="text-[#8b4ed8]"
      />

      <span className="text-sm font-semibold text-[#3675c8]">
        Medical billing services
      </span>

    </div>


    {/* Main Heading */}

    <h1 className="text-[#092957] text-4xl sm:text-5xl lg:text-[32px] font-extrabold tracking-tight leading-[1.12]">

      More Than Billing.
      <br />

      We Keep Your{" "}

      <span className="text-[#ed174c]">
        Revenue
      </span>{" "}

      <span className="text-[#168be8]">
        Moving.
      </span>

    </h1>


    {/* Subtitle */}

    <p className="mt-3 max-w-[680px] text-sm sm:text-base leading-relaxed text-[#71839e] font-medium">

      From patient registration to final payment, we handle the complexities
      of the revenue cycle

      <br className="hidden sm:block" />

      so you can focus on what matters most — your patients.

    </p>

  </div>



  {/* =================================================
      COMPLETE SCREEN CONTENT
  ================================================== */}

  <div className="relative z-10 w-full max-w-[1320px] mx-auto mt-6">


    {/* =================================================
        TOP ROW
        LEFT = 70%
        RIGHT = 30%
    ================================================== */}

    <div className="flex flex-col lg:flex-row gap-3 w-full items-stretch">


      {/* =================================================
          LEFT BIG CARD — 70%

          card9S3 contains:
          - Revenue Cycle Management heading
          - Description
          - Main illustration
          - Learn More button
      ================================================== */}

    <div className="w-full lg:flex-[0_0_70%]">

  <div className="w-full min-h-[250px] rounded-[24px] bg-gradient-to-r from-[#fff7fa] to-[#f5fbff] border border-white shadow-sm p-6 flex items-center justify-between gap-6">

    {/* LEFT CONTENT */}
    <div className="flex flex-col items-start max-w-[45%]">

      {/* Icon + Heading */}
      <div className="flex items-start gap-3 mb-3">

        <div className="w-12 h-12 rounded-xl bg-[#f52b5b] flex items-center justify-center shrink-0">

          <BarChart3
            size={25}
            strokeWidth={2}
            className="text-white"
          />

        </div>

        <h2 className="text-xl lg:text-2xl font-bold leading-tight text-[#142957]">
          Revenue Cycle
          <br />
          Management
        </h2>

      </div>


      {/* Three-line Description */}
      <p className="text-sm leading-relaxed text-[#71839e]">

        We streamline your entire revenue cycle — from
        <br />
        patient registration to payment — ensuring
        <br />
        maximum reimbursement, fewer denials, and
        <br />
        sustainable growth.

      </p>


      {/* Learn More Button */}
      <button className="mt-4 bg-[#ed174c] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-[#d91243]">

        Learn More

        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">

          <ArrowRight
            size={15}
            strokeWidth={2}
            className="text-[#ed174c]"
          />

        </span>

      </button>

    </div>


    {/* RIGHT IMAGE */}
    <div className="w-[55%] flex justify-center items-center">

      <img
        src={card9S3}
        alt="Revenue Cycle Management"
        className="w-full h-auto object-contain"
      />

    </div>

  </div>

</div>



      {/* =================================================
          RIGHT PROCESS CARD — 30%
      ================================================== */}

      <div className="w-full lg:flex-1 rounded-[24px] border border-[#dcebf7] bg-white/50 px-4 py-5 flex flex-col justify-center">


        {/* =================================================
            TOP PROCESS ROW
        ================================================== */}

        <div className="flex items-start justify-between w-full">


          {/* PATIENT */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dff3ff] flex items-center justify-center">

              <UserRound
                size={25}
                strokeWidth={2}
                className="text-[#1598df]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Patient
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#78bce9]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* CODING */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0e4ff] flex items-center justify-center">

              <Code2
                size={25}
                strokeWidth={2}
                className="text-[#8b4bd8]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Coding
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#e6a1c2]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* CLAIM */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ffe4ec] flex items-center justify-center">

              <FileText
                size={25}
                strokeWidth={2}
                className="text-[#e52c5b]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Claim
            </span>

          </div>

        </div>



        {/* =================================================
            CENTER DOWN ARROW
        ================================================== */}

        <div className="flex justify-center my-1 text-[#75b9e8]">

          <ArrowDown
            size={20}
            strokeWidth={1.5}
          />

        </div>



        {/* =================================================
            BOTTOM PROCESS ROW
        ================================================== */}

        <div className="flex items-start justify-between w-full">


          {/* PAYER */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dcf7f4] flex items-center justify-center">

              <ShieldCheck
                size={25}
                strokeWidth={2}
                className="text-[#14a7bd]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Payer
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#78bce9]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* PAYMENT */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dceeff] flex items-center justify-center">

              <CreditCard
                size={25}
                strokeWidth={2}
                className="text-[#168be8]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Payment
            </span>

          </div>


          {/* ARROW */}

          <div className="flex items-center pt-4 text-[#b18be5]">
            <ArrowRight size={18} strokeWidth={1.5} />
          </div>


          {/* REVENUE */}

          <div className="flex flex-col items-center gap-1">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0e4ff] flex items-center justify-center">

              <BarChart3
                size={25}
                strokeWidth={2}
                className="text-[#8b45d6]"
              />

            </div>

            <span className="text-[10px] sm:text-[12px] font-bold text-[#142957]">
              Revenue
            </span>

          </div>

        </div>

      </div>

    </div>



  {/* =================================================
    BOTTOM SERVICE CARDS
    4 COLUMNS × 2 ROWS
================================================= */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

  {/* CARD 1 — MEDICAL BILLING */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card1S3} alt="Medical Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Billing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We manage your claim submissions,<br />
        tracking, and payment posting with<br />
        accuracy and speed.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 2 — MEDICAL CODING */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card2S3} alt="Medical Coding" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Coding</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We ensure accurate, compliant<br />
        coding with the latest ICD-10,<br />
        CPT, and HCPCS guidelines.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 3 — MEDICAL CREDENTIALING */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card3S3} alt="Medical Credentialing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Medical Credentialing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We handle provider enrollment<br />
        and credentialing with payers,<br />
        so you can focus on care.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 4 — PRIOR AUTHORIZATION */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card4S3} alt="Prior Authorization" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Prior Authorization</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We get the necessary approvals<br />
        from insurance companies quickly<br />
        and accurately.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 5 — WORKER'S COMP */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card5S3} alt="Workers Compensation and No Fault Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">
        Worker's Comp & No-Fault Billing
      </h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We manage complex claims and<br />
        ensure timely billing for workers'<br />
        comp and no-fault cases.
      </p>
     <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 6 — DENIAL MANAGEMENT */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card6S3} alt="Denial Management" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Denial Management</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We identify, appeal, and resolve denials<br />
        with a data-driven approach to<br />
        maximize your revenue.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 7 — PATIENT BILLING */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card7S3} alt="Patient Billing" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">Patient Billing</h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        We handle patient statements,<br />
        follow-ups, and payment plans to<br />
        improve collections and satisfaction.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>


  {/* CARD 8 — BETTER PROCESSES */}
  <div className="w-full rounded-[24px] bg-white/70 border border-[#e5eef7] p-4 flex items-center gap-3">
    <div className="w-[38%] shrink-0">
      <img src={card8S3} alt="Better Processes Healthier Revenue" className="w-full h-auto object-contain" />
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#142957]">
        Better Processes.<br />
        Healthier Revenue.
      </h3>
      <p className="mt-1 text-[10px] leading-relaxed text-[#71839e]">
        Smarter workflows and better results for your
        healthcare practice.We handle patient statements,
        follow-ups.
      </p>
      <div className="flex justify-end mt-3">
  <div className="bg-blue-200 h-7 w-7 rounded-full flex items-center justify-center text-blue-500">
    <ArrowRight strokeWidth={2} size={15} />
  </div>
</div>
    </div>
  </div>
</div>
</div>

</section>

{/* =====================================================
    ABOUT US SECTION
====================================================== */}

<section className="relative w-full overflow-hidden bg-[#f4faff] py-20">

  {/* Background glows */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:px-12">

    {/* Left Content */}
    <div className="w-full lg:w-1/2">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9eafa] bg-white px-4 py-2">
        <div className="flex h-5 w-5 items-center justify-center text-red-500 bfg">
  <HeartCrack
    size={20}
    strokeWidth={2}
    className="text-red-500"  
  /> 
</div>
        <span className="text-sm font-semibold text-[#168be8]">
          About Us
        </span>
      </div>

      <h2 className="max-w-[560px] text-4xl font-bold leading-tight text-[#092957] sm:text-5xl">
        Simplifying Healthcare.
        <br />
        <span className="text-[#ed174c]">Strengthening</span>{" "}
        <span className="text-[#168be8]">Practices.</span>
      </h2>

      <p className="mt-6 max-w-[540px] text-base leading-8 text-[#71839e]">
        We help healthcare providers simplify their administrative
        processes, improve revenue performance, and spend more time
        focusing on patient care.
      </p>

      <p className="mt-4 max-w-[540px] text-base leading-8 text-[#71839e]">
        Our technology-driven solutions bring billing, coding, claims,
        and revenue cycle management together in one seamless workflow.
      </p>

      <button className="mt-8 flex items-center gap-3 rounded-full bg-[#ed174c] px-5 py-2.5 font-semibold text-white transition hover:bg-[#d91445]">
        Learn More

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ed174c]">
          <ArrowRight size={17} strokeWidth={2} />
        </span>
      </button>

    </div>

    
    {/* Right Image */}
<div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:mr-[-48px]">
  <img
    src={computer_illustration}
    alt="Healthcare management illustration"
    className="h-auto w-full max-w-[580px] object-contain"
  />
</div>

  </div>

</section>
{/* =====================================================
    FOOTER SECTION
====================================================== */}

<footer className="relative overflow-hidden bg-[#f4faff] text-[#0b3b66]">

  {/* Decorative left image */}
  <img
    src={leftImage}
    alt=""
    className="pointer-events-none absolute bottom-40 right-[-50px]  hidden w-[230px] opacity-80 lg:block"
  />

  {/* Soft background glow */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#dff2ff] blur-[100px]" />
    <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#e8f5ff] blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

      {/* Brand */}
      <div className="max-w-[330px]">

        <h2 className="text-3xl font-extrabold tracking-tight">
          <span className="text-[#ed174c]">Med</span>{" "}
          <span className="text-[#168be8]">Heave</span>
        </h2>

        <h4 className="mt-4 text-sm font-semibold uppercase tracking-[3px] text-[#168be8]">
          Smarter Healthcare. Better Outcomes.
        </h4>

        <p className="mt-5 text-sm leading-7 text-[#52708c]">
          Empowering healthcare providers with reliable medical billing,
          revenue cycle management, and technology-driven solutions that
          simplify operations and improve financial performance.
        </p>

        {/* Social Links */}
        <div className="mt-7 flex items-center gap-3">

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#ed174c] hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#168be8] hover:text-white"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#ed174c] hover:text-white"
          >
            <FaYoutube size={16} />
          </a>

          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8e2f5] text-[#168be8] transition hover:bg-[#168be8] hover:text-white"
          >
            <FaXTwitter size={16} />
          </a>

        </div>
      </div>


      {/* Quick Links */}
      <div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
            <ArrowUpRight size={18} />
          </div>

          <h3 className="text-lg font-bold text-[#0b3b66]">
            Quick Links
          </h3>
        </div>

        <ul className="space-y-4 text-sm text-[#52708c]">
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Home</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">About Us</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Our Services</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Why Choose Us</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Contact Us</a>
          </li>
        </ul>

      </div>


      {/* Our Services */}
      <div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
            <HeartPulse size={18} />
          </div>

          <h3 className="text-lg font-bold text-[#0b3b66]">
            Our Services
          </h3>
        </div>

        <ul className="space-y-4 text-sm text-[#52708c]">
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Medical Billing</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Medical Coding</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Credentialing</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">Denial Management</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#168be8]">
              Revenue Cycle Management
            </a>
          </li>
        </ul>

      </div>


      {/* Get In Touch */}
      <div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#168be8] shadow-sm">
            <Mail size={18} />
          </div>

          <h3 className="text-lg font-bold text-[#0b3b66]">
            Get In Touch
          </h3>
        </div>

        <p className="text-sm leading-7 text-[#52708c]">
          Your partner in{" "}
          <span className="font-semibold text-[#ed174c]">
            healthcare success.
          </span>
        </p>

        <div className="mt-6 space-y-4 text-sm text-[#52708c]">

          <div className="flex items-start gap-3">
            <MapPin
              size={17}
              className="mt-1 shrink-0 text-[#168be8]"
            />
            <span>Serving healthcare providers worldwide</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail
              size={17}
              className="shrink-0 text-[#168be8]"
            />
            <span>info@medheave.com</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone
              size={17}
              className="shrink-0 text-[#168be8]"
            />
            <span>+1 (000) 000-0000</span>
          </div>

        </div>

      </div>

    </div>


    {/* Bottom Footer */}
    <div className="mt-14 border-t border-[#cfe5f5] pt-6">

      <div className="flex flex-col justify-between gap-4 text-xs text-[#6c879f] sm:flex-row">

        <p>
          © 2026 Med Heave. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="transition hover:text-[#168be8]">
            Privacy Policy
          </a>

          <a href="#" className="transition hover:text-[#168be8]">
            Terms & Conditions
          </a>
        </div>

      </div>

    </div>

  </div>

</footer>




    </div>
  );
};

export default MainScreen;