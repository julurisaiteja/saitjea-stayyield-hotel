"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StayYield</p>
        <h1>Groups</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"group":"Meridian Corp","rooms":40,"pickup":"62%","arrival":"Fri","status":"Lagging"},{"group":"River Wedding","rooms":22,"pickup":"91%","arrival":"Sat","status":"Healthy"},{"group":"Tech Summit","rooms":55,"pickup":"78%","arrival":"Sun","status":"Watch"}]} columns={[{"key":"group","label":"Group"},{"key":"rooms","label":"Rooms"},{"key":"pickup","label":"Pickup"},{"key":"arrival","label":"Arrival"},{"key":"status","label":"Status"}]} searchKeys={["group","rooms","pickup","arrival","status"]} />
</section>
    </div>
  );
}
