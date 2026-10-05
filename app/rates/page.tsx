"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StayYield</p>
        <h1>Rates</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"room":"Queen City","bar":"$198","flex":"$188","status":"Compress"},{"room":"King Harbor","bar":"$240","flex":"$240","status":"Hold"},{"room":"King Suite","bar":"$320","flex":"$340","status":"Upsell"},{"room":"Twin","bar":"$164","flex":"$154","status":"Compress"}]} columns={[{"key":"room","label":"Type"},{"key":"bar","label":"BAR"},{"key":"flex","label":"Flex"},{"key":"status","label":"Status"}]} searchKeys={["room","bar","flex","status"]} />
</section>
    </div>
  );
}
