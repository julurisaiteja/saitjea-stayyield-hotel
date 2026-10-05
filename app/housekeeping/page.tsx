"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StayYield</p>
        <h1>Housekeeping</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"floor":"3","dirty":2,"clean":14,"status":"OK"},{"floor":"5","dirty":4,"clean":10,"status":"Watch"},{"floor":"8","dirty":9,"clean":5,"status":"Backlog"},{"floor":"10","dirty":3,"clean":12,"status":"OK"}]} columns={[{"key":"floor","label":"Floor"},{"key":"dirty","label":"Dirty"},{"key":"clean","label":"Clean"},{"key":"status","label":"Status"}]} searchKeys={["floor","dirty","clean","status"]} />
</section>
    </div>
  );
}
