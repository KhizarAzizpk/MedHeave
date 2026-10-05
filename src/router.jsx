import { createBrowserRouter } from "react-router-dom";
import MainScreen from "./components/ui/mainscreen";
import Services from "./pages/services/services";
import RevenueCycleManagement from "./pages/services/RevenueCycleManagement";
import MedicalCoding from "./pages/services/MedicalCoding";
import MedicalBilling from "./pages/services/MedicalBilling";
import CredentialingServices from "./pages/services/CredentialingServices";
import ProviderEnrollment from "./pages/services/ProviderEnrollment";
import EligibilityVerification from "./pages/services/EligibilityVerification";
import PriorAuthorization from"./pages/services/PriorAuthorization";
import ClaimsManagement from "./pages/services/ClaimsManagement";
import PaymentPosting from "./pages/services/PaymentPosting";
import ARRecovery from "./pages/services/ARRecovery";
import DenialManagement from "./pages/services/DenialManagement";
import AccountsReceivableFollowUp from "./pages/services/AccountsReceivableFollowUp";
import FamilyMedicine from "./pages/Specialities/FamilyMedicine";
import Pediatrics from "./pages/Specialities/Pediatrics";
import InternalMedicine from "./pages/Specialities/InternalMedicine";
import Dermatology from "./pages/Specialities/dermatology";
import Cardiology from "./pages/Specialities/Cardiology";
import BehavioralHealth from "./pages/Specialities/BehavioralHealth";
import Orthopedics from "./pages/Specialities/Orthopedics";
import Radiology from "./pages/Specialities/Radiology";
import Specialities from "./pages/Specialities/Specialities";
import Locations from "./pages/Location/Locations";
import Insights from "./pages/Resources/Insights";
import BillingGuides from "./pages/Resources/BillingGuides";  
import MedicalBillingGlossary from "./pages/Resources/MedicalBillingGlossary";  
import Resources from "./pages/Resources/Resources";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
  },
  {
    path: "/services",
    element : <Services />,
  },
   {
    path: "/services/revenue-cycle-management",
    element: <RevenueCycleManagement />,
  },
  {
    path:"/services/MedicalCoding",
    element : <MedicalCoding />,
  },
  {
    path:"/service/MedicalBilling",
    element : <MedicalBilling/>
  },
  {
  path: "/services/credentialing",
  element: < CredentialingServices />,
},
{
    path: "/services/ProviderEnrollment",
    element : < ProviderEnrollment />
},
{
  path: "/services/eligibility-verification",
  element: <EligibilityVerification />,
},
{
  path: "/services/prior-authorization",
  element: <PriorAuthorization />,
},
{
  path: "/services/claims-management",
  element: <ClaimsManagement />,
},
{
  path: "/services/payment-posting",
  element: <PaymentPosting />,
},
{
  path: "/services/ar-recovery",
  element: <ARRecovery />,
},
{
  path: "/services/denial-management",
  element: <DenialManagement />,
},
{
  path: "/services/accounts-receivable-follow-up",
  element: <AccountsReceivableFollowUp />,
},
{
  path: "/specialities/family-medicine",
  element: <FamilyMedicine />,
},
{
  path: "/specialities/pediatrics",
  element: <Pediatrics />,
},
{
  path: "/specialities/internal-medicine",
  element: <InternalMedicine />,
},
{
  path: "/specialities/dermatology",
  element: <Dermatology />, 
},
{
  path: "/specialities/cardiology",
  element: <Cardiology />,
},
{
  path: "/specialities/behavioral-health",
  element: <BehavioralHealth />,
},
{
  path: "/specialities/orthopedics",
  element: <Orthopedics />,
},
{
  path: "/specialities/radiology",
  element: <Radiology />,
},
{
  path: "/specialities",
  element: <Specialities />,
},{
  path: "/locations",
  element: <Locations />,
},
{
  path: "/resources/insights",
  element: <Insights /> 
},
{
  path: "/resources/Billing-Guides",
  element: <BillingGuides />
},
{
  path: "/resources/Medical-Billing-Glossary",
  element: <MedicalBillingGlossary />
},
{ 
  path: "/resources",
  element: <Resources />
},
{
  path: "/components/ui/mainscreen",
  element: <MainScreen />
},
{
  path: "/contact",
  element: <Contact />
}
]);

export default router;