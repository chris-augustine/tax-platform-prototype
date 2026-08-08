import AppShell from "../../components/layout/AppShell";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function SeasonalDashboard() {
  return (
    <AppShell role="seasonal_staff">
      <div className="seasonal_dashboard">

        <div className="seasonal_dashboard_header">
          <h1>Welcome back, Barry</h1>
          <p>Here are your assigned tasks for today.</p>
        </div>

        <div className="seasonal_stats">
          <div className="seasonal_stat_card">
            <span>Assigned Tasks</span>
            <strong>3</strong>
          </div>

          <div className="seasonal_stat_card">
            <span>Due Today</span>
            <strong>2</strong>
          </div>

          <div className="seasonal_stat_card">
            <span>Completed</span>
            <strong>1</strong>
          </div>
        </div>

        <section className="seasonal_section">
          <div className="seasonal_section_title">
            <ClipboardList size={20} />
            <h2>Assigned Tasks</h2>
          </div>

          <div className="seasonal_task_list">

            <div className="seasonal_task_card">
              <div>
                <div className="seasonal_task_title_row">
                  <h3>Chris Augustine</h3>
                  <span className="seasonal_priority high">
                    Due Today
                  </span>
                </div>

                <p className="seasonal_return_desc">
                  2025 Individual Tax Return
                </p>

                <p className="seasonal_task_desc">
                  Confirm that the uploaded 1099-INT is attached
                  to the correct client record.
                </p>

              </div>

              <button className="seasonal_task_button">
                Open Task
              </button>
            </div>

            <div className="seasonal_task_card">
              <div>
                <div className="seasonal_task_title_row">
                  <h3>George Lopez</h3>
                  <span className="seasonal_priority high">
                    Due Today
                  </span>
                </div>

                <p className="seasonal_return_desc">
                  2025 Individual Tax Return
                </p>

                <p className="seasonal_task_desc">
                  Organize uploaded charitable contribution receipts.
                </p>

              
              </div>

              <button className="seasonal_task_button">
                Open Task
              </button>
            </div>

            <div className="seasonal_task_card">
              <div>
                <h3>Joelito LLC</h3>

                <p className="seasonal_return_desc">
                  2025 Business Tax Return
                </p>

                <p className="seasonal_task_desc">
                  Verify that Q1–Q3 bank statements are labeled
                  correctly within the documents that were given.
                </p>

              </div>

              <button className="seasonal_task_button">
                Open Task
              </button>
            </div>

          </div>
        </section>

        <section className="seasonal_section">
          <div className="seasonal_section_title">
            <Lock size={20} />
            <h2>Access Restrictions</h2>
          </div>

          <div className="seasonal_access_card">
            <div className="seasonal_access_item">
              <CheckCircle2 size={18} />
              <span>View assigned clients and documents</span>
            </div>

            <div className="seasonal_access_item">
              <CheckCircle2 size={18} />
              <span>Complete the tasks that have been designated to you</span>
            </div>


            <div className="seasonal_access_item restricted">
              <Lock size={18} />
              <span>Cannot send returns to quality review</span>
            </div>

            <div className="seasonal_access_item restricted">
              <Lock size={18} />
              <span>Cannot approve or file returns</span>
            </div>
          </div>
        </section>

        <section className="seasonal_section">
          <div className="seasonal_section_title">
            <Clock size={20} />
            <h2>Recently Completed</h2>
          </div>

          <div className="seasonal_completed_card">
            <div>
              <h3>Sarah Thompson</h3>
              <p>
                Verified document naming and tax-year assignment.
              </p>
            </div>

            <span className="seasonal_complete_badge">
              ✓ Complete
            </span>
          </div>

          
        </section>

      </div>
    </AppShell>
  );
}