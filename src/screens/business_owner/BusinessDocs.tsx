import AppShell from "../../components/layout/AppShell";
import { FileText } from "lucide-react";

export default function BusinessDocs() {
  return (
    <AppShell role="business_owner">
      <div className="client_docs">
        <div className="client_docs_header">
          <h1>Documents</h1>
          <p>2025 Business Tax Return</p>
        </div>

        <input
          className="client_docs_search"
          type="text"
          placeholder="Search business documents..."
        />

        <div className="client_docs_list">
          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>Profit &amp; Loss Statement</h3>
                <p>Uploaded July 12</p>
              </div>
            </div>

            <span className="doc_status_approved">✓ Verified</span>
          </div>

          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>Payroll Summary</h3>
                <p>Uploaded July 18</p>
              </div>
            </div>

            <span className="doc_status_approved">✓ Verified</span>
          </div>

          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>1099-NEC</h3>
                <p>Uploaded July 21</p>
              </div>
            </div>

            <span className="doc_status_approved">✓ Verified</span>
          </div>

          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>Prior-Year Business Return</h3>
                <p>Uploaded July 7</p>
              </div>
            </div>

            <span className="doc_status_approved">✓ Verified</span>
          </div>

          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>Q4 Bank Statements</h3>
                <p>Not uploaded yet</p>
              </div>
            </div>

            <span className="doc_status_missing">⚠ Missing</span>
          </div>

          <div className="docs_row">
            <div className="docs_row_info">
              <FileText size={20} />

              <div>
                <h3>Business Expense Summary</h3>
                <p>Uploaded July 23</p>
              </div>
            </div>

            <span className="doc_status_approved">✓ Verified</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
