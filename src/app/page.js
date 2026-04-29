'use client';
import Link from 'next/link';
import './landing.css';
import {
  Activity, AlertTriangle, ArrowDown, ArrowRight, BarChart3, Brain, ChartLine,
  DollarSign, Heart, Radio, Shield, Settings, Signal, Zap
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <span className="landing-nav-logo">Hypersense</span>
        <div className="landing-nav-links">
          <a href="#problem">Problem</a>
          <a href="#how">How It Works</a>
          <a href="#usecases">Use Cases</a>
          <Link href="/dashboard" className="nav-cta">View Demo →</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-text-glow" />
        <div className="hero-inner">
          <div className="hero-wordmark-wrap">
            <div className="hero-wordmark-glow">HYPERSENSE</div>
            <div className="hero-wordmark">HYPERSENSE</div>
          </div>
          <div className="hero-tagline-small">See the signal. Stop the crisis.</div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI-Powered Risk Intelligence Platform
          </div>
          <h1>
            Turn 1,000 alerts into<br />
            <span className="gradient-text">the 5 that matter.</span>
          </h1>
          <p className="hero-subtitle">
            Hypersense detects weak signals across behavioral, operational, and system data — 
            then prioritizes the risks that need attention now. Not tomorrow. Not next week. Now.
          </p>
          <div className="hero-buttons">
            <Link href="/dashboard">
              <button className="hero-btn-primary">View Demo Dashboard <ArrowRight size={16} style={{ marginLeft: 4 }} /></button>
            </Link>
            <a href="#usecases">
              <button className="hero-btn-secondary">Explore Use Cases</button>
            </a>
          </div>
          <div className="hero-pilot-line">
            <span className="hero-pilot-dot" />
            <span>Currently piloting with Coordination Centric — a care coordination platform managing 500+ patients</span>
          </div>
          <div className="hero-stats-section">
            <div className="hero-stats-label">THE PROBLEM IN NUMBERS</div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">200+</div>
                <div className="hero-stat-label">Alerts Per Nurse Shift</div>
              </div>
              <div>
                <div className="hero-stat-value">83%</div>
                <div className="hero-stat-label">Low-Priority Noise in Alert Queues</div>
              </div>
              <div>
                <div className="hero-stat-value">4.2 hrs</div>
                <div className="hero-stat-label">Avg. Delay to Critical Intervention</div>
              </div>
              <div>
                <div className="hero-stat-value">&lt;3%</div>
                <div className="hero-stat-label">Alerts Requiring Immediate Action</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="land-section problem-section" id="problem">
        <div className="land-section-label">The Problem</div>
        <div className="land-section-title">Organizations are drowning in data,<br />but starving for signal.</div>
        <div className="land-section-subtitle">
          Critical risks hide in plain sight — buried under thousands of alerts, logs, and notifications 
          that no human team can process in time.
        </div>
        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-icon"><BarChart3 size={20} /></div>
            <h3>Data Overload, Zero Prioritization</h3>
            <p>Systems generate thousands of signals daily. Without intelligent filtering, everything looks equally urgent — which means nothing gets prioritized.</p>
            <div className="problem-stat-divider">
              <div className="problem-stat-number">200+</div>
              <div className="problem-stat-label">alerts per shift that nurses must manually review</div>
            </div>
          </div>
          <div className="problem-item highlighted">
            <div className="problem-icon"><AlertTriangle size={20} /></div>
            <h3>Critical Signals Missed</h3>
            <p>Weak early signals — a missed check-in, an unusual login, a delayed task — are invisible until they compound into a crisis.</p>
            <div className="problem-stat-divider">
              <div className="problem-stat-number">67%</div>
              <div className="problem-stat-label">of adverse events showed detectable warning signals 24-48 hours earlier</div>
            </div>
          </div>
          <div className="problem-item">
            <div className="problem-icon"><Activity size={20} /></div>
            <h3>Reactive, Not Proactive</h3>
            <p>Teams respond to emergencies instead of preventing them. By the time a risk is visible, the window for intervention has already closed.</p>
            <div className="problem-stat-divider">
              <div className="problem-stat-number">4.2 hrs</div>
              <div className="problem-stat-label">average delay before critical cases receive intervention</div>
            </div>
          </div>
        </div>
        <div className="before-after">
          <div className="before-after-label">What changes with Hypersense</div>
          <div className="before-after-grid">
            <div className="ba-card without">
              <div className="ba-header">
                <span className="ba-dot" style={{ background: '#ef4444' }} />
                <span>Without Hypersense</span>
              </div>
              <ul>
                <li>200+ undifferentiated alerts per shift</li>
                <li>4+ hour average response delay</li>
                <li>Reactive crisis management</li>
                <li>Nurse burnout from alert fatigue</li>
                <li>Critical signals buried in noise</li>
              </ul>
            </div>
            <div className="ba-card better">
              <div className="ba-header">
                <span className="ba-dot" style={{ background: '#22c55e' }} />
                <span>With Hypersense</span>
              </div>
              <ul>
                <li>5 prioritized high-risk cases</li>
                <li>&lt;5 min to priority alert</li>
                <li>Proactive early intervention</li>
                <li>Focused, actionable workflow</li>
                <li>AI-surfaced signals with reasoning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="land-section how-section" id="how">
        <div className="land-section-center">
          <div className="land-section-label">How It Works</div>
          <div className="land-section-title">From raw data to the right decision.</div>
          <div className="land-section-subtitle">
            Hypersense sits as an intelligence layer on top of your existing systems — no rip-and-replace required.
          </div>
        </div>
        <div className="how-flow-wrapper">
          <div className="how-flow">
            <div className="how-step">
              <div className="how-step-num">01</div>
              <div className="how-step-icon"><Radio size={20} /></div>
              <h3>Signal Detection</h3>
              <p>Continuously ingests behavioral, operational, and system data. Identifies weak signals and early indicators that humans miss.</p>
            </div>
            <div className="how-connector"><ArrowRight size={22} /><ArrowDown size={20} /></div>
            <div className="how-step">
              <div className="how-step-num">02</div>
              <div className="how-step-icon"><Brain size={20} /></div>
              <h3>Risk Prediction</h3>
              <p>Uses multi-signal pattern analysis to forecast which cases are most likely to escalate. Updates continuously with new data.</p>
            </div>
            <div className="how-connector"><ArrowRight size={22} /><ArrowDown size={20} /></div>
            <div className="how-step">
              <div className="how-step-num">03</div>
              <div className="how-step-icon"><BarChart3 size={20} /></div>
              <h3>Risk Prioritization</h3>
              <p>Ranks every risk by urgency and impact. Turns 1,000 alerts into a prioritized queue — so your team knows exactly where to start.</p>
            </div>
            <div className="how-connector"><ArrowRight size={22} /><ArrowDown size={20} /></div>
            <div className="how-step">
              <div className="how-step-num">04</div>
              <div className="how-step-icon"><Zap size={20} /></div>
              <h3>Decision Support</h3>
              <p>Delivers explainable recommendations with full context. Humans stay in control — AI provides the intelligence to decide faster.</p>
            </div>
          </div>
        </div>
        <div className="pipeline-example">
          <div className="pipeline-title">EXAMPLE: PATIENT RISK DETECTION</div>
          <div className="pipeline-step">
            <div className="pipeline-step-content">
              <div className="pipeline-step-icon"><Signal size={16} /></div>
              <div>
                <div className="pipeline-step-text">Patient misses 3 medication reminders in 48 hours and reports headache severity increase from 3 to 7</div>
                <div className="pipeline-step-label">Signal Detection</div>
              </div>
            </div>
          </div>
          <div className="pipeline-arrow"><ArrowDown size={18} /></div>
          <div className="pipeline-step">
            <div className="pipeline-step-content">
              <div className="pipeline-step-icon"><Brain size={16} /></div>
              <div>
                <div className="pipeline-step-text">Model estimates 78% probability of care plan failure within 5 days</div>
                <div className="pipeline-step-label">Risk Prediction</div>
              </div>
            </div>
          </div>
          <div className="pipeline-arrow"><ArrowDown size={18} /></div>
          <div className="pipeline-step">
            <div className="pipeline-step-content">
              <div className="pipeline-step-icon"><ChartLine size={16} /></div>
              <div>
                <div className="pipeline-step-text">Patient ranked #2 out of 200 in nurse priority queue</div>
                <div className="pipeline-step-label">Risk Prioritization</div>
              </div>
            </div>
          </div>
          <div className="pipeline-arrow"><ArrowDown size={18} /></div>
          <div className="pipeline-step">
            <div className="pipeline-step-content">
              <div className="pipeline-step-icon"><Zap size={16} /></div>
              <div>
                <div className="pipeline-step-text">Nurse receives alert: Review Patient A102 — recommended care follow-up call within 2 hours</div>
                <div className="pipeline-step-label">Decision Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="land-section uc-section" id="usecases">
        <div className="land-section-center">
          <div className="land-section-label">Cross-Industry</div>
          <div className="land-section-title">One framework. Any domain.</div>
          <div className="land-section-subtitle">
            The same signal → risk → action pipeline applies wherever organizations need to detect and prioritize emerging risks.
          </div>
        </div>
        <div className="uc-grid">
          <div className="uc-card uc-healthcare">
            <span className="uc-card-tag pilot">Initial Pilot</span>
            <div className="uc-card-icon" style={{ background: 'rgba(79,70,229,0.12)' }}><Heart size={22} color="#818cf8" /></div>
            <h3>Healthcare &amp; Care Coordination</h3>
            <p>Predict patient deterioration, prioritize nurse interventions, and eliminate alert fatigue across care teams.</p>
            <ul>
              <li>Detect adherence drops and symptom changes</li>
              <li>Prioritize which patients need attention first</li>
              <li>Reduce 200+ daily alerts to the 5 that matter</li>
            </ul>
            <div className="uc-beachhead-note">
              Healthcare care coordination is our beachhead market: high alert volumes, measurable patient outcomes, an existing pilot partner, and growing regulatory demand for proactive monitoring.
            </div>
          </div>
          <div className="uc-card">
            <span className="uc-card-tag future">Future Expansion</span>
            <div className="uc-card-icon" style={{ background: 'rgba(14,165,233,0.12)' }}><Shield size={22} color="#38bdf8" /></div>
            <h3>Cybersecurity</h3>
            <p>Detect abnormal behavior, identify risky access patterns, and surface insider threats before they cause damage.</p>
            <ul>
              <li>Correlate login anomalies with access patterns</li>
              <li>Prioritize threats by organizational impact</li>
              <li>Reduce false positive investigation load</li>
            </ul>
          </div>
          <div className="uc-card">
            <span className="uc-card-tag future">Future Expansion</span>
            <div className="uc-card-icon" style={{ background: 'rgba(139,92,246,0.12)' }}><Settings size={22} color="#a78bfa" /></div>
            <h3>Operations &amp; Workforce</h3>
            <p>Predict workflow bottlenecks, detect overloaded teams, and improve resource allocation before deadlines slip.</p>
            <ul>
              <li>Identify delayed follow-ups and task overload</li>
              <li>Predict which teams will miss deadlines</li>
              <li>Recommend workload rebalancing</li>
            </ul>
          </div>
          <div className="uc-card">
            <span className="uc-card-tag future">Future Expansion</span>
            <div className="uc-card-icon" style={{ background: 'rgba(5,150,105,0.12)' }}><DollarSign size={22} color="#34d399" /></div>
            <h3>Finance &amp; Compliance</h3>
            <p>Detect anomalous transactions, identify compliance risks, and prioritize investigation queues by severity.</p>
            <ul>
              <li>Surface unusual transaction patterns</li>
              <li>Correlate signals across regulatory rules</li>
              <li>Rank investigations by risk exposure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="pilot-cta-section">
        <div className="pilot-cta-box">
          <div className="land-section-label">First Pilot Customer</div>
          <div className="land-section-title" style={{ marginBottom: 16 }}>Coordination Centric</div>
          <div className="pilot-columns">
            <div className="pilot-left">
              <div className="pilot-sub">ABOUT THE PILOT</div>
              <p className="pilot-text">
                Coordination Centric is a care coordination platform managing daily care plans, medication reminders, and symptom check-ins for 500+ patients across multiple care teams. Nurses currently process 200+ alerts per 8-hour shift. An estimated 83% are low-priority. Critical patient deterioration signals are identified an average of 4+ hours late.
              </p>

              <div style={{ height: 24 }} />
              <div className="pilot-sub">WHAT WE&apos;RE TESTING</div>
              <ul className="pilot-list">
                <li>Can Hypersense accurately identify high-risk patients from multi-source signal patterns?</li>
                <li>Do prioritized alerts lead to faster nurse response times vs. unranked alert lists?</li>
                <li>Will nurses trust and act on AI-generated risk recommendations?</li>
                <li>Does the intelligence layer integrate without disrupting existing care workflows?</li>
              </ul>

              <div style={{ height: 24 }} />
              <div className="pilot-sub">EXPECTED OUTCOMES</div>
              <div className="pilot-outcomes">
                <div>
                  <div className="pilot-outcome-stat">200 → 5</div>
                  <div className="pilot-outcome-label">Alerts reduced to priority cases per shift</div>
                </div>
                <div>
                  <div className="pilot-outcome-stat">4.2 hrs → &lt;30 min</div>
                  <div className="pilot-outcome-label">Time to critical intervention</div>
                </div>
                <div>
                  <div className="pilot-outcome-stat">8 weeks</div>
                  <div className="pilot-outcome-label">Pilot duration</div>
                </div>
              </div>
            </div>

            <div className="pilot-right">
              <div className="arch-diagram">
                <div className="arch-box">
                  <div className="arch-box-label">Coordination Centric Platform</div>
                  <div className="arch-box-sub">Patient data, reminders, check-ins, care plans</div>
                </div>
                <div className="arch-arrow"><ArrowDown size={20} /></div>
                <div className="arch-box middle">
                  <div className="arch-box-label">Hypersense AI Layer</div>
                  <div className="arch-box-sub">Signal detection → Risk scoring → Prioritization</div>
                </div>
                <div className="arch-arrow"><ArrowDown size={20} /></div>
                <div className="arch-box">
                  <div className="arch-box-label">Nurse Dashboard</div>
                  <div className="arch-box-sub">Prioritized alerts + recommended actions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pilot-btn-wrap">
            <Link href="/dashboard">
              <button className="hero-btn-primary" style={{ marginTop: 8 }}>
                Explore the Pilot Dashboard <ArrowRight size={16} style={{ marginLeft: 4 }} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div style={{ marginBottom: 16 }}>
          <span className="landing-nav-logo">Hypersense</span>
        </div>
        <div className="footer-team-label">TEAM</div>
        <div className="footer-team">
          <span>Team Member — Founder &amp; Product Lead</span>
          <span>Team Member — Technical Lead</span>
          <span>Team Member — AI/ML Lead</span>
        </div>
        <div style={{ marginBottom: 16 }}>
          <a href="#problem">Problem</a>
          <a href="#how">How It Works</a>
          <a href="#usecases">Use Cases</a>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <p>© 2026 Hypersense. AI-powered risk intelligence. Human decisions, always.</p>
        <div className="footer-competition">
          <span className="hero-pilot-dot" />
          <span>Built for the AI Venture Velocity Challenge 2026 — Texas A&amp;M Mays Business School</span>
        </div>
      </footer>
    </div>
  );
}
