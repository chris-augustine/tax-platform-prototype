import { DemoProvider } from "./context/DemoContext";
import './App.css'
import "@fontsource/inter"; 
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/400-italic.css"; 
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from "./screens/landing_page/LandingPage"
import ClientDashboard from "./screens/client/ClientDashboard"
import PreparerDashboard from "./screens/tax_preparer/PreparerDashboard"
import ReviewerDashboard from "./screens/tax_reviewer/ReviewerDashboard"
import AdminDashboard from "./screens/firm_admin/AdminDashboard"
import SSDashboard from "./screens/seasonal_staff/SSDashboard"
import ClientDocs from "./screens/client/ClientDocs"
import ClientMessages from "./screens/client/ClientMessages"
import PreparerReturns from "./screens/tax_preparer/PreparerReturns"
import PreparerWorkspace from "./screens/tax_preparer/PreparerWorkspace"
import ReviewerWorkspace from './screens/tax_reviewer/ReviewerWorkspace'
import BusinessDashboard from "./screens/business_owner/BusinessDashboard";
import BusinessDocs from "./screens/business_owner/BusinessDocs";
import BusinessMessages from "./screens/business_owner/BusinessMessages";


function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/client" element={<ClientDashboard />} />
            <Route path="/client/documents" element={<ClientDocs />} />
            <Route path="/client/messages" element={<ClientMessages />} />

            <Route path="/business-owner" element={<BusinessDashboard />} />
            <Route path="/business-owner/documents" element={<BusinessDocs />} />
            <Route path="/business-owner/messages" element={<BusinessMessages />} />

            <Route path="/tax-preparer" element={<PreparerDashboard />} />
            <Route path="/tax-preparer/returns" element={<PreparerReturns />} />
            <Route path="/tax-preparer/workspace" element={<PreparerWorkspace />} />

            <Route path="/tax-reviewer" element={<ReviewerDashboard />} />
            <Route path="/tax-reviewer/workspace" element={<ReviewerWorkspace />} />

            <Route path="/firm-admin" element={<AdminDashboard />} />

            <Route path="/seasonal-staff" element={<SSDashboard />} />
          
          </Routes>
      
      </BrowserRouter>

    </DemoProvider>
  );

}

export default App
