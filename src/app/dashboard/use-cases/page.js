'use client';
import { useCasesData } from '@/data/mockData';
import { Heart, Shield, Settings, DollarSign, ArrowRight, Plus } from 'lucide-react';

const iconMap = { Heart, Shield, Settings, DollarSign };

export default function UseCasesPage() {
  return (
    <div className="page-content">
      <div style={{ marginBottom: 24 }}>
        <h1 className="page-title">Use Cases Configuration</h1>
        <p className="page-subtitle" style={{ marginBottom: 16 }}>Hypersense applies the same risk intelligence framework across multiple industries</p>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', color: '#4f46e5', border: '1px solid #4f46e5', padding: '10px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          <Plus size={18} /> Configure New Use Case
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {useCasesData.map((uc) => {
          const Icon = iconMap[uc.icon];
          const isHealthcare = uc.id === 'healthcare';
          return (
            <div className="uc-detail-card" key={uc.id} style={{ position: 'relative' }}>
              
              <div style={{ position: 'absolute', top: 24, right: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                <div style={{ 
                  background: isHealthcare ? '#22c55e' : '#475569', 
                  color: isHealthcare ? 'white' : '#cbd5e1', 
                  padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: 1 
                }}>
                  {isHealthcare ? 'ACTIVE' : 'TEMPLATE'}
                </div>
              </div>

              <div className="uc-detail-header" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: uc.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>{uc.title}</h3>
                  {isHealthcare ? (
                    <p style={{ fontSize: 13, color: '#22c55e', fontWeight: 500, marginTop: 4 }}>Connected to Coordination Centric — receiving live data</p>
                  ) : (
                    <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Available for configuration — no data source connected</p>
                  )}
                </div>
              </div>

              <div className="uc-detail-body" style={{ opacity: isHealthcare ? 1 : 0.6, transition: 'opacity 0.2s' }}>
                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5, color: '#94a3b8', marginBottom: 10 }}>Capabilities</h4>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {uc.capabilities.map((c) => (
                      <span key={c} style={{ padding: '6px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 12 }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className="uc-flow">
                  <div className="uc-flow-box">
                    <h5>Data Inputs</h5>
                    <ul>{uc.inputs.map((i) => <li key={i}>• {i}</li>)}</ul>
                  </div>
                  <div className="uc-flow-arrow"><ArrowRight size={20} /></div>
                  <div className="uc-flow-box">
                    <h5>Risk Signals</h5>
                    <ul>{uc.signals.map((s) => <li key={s}>⚡ {s}</li>)}</ul>
                  </div>
                  <div className="uc-flow-arrow"><ArrowRight size={20} /></div>
                  <div className="uc-flow-box" style={{ background: '#eef2ff', borderColor: '#c7d2fe' }}>
                    <h5>Decision Output</h5>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#4338ca' }}>{uc.output}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
