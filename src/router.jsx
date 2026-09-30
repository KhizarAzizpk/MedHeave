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
]);

export default router;