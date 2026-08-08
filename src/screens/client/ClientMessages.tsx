import AppShell from "../../components/layout/AppShell";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare, Send } from "lucide-react";
import { launchDemo } from "../../context/DemoContext";


export default function ClientMessages() {
 
    const [searchParams] = useSearchParams();
    const { conversations, setConversations, } = launchDemo();
    const conversationFromUrl = searchParams.get("conversation");
    const [selectedConversationId, setSelectedConversationId] = useState(conversationFromUrl || "1099-int");
    const [reply,setReply] = useState("");
    const selectedConversation = conversations.find((conversation)=> conversation.id === selectedConversationId);
    const handleSendReply = () => {
        if (!reply.trim() || !selectedConversation){
            return;
        }

        setConversations((currentConversations) => currentConversations.map((conversation) => conversation.id === selectedConversation.id ? { ...conversation, needsResponse: false, messages: [ ...conversation.messages, { id: conversation.messages.length + 1, sender: "Chris", text: reply, }, ], } : conversation ) );
        setReply("");

    };
  
  
    return(
      <AppShell role="individual_taxpayer">
          <div className="client_messages">
            <div className="client_messages_header">
                <h1>Messages</h1>
            </div>

            <div className="client_messages_layout">
                <div className="conversations_list">
                    <div className="conversations_list_title">
                        <MessageSquare size={19}/>
                        <h2>Conversations</h2>
                    </div>

                    {conversations.map((conversation)=>(
                        <div key={conversation.id} className={`conversation_row ${ selectedConversationId === conversation.id ? "selected" : "" }`} onClick={() => setSelectedConversationId(conversation.id)} >
                            <div>
                                <h3>{conversation.title}</h3>

                                {conversation.relatedDocument && (
                                    <p className= "conversation_document">
                                        Related: {conversation.relatedDocument}
                                    </p>
                                )}

                                <p className="conversation_preview">
                                    {
                                        conversation.messages[conversation.messages.length - 1].text
                                    }
                                </p>
                            </div>

                            {conversation.needsResponse ? (
                                <span className="needs-response">Needs Response</span>
                            ): (
                                <span className="resolved-response">Complete</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="conversation_info">
                    {selectedConversation && (
                        <>
                            <div className="conversation_info_header">
                                <div>
                                    <h2>{selectedConversation.title}</h2>
                                    {selectedConversation.relatedDocument && (
                                        <p>
                                            Related Document:{" "}
                                            <strong>
                                                {selectedConversation.relatedDocument}
                                            </strong>
                                        </p>
                                    )}
                                </div>

                                {selectedConversation.needsResponse?(
                                    <span className="needs-response">Needs Response</span>
                                ):(
                                    <span className="resolved-response">Complete</span>
                                )}
                            </div>

                            <div className="conversation_thread">
                                {selectedConversation.messages.map((message) => (
                                    <div key={message.id} className={`message_bubble ${ message.sender === "Chris" ? "message_from_client" : "message_from_preparer" }`} >
                                        <strong>{message.sender}</strong>
                                        <p>{message.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="reply_section">
                                <label htmlFor="reply_box">Reply</label>
                                <textarea id="reply_box" value={reply} onChange={(event) => setReply(event.target.value)} placeholder="Type your response..." rows={4} />
                                
                                <div className="reply_actions">
                                    <button className="send_reply_button" onClick={handleSendReply}>
                                        <Send size={17} />
                                        Send Reply
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
          </div>
       </AppShell>
  );
}