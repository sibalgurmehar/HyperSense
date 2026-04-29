'use client';
import { Fragment, useState } from 'react';
import { signalsData } from '@/data/mockData';
import { Search, ChevronRight, Link2 } from 'lucide-react';

export default function SignalsPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = signalsData.filter((s) => {
    if (categoryFilter !== 'All' && s.category !== categoryFilter) return false;
    if (riskFilter !== 'All' && s.riskLevel !== riskFilter) return false;
    if (statusFilter !== 'All' && s.status !== statusFilter) return false;
    return true;
  });

  const contribColor = (v) => v >= 30 ? '#dc2626' : v >= 20 ? '#f97316' : v >= 15 ? '#f59e0b' : '#22c55e';

  const getExpandedContent = (id) => {
    if (id === 'SIG-1001') {
      return {
        detail: "Patient A102 was scheduled for medication reminders at 8:00 AM, 2:00 PM, and 8:00 PM on April 25-27. Three consecutive reminders received no patient response.",
        dataPoints: ["Missed reminder Apr 25 8PM", "Missed reminder Apr 26 2PM", "Missed reminder Apr 27 8AM"],
        reasoning: "Three consecutive missed reminders within 48 hours matches historical deterioration pattern with 82% correlation to care plan failure.",
        linkedCase: "Contributes 28% to Patient A102 risk score (91) → View in Risk Queue"
      };
    } else if (id === 'SIG-1002') {
      return {
        detail: "Patient A102 submitted a symptom check-in on April 27 reporting headache severity increase from 3 to 7 on a 10-point scale.",
        dataPoints: ["Symptom score Apr 24: 3/10", "Symptom score Apr 27: 7/10", "Rate of change: +133% in 72 hours"],
        reasoning: "Rapid symptom score increase exceeding 2x baseline within 72 hours is a strong early indicator of clinical deterioration.",
        linkedCase: "Contributes 35% to Patient A102 risk score (91) → View in Risk Queue"
      };
    } else if (id === 'SIG-1003') {
      return {
        detail: "System detected an access pattern for user account NRS-042 that deviates from normal behavior.",
        dataPoints: ["Login from new IP address at 2:34 AM", "Accessed 14 patient records in 8 minutes", "Normal average: 3 records per session"],
        reasoning: "Access volume and timing exceed 3 standard deviations from user baseline. Pattern consistent with credential compromise or insider data extraction.",
        linkedCase: "Contributes 22% to Account SYS-17 risk score (79) → View in Risk Queue"
      };
    }
    return {
      detail: "Signal details are currently being processed.",
      dataPoints: ["Data points loading..."],
      reasoning: "AI logic pending...",
      linkedCase: "View related entity in Risk Queue"
    };
  };

  const isRelated = (id) => ['SIG-1001', 'SIG-1002', 'SIG-1004', 'SIG-1007'].includes(id);

  return (
    <div className="page-content">
      <h1 className="page-title">Signals</h1>
      <p className="page-subtitle">Raw behavioral, operational, and system signals detected by Hypersense</p>

      <div className="filters">
        <select className="filter-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Patient">Patient</option>
          <option value="Operational">Operational</option>
          <option value="System">System</option>
          <option value="Compliance">Compliance</option>
        </select>
        <select className="filter-select" value={riskFilter} onChange={(e) => setRiskFilter(e.target.value)}>
          <option value="All">All Risk Levels</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
        <select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Escalated">Escalated</option>
        </select>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--surface)' }}>
          <Search size={14} color="#94a3b8" />
          <input placeholder="Search signals..." style={{ border: 'none', outline: 'none', fontSize: 13, fontFamily: 'inherit', width: 160 }} />
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-wrap">
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ width: 40 }}></th>
                <th>Signal ID</th>
                <th>Source</th>
                <th>Category</th>
                <th>Description</th>
                <th style={{ width: 200 }}>Risk Contribution</th>
                <th>Risk Level</th>
                <th>Timestamp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <Fragment key={s.id}>
                  <tr 
                    onClick={() => toggleRow(s.id)} 
                    style={{ cursor: 'pointer', borderBottom: expandedRows[s.id] ? 'none' : '1px solid var(--border)', background: expandedRows[s.id] ? '#f8fafc' : 'transparent' }}
                  >
                    <td style={{ textAlign: 'center' }}>
                      <ChevronRight size={16} color="#64748b" style={{ transform: expandedRows[s.id] ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                    </td>
                    <td style={{ fontWeight: 600, fontFamily: 'monospace', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                      {s.id}
                      {isRelated(s.id) && (
                        <>
                          <Link2 size={12} color="#a78bfa" title="Related to a prioritized patient case" />
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#7c3aed', background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: 999, padding: '2px 6px', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                            related
                          </span>
                        </>
                      )}
                    </td>
                    <td style={{ fontSize: 13 }}>{s.source}</td>
                    <td><span className="badge badge-new">{s.category}</span></td>
                    <td style={{ fontSize: 13, maxWidth: 280 }}>{s.description}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, width: 36 }}>{s.contribution}%</span>
                        <div className="score-bar" style={{ width: '100%', maxWidth: 120, height: 8, background: '#e2e8f0', borderRadius: 4 }}>
                          <div className="score-fill" style={{ height: '100%', width: `${s.contribution}%`, background: contribColor(s.contribution), borderRadius: 4 }} />
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge badge-${s.riskLevel.toLowerCase()}`}>{s.riskLevel}</span></td>
                    <td style={{ fontSize: 12, color: '#94a3b8', whiteSpace: 'nowrap' }}>{s.timestamp}</td>
                    <td><span className={`badge badge-${s.status.toLowerCase()}`}>{s.status}</span></td>
                  </tr>
                  {expandedRows[s.id] && (
                    <tr style={{ borderBottom: '1px solid var(--border)', background: '#f8fafc' }}>
                      <td colSpan="9" style={{ padding: '20px 40px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                          <div style={{ background: 'white', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>SIGNAL DETAIL</div>
                            <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.6 }}>{getExpandedContent(s.id).detail}</p>
                          </div>
                          <div style={{ background: 'white', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>CONTRIBUTING DATA POINTS</div>
                            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: '#334155', lineHeight: 1.6 }}>
                              {getExpandedContent(s.id).dataPoints.map((dp, i) => <li key={i}>{dp}</li>)}
                            </ul>
                          </div>
                          <div style={{ background: 'white', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>AI REASONING</div>
                            <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.6 }}>{getExpandedContent(s.id).reasoning}</p>
                          </div>
                          <div style={{ background: 'white', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', letterSpacing: 1, marginBottom: 8 }}>LINKED RISK CASE</div>
                            <p style={{ fontSize: 13, color: '#6366f1', fontWeight: 500, cursor: 'pointer' }}>{getExpandedContent(s.id).linkedCase}</p>
                            {!['SIG-1001', 'SIG-1002', 'SIG-1003'].includes(s.id) && (
                              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>Click to expand additional model evidence as it becomes available.</div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-title">How Signal Aggregation Works</div>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Individual signals are weak on their own. Hypersense combines multiple signals from different sources to compute a composite risk score for each case.
          For example, a single missed reminder might contribute 10% to a patient&apos;s risk score, but when combined with worsening symptoms and no check-in,
          the composite score can escalate rapidly — triggering a prioritized alert for review.
        </p>
      </div>
    </div>
  );
}
