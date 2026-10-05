"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StayYield</p>
        <h1>Occupancy</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="stat-cards">
          <div className="stat-card"><h3>Tonight</h3><b>81%</b><Meter value={81}/></div>
          <div className="stat-card"><h3>Weekend</h3><b>74%</b><Meter value={74}/></div>
          <div className="stat-card"><h3>Pickup 7d</h3><b>+48</b><Spark seed={5}/></div>
        </div><div className="grid-2"><section className="panel"><h2>Trend</h2><TrendArea/></section><section className="panel"><h2>Mix</h2><MixPie/></section></div><section className="panel"><h2>Breakdown</h2><MixBars/></section>
    </div>
  );
}
