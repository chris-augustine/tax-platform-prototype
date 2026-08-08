import AppShell from "../../components/layout/AppShell"
import {Upload, MessageSquare, ChevronRight} from "lucide-react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { launchDemo } from "../../context/DemoContext";
export default function ClientDashboard() {
    const navigate = useNavigate();
    const {uploadedfile, setUploadedFile,sentToQualityReview,reviewerApproved,conversations} = launchDemo();
    const intConversation = conversations.find( (conversation) => conversation.id === "1099-int" );
    const maritalConversation = conversations.find( (conversation) => conversation.id === "marital-status" );
    const handleUpload = () => {
        setUploadedFile(true);
    };
  return(
    <AppShell role="individual_taxpayer">
        <div className="client-dash">
            <div className="dash_header">
                <h1>Welcome back, Chris</h1>
                <p>2025 Individual Tax Return</p>
            </div>

            <section className="progress-section">
                <h2>Return Progress</h2>
                <div className="progress-bar">
                    <div className="progress_steps_completed">
                        <div className="progress_circle">✓</div>
                        <p>Account Created</p>
                    </div>

                    <div className={ uploadedfile ? "progress_steps_completed" : "progress_steps_current" } >
                        <div className="progress_circle"> {uploadedfile ? "✓" : "2"}</div>
                        <p>Documents</p>
                    </div>

                    <div className={ sentToQualityReview || reviewerApproved ? "progress_steps_completed" : uploadedfile ? "progress_steps_current" : "progress_steps" } >
                        <div className="progress_circle">{sentToQualityReview || reviewerApproved ? "✓" : "3"}</div>
                        <p>Return Preparation</p>
                    </div>

                    <div className={ reviewerApproved ? "progress_steps_completed" : sentToQualityReview ? "progress_steps_current" : "progress_steps" } >
                        <div className="progress_circle">{reviewerApproved ? "✓" : "4"}</div>
                        <p>Quality Review</p>
                    </div>

                    <div className={ reviewerApproved ? "progress_steps_current" : "progress_steps" } >
                        <div className="progress_circle">5</div>
                        <p>Ready to Sign</p>
                    </div>

                    <div className="progress_steps">
                        <div className="progress_circle">6</div>
                        <p>Filed</p>
                    </div>
                </div>
                <div className="waiting_message"> Waiting on:{" "} 
                    <strong className={ reviewerApproved ? "" : sentToQualityReview ? "waiting-reviewer" : uploadedfile ? "waiting-cpa" : "" } >
                        {reviewerApproved ? "You" : sentToQualityReview ? "Reviewer" : uploadedfile ? "Albert" : "You"}
                    </strong>
                </div>            
            </section>

            {reviewerApproved ? (
                <section className="next-step ready-to-sign">
                    <div>
                        <p className="section-label">YOUR NEXT STEP</p>
                        <h2>Your return is ready to sign</h2>
                        <p> Quality review is complete. Please review and sign your 2025 tax return. </p>
                    </div>
                    <button className="sign_button">
                        Review & Sign
                    </button>
                </section>
            ) : uploadedfile ? (
                <section className="next-step next-step_upload_complete">
                    <div>
                        <p className="section-label">YOU ARE GOOD FOR NOW</p>
                        <h2>1099-INT received</h2>
                        <p>Upload successful.</p>
                    </div>
                    <span className="upload_successful"> ✓ Uploaded </span>
                </section>
            ) : (
                <section className="next-step">
                    <div>
                        <p className="section-label">YOUR NEXT STEP</p>
                        <h2>Upload your 1099-INT</h2>
                        <p> In order to prepare your return, your tax preparer needs this document to proceed.</p>
                    </div>
                    <button className="upload_button"onClick={handleUpload}>
                        <Upload size={18} />
                        Upload Document
                    </button>
                </section>
            )}


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
                    <div className="message_preview" onClick={() => navigate("/client/messages?conversation=1099-int")} >
                        <div className="message_preview_content">
                            <h3>1099-INT Needed</h3>
                            <p>
                                Albert: Hi Chris, I noticed that your 1099-INT is missing. Please upload it at your earliest convenience so we can continue preparing your return.  
                            </p>
                        </div>

                        <div className="message_preview_action">
                            {intConversation?.needsResponse ? (
                                <span className="needs-response"> Needs Response </span>
                            ) : ( <span className="resolved-response">Complete</span>
                            )}
                            <ChevronRight size={18} />
                        </div>
                    </div>

                    <div className="message_preview" onClick={() => navigate("/client/messages?conversation=marital-status")} >
                        <div className="message_preview_content">
                            <h3>Marital Status Confirmation</h3>
                            <p>
                                Albert: Hi Chris, has your marital status changed during this tax year?
                            </p>
                        </div>

                        <div className="message_preview_action">
                            {maritalConversation?.needsResponse ? (
                                <span className="needs-response"> Needs Response </span>
                            ) : ( <span className="resolved-response">Complete</span>
                            )}
                            <ChevronRight size={18} />
                        </div>
                    </div>

                    <div className="message_preview" onClick={() => navigate("/client/messages?conversation=w2-received")} >
                        <div className="message_preview_content">
                            <h3>W-2 Received</h3>
                            <p>
                                Albert: Hi Chris, just wanted to let you know that I received your W-2. Thanks for sending it over! 
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