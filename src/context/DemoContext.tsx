import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Message = {
  id: number;
  sender: "Albert" | "Chris";
  text: string;
};

export type Conversation = {
  id: string;
  title: string;
  relatedDocument?: string;
  needsResponse: boolean;
  messages: Message[];
};


type DemoContextType = {
    uploadedfile: boolean;
    setUploadedFile: (value: boolean) => void;

    preparerVerifiedFile: boolean;
    setPreparerVerifiedFile: (value: boolean) => void;

    sentToQualityReview: boolean;
    setSentToQualityReview: (value: boolean) => void;

    reviewerApproved: boolean;
    setReviewerApproved: (value: boolean) => void;

    changesRequested: boolean;
    setChangesRequested: (value: boolean) => void;

    interestIncome: string;
    setInterestIncome: (value: string) => void;

    conversations: Conversation[];
    setConversations: React.Dispatch< React.SetStateAction<Conversation[]> >;
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({children}: {children: ReactNode}){
    const [uploadedfile, setUploadedFile] = useState(false);
    const [preparerVerifiedFile, setPreparerVerifiedFile] = useState(false);

  const [sentToQualityReview, setSentToQualityReview] = useState(false);
  const [reviewerApproved, setReviewerApproved] = useState(false);
  const [changesRequested, setChangesRequested] = useState(false);
  const [interestIncome, setInterestIncome] = useState("410.00");

        const [conversations, setConversations] = useState<Conversation[]>([
          {
              id: "1099-int",
              title: "1099-INT Needed",
              relatedDocument: "1099-INT",
              needsResponse: true,
              messages: [
              {
                  id: 1,
                  sender: "Albert",
                  text: "Hi Chris, I noticed that your 1099-INT is missing. Please upload it at your earliest convenience so we can continue preparing your return.",
              },
              ],
          },
  
          {
              id: "marital-status",
              title: "Marital Status Confirmation",
              needsResponse: true,
              messages: [
              {
                  id: 1,
                  sender: "Albert",
                  text: "Hi Chris, has your marital status changed during this tax year?",
              },
              ],
          },
  
          {
              id: "w2-received",
              title: "W-2 Received",
              relatedDocument: "W-2 Form",
              needsResponse: false,
              messages: [
              {
                  id: 1,
                  sender: "Chris",
                  text: "Hi Albert, I just uploaded my W-2. Let me know if you need anything else from me.",
              },
              {
                  id: 2,
                  sender: "Albert",
                  text: "Hi Chris, just wanted to let you know that I received your W-2. Thanks for sending it over!",
              },
              ],
          },
  
          {
              id: "mortgage-interest",
              title: "Mortgage Interest Statement",
              relatedDocument: "1098 Mortgage Interest",
              needsResponse: false,
              messages: [
              {
                  id: 1,
                  sender: "Albert",
                  text: "Hi Chris, do you have a Form 1098 for the mortgage interest you paid this year?",
              },
              {
                  id: 2,
                  sender: "Chris",
                  text: "Yes, I have it. I'll upload the statement today.",
              },
              {
                  id: 3,
                  sender: "Albert",
                  text: "Hi Chris, your mortgage interest statement has been reviewed.",
              },
              ],
          },
  
          {
              id: "address-confirmation",
              title: "Address Confirmation",
              needsResponse: false,
              messages: [
              {
                  id: 1,
                  sender: "Albert",
                  text: "Hi Chris, before we get started, can you confirm that your mailing address has not changed since last year?",
              },
              {
                  id: 2,
                  sender: "Chris",
                  text: "Yes, my mailing address is still the same.",
              },
              {
                  id: 3,
                  sender: "Albert",
                  text: "Thank you for confirming.",
              },
              ],
          },
  
          {
              id: "welcome",
              title: "Welcome — 2025 Tax Return",
              needsResponse: false,
              messages: [
              {
                  id: 1,
                  sender: "Albert",
                  text: "Hi Chris, I've opened your 2025 tax return. You can upload your documents here and I'll reach out if I need any additional information.",
              },
              {
                  id: 2,
                  sender: "Chris",
                  text: "Sounds good, thank you Albert.",
              },
              ],
          },
  
      ]);


    return(
        <DemoContext.Provider 
            value={{
                uploadedfile,
                setUploadedFile,

                preparerVerifiedFile,
                setPreparerVerifiedFile,

                sentToQualityReview,
                setSentToQualityReview,
                reviewerApproved,
                setReviewerApproved,
                changesRequested,
                setChangesRequested,
                interestIncome,
                setInterestIncome,
                conversations,
                setConversations,
                
      }}>
            {children}
        </DemoContext.Provider>
    );
}

export function launchDemo(){
    const memory  = useContext(DemoContext);
    if(!memory){
        throw new Error()
    }
    return memory;
}