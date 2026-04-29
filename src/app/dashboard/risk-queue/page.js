'use client';
import { Fragment, useState } from 'react';
import { riskQueueData } from '@/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function RiskQueuePage() {
  const [expandedRows, setExpandedRows] = useState({});
  const levelColor = { Critical: '#dc2626', High: '#f97316', Medium: '#f59e0b', Low: '#22c55e' };

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getExpandedContent = (id) => {
    if (id === 'A102') {
      return {
        summary: "Patient A102 has missed 3 consecutive medication reminders and reported worsening symptoms with headache severity increasing from 3 to 7. Risk score has increased from 64 to 91 in 48 hours. Multiple correlated signals indicate high probability of care plan failure within 5 days.",
        recommendation: "Nurse review within 2 hours — Patient shows fastest risk acceleration in current cohort with 3 correlated critical signals.",
        trend: [ { day: 'Apr 21', score: 64 }, { day: 'Apr 22', score: 67 }, { day: 'Apr 23', score: 70 }, { day: 'Apr 24', score: 75 }, { day: 'Apr 25', score: 82 }, { day: 'Apr 26', score: 88 }, { day: 'Apr 27', score: 91 } ],
        breakdown: [ { label: 'Missed Reminders', value: 28, color: '#f87171' }, { label: 'Worsening Symptoms', value: 35, color: '#dc2626' }, { label: 'No Check-in Today', value: 18, color: '#fca5a5' }, { label: 'Device Data Trend', value: 19, color: '#fee2e2' } ]
      };
    } else if (id === 'B441') {
      return {
        summary: "Patient B441 has exhibited an upward trend in blood pressure readings alongside irregular check-in times. The combination suggests potential medication non-adherence or emerging hypertension crisis.",
        recommendation: "Schedule tele-health follow up today — Blood pressure readings are approaching critical threshold.",
        trend: [ { day: 'Apr 21', score: 70 }, { day: 'Apr 22', score: 72 }, { day: 'Apr 23', score: 74 }, { day: 'Apr 24', score: 77 }, { day: 'Apr 25', score: 80 }, { day: 'Apr 26', score: 82 }, { day: 'Apr 27', score: 84 } ],
        breakdown: [ { label: 'BP Trend', value: 45, color: '#fb923c' }, { label: 'Irregular Check-ins', value: 30, color: '#fdba74' }, { label: 'Recent Med Change', value: 25, color: '#ffedd5' } ]
      };
    }
    return {
      summary: "Gathering full signal context for this case. AI models are synthesizing recent data points.",
      recommendation: "Standard operational review recommended.",
      trend: [ { day: 'Apr 21', score: 50 }, { day: 'Apr 27', score: 60 } ],
      breakdown: [ { label: 'Primary Factor', value: 60, color: '#fbbf24' }, { label: 'Other', value: 40, color: '#fde68a' } ]
    };
  };

  const getScoreColor = (score) => {
    if (score < 50) return '#22c55e';
    if (score < 70) return '#f59e0b';
    if (score < 85) return '#f97316';
    return '#dc2626';
  };

  const healthcareEntries = riskQueueData.filter(r => r.domain === 'Healthcare');
  const crossDomainEntries = riskQueueData.filter(r => r.domain !== 'Healthcare');

  const renderRow = (r) => {
    const isExpanded = expandedRows[r.id];
    const expData = isExpanded ? getExpandedContent(r.id) : null;
    
    return (
      <Fragment key={r.id}>
        <tr onClick={() => toggleRow(r.id)} style={{ cursor: 'pointer', borderBottom: isExpanded ? 'none' : '1px solid var(--border)', background: isExpanded ? '#f8fafc' : 'transparent' }}>
          <td style={{ fontWeight: 700, fontSize: 16, color: r.rank <= 2 ? '#dc2626' : '#475569' }}>#{r.rank}</td>
          <td style={{ fontWeight: 600 }}>{r.name}</td>
          <td><span className="badge badge-new">{r.domain}</span></td>
          <td>
            <div style={{ position: 'relative', width: '100%', height: 28, background: '#f1f5f9', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${r.riskScore}%`, background: `linear-gradient(90deg, ${getScoreColor(r.riskScore)}33, ${getScoreColor(r.riskScore)})` }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 12, fontWeight: 700, color: getScoreColor(r.riskScore) }}>
                {r.riskScore}
              </div>
            </div>
          </td>
          <td><span className={`badge badge-${r.riskLevel.toLowerCase()}`}>{r.riskLevel}</span></td>
          <td style={{ fontSize: 13, maxWidth: 200 }}>{r.primaryReason}</td>
          <td style={{ fontSize: 13 }}>{r.recommendation}</td>
          <td><span className={`badge badge-${r.status.toLowerCase().replace(' ', '-')}`}>{r.status}</span></td>
        </tr>
        {isExpanded && (
          <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
            <td colSpan="8" style={{ padding: '24px 40px' }}>
              <div style={{ background: 'white', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0', display: 'flex', gap: 32 }}>
                
                <div style={{ flex: '1 1 50%' }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>AI Summary</h4>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, marginBottom: 20 }}>{expData.summary}</p>
                  
                  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#1e293b' }}>Recommended Action</h4>
                  <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', padding: 12, borderRadius: 8, fontSize: 14, color: '#4338ca', fontWeight: 500 }}>
                    {expData.recommendation}
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                    <button className="btn btn-secondary" style={{ fontSize: 13, fontWeight: 600 }}>Mark as Reviewed</button>
                    <button className="btn btn-danger" style={{ fontSize: 13, fontWeight: 600 }}>Escalate</button>
                    <button className="btn btn-outline" style={{ fontSize: 13, fontWeight: 500 }}>Dismiss</button>
                    <button className="btn btn-outline" style={{ fontSize: 13, fontWeight: 500 }}>Add Note</button>
                  </div>
                </div>

                <div style={{ flex: '1 1 50%' }}>
                  <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>Risk Score Breakdown</h4>
                  <div style={{ display: 'flex', height: 24, borderRadius: 6, overflow: 'hidden', marginBottom: 12 }}>
                    {expData.breakdown.map((b, i) => (
                      <div key={i} style={{ width: `${b.value}%`, background: b.color, height: '100%' }} title={`${b.label}: ${b.value}%`} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: 24 }}>
                    {expData.breakdown.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#475569' }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: b.color }} />
                        {b.label} ({b.value}%)
                      </div>
                    ))}
                  </div>

                  <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>7-Day Score History</h4>
                  <div style={{ height: 140 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={expData.trend}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
                        <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3, fill: '#4f46e5' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </td>
          </tr>
        )}
      </Fragment>
    );
  };

  return (
    <div className="page-content">
      <h1 className="page-title">Risk Queue</h1>
      <p className="page-subtitle">Prioritized cases requiring attention — ranked by composite risk score</p>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-wrap">
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ width: 50 }}>Rank</th>
                <th>Case / Entity</th>
                <th>Domain</th>
                <th style={{ width: 140 }}>Risk Score</th>
                <th>Risk Level</th>
                <th>Main Reason</th>
                <th>Recommended Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" style={{ padding: '16px 24px 8px', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, color: '#64748b', letterSpacing: 1 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                    HEALTHCARE PILOT — LIVE
                  </div>
                </td>
              </tr>
              {healthcareEntries.map(renderRow)}
              
              <tr>
                <td colSpan="8" style={{ padding: '24px 24px 8px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, color: '#94a3b8', letterSpacing: 1 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#94a3b8' }} />
                    CROSS-DOMAIN DEMO — SIMULATED
                  </div>
                </td>
              </tr>
              {crossDomainEntries.map(renderRow)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
