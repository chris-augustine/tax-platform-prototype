import { FileText, MessageSquare, History, CheckCircle2, AlertTriangle, Bot, Eye, Pencil, Lock, Send, } from "lucide-react";
import { useState } from "react";
import { launchDemo } from "../../context/DemoContext";
import AppShell from "../../components/layout/AppShell";

type WorkspaceTabs =
  | "review"
  | "documents"
  | "messages"
  | "activity";


export default function PreparerWorkspace() {
  const { uploadedfile, preparerVerifiedFile, setPreparerVerifiedFile, sentToQualityReview, setSentToQualityReview, interestIncome,setInterestIncome,conversations,setConversations } = launchDemo();
  const [activeTab, setActiveTab] = useState<WorkspaceTabs>("review");
  const [showSource, setShowSource] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const intConversation = conversations.find( (conversation) => conversation.id === "1099-int" );
  const handleApprove = () => { setPreparerVerifiedFile(true); setIsEditing(false); };
  const handleSendToReview = () => { if (!preparerVerifiedFile) { return; } setSentToQualityReview(true); };
  const handleSendMessage = () => {
    if (!message.trim() || !intConversation){
        return;
    }
    setConversations((currentConversations) =>
        currentConversations.map((conversation) =>
            conversation.id === "1099-int"
              ?{
                ...conversation,
                needsResponse: true,
                messages: [
                    ...conversation.messages,
                    {
                        id: conversation.messages.length+1,
                        sender: "Albert",
                        text: message,
                    },
                ],
              }
            : conversation
        )
    );
    setMessage("");
  }



  return(
    <AppShell role="tax_preparer">
        <div className="preparer_workspace">
            <div className="preparer_workspace_header">
                <div>
                    <p className="preparer_workspace_breadcrumb">
                        Returns / Chris Augustine
                    </p>

                    <h1>Chris Augustine</h1>

                    <p className="preparer_workspace_return_desc">
                        2025 Individual Tax Return
                    </p>
                </div>
                <div className="preparer_workspace_status">
                    <span className="workspace_stage">
                        {sentToQualityReview ? "Quality Review" : "Return Preparation"}
                    </span>
                    <span className="workspace_worker">
                        Waiting on: {" "}
                        <strong>
                            {sentToQualityReview ? "Reviewer" : "Albert"}
                        </strong>
                    </span>
                </div>
            </div>

            <div className="preparer_workspace_tabs">
                <button className={ activeTab === "review" ? "workspace_tab active" : "workspace_tab" } onClick={() => setActiveTab("review")}>
                    <CheckCircle2 size={17} />
                    Review
                </button>

                <button className={ activeTab === "documents" ? "workspace_tab active" : "workspace_tab" } onClick={() => setActiveTab("documents")} >
                    <FileText size={17} />
                    Documents
                </button>

                <button className={ activeTab === "messages" ? "workspace_tab active" : "workspace_tab" } onClick={() => setActiveTab("messages")} >
                    <MessageSquare size={17} />
                    Messages
                </button>

                <button className={ activeTab === "activity" ? "workspace_tab active" : "workspace_tab" } onClick={() => setActiveTab("activity")} >
                    <History size={17} />
                    Activity
                </button>
            </div>

            {activeTab === "review" && (
                <div className="workspace_review">
                    <div className="review_summary">
                        <div>
                            <h2>Return Review</h2>
                            <p>
                                Review AI-extracted values before passing on to quality review.
                            </p>
                        </div>

                        <div className="review_summary_cnt">
                            <span>Items Needing Review</span>
                            <strong>
                                {preparerVerifiedFile ? "0" : "1"}
                            </strong>
                        </div>
                    </div>

                    {!uploadedfile ?(
                        <div className="workspace_warning">
                            <AlertTriangle size={20} />
                            <div>
                                <strong>1099-INT not received</strong>
                                <p>
                                    Chris must upload the requested 1099-INT to review this field.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="review_item">
                            <div className="review_item_header">
                                <div>
                                    <p className="review_field_label">
                                        RETURN FIELD
                                    </p>

                                    <h2>Interest Income</h2>

                                    <p className="review_form_reference">
                                        Form 1040 | Schedule B
                                    </p>
                                </div>

                                {preparerVerifiedFile ? (
                                    <span className="verified_badge">
                                        <CheckCircle2 size={(15)} />
                                        Verified
                                    </span>
                                ) : (
                                    <span className="needs_review_badge">
                                        Needs Review
                                    </span>
                                )}
                            </div>

                            <div className="review_main_grid">
                                <div className="review_val_section">
                                    <div className="review_val_label">
                                        <Bot size={18} />

                                        <span>AI Extracted Value</span>

                                        {!preparerVerifiedFile && (
                                            <span className="ai_badge">
                                                AI Generated
                                            </span>
                                        )}
                                    </div>
                                    {isEditing ? (
                                        <div className="edit_val_area">
                                            <label htmlFor="interest_income">
                                                Interest Income
                                            </label>

                                            <div className="currency_input">
                                                <span>$</span>
                                                <input id="interest_income" type="number" value={interestIncome} onChange={(event) => setInterestIncome( event.target.value ) } />
                                            </div>
                                            <p>
                                                Corrected values must be approved before this return can move to quality review.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="extracted_value">
                                            ${interestIncome}
                                        </div>
                                    )}
                                    {!preparerVerifiedFile && (
                                        <div className="confidence_section">
                                            <div className="confidence_header">
                                                <span>AI confidence</span>
                                                <strong>93.5%</strong>
                                            </div>

                                            <div className="confidence_track">
                                                <div className="confidence_fill"/>
                                            </div>
                                        </div>
                                    )}

                                    {preparerVerifiedFile && (
                                        <div className="verified_by">
                                            <CheckCircle2 size={17} />
                                            <span>Verified by Albert Lockstein</span>
                                        </div>
                                    )}
                                </div>

                                <div className="ai_explanation">
                                    <div className="ai_explanation_title">
                                        <Bot size={18} />
                                        <h3>AI Decision Rationale</h3>
                                    </div>
                                    <p> The system identified Box 1, “Interest Income,” on Chris's uploaded 1099-INT and extracted $410.00. </p>

                                    <div className="ai_evidence_row">
                                        <span>Source</span>
                                        <strong>1099-INT.pdf</strong>
                                    </div>

                                    <div className="ai_evidence_row">
                                        <span>Location</span>
                                        <strong>Page 1 · Box 1</strong>
                                    </div>

                                    <div className="ai_evidence_row">
                                        <span>Transformation</span>
                                        <strong>None</strong>
                                    </div>

                                    <p className="ai_explanation_note">
                                        The source value was used directly with no calculations/adjustments.
                                    </p>
                                </div>
                            </div>

                            <div className="field_state_legend">
                                <div>
                                    <Bot size={15} />
                                    <span>AI-generated</span>
                                </div>

                                <div>
                                    <Pencil size={15} />
                                    <span>Editable before Verification</span>
                                </div>

                                <div>
                                    <CheckCircle2 size={15} />
                                    <span>Verified by Preparer</span>
                                </div>

                                <div>
                                    <Lock size={15} />
                                    <span>Calculated fields remain read-only</span>
                                </div>
                            </div>

                            <div className="review_actions">
                                <button className="view_source_button" onClick={() => setShowSource(!showSource) } >
                                    <Eye size={17} />
                                    {showSource ? "Hide Source" : "View Source"}
                                </button>

                                {!preparerVerifiedFile && (
                                    <>
                                        <button className="correct_value_button" onClick={() => setIsEditing(!isEditing) } >
                                            <Pencil size={17} />
                                            {isEditing ? "Done Editing" : "Correct Value"}
                                        </button>

                                        <button className="approve_value_button" onClick ={ handleApprove}>
                                            <CheckCircle2 size={17} />
                                            Approve
                                        </button>
                                    </>
                                )}
                            </div>

                            {showSource && (
                                <div className="source_review_panel">
                                    <div className="source_panel_header">
                                        <div>
                                            <p className="review_field_label">
                                                SOURCE DOCUMENT
                                            </p>

                                            <h3>1099-INT.pdf</h3>

                                            <p>
                                                Page 1 · Uploaded by Chris
                                            </p>
                                        </div>

                                        <span className="source_match_badge">
                                            Source Match
                                        </span>
                                    </div>

                                    <div className="mock_1099_doc">
                                        <div className="mock_1099_header">
                                            Form 1099-INT
                                        </div>

                                        <div className="mock_1099_field">
                                            <span>PAYER</span>
                                            <strong>Wells Fargo Bank</strong>
                                        </div>

                                        <div className="mock_1099_field highlighted">
                                            <span>BOX 1 — INTEREST INCOME</span>
                                            <strong>$410.00</strong>
                                        </div>

                                        <div className="mock_1099_field">
                                            <span>BOX 4 — FEDERAL INCOME TAX WITHHELD</span>
                                            <strong>$0.00</strong>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="calculated_field">
                                <div>
                                    <div className="calculated_field_title">
                                        <Lock size={16} />
                                        <span>Calculated Field</span>
                                    </div>

                                    <h3>Adjusted Gross Income</h3>
                                </div>

                                <div className="calculated_field_val">
                                    <strong>$84,250.00</strong>
        
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="quality_review_action">
                        <div>
                            <h3>Quality Review</h3>
                            {sentToQualityReview ? (
                                <p>
                                    Return has been sent to the reviewer.
                                </p>
                            ) : preparerVerifiedFile ? (
                                <p>
                                    All required review items are verified and this return is ready for quality review.
                                </p>
                            ) : (
                                <p>
                                    Verify all required items before sending this return to quality review.
                                </p>
                            )}
                        </div>

                        <button className="send_quality_button" disabled={ !preparerVerifiedFile || sentToQualityReview } onClick={handleSendToReview} >
                            <Send size={17} />

                            {sentToQualityReview
                                ? "Sent to Quality Review"
                                : "Send to Quality Review"}
                        </button>
                    </div>
                </div>
            )}

            {activeTab === "documents" &&(
                <div className="workspace_docs">
                    <div className="workspace_tab_header">
                        <h2>Documents</h2>
                    </div>

                    <div className="workspace_docs_row">
                        <div className="workspace_docs_name">
                            <FileText size={20} />
                            <div>
                                <h3>1099-INT.pdf</h3>
                                <p>
                                    Interest income · Uploaded today
                                </p>
                            </div>
                        </div>

                        {preparerVerifiedFile ? (
                            <span className="verified_badge">
                                Verified
                            </span>
                        
                        ) : (
                            <span className="needs_review_badge">
                                Needs Review
                            </span>
                        )}
                    </div>

                    <div className="workspace_docs_row">
                        <div className="workspace_docs_name">
                            <FileText size={20} />
                            <div>
                                <h3>W-2.pdf</h3>
                                <p>Wage statement · Uploaded July 14</p>
                            </div>
                        </div>

                        <span className="verified_badge">
                            Verified
                        </span>
                    </div>

                    <div className="workspace_docs_row">
                        <div className="workspace_docs_name">
                            <FileText size={20} />
                            <div>
                                <h3>1098.pdf</h3>
                                <p>Mortgage interest · Uploaded July 19</p>
                            </div>
                        </div>

                        <span className="verified_badge">
                            Verified
                        </span>
                    </div>
                </div>
            )}

            {activeTab === "messages" && (
                <div className="workspace_messages">
                    <div className="workspace_tab_header">
                        <h2>Messages with Chris</h2>
                    </div>

                    <div className="workspace_message_thread">
                        {intConversation?.messages.map((currentMessage) => (
                            <div key={currentMessage.id} className={`workspace_message ${ currentMessage.sender === "Albert" ? "albert" : "chris" }`} >
                                <strong>{currentMessage.sender}</strong>
                                <p>{currentMessage.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="workspace_reply">
                        <textarea value={message} onChange={(event) => setMessage(event.target.value) } placeholder="Type a message to Chris..." rows={4} />
                            <button onClick={handleSendMessage}> <Send size={17} /> Send Message </button>
                    </div>
                </div>
            )}

            {activeTab === "activity" && (
                <div className="workspace_activity">
                    <div className="workspace_tab_header">
                        <h2>Activity History</h2>
                    </div>


                    {uploadedfile && (
                        <>
                            <div className="activity_item">
                                <span className="activity_time">Today</span>
                                <div>
                                    <strong>Chris uploaded 1099-INT.pdf</strong>
                                    <p>Document added to the 2025 return.</p>
                                </div>
                            </div>
                            <div className="activity_item">
                                <span className="activity_time">Today</span>
                                <div>
                                    <strong>AI extracted Interest Income: $410.00</strong>
                                    <p>Confidence score: 93.5%.</p>
                                </div>
                            </div>                        
                        </>
                    )}
                    {preparerVerifiedFile && (
                        <div className="activity_item">
                            <span className="activity_time">
                                Today
                            </span>
                            <div>
                                <strong>Albert verified Interest Income</strong>
                                <p>Source: 1099-INT.pdf · Page 1 · Box 1</p>
                            </div>
                        </div>
                    )}

                    <div className="activity_item">
                        <span className="activity_time">Yesterday</span>
                        <div>
                            <strong>Albert requested 1099-INT</strong>
                            <p>Client action requested.</p>
                        </div>
                    </div>

                    <div className="activity_item">
                        <span className="activity_time">Jul 14</span>
                        <div>
                            <strong>W-2 verified</strong>
                            <p>Wage information approved for use in return.</p>
                        </div>
                    </div>
                </div>
            )}        
        </div>
    </AppShell>
  );
}