import AppShell from "../../components/layout/AppShell";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { launchDemo } from "../../context/DemoContext";
export default function PreparerDashboard() {
    const navigate = useNavigate();
    const uploadedfile = launchDemo();

    return(
       <AppShell role="tax_preparer">
         <div className="preparer_dashboard">
            <div className="preparer_dashboard_header">
                <div>
                    <h1>Welcome back, Albert</h1>
                    <p>Here's what requires your attention today.</p>
                </div>
            </div>

            <div className="preparer_stats">
                <div className="preparer_stats_section">
                    <span>Active Returns</span>
                    <strong>5</strong>
                </div>

                <div className="preparer_stats_section">
                    <span>Needs Attention</span>
                    <strong>3</strong>
                </div>

                <div className="preparer_stats_section">
                    <span>Waiting on Client</span>
                    <strong>2</strong>
                </div>
            </div>

            <section className="preparer_section">
                <div className="preparer_section_title">
                    <AlertCircle size={20} />
                    <h2>Needs Your Attention</h2>
                </div>

                <div className="preparer_task_list">
                    <div className="preparer_task high_prior">
                        <div className="preparer_task_main">
                            <div>
                                <div className="preparer_task_title_row">
                                    <h3>Chris Augustine</h3>
                                    <span className="priority_badge">High Priority</span>
                                </div>

                                <p className="return_desc">
                                    2025 Individual Tax Return
                                </p>

                                {uploadedfile ? (
                                    <>
                                        <p className="task_desc">
                                            New 1099-INT uploaded. AI extraction data is ready for analysis.
                                        </p>

                                        <span className="task_status ready">
                                            Ready for Review
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <p className="task_desc">
                                            Waiting for Chris to upload missing 1099-INT.
                                        </p>

                                        <span className="task_status wait">
                                            Waiting on Client
                                        </span>
                                    
                                    </>
                                )}
                            </div>
                        </div>
                        <button className="open_return_button" onClick={() => navigate("/tax-preparer/workspace")} >
                            Open
                        </button>
                    </div>

                    <div className="preparer_task">
                        <div>
                            <div className="preparer_task_title_row">
                                <h3>George Lopez</h3>
                            </div>

                            <p className="return_desc">
                                2025 Individual Tax Return
                            </p>

                            <p className="task_desc">
                                Client dependent eligibility question has a response.
                            </p>

                            <span className="task_status review">
                                Response Needs Review
                            </span>
                        </div>
                        <button className="secondary_task_button">
                            Open
                        </button>

                    </div> 


                    <div className="preparer_task">
                        <div>
                            <div className="preparer_task_title_row">
                                <h3>Leo Wilson</h3>
                            </div>

                            <p className="return_desc">
                                LoSiento LLC | 2025 Business Tax Return
                            </p>

                            <p className="task_desc">
                                Return preparation is complete and ready for quality review.
                            </p>

                            <span className="task_status ready">
                                Ready to Send
                            </span>
                        </div>
                        <button className="secondary_task_button">
                            Open
                        </button>
                    </div> 
                </div>
            </section>

            <section className="preparer_section">
                <div className="preparer_section_title">
                    <Clock size={20} />
                    <h2>Waiting on Clients</h2>
                </div>

                <div className="preparer_task_list">
                    <div className="preparer_task">
                        <div>
                            <h3>David Joyner</h3>
                            <p className="return_desc">
                                2025 Individual Tax Return
                            </p>
                            <p className="task_desc">
                                W-2 document requested a week ago.
                            </p>
                            <span className="task_status wait">
                                Waiting on Client
                            </span>
                        </div>
                        <button className="secondary_task_button">
                            View
                        </button>
                    </div>

                    <div className="preparer_task">
                        <div>
                            <h3>Jordan Bayani</h3>
                            <p className="return_desc">
                                2025 Individual Tax Return
                            </p>
                            <p className="task_desc">
                                Wating on clarification of charitable contribution amount.
                            </p>
                            <span className="task_status wait">
                                Waiting on Client
                            </span>
                        </div>
                        <button className="secondary_task_button">
                            View
                        </button>
                    </div>
                </div>
            </section>

            <section className="preparer_section">
                <div className="preparer_section_title">
                    <CheckCircle2 size={20} />
                    <h2>Recently Completed</h2>
                </div>

                <div className="preparer_task_list">
                    <div className="preparer_task completed_task">
                        <div>
                            <h3>Sarah Orwell</h3>
                            <p className="return_desc">
                                2025 Individual Tax Return
                            </p>
                            <p className="task_desc">
                                Document review completed.
                            </p>
                        </div>
                        <span className="task_status complete">
                            Complete
                        </span>
                    </div>
                </div>
            </section>
         </div>
        </AppShell>
    )
}