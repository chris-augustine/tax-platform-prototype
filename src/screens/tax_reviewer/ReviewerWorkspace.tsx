import AppShell from "../../components/layout/AppShell";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, Eye, FileText, UserCheck, Send, } from "lucide-react";
import { launchDemo } from "../../context/DemoContext";
export default function ReviewerWorkspace() {
    const {reviewerApproved, setReviewerApproved, changesRequested, setChangesRequested,interestIncome, } = launchDemo();
    const [showSource, setShowSource] = useState(false);
    const handleApproveReturn = () => { setReviewerApproved(true); setChangesRequested(false); };
    const handleRequestChanges = () => { setChangesRequested(true); setReviewerApproved(false); };

    return(
        <AppShell role="tax_reviewer">
            <div className="reviewer_workspace">
                <div className="reviewer_workspace_header">
                    <div>
                        <p className="reviewer_workspace_breadcrumb">
                            Quality Review / Chris Augustine
                        </p>

                        <h1>Chris Augustine</h1>
                        <p className="reviewer_workspace_return_desc"> 2025 Individual Tax Return </p>
                    </div>

                    <div className="reviewer_workspace_status">
                        <span className="reviewer_workspace_stage"> {reviewerApproved ? "Ready to Sign" : changesRequested ? "Changes Requested" : "Quality Review"} </span>
                        <span className="reviewer_workspace_preparer"> Prepared by: <strong>Albert Lockstein</strong> </span>
                    </div>
                </div>

                <section className="reviewer_review_summary">
                    <div className="reviewer_review_summary_header">
                        <div>
                            <h2>Quality Review Summary</h2>
                            <p>
                                Review the prepared return and supporting evidence
                                before making a final decision.
                            </p>
                        </div>
                    </div>
                    <div className="reviewer_checklist">
                        <div className="reviewer_check_item">
                            <CheckCircle2 size={18} />
                            <div>
                                <strong>Documents Complete</strong>
                                <p>Required primary documents have been received.</p>
                            </div>
                        </div>

                        <div className="reviewer_check_item">
                            <CheckCircle2 size={18} />
                            <div>
                                <strong>Return Preparation Complete</strong>
                                <p>Albert completed tax return preparations.</p>
                            </div>
                        </div>

                        <div className="reviewer_check_item">
                            <CheckCircle2 size={18} />
                            <div>
                                <strong>Preparer Verification Complete</strong>
                                <p>AI-extracted values requiring human review have been verified.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="reviewer_review_item">
                    <div className="reviewer_review_item_header">
                        <div>
                            <p className="reviewer_field_label"> REVIEW ITEM </p>
                            <h2>Interest Income</h2>
                            <p className="reviewer_field_reference"> Form 1040 | Schedule B </p>
                        </div>
                        <span className="reviewer_verified_badge">
                            <CheckCircle2 size={15} />
                            Verified by Preparer
                        </span>
                    </div>

                    <div className="reviewer_review_grid">
                        <div className="reviewer_value_panel">
                            <span className="reviewer_value_label"> Verified Value </span>
                            <div className="reviewer_value"> ${Number(interestIncome).toFixed(2)} </div>
                            <div className="reviewer_verified_by">
                                <UserCheck size={17} />
                                <div>
                                    <strong>Albert Lockstein</strong>
                                     <p>Tax Preparer</p>
                                </div>
                            </div>
                            <div className="reviewer_read_only_note">
                                This value is read-only during quality review.
                            </div>
                        </div>

                        <div className="reviewer_evidence_panel">
                            <h3>Supporting Evidence</h3>
                            <div className="reviewer_evidence_row">
                                <span>Source</span>
                                <strong>1099-INT.pdf</strong>
                            </div>
                            <div className="reviewer_evidence_row"> 
                                <span>Location</span> 
                                <strong>Page 1 · Box 1</strong> 
                            </div>
                            <div className="reviewer_evidence_row">
                                <span>AI Confidence</span>
                                <strong>93.5%</strong>
                            </div>
                            <div className="reviewer_evidence_row">
                                <span>Transformation</span>
                                <strong>None</strong>
                            </div>
                            <button className="reviewer_view_source_button" onClick={() => setShowSource(!showSource)} >
                                <Eye size={17} />
                                {showSource ? "Hide Source" : "View Source"}
                            </button>
                        </div>
                    </div>

                    {showSource && (
                        <div className="reviewer_source_panel">
                            <div className="reviewer_source_header">
                                <div>
                                    <p className="reviewer_field_label">
                                        SOURCE DOCUMENT
                                    </p>
                                    <h3>1099-INT.pdf</h3>
                                    <p>Page 1 · Uploaded by Chris Augustine</p>
                                </div>
                                <span className="reviewer_source_badge"> Source Match </span>
                            </div>
                            <div className="reviewer_mock_document">
                                <div className="reviewer_mock_document_title">
                                    Form 1099-INT
                                </div>
                                <div className="reviewer_mock_document_row">
                                    <span>PAYER</span>
                                    <strong>Wells Fargo Bank</strong>
                                </div>
                                <div className="reviewer_mock_document_row highlighted">
                                    <span>BOX 1 — INTEREST INCOME</span>
                                    <strong>$410.00</strong>
                                </div>
                                <div className="reviewer_mock_document_row">
                                    <span> BOX 4 — FEDERAL INCOME TAX WITHHELD </span>
                                    <strong>$0.00</strong>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section className="reviewer_preparer_notes">
                    <div className="reviewer_preparer_notes_header">
                        <FileText size={18} />
                        <h2>Preparer Notes</h2>
                    </div>

                    <div className="reviewer_note">
                        <div className="reviewer_note_creator">
                            <strong>Albert Lockstein</strong> 
                            <span>Tax Preparer</span>
                        </div>
                        <p> Reviewed the 1099-INT against the source document. Interest income matches Box 1. No adjustment was required. </p>
                    </div>
                </section>

                <section className="reviewer_judgement">
                    <div>
                        <h2>Review Decision</h2>
                        {reviewerApproved ? (
                            <p>This return has been approved and is ready for the client to sign.</p>
                        ) : changesRequested ? (
                            <p> Changes have been requested and the return has been sent back to the preparer. </p>
                        ) : (
                            <p> Approve the return or send it back to the preparer with requested changes. </p>
                        )}
                    </div>

                    {!reviewerApproved && !changesRequested && (
                        <div className="reviewer_decision_actions">
                            <button className="request_changes_button"onClick={handleRequestChanges}>
                                <AlertTriangle size={17} /> 
                                Request Changes
                            </button>

                            <button className="approve_return_button"onClick={handleApproveReturn}>
                                <Send size={17} />
                                Approve Return
                            </button>
                        </div>
                    )}

                    {reviewerApproved && (
                        <span className="reviewer_decision_complete approved">
                            <CheckCircle2 size={17} />
                            Approved
                        </span>
                    )}

                    {changesRequested && (
                        <span className="reviewer_decision_complete changes">
                            <AlertTriangle size={17} />
                            Changes Requested
                        </span>
                    )}
                </section>
            </div>
        </AppShell>
    )
}