import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppShell from "../../components/layout/AppShell";


type ReturnStatus = | "Return Preparation" | "Needs Review" | "Waiting on Client" | "Ready for Quality Review";
type ReturnType = "Individual" | "Business"; 
type Priority = "High" | "Medium" | "Low";

type TaxReturn = {
    id: number;
    clientName: string;
    returnType: ReturnType;
    status: ReturnStatus;
    priority: Priority;
    lastActivity: string;
    isMain?:boolean;
};

const firstNames = [ "Mateo", "Fiona", "Julian", "Amara", "Liam", "Daphne", "Silas", "Elena", "Caleb", "Nora", "Ezra", "Chloe", "Jasper", "Maya", "Ethan", "Freya" ];
const priorities: Priority[] = ["High", "Medium", "Low"];
const statuses: ReturnStatus[] = [ "Return Preparation", "Needs Review", "Waiting on Client", "Ready for Quality Review", ];
const lastNames = [ "Grant", "Montgomery", "Chen", "Patel", "O'Connor", "Gallagher", "Trump", "Sinclair", "Vasquez", "Mercer", "Sterling", "Novak", "Blackwood", "Hawthorne", "Srinivasan", "Dupont" ];

const genReturns: TaxReturn[] = Array.from( { length: 149 }, (_, index) => {
    const firstName = firstNames[index % firstNames.length]; 
    const lastName = lastNames[ Math.floor(index / firstNames.length) % lastNames.length ];
    const returnType: ReturnType = index % 5 === 0 ? "Business" : "Individual";
    return{
        id: index + 2,
        clientName:
        returnType === "Business"
          ? `${firstName} ${lastName} LLC`
          : `${firstName} ${lastName}`,
      returnType,
      status: statuses[index % statuses.length],
      priority: priorities[index % priorities.length],
      lastActivity:
        index % 3 === 0
          ? "Today"
          : index % 3 === 1
            ? "Yesterday"
            : "3 days ago",
    }
})

const allReturns: TaxReturn[] = [
  {
    id: 1,
    clientName: "Chris Augustine",
    returnType: "Individual",
    status: "Return Preparation",
    priority: "High",
    lastActivity: "Today",
    isMain: true,
  },
  ...genReturns,
];


export default function PreparerReturns() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<"All" | ReturnStatus>("All");
    const [typeFilter, setTypeFilter] = useState<"All" | ReturnType>("All");
    const [priorityFilter, setPriorityFilter] = useState<"All" | Priority>("All");

    const filteredReturns = useMemo(() => {
        return allReturns.filter((taxReturn) => {
        const matchesSearch = taxReturn.clientName
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            taxReturn.status === statusFilter;

        const matchesType =
            typeFilter === "All" ||
            taxReturn.returnType === typeFilter;

        const matchesPriority =
            priorityFilter === "All" ||
            taxReturn.priority === priorityFilter;
        
      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesPriority
        );
        });
    }, [
        searchTerm,
        statusFilter,
        typeFilter,
        priorityFilter,
    ]);

    const handleOpenReturn = (taxReturn: TaxReturn) => {
        if (taxReturn.isMain) {
            navigate("/tax-preparer/workspace");
        }
    };

  return(
        <AppShell role="tax_preparer">
          <div className="preparer_returns">
            <div className="preparer_returns_header">
                <h1>Returns</h1>
                <p>
                    Manage all your assigned client returns.
                </p>
            </div>
            <div className="returns_filters">
                <div className="return_search">
                    <Search size={18} />
                    <input type="text" placeholder="Search clients..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) } />    
                </div>
                <select value={statusFilter} onChange={(event) => setStatusFilter( event.target.value as | "All" | ReturnStatus ) } >
                    <option value="All">All Statuses</option>
                    <option value="Return Preparation">Return Preparation</option>
                    <option value="Waiting on Client">Waiting on Client</option>
                    <option value="Ready for Quality Review">Ready for Quality Review</option>
                </select>
                <select value={typeFilter} onChange={(event) => setTypeFilter( event.target.value as | "All" | ReturnType ) } >
                    <option value="All">All Types</option> 
                    <option value="Individual">Individual</option> 
                    <option value="Business">Business</option>

                </select>
                <select value={priorityFilter} onChange={(event) => setPriorityFilter( event.target.value as | "All" | Priority ) } >
                    <option value="All">All Priorities</option> 
                    <option value="High">High</option> 
                    <option value="Medium">Medium</option> 
                    <option value="Low">Low</option>
                </select>
            </div>

            <div className="returns_results_summary">
                Showing{" "}
                <strong>{filteredReturns.length}</strong>{" "} of <strong>{allReturns.length}</strong> returns
            </div>
            <div className="returns_table">
                <div className="returns_table_header">
                    <span>Client</span> 
                    <span>Type</span> 
                    <span>Status</span> 
                    <span>Priority</span> 
                    <span>Last Activity</span> 
                    <span></span>
                </div>
                {filteredReturns.map((taxReturn) => (
                    <div className="returns_table_row" key={taxReturn.id}>
                        <div>
                            <strong>{taxReturn.clientName}</strong>
                            <span className="return_year">
                                2025 Tax Return
                            </span>
                        </div>
                        <span>{taxReturn.returnType}</span>
                        <span className={`returns_status ${taxReturn.status .toLowerCase() .replaceAll(" ", "_")}`} >
                            {taxReturn.status}
                        </span>
                        <span className={`returns_priority ${taxReturn.priority.toLowerCase()}`} > {taxReturn.priority} </span>
                        <span>{taxReturn.lastActivity}</span>
                        <button className="returns_open_button" onClick={() => handleOpenReturn(taxReturn) } >
                            Open Return
                        </button>
                    </div>       
                ))}
                {filteredReturns.length === 0 && (
                    <div className="returns_nada">
                        No returns match your filters.
                    </div>
                )}
            </div>
          </div>
        </AppShell>
  );
}