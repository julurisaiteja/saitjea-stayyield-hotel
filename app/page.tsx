"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Occupancy",values:[78,81,74,83],suffix:"%"},{label:"ADR",values:[214,218,209,221],suffix:""},{label:"RevPAR",values:[167,176,155,183],suffix:""},{label:"Pickup",values:[42,48,36,51],suffix:""},{label:"Group util",values:[68,62,71,65],suffix:"%"},{label:"HK backlog",values:[14,18,9,16],suffix:""}];
const ACTIVITY=["RevPAR story updated","Group Meridian 62%","Floor 8 HK backlog","BAR compress weekend","Direct suite upsell"];
const ROWS=[{room:"801",type:"Queen City",arrive:"Today",guest:"Brooks",rate:"$198",status:"Depart"},{room:"802",type:"King Suite",arrive:"Today",guest:"Nguyen",rate:"$320",status:"Stayover"},{room:"803",type:"Queen City",arrive:"14:00",guest:"Ortiz",rate:"$188",status:"Arrival"},{room:"804",type:"Twin",arrive:"15:00",guest:"Kim",rate:"$164",status:"Arrival"},{room:"805",type:"King Harbor",arrive:"—",guest:"—",rate:"$240",status:"Vacant dirty"},{room:"806",type:"Queen City",arrive:"Today",guest:"Hale",rate:"$198",status:"Stayover"},{room:"807",type:"Suite",arrive:"16:00",guest:"Park",rate:"$360",status:"Arrival"},{room:"808",type:"King Harbor",arrive:"Today",guest:"Diaz",rate:"$240",status:"Depart"},{room:"809",type:"Queen City",arrive:"—",guest:"—",rate:"$188",status:"Vacant clean"},{room:"810",type:"Twin",arrive:"Today",guest:"Vale",rate:"$164",status:"Stayover"},{room:"811",type:"King Suite",arrive:"18:00",guest:"Ng",rate:"$320",status:"Arrival"},{room:"812",type:"Queen City",arrive:"Today",guest:"Fox",rate:"$198",status:"Depart"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>HOSPITALITY EDITORIAL</p><h1>Yield desk</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Revenue stories — occupancy, groups, housekeeping as editorial ops.</p></header>
<p className="pull">“Occupancy is a story told room by room — yield is how we edit the night.”</p>
<div className="video-film"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80" alt="Lobby"/><div className="cap">EDITORIAL FILM · LOBBY</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+2}/></FadeIn>)}</div>
<div className="stat-cards">
<div className="stat-card"><h3>Weekend narrative</h3><p style={{margin:0,fontFamily:"var(--font-display)",fontSize:"1.25rem"}}>Compress BAR −8% on city queens; push suite upsell on direct.</p></div>
<div className="stat-card"><h3>Group Meridian</h3><b>62%</b><Meter value={62} label="Pickup"/><p className="stencil">Release 12 rooms Friday</p></div>
<div className="stat-card"><h3>Housekeeping</h3><b>Floor 8</b><Meter value={78} label="Backlog pressure"/><Spark seed={7}/></div>
</div>
<div className="grid-2"><section className="panel"><h2>RevPAR story</h2><TrendArea/></section><section className="panel"><h2>Segment mix</h2><MixBars/></section></div>
<section className="panel"><h2>Room strip</h2><FilterTable rows={ROWS} columns={[{key:"room",label:"Room"},{key:"type",label:"Type"},{key:"arrive",label:"Arrive"},{key:"guest",label:"Guest"},{key:"rate",label:"Rate"},{key:"status",label:"Status"}]} searchKeys={["room","type","guest","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(0);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
