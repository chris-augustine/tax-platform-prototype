import AppShell from "../../components/layout/AppShell";
import { launchDemo } from "../../context/DemoContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Download, MessageSquare} from "lucide-react";
export default function ClientDocs() {
    const { uploadedfile } = launchDemo();
    const navigate = useNavigate();
    const [selectedDoc, setSelectedDoc] = useState<string | null>("w2");
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <AppShell role="individual_taxpayer">
            <div className="client_docs">
                <div className="client_docs_header">
                    <h1>Documents</h1>
                </div>

                <input className="client_docs_search" type="text" placeholder="Search for documents..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="client_docs_layout">
                    <div className="client_docs_list">
                        {("W-2 Form").toLowerCase().includes(searchTerm.toLowerCase()) && (
                            <div className={`docs_row ${selectedDoc === "w2" ? "selected" : ""}`}onClick={() => setSelectedDoc("w2")}>
                                <div className="docs_row_info">
                                    <FileText size={20} />
                                    <div>
                                        <h3>W-2 Form</h3>
                                        <p>Uploaded July 14</p>
                                    </div>
                                </div>
                                <span className="doc_status_approved">✓ Verified</span>
                            </div>
                        )}
                        {("1098 Mortgage Interest").toLowerCase().includes(searchTerm.toLowerCase()) && (
                            <div className={`docs_row ${selectedDoc === "1098" ? "selected" : ""}`}onClick={() => setSelectedDoc("1098")}>
                                <div className="docs_row_info">
                                    <FileText size={20} />
                                    <div>
                                        <h3>1098 Mortgage Interest</h3>
                                        <p>Uploaded July 19</p>
                                    </div>
                                </div>
                                <span className="doc_status_approved">✓ Verified</span>
                            </div>
                        )}

                        {("1099-INT").toLowerCase().includes(searchTerm.toLowerCase()) && (
                            <div className="docs_row">
                                <div className="docs_row_info">
                                    <FileText size={20} />
                                    <div>
                                        <h3>1099-INT</h3>
                                        <p>{uploadedfile ? "Uploaded today" : "Not uploaded yet"}</p>
                                    </div>
                                </div>
                                {uploadedfile ? ( <span className="doc_status_pending"> Pending Review </span> ) : ( <span className="doc_status_missing"> ⚠ Missing </span> )}
                            </div>
                        )}
                    </div>

                    <div className="docs_info">
                        {selectedDoc === "w2" && (<>
                            <div className="docs_info_header">
                                <div>
                                    <h2>W-2 Form</h2>
                                    <p>Uploaded July 14</p>
                                </div>
                                <span className="doc_status_approved">✓ Verified</span>
                            </div>

                            <div className="docs_info_grid">
                                <div className="docs_preview">
                                    <h3>Document Preview</h3>

                                    <div className="mock_pdf">
                                        <div className="mock_pdf_title">W-2 Wage Statement</div>
                                        <div className="mock_pdf_row">
                                            <span>Employer</span>
                                            <strong>Walmart</strong>
                                        </div>
                                        <div className="mock_pdf_row">
                                            <span>Box 1 - Wages</span>
                                            <strong>$82,205.00</strong>
                                        </div>
                                        <div className="mock_pdf_row">
                                            <span>Box 2 - Federal Tax Witheld</span>
                                            <strong>$8,000.00</strong>
                                        </div>
                                    </div>

                                    <button className="download_button">
                                        <Download size={17} />
                                        Download Original
                                    </button>
                                </div>

                                <div className="docs_summary">
                                    <h3>Document Summary</h3>

                                    <div className="docs_summary_info">
                                        <span>Employer</span>
                                        <span>Walmart</span>
                                    </div>

                                    <div className="docs_summary_info">
                                        <span>Income Reported</span>
                                        <span>$82,205.00</span>
                                    </div>

                                    <div className="docs_summary_info">
                                        <span>Federal Withholding</span>
                                        <span>$8,000.00</span>
                                    </div>
                                    
                                    <div className="docs_summary_info">
                                        <span>Tax Year</span>
                                        <span>2025</span>
                                    </div>                      
                                </div>
                            </div>

                            <div className="docs_related_messages">
                                <div className="docs_related_messages_title">
                                    <MessageSquare size={18} />
                                    <h3>Related Messages</h3>
                                </div>

                                <div className="docs_related_messages_row" onClick={() => navigate("/client/messages?conversation=w2-received") } >
                                    <div>
                                        <strong>Albert</strong>
                                        <p>
                                            Hi Chris, just wanted to let you know that I received your W-2. Thanks for sending it over!
                                        </p>
                                    </div>
                                    <span className="resolved-response">Complete</span>
                                </div>
                            </div>
                        </>     
                        )}

                        {selectedDoc === "1098" && (<>
                            <div className="docs_info_header">
                                <div>
                                    <h2>1098 Mortgage Interest</h2>
                                    <p>Uploaded July 19</p>
                                </div>
                                <span className="doc_status_approved">✓ Verified</span>
                            </div>

                            <div className="docs_info_grid">
                                <div className="docs_preview">
                                    <h3>Document Preview</h3>

                                    <div className="mock_pdf">
                                        <div className="mock_pdf_title">1098 Mortgage Interest Statement</div>
                                        <div className="mock_pdf_row">
                                            <span>Lender</span>
                                            <strong>Wells Fargo Bank</strong>
                                        </div>
                                        <div className="mock_pdf_row">
                                            <span>Mortgage Interest</span>
                                            <strong>$12,000.00</strong>
                                        </div>
                                    </div>

                                    <button className="download_button">
                                        <Download size={17} />
                                        Download Original
                                    </button>
                                </div>

                                <div className="docs_summary">
                                    <h3>Document Summary</h3>

                                    <div className="docs_summary_info">
                                        <span>Lender</span>
                                        <span>Wells Fargo Bank</span>
                                    </div>

                                    <div className="docs_summary_info">
                                        <span>Mortgage Interest</span>
                                        <span>$12,000.00</span>
                                    </div>

                                    <div className="docs_summary_info">
                                        <span>Tax Year</span>
                                        <span>2025</span>
                                    </div>                      
                                </div>
                            </div>

                            <div className="docs_related_messages">
                                <div className="docs_related_messages_title">
                                    <MessageSquare size={18} />
                                    <h3>Related Messages</h3>
                                </div>

                                <div className="docs_related_messages_row" onClick={() => navigate("/client/messages?conversation=mortgage-interest") } >
                                    <div>
                                        <strong>Albert</strong>
                                        <p>
                                            Hi Chris, your mortgage interest statement has been reviewed.
                                        </p>
                                    </div>
                                    <span className="resolved-response">Complete</span>
                                </div>
                            </div>
                        </>     
                        )}
                        {selectedDoc === null && (
                            <div className="no_doc_selected">
                                Select a document to view details.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppShell>
    );
}