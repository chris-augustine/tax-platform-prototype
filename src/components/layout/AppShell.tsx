import Sidebar from "./Sidebar";
import type { ReactNode } from "react";
import type { UserRole } from "../../types";

interface AppShellProps {
    children: ReactNode;
    role: UserRole;
}

export default function AppShell({ children, role, }: AppShellProps) {
    return (
        <div className="app-shell">
            <Sidebar role={role} />

            <main className="app-content">
                {children}
            </main>
        </div>
    );
}   