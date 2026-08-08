import type { UserRole } from "../../types";
import { Link, NavLink } from "react-router-dom";

interface SidebarProps {
  role: UserRole;
}

const navRole = {
    individual_taxpayer: [
        {label: "Dashboard", path: "/client"},
        {label: "Documents", path: "/client/documents"},
        {label: "Messages", path: "/client/messages"},
    ],

    business_owner: [
        { label: "Dashboard", path: "/business-owner" },
        { label: "Documents", path: "/business-owner/documents" },
        { label: "Messages", path: "/business-owner/messages" },
    
    ],

    tax_preparer: [
        {label: "Dashboard", path: "/tax-preparer"},
        {label: "Returns", path: "/tax-preparer/returns"},
    ],

    tax_reviewer: [
        {label: "Dashboard", path: "/tax-reviewer"},
        
    ],
    firm_admin: [
        {label: "Dashboard", path: "/firm-admin"},
    ],
    seasonal_staff: [
        {label: "Dashboard", path: "/seasonal-staff"},
    ],
};

export default function Sidebar({role}: SidebarProps) {
  const navigation = navRole[role];
  
  return (
    <aside className="sidebar">

     <Link to="/" className="sidebar-logo"><h2>Tax Platform</h2></Link>

      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <NavLink key={item.path} to={item.path} className="sidebar-link">
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}