import AppShell from "../../components/layout/AppShell"
import {Upload, MessageSquare, ChevronRight} from "lucide-react"
import { useNavigate } from "react-router-dom";
export default function BusinessDashboard() {
    const navigate = useNavigate();

  return(
    <AppShell role="business_owner">
        <div className="client-dash">
            <div className="dash_header">
                <h1>Welcome back, Joel</h1>
                <p>Joelito LLC · 2025 Business Tax Return</p>
            </div>

            <section className="progress-section">
                <h2>Return Progress</h2>
                <div className="progress-bar">
                    <div className="progress_steps_completed">
                        <div className="progress_circle">✓</div>
                        <p>Account Created</p>
                    </div>

                    <div className="progress_steps_current">
                        <div className="progress_circle">2</div>
                        <p>Documents</p>
                    </div>

                    <div className="progress_steps">
                        <div className="progress_circle">3</div>
                        <p>Return Preparation</p>
                    </div>

                    <div className="progress_steps">
                        <div className="progress_circle">4</div>
                        <p>Quality Review</p>
                    </div>

                    <div className="progress_steps">
                        <div className="progress_circle">5</div>
                        <p>Ready to Sign</p>
                    </div>

                    <div className="progress_steps">
                        <div className="progress_circle">6</div>
                        <p>Filed</p>
                    </div>
                </div>
                <div className="waiting_message">
                    Waiting on: <strong>You</strong>
                </div>            
            </section>

            <section className="next-step">
                <div>
                    <p className="section-label">YOUR NEXT STEP</p>

                    <h2>Upload Q4 bank statements</h2>

                    <p>
                        Your tax preparer needs the final quarter bank statements
                        to complete reconciliation for Joelito LLC.
                    </p>
                </div>

                <button className="upload_button">
                    <Upload size={18} />
                    Upload Documents
                </button>
            </section>


            {/* {!uploadedfile ? 
                (
                    <section className="next-step">
                        <div>
                            <p className="section-label">YOUR NEXT STEP</p>
                            <h2>Upload your 1099-INT</h2>
                            <p>In order to prepare your return, your tax preparer needs this document to proceed.</p>
                        </div>

                        <button className="upload_button" onClick={handleUpload}><Upload size={18}/> Upload Document</button>
                    </section> 
                ) : (
                    <section className="next-step next-step_upload_complete">
                        <div>
                            <p className="section-label">YOU ARE GOOD FOR NOW</p>
                            <h2>1099-INT received</h2>
                            <p>
                                Upload successful.
                            </p>
                        </div>

                        <span className="upload_successful">✓ Uploaded</span>
                    </section>
                )   
            } */}
            

          

            <section className="recent_messages">
                <div className="section_header">
                    <div className="section_title_icon">
                        <MessageSquare size={20} />
                        <h2>Recent Messages</h2>
                    </div>
                </div>

                <div className="message_list">
                    <div className="message_preview" onClick={() => navigate("/business-owner/messages")} >
                        <div className="message_preview_content">
                            <h3>Q4 Bank Statements Needed</h3>
                            <p>
                                Albert: Hi Joel, Please upload October-Decembeer bank statements I can continue preparing your return.  
                            </p>
                        </div>

                        <div className="message_preview_action">
                            <span className="needs-response">Needs Response</span>
                            <ChevronRight size={18} />
                        </div>
                    </div>

                    <div className="message_preview" onClick={() => navigate("/business-owner/messages")} >
                        <div className="message_preview_content">
                            <h3>Business Expense Confirmation</h3>
                            <p>
                                Albert: Hi Joel, that camera that you got, was it entirely for business use?
                            </p>
                        </div>

                        <div className="message_preview_action">
                            <span className="needs-response">Needs Response</span>
                            <ChevronRight size={18} />
                        </div>
                    </div>

                    <div className="message_preview" onClick={() => navigate("/business-owner/messages")} >
                        <div className="message_preview_content">
                            <h3>Payroll Summary Received</h3>
                            <p>
                                Albert: Hi Joel, just wanted to let you know that I received your payroll summary. Thanks for sending it over! 
                            </p>
                        </div>
                        <div className="message_preview_action">
                            <span className="resolved-response">Complete</span>
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </AppShell>
  )
}