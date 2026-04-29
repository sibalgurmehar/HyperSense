'use client';
import { riskAssumptions } from '@/data/mockData';
import { FlaskConical, AlertTriangle } from 'lucide-react';

export default function ExperimentsPage() {
  const experimentsList = [
    {
      id: 1, title: 'Predictive Signal Accuracy', status: 'IN PROGRESS', progress: 45,
      assumption: 'Our multi-signal detection model can outperform manual nurse triage in identifying high-risk patients',
      hypothesis: 'AI model will correctly flag 80% of eventual care plan failures at least 48 hours before they occur.',
      method: 'Shadow deployment alongside manual triage team. Compare AI predictions vs human actions over 4 weeks.',
      metric: 'Precision > 85%, Recall > 80% on high-risk alerts.',
      timeline: 'Weeks 1-4 of pilot',
      killCriteria: 'If precision for high-risk identification falls below 70%, the signal detection approach will need to be re-evaluated or specific data sources discarded.'
    },
    {
      id: 2, title: 'Prioritized Alerts vs Raw Alerts', status: 'PLANNED', progress: 0,
      assumption: 'Prioritized alert presentation meaningfully changes nurse decision-making speed and accuracy',
      hypothesis: 'Presenting a ranked risk queue will reduce average time-to-intervention by 30% compared to a chronological list.',
      method: 'A/B testing two UI interfaces for care coordinators during pilot.',
      metric: 'Average time from alert generation to first action (call, message, escalate).',
      timeline: 'Weeks 1-4 of pilot',
      killCriteria: 'If time-to-intervention shows <10% improvement, the prioritization engine adds insufficient value.'
    },
    {
      id: 3, title: 'Nurse Workflow Fit', status: 'PLANNED', progress: 0,
      assumption: 'Nurses will trust AI-generated alerts enough to change their existing triage workflow',
      hypothesis: 'Nurses will accept >70% of AI recommended actions without overriding them.',
      method: 'Track "Mark Reviewed", "Escalate", and "Dismiss" button usage rates in dashboard.',
      metric: 'Action Acceptance Rate (%)',
      timeline: 'Weeks 5-8 of pilot',
      killCriteria: 'If >40% of alerts are dismissed as false positives, trust will break and the pilot fails.'
    },
    {
      id: 4, title: 'Cross-Domain Generalizability', status: 'FUTURE', progress: 0,
      assumption: 'The core signal-to-risk-to-action pipeline transfers across domains without fundamental re-architecture',
      hypothesis: 'We can adapt the healthcare risk model to cybersecurity access logs with less than 2 weeks of engineering effort.',
      method: 'Ingest sample access log data and map to existing risk pipeline structure.',
      metric: 'Engineering hours required for new domain adaptation.',
      timeline: 'Weeks 9-12 of pilot',
      killCriteria: 'If mapping a new domain requires rebuilding the risk scoring engine entirely, the platform premise is invalid.'
    }
  ];

  return (
    <div className="page-content">
      <h1 className="page-title">Experimentation Blueprint</h1>
      <p className="page-subtitle">Structured experiments to validate core assumptions before scaling</p>

      <div className="grid-2">
        {experimentsList.map((exp) => (
          <div className="exp-card" key={exp.id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eef2ff', color: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FlaskConical size={18} />
                </div>
                <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>EXPERIMENT {exp.id}</span>
              </div>
              <span className={`badge badge-${exp.status === 'IN PROGRESS' ? 'active' : 'planned'}`}>{exp.status}</span>
            </div>
            <h3 style={{ marginBottom: 16 }}>{exp.title}</h3>

            <div className="exp-field" style={{ marginBottom: 16 }}>
              <div className="exp-label" style={{ color: '#f87171' }}>ASSUMPTION AT RISK</div>
              <div className="exp-value" style={{ fontWeight: 500 }}>{exp.assumption}</div>
            </div>
            <div className="exp-field">
              <div className="exp-label">Hypothesis</div>
              <div className="exp-value">{exp.hypothesis}</div>
            </div>
            <div className="exp-field">
              <div className="exp-label">Method</div>
              <div className="exp-value">{exp.method}</div>
            </div>
            <div className="exp-field">
              <div className="exp-label">Success Metric</div>
              <div className="exp-value">{exp.metric}</div>
            </div>
            
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <div className="exp-field" style={{ flex: 1 }}>
                <div className="exp-label">TIMELINE</div>
                <div className="exp-value">{exp.timeline}</div>
              </div>
            </div>

            <div className="exp-field" style={{ marginTop: 8 }}>
              <div className="exp-label" style={{ color: '#f87171' }}>KILL CRITERIA</div>
              <div className="exp-value" style={{ color: '#dc2626' }}>{exp.killCriteria}</div>
            </div>

            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>
                <span>Progress</span><span>{exp.progress}%</span>
              </div>
              <div style={{ height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${exp.progress}%`, background: '#4338ca', borderRadius: 3 }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 8 }}>
        <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AlertTriangle size={14} color="#dc2626" /> Highest-Risk Assumptions
        </div>
        <ol className="assumption-list">
          {riskAssumptions.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
