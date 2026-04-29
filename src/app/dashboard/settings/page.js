'use client';
import { useState } from 'react';
import { settingsData } from '@/data/mockData';
import { ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  const [rules, setRules] = useState(settingsData.alertRules);

  const toggleRule = (id) => {
    setRules((prev) => prev.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const t = settingsData.thresholds;

  return (
    <div className="page-content">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Configure risk scoring, thresholds, and alert rules for your organization</p>

      <div className="grid-2">
        {/* Risk Categories */}
        <div className="card">
          <div className="settings-section">
            <h3>Risk Categories & Weights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {settingsData.riskCategories.map((cat) => (
                <div key={cat.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{cat.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>{cat.weight}%</span>
                  </div>
                  <div className="weight-bar-container">
                    <div className="weight-bar">
                      <div className="weight-bar-fill" style={{ width: `${cat.weight}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thresholds */}
        <div className="card">
          <div className="settings-section">
            <h3>Risk Thresholds</h3>
            <div className="threshold-bar">
              <div className="threshold-segment" style={{ background: t.low.color, flex: 41 }}>Low (0–40)</div>
              <div className="threshold-segment" style={{ background: t.medium.color, flex: 30 }}>Med (41–70)</div>
              <div className="threshold-segment" style={{ background: t.high.color, flex: 15 }}>High (71–85)</div>
              <div className="threshold-segment" style={{ background: t.critical.color, flex: 15 }}>Crit (86–100)</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
              {Object.entries(t).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: val.color }} />
                  <span style={{ fontSize: 14, textTransform: 'capitalize', fontWeight: 500, width: 70 }}>{key}</span>
                  <span style={{ fontSize: 13, color: '#94a3b8' }}>{val.min} – {val.max}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alert Rules */}
      <div className="card" style={{ marginTop: 20 }}>
        <div className="settings-section">
          <h3>Alert Rules</h3>
          {rules.map((rule) => (
            <div className="toggle-row" key={rule.id}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{rule.condition}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{rule.action}</div>
              </div>
              <button className={`toggle ${rule.enabled ? 'active' : ''}`} onClick={() => toggleRule(rule.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Human Oversight */}
      <div className="human-note">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <ShieldCheck size={18} color="#92400e" />
          <strong style={{ fontSize: 14, color: '#78350f' }}>Human Oversight Guarantee</strong>
        </div>
        <p>Hypersense supports decision-making. Final decisions remain with authorized human users. All AI-generated insights are recommendations — not automated actions. Organizations retain full control over escalation, intervention, and disposition of flagged cases.</p>
      </div>
    </div>
  );
}
