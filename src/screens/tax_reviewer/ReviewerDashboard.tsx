import { useNavigate } from "react-router-dom"; 
import { ClipboardCheck, AlertTriangle, CheckCircle2, } from "lucide-react";
import { launchDemo } from "../../context/DemoContext";
import AppShell from "../../components/layout/AppShell";
export default function ReviewerDashboard() {
    const navigate = useNavigate();
    const { sentToQualityReview, } = launchDemo();
  return(
    <AppShell role="tax_reviewer">
        <div className="reviewer_dashboard">
            <div className="reviewer_dashboard_header">
                <div>
                    <h1>Welcome back, Robert</h1>
                    <p>Here's what requires your attention today.</p>
                </div>
            </div>

            <div className="reviewer_stats">
                <div className="reviewer_stats_box">
                    <span>Ready for Review</span>
                    <strong>{sentToQualityReview ? 4: 3}</strong>
                </div>

                <div className="reviewer_stats_box">
                    <span>Changes Requested</span>
                    <strong>1</strong>
                </div>

                <div className="reviewer_stats_box">
                    <span>Reviewed Today</span>
                    <strong>1</strong>
                </div>
            </div>

            <section className="reviewer_section">
                <div className="reviewer_section_title">
                    <ClipboardCheck size={20} />
                    <h2>Quality Review Queue</h2>
                </div>

                <div className="reviewer_task_list">
                    {sentToQualityReview && (
                        <div className="reviewer_task high_priority">
                            <div>
                                <div className="reviewer_task_title_row">
                                    <h3>Chris Augustine</h3>
                                    <span className="reviewer_priority_badge">New</span>
                                </div>
                                <p className="reviewer_return_desc"> 2025 Individual Tax Return </p>
                                <p className="reviewer_preparer"> Prepared by Albert Lockstein </p>
                                <p className="reviewer_task_desc">Interest income from 1099-INT was verified by the preparer and is ready for quality review.</p>
                                <span className="reviewer_status ready"> Ready for Quality Review </span>
                            </div>

                            <button className="reviewer_open_button" onClick={() => navigate("/tax-reviewer/workspace") } >Start Review</button>
                        </div>
                    )}
                    <div className="reviewer_task">
                        <div>
                            <h3>Flavis Gertrude</h3>
                            <p className="reviewer_return_desc"> 2025 Individual Tax Return </p>
                            <p className="reviewer_preparer"> Prepared by David Dolittle </p>
                            <p className="reviewer_task_desc"> Preparation complete with one note regarding dependent eligibility status. </p>
                            <span className="reviewer_status ready"> Ready for Quality Review </span>
                        </div>
                        <button className="reviewer_open_button"> Start Review </button>
                    </div>

                    <div className="reviewer_task">
                        <div>
                            <h3>Daphne Grant LLC</h3>
                            <p className="reviewer_return_desc"> 2025 Business Tax Return </p>
                            <p className="reviewer_preparer"> Prepared by Albert Lockstein </p>
                            <p className="reviewer_task_desc"> Business return includes two significant notes for reviewer. </p>
                            <span className="reviewer_status attention"> Review Notes </span>
                        </div>
                        <button className="reviewer_open_button"> Start Review </button>
                    </div>

                    <div className="reviewer_task">
                        <div>
                            <h3>Fred Fooligan</h3>
                            <p className="reviewer_return_desc"> 2025 Individual Tax Return </p>
                            <p className="reviewer_preparer"> Prepared by David Frogs </p>
                            <p className="reviewer_task_desc"> Preparation complete with no notes. </p>
                            <span className="reviewer_status ready"> Ready for Quality Review </span>
                        </div>
                        <button className="reviewer_open_button"> Start Review </button>
                    </div>
                </div>
            </section>

            <section className="reviewer_section">
                <div className="reviewer_section_title">
                    <AlertTriangle size={20} />
                    <h2>Changes Requested</h2>
                </div>
                <div className="reviewer_task_list">
                    <div className="reviewer_task">
                        <div>
                            <h3>Jordan Pigford</h3>
                            <p className="reviewer_return_desc"> 2025 Individual Tax Return </p>
                            <p className="reviewer_preparer"> Prepared by George Santos </p>
                            <p className="reviewer_task_desc"> Changes requested for charitable contribution reciept. </p>
                            <span className="reviewer_status changes"> Waiting on Preparer </span>
                        </div>
                        <button className="reviewer_secondary_button"> View Return </button>
                    </div>
                </div>
            </section>

            <section className="reviewer_section">
                <div className="reviewer_section_title">
                    <CheckCircle2 size={20} />
                    <h2>Recently Reviewed</h2>
                </div>
                <div className="reviewer_task_list">
                    <div className="reviewer_task completed">
                        <div>
                            <h3>Wolf Blitzer</h3>
                            <p className="reviewer_return_desc"> 2025 Individual Tax Return </p>
                            <p className="reviewer_task_desc"> Quality review completed and approved. </p>
                        </div>
                        <span className="reviewer_status approved"> Approved </span>
                    </div>
                </div>
            </section>
        </div>
    </AppShell>
  );  
}