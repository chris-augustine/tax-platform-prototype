import AppShell from "../../components/layout/AppShell";
import {
  Users,
  AlertTriangle,
  ClipboardCheck,
  Activity,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <AppShell role="firm_admin">
      <div className="admin_dashboard">
        <div className="admin_dashboard_header">
          <h1>Welcome back, Steve</h1>
          <p>Here's an overview of firm activity.</p>
        </div>

        <div className="admin_stats">
          <div className="admin_stat_card">
            <span>Active Returns</span>
            <strong>158</strong>
          </div>

          <div className="admin_stat_card">
            <span>Needs Attention</span>
            <strong>12</strong>
          </div>

          <div className="admin_stat_card">
            <span>In Quality Review</span>
            <strong>20</strong>
          </div>

          <div className="admin_stat_card">
            <span>Staff at Capacity</span>
            <strong>2</strong>
          </div>
        </div>



        <section className="admin_section">
          <div className="admin_section_title">
            <AlertTriangle size={20} />
            <h2>Returns Needing Attention</h2>
          </div>

          <div className="admin_card_list">
            <div className="admin_return_card">
              <div>
                <h3>Chris Augustine</h3>
                <p className="admin_return_type">
                  2025 Individual Tax Return


                </p>
                <p className="admin_return_desc">
                  Return is currently in quality review.
                </p>
              </div>

              <span className="admin_status review">Quality Review</span>
            </div>

            <div className="admin_return_card">
              <div>
                <h3>Joelito LLC</h3>
                <p className="admin_return_type">2025 Business Tax Return</p>
                <p className="admin_return_desc">
                  Two preparer notes require reviewer attention.
                </p>
              </div>

              <span className="admin_status attention">Needs Attention</span>
            </div>

            <div className="admin_return_card">
              <div>
                <h3>George Lopez</h3>
                <p className="admin_return_type">
                  2025 Individual Tax Return
                </p>
                <p className="admin_return_desc">
                  Client response has been overdue for five days.
                </p>
              </div>

              <span className="admin_status overdue">Overdue</span>
            </div>
          </div>
        </section>

        <section className="admin_section">
          <div className="admin_section_title">
            <Users size={20} />
            <h2>Staff Workload</h2>
          </div>

          <div className="admin_workload_table">
            <div className="admin_workload_header">
              <span>Team Member</span>

              <span>Role</span>
              <span>Assigned Work</span>
              <span>Workload</span>
            </div>

            <div className="admin_workload_row">
              <div>
                <strong>Albert Lockstein</strong>
              </div>

              <span>Tax Preparer</span>
              <span>12 Returns</span>
              <span className="workload_status high">High</span>
            </div>

            <div className="admin_workload_row">
              <div>
                <strong>Robert Lox</strong>
              </div>



              <span>Tax Reviewer</span>
              <span>6 Reviews</span>
              <span className="workload_status normal">Normal</span>
            </div>


            <div className="admin_workload_row">
              <div>
                <strong>Barry Allen</strong>
              </div>

              <span>Seasonal Staff</span>
              <span>4 Tasks</span>
              <span className="workload_status limited">Restricted</span>
            </div>
          </div>
        </section>

        <section className="admin_section">
          <div className="admin_section_title">
            <Activity size={20} />
            <h2>Recent Firm Activity</h2>
          </div>

          <div className="admin_activity_list">
            <div className="admin_activity_item">
              <ClipboardCheck size={18} />
              <div>

                <strong>3 returns moved to quality review</strong>
                <p>Today</p>
              </div>
            </div>

            <div className="admin_activity_item">
              <Users size={18} />
              <div>
                <strong>Seasonal workload assignments updated</strong>
                <p>Today</p>
              </div>
            </div>

            <div className="admin_activity_item">
              <ClipboardCheck size={18} />
              <div>
                <strong>5 returns approved by reviewers</strong>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </AppShell>
  );
}
