import AppShell from "../../components/layout/AppShell";
import { MessageSquare, Send } from "lucide-react";

export default function BusinessMessages() {
  return (
    <AppShell role="business_owner">
      <div className="client_messages">
        <div className="client_messages_header">
          <h1>Messages</h1>
        </div>

        <div className="client_messages_layout">
          <div className="conversations_list">
            <div className="conversations_list_title">
              <MessageSquare size={19} />
              <h2>Conversations</h2>
            </div>

            <div className="conversation_row selected">
              <div>
                <h3>Q4 Bank Statements Needed</h3>
                <p className="conversation_preview">
                  Hi Joel, Please upload October-Decembeer bank statements I can continue preparing your return. 
                </p>
              </div>

              <span className="needs-response">Needs Response</span>
            </div>

            <div className="conversation_row">
              <div>
                <h3>Business Expense Confirmation</h3>
                <p className="conversation_preview">
                  Hi Joel, that camera that you got, was it entirely for business use?
                </p>
              </div>

              <span className="needs-response">Needs Response</span>
            </div>

            <div className="conversation_row">
              <div>
                <h3>Payroll Summary Received</h3>
                <p className="conversation_preview">
                  Hi Joel, just wanted to let you know that I received your payroll summary. Thanks for sending it over! 
                </p>
              </div>

              <span className="resolved-response">Complete</span>
            </div>
          </div>

          <div className="conversation_info">
            <div className="conversation_info_header">
              <div>
                <h2>Q4 Bank Statements Needed</h2>

                <p>
                  Related Document: <strong>Q4 Bank Statements</strong>
                </p>
              </div>

              <span className="needs-response">Needs Response</span>
            </div>

            <div className="conversation_thread">
              <div className="message_bubble message_from_preparer">
                <strong>Albert</strong>

                <p>
                  Albert: Hi Joel, Please upload October-Decembeer bank statements I can continue preparing your return.
                </p>
              </div>
            </div>

            <div className="reply_section">
              <label htmlFor="business_reply">Reply</label>

              <textarea
                id="business_reply"
                placeholder="Type your response..."
                rows={4}
              />

              <div className="reply_actions">
                <button className="send_reply_button">
                  <Send size={17} />
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
