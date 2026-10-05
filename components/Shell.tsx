"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Yield Desk"],["/occupancy","Occupancy"],["/groups","Groups"],["/rates","Rates"],["/housekeeping","Housekeeping"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Weekend RevPAR soft","a":"Compress BAR on city-view queens −8%; push suite upsell on direct. OTA parity watch."},{"q":"Group pickup lag","a":"Meridian Corp block 62% pickup. Release 12 rooms Friday; sales call AM."},{"q":"HK backlog floor 8","a":"Move 3 attendants from floor 3; prioritize departures before 13:00 arrivals."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <header className="masthead">
        <div className="brand">Stay<span>Yield</span></div>
        <p style={{ margin: "0.35rem 0 0", color: "var(--muted)", fontSize: 13 }}>Hospitality editorial ops · <LiveClock /></p>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="StayYield" prompts={PROMPTS} />
    </div>
  );
}
