'use client';
import { Activity, AlertTriangle, Radio, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ReferenceLine } from 'recharts';
import { trendData, riskDistribution } from '@/data/mockData';

export default function DashboardOverview() {
  const kpis = [
    { label: 'Total Signals Monitored', value: '12,480', change: '+8.2% vs last week', subtitle: 'across all connected data sources', color: '#4f46e5', bg: '#eef2ff', icon: <Radio size={20} />, sparklineData: [2, 3, 3, 4, 5, 6, 8, 9] },
    { label: 'High-Risk Cases', value: '14', change: '3 new today', subtitle: 'patients requiring immediate review', color: '#dc2626', bg: '#fef2f2', icon: <AlertTriangle size={20} />, sparklineData: [4, 5, 3, 4, 6, 5, 8, 14] },
    { label: 'Alerts Prioritized', value: '5', change: '+12 today', subtitle: 'from 1,375 total raw signals today', color: '#f59e0b', bg: '#fffbeb', icon: <Activity size={20} />, sparklineData: [1, 2, 2, 3, 3, 4, 5, 5] },
    { label: 'Est. Response Time Saved', value: `32%`, change: 'vs. manual triage', subtitle: 'equivalent to ~2.1 hours saved per shift', color: '#22c55e', bg: '#f0fdf4', icon: <Clock size={20} />, sparklineData: [28, 29, 30, 29, 31, 31, 32, 32] },
  ];

  const severityColors = { CRITICAL: '#dc2626', HIGH: '#f97316', MEDIUM: '#f59e0b', LOW: '#22c55e' };

  const aiInsights = [
    { id: 1, severity: 'HIGH', text: 'Patient adherence drop detected across 12 cases', detail: 'Care Team Alpha — Confidence: 89% — 2 hours ago', link: 'View in Risk Queue →' },
    { id: 2, severity: 'CRITICAL', text: '3 patients show increasing escalation probability', detail: 'Patients A102, B441, C789 — Confidence: 87% — 4 hours ago', link: 'View in Risk Queue →' },
    { id: 3, severity: 'MEDIUM', text: 'Night-shift alert volume is above baseline', detail: 'Night Team — Deviation: +34% vs. 7-day avg — 6 hours ago', link: 'View Signals →' },
    { id: 4, severity: 'MEDIUM', text: 'One workflow segment has repeated delayed follow-up', detail: 'Medication follow-up workflow — 3 consecutive delays — 8 hours ago', link: 'View Signals →' },
  ];

  const recommendedActions = [
    { id: 1, text: 'Review top 5 high-risk patients', category: 'Risk Mitigation', reason: '3 patients show new escalation patterns not yet reviewed by care team', priority: 'High' },
    { id: 2, text: 'Check care plan adherence for flagged group', category: 'Patient Outreach', reason: '12 patients dropped below 60% adherence rate in the past 48 hours', priority: 'Medium' },
    { id: 3, text: 'Escalate cases with sustained non-response', category: 'Clinical Escalation', reason: '2 patients have had no check-in response for 72+ hours', priority: 'High' },
    { id: 4, text: 'Reassign overloaded team workflows', category: 'Operations', reason: 'Care Team Beta is at 140% capacity vs. team average', priority: 'Medium' },
  ];

  const patientTrends = [
    { date: 'Apr 21', A102: 64, B441: 70, C789: 55 },
    { date: 'Apr 22', A102: 67, B441: 72, C789: 58 },
    { date: 'Apr 23', A102: 70, B441: 74, C789: 64 },
    { date: 'Apr 24', A102: 75, B441: 77, C789: 60 },
    { date: 'Apr 25', A102: 82, B441: 80, C789: 66 },
    { date: 'Apr 26', A102: 88, B441: 82, C789: 65 },
    { date: 'Apr 27', A102: 91, B441: 84, C789: 68 },
  ];

  const SimpleSparkline = ({ data, color }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const points = data.map((val, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - ((val - min) / range) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width="100%" height="40" viewBox="0 -5 100 110" preserveAspectRatio="none" style={{ marginTop: 12 }}>
        <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div className="page-content">
      <h1 className="page-title">Dashboard Overview</h1>
      <p className="page-subtitle">Real-time risk intelligence for Coordination Centric pilot</p>

      {/* KPIs */}
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div className="kpi-card" key={k.label} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div className="kpi-icon" style={{ background: k.bg, color: k.color }}>{k.icon}</div>
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-value" style={{ color: k.color }}>{k.value}</div>
              </div>
            </div>
            <div className="kpi-change" style={{ color: k.color === '#dc2626' ? '#dc2626' : '#22c55e', marginTop: 8 }}>{k.change}</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{k.subtitle}</div>
            <div style={{ flexGrow: 1 }} />
            <SimpleSparkline data={k.sparklineData} color={k.color} />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid-2">
        <div className="card">
          <div className="card-title">Risk Signals Over Time</div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              <Area type="monotone" dataKey="critical" stackId="1" stroke="#dc2626" fill="#fecaca" fillOpacity={0.6} />
              <Area type="monotone" dataKey="high" stackId="1" stroke="#f97316" fill="#fed7aa" fillOpacity={0.6} />
              <Area type="monotone" dataKey="medium" stackId="1" stroke="#f59e0b" fill="#fef3c7" fillOpacity={0.6} />
              <Area type="monotone" dataKey="low" stackId="1" stroke="#22c55e" fill="#bbf7d0" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Risk Distribution</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="50%" height={260}>
              <PieChart>
                <Pie data={riskDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={95} dataKey="value" paddingAngle={3}>
                  {riskDistribution.map((entry) => (<Cell key={entry.name} fill={entry.color} />))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {riskDistribution.map((r) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: r.color }} />
                  <span style={{ fontSize: 13, color: '#475569' }}>{r.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <div className="card-title" style={{ marginBottom: 4 }}>TOP PATIENT RISK TRENDS</div>
        <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>7-day risk score trajectory for highest-risk patients</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientTrends} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }} />
            <ReferenceLine y={85} stroke="#dc2626" strokeDasharray="4 4" strokeOpacity={0.3} label={{ position: 'insideTopLeft', value: 'Critical Threshold', fill: '#dc2626', fontSize: 11 }} />
            <Line type="monotone" dataKey="A102" stroke="#dc2626" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="B441" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="C789" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 16 }}>
          {[
            ['Patient A102', '#dc2626'],
            ['Patient B441', '#f97316'],
            ['Patient C789', '#f59e0b'],
          ].map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#475569' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Insights + Actions */}
      <div className="grid-2" style={{ marginTop: 24 }}>
        <div className="card">
          <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <TrendingUp size={14} /> Recent AI Insights
          </div>
          {aiInsights.map((ins) => (
            <div className="insight-item" key={ins.id} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className={`badge`} style={{ background: severityColors[ins.severity], color: 'white', fontSize: 10 }}>{ins.severity}</span>
              <div style={{ flex: 1 }}>
                <div className="insight-text" style={{ fontSize: 14, fontWeight: 500, color: '#1e293b' }}>{ins.text}</div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{ins.detail}</div>
                <div style={{ fontSize: 12, color: '#a78bfa', marginTop: 6, cursor: 'pointer', fontWeight: 500 }}>{ins.link}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ArrowRight size={14} /> Recommended Actions
          </div>
          {recommendedActions.map((a) => (
            <div className="action-item" key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#1e293b' }}>{a.text}</div>
                <div style={{ fontSize: 12, color: '#6366f1', marginTop: 4, fontWeight: 500 }}>{a.category}</div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{a.reason}</div>
              </div>
              <span className={`badge badge-${a.priority.toLowerCase()}`}>{a.priority}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
