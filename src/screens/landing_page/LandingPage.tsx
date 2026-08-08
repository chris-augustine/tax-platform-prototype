import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="landing-page">
        <h1>Tax Platform Demo</h1>
        <p>Select a role to explore the platform.</p>

        <div className="role-grid">
            <div className="role-card">
                <h2>Chris Augustine</h2>
                <p>Individual Taxpayer</p>
                <Link to="/client">Go to Demo</Link>
            </div>

            <div className="role-card">
                <h2>Albert Lockstein</h2>
                <p>Tax Preparer</p>
                <Link to="/tax-preparer">Go to Demo</Link>
            </div>

            <div className="role-card">
                <h2>Joel Moneyhands</h2>
                <p>Business Owner</p>
                <Link to="/business-owner">Go to Demo</Link>
            </div>

            <div className="role-card">
                <h2>Robert Lox</h2>
                <p>Tax Reviewer</p>
                <Link to="/tax-reviewer">Go to Demo</Link>
            </div>

            <div className="role-card">
                <h2>Steve Hemsworth</h2>
                <p>Firm Admin</p>
                <Link to="/firm-admin">Go to Demo</Link>
            </div>

            <div className="role-card">
                <h2>Barry Allen</h2>
                <p>Seasonal Staff</p>
                <Link to="/seasonal-staff">Go to Demo</Link>
            </div>
        </div>
    </div>

  );
}