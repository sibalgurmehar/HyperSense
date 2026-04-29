// ==========================================
// MOCK DATA FOR HYPERSENSE PROTOTYPE
// ==========================================

// --- KPI Data ---
export const kpiData = {
  totalSignals: 12480,
  highRiskCases: 18,
  alertsPrioritized: 143,
  responseTimeSaved: 32,
};

// --- Trend Data (Risk Signals Over Time) ---
export const trendData = [
  { date: 'Apr 1', low: 42, medium: 18, high: 5, critical: 1 },
  { date: 'Apr 3', low: 38, medium: 22, high: 7, critical: 2 },
  { date: 'Apr 5', low: 45, medium: 19, high: 4, critical: 1 },
  { date: 'Apr 7', low: 40, medium: 25, high: 9, critical: 3 },
  { date: 'Apr 9', low: 36, medium: 28, high: 11, critical: 2 },
  { date: 'Apr 11', low: 50, medium: 20, high: 6, critical: 1 },
  { date: 'Apr 13', low: 44, medium: 23, high: 8, critical: 4 },
  { date: 'Apr 15', low: 39, medium: 26, high: 10, critical: 3 },
  { date: 'Apr 17', low: 47, medium: 21, high: 7, critical: 2 },
  { date: 'Apr 19', low: 41, medium: 27, high: 12, critical: 5 },
  { date: 'Apr 21', low: 35, medium: 30, high: 14, critical: 4 },
  { date: 'Apr 23', low: 43, medium: 24, high: 9, critical: 3 },
  { date: 'Apr 25', low: 37, medium: 29, high: 11, critical: 2 },
  { date: 'Apr 27', low: 46, medium: 22, high: 8, critical: 3 },
];

// --- Risk Distribution Data ---
export const riskDistribution = [
  { name: 'Low', value: 892, color: '#22c55e' },
  { name: 'Medium', value: 341, color: '#f59e0b' },
  { name: 'High', value: 124, color: '#f97316' },
  { name: 'Critical', value: 18, color: '#dc2626' },
];

// --- AI Insights ---
export const aiInsights = [
  {
    id: 1,
    text: 'Patient adherence drop detected across 12 cases',
    severity: 'high',
    time: '2 hours ago',
  },
  {
    id: 2,
    text: '3 patients show increasing escalation probability',
    severity: 'critical',
    time: '4 hours ago',
  },
  {
    id: 3,
    text: 'Night-shift alert volume is above baseline',
    severity: 'medium',
    time: '6 hours ago',
  },
  {
    id: 4,
    text: 'One workflow segment has repeated delayed follow-up',
    severity: 'medium',
    time: '8 hours ago',
  },
];

// --- Recommended Actions ---
export const recommendedActions = [
  {
    id: 1,
    text: 'Review top 5 high-risk patients',
    priority: 'high',
    category: 'Patient Review',
  },
  {
    id: 2,
    text: 'Check care plan adherence for flagged group',
    priority: 'medium',
    category: 'Adherence',
  },
  {
    id: 3,
    text: 'Escalate cases with sustained non-response',
    priority: 'high',
    category: 'Escalation',
  },
  {
    id: 4,
    text: 'Reassign overloaded team workflows',
    priority: 'medium',
    category: 'Operations',
  },
];

// --- Signals Data ---
export const signalsData = [
  {
    id: 'SIG-1001',
    source: 'Patient Check-in',
    category: 'Patient',
    description: 'Missed 3 medication reminders in 48 hours',
    contribution: 28,
    timestamp: '2026-04-27 14:32',
    status: 'New',
    riskLevel: 'High',
  },
  {
    id: 'SIG-1002',
    source: 'Patient Input',
    category: 'Patient',
    description: 'Patient reported worsening symptoms',
    contribution: 35,
    timestamp: '2026-04-27 13:15',
    status: 'Escalated',
    riskLevel: 'Critical',
  },
  {
    id: 'SIG-1003',
    source: 'System Activity',
    category: 'System',
    description: 'Unusual system access pattern detected',
    contribution: 22,
    timestamp: '2026-04-27 11:48',
    status: 'Reviewed',
    riskLevel: 'High',
  },
  {
    id: 'SIG-1004',
    source: 'Reminder Adherence',
    category: 'Patient',
    description: 'No check-in submitted today',
    contribution: 18,
    timestamp: '2026-04-27 10:00',
    status: 'New',
    riskLevel: 'Medium',
  },
  {
    id: 'SIG-1005',
    source: 'Nurse Notes',
    category: 'Operational',
    description: 'Repeated late response from assigned care team',
    contribution: 15,
    timestamp: '2026-04-27 09:22',
    status: 'New',
    riskLevel: 'Medium',
  },
  {
    id: 'SIG-1006',
    source: 'Workflow Events',
    category: 'Operational',
    description: 'Follow-up task overdue by 18 hours',
    contribution: 20,
    timestamp: '2026-04-27 08:45',
    status: 'Reviewed',
    riskLevel: 'High',
  },
  {
    id: 'SIG-1007',
    source: 'Device Data',
    category: 'Patient',
    description: 'Blood pressure readings trending upward over 3 days',
    contribution: 25,
    timestamp: '2026-04-26 22:10',
    status: 'New',
    riskLevel: 'High',
  },
  {
    id: 'SIG-1008',
    source: 'System Activity',
    category: 'System',
    description: 'Failed login attempts from unrecognized device',
    contribution: 30,
    timestamp: '2026-04-26 20:30',
    status: 'Escalated',
    riskLevel: 'Critical',
  },
  {
    id: 'SIG-1009',
    source: 'Patient Check-in',
    category: 'Patient',
    description: 'Patient skipped 2 consecutive wellness check-ins',
    contribution: 16,
    timestamp: '2026-04-26 18:05',
    status: 'New',
    riskLevel: 'Medium',
  },
  {
    id: 'SIG-1010',
    source: 'Workflow Events',
    category: 'Compliance',
    description: 'Documentation not filed within compliance window',
    contribution: 12,
    timestamp: '2026-04-26 16:40',
    status: 'Reviewed',
    riskLevel: 'Low',
  },
  {
    id: 'SIG-1011',
    source: 'Nurse Notes',
    category: 'Patient',
    description: 'Care coordinator flagged patient mood change',
    contribution: 19,
    timestamp: '2026-04-26 15:12',
    status: 'New',
    riskLevel: 'Medium',
  },
  {
    id: 'SIG-1012',
    source: 'System Activity',
    category: 'System',
    description: 'API response times degraded by 40%',
    contribution: 10,
    timestamp: '2026-04-26 14:00',
    status: 'Reviewed',
    riskLevel: 'Low',
  },
];

// --- Risk Queue Data ---
export const riskQueueData = [
  {
    id: 'A102',
    rank: 1,
    name: 'Patient A102',
    domain: 'Healthcare',
    riskScore: 91,
    riskLevel: 'Critical',
    primaryReason: 'Missed reminders + worsening symptoms',
    contributingSignals: [
      'Missed 3 medication reminders in 48 hours',
      'Patient reported worsening symptoms',
      'Blood pressure readings trending upward',
      'No check-in submitted today',
    ],
    recommendation: 'Nurse review within 2 hours',
    status: 'New',
    trendData: [
      { day: 'Day 1', score: 45 },
      { day: 'Day 2', score: 52 },
      { day: 'Day 3', score: 61 },
      { day: 'Day 4', score: 74 },
      { day: 'Day 5', score: 83 },
      { day: 'Day 6', score: 88 },
      { day: 'Day 7', score: 91 },
    ],
    aiExplanation:
      'This case is flagged because the patient missed multiple reminders, reported increased symptoms, and has shown declining adherence over the last 5 days. Blood pressure readings are trending upward, indicating potential deterioration.',
    actions: [
      'Call patient',
      'Notify assigned nurse',
      'Adjust reminder frequency',
      'Escalate to care manager',
    ],
  },
  {
    id: 'B441',
    rank: 2,
    name: 'Patient B441',
    domain: 'Healthcare',
    riskScore: 84,
    riskLevel: 'High',
    primaryReason: 'Low adherence trend',
    contributingSignals: [
      'Skipped 2 consecutive wellness check-ins',
      'Care coordinator flagged mood change',
      'Declining engagement over 7 days',
    ],
    recommendation: 'Send care follow-up',
    status: 'In Review',
    trendData: [
      { day: 'Day 1', score: 38 },
      { day: 'Day 2', score: 42 },
      { day: 'Day 3', score: 55 },
      { day: 'Day 4', score: 63 },
      { day: 'Day 5', score: 71 },
      { day: 'Day 6', score: 78 },
      { day: 'Day 7', score: 84 },
    ],
    aiExplanation:
      'This patient shows a consistent decline in engagement metrics. Wellness check-ins have been missed, and care coordinator notes indicate a mood change. The trend suggests increasing risk if not addressed.',
    actions: [
      'Send follow-up message',
      'Schedule care coordinator call',
      'Review care plan adjustments',
      'Monitor for 48 hours',
    ],
  },
  {
    id: 'SYS-17',
    rank: 3,
    name: 'Account SYS-17',
    domain: 'Cybersecurity',
    riskScore: 79,
    riskLevel: 'High',
    primaryReason: 'Unusual access pattern',
    contributingSignals: [
      'Failed login attempts from unrecognized device',
      'Unusual system access pattern detected',
      'Access outside normal working hours',
    ],
    recommendation: 'Verify access activity',
    status: 'New',
    trendData: [
      { day: 'Day 1', score: 20 },
      { day: 'Day 2', score: 22 },
      { day: 'Day 3', score: 35 },
      { day: 'Day 4', score: 48 },
      { day: 'Day 5', score: 60 },
      { day: 'Day 6', score: 72 },
      { day: 'Day 7', score: 79 },
    ],
    aiExplanation:
      'This account has shown a significant increase in anomalous access patterns over the past week. Multiple failed logins from an unrecognized device combined with after-hours access suggest potential unauthorized access attempts.',
    actions: [
      'Verify account owner identity',
      'Review access logs',
      'Temporarily restrict permissions',
      'Notify security team',
    ],
  },
  {
    id: 'Team-3',
    rank: 4,
    name: 'Workflow Team-3',
    domain: 'Operations',
    riskScore: 72,
    riskLevel: 'Medium',
    primaryReason: 'Repeated delayed follow-ups',
    contributingSignals: [
      'Follow-up task overdue by 18 hours',
      'Repeated late response from assigned care team',
      'Task completion rate declined 22%',
    ],
    recommendation: 'Reassign workload',
    status: 'Open',
    trendData: [
      { day: 'Day 1', score: 30 },
      { day: 'Day 2', score: 35 },
      { day: 'Day 3', score: 42 },
      { day: 'Day 4', score: 50 },
      { day: 'Day 5', score: 58 },
      { day: 'Day 6', score: 65 },
      { day: 'Day 7', score: 72 },
    ],
    aiExplanation:
      'This team has shown a steady increase in delayed follow-ups and declining task completion rates. The workload distribution appears uneven, suggesting the team may be overwhelmed.',
    actions: [
      'Review team workload distribution',
      'Reassign pending tasks',
      'Schedule team capacity review',
      'Adjust task priorities',
    ],
  },
  {
    id: 'C789',
    rank: 5,
    name: 'Patient C789',
    domain: 'Healthcare',
    riskScore: 68,
    riskLevel: 'Medium',
    primaryReason: 'Declining engagement metrics',
    contributingSignals: [
      'Response time to messages increasing',
      'Missed 1 check-in this week',
      'Care plan milestones behind schedule',
    ],
    recommendation: 'Proactive outreach',
    status: 'Open',
    trendData: [
      { day: 'Day 1', score: 32 },
      { day: 'Day 2', score: 38 },
      { day: 'Day 3', score: 44 },
      { day: 'Day 4', score: 50 },
      { day: 'Day 5', score: 56 },
      { day: 'Day 6', score: 62 },
      { day: 'Day 7', score: 68 },
    ],
    aiExplanation:
      'This patient shows early signs of disengagement. While not yet critical, the trend of increasing response times and missed milestones warrants proactive outreach to prevent further decline.',
    actions: [
      'Send encouragement message',
      'Review care plan timeline',
      'Adjust milestone expectations',
      'Schedule check-in call',
    ],
  },
  {
    id: 'TXN-204',
    rank: 6,
    name: 'Transaction TXN-204',
    domain: 'Finance',
    riskScore: 65,
    riskLevel: 'Medium',
    primaryReason: 'Unusual transaction pattern',
    contributingSignals: [
      'Transaction volume spike',
      'New payee in high-risk region',
      'Amount exceeds historical baseline',
    ],
    recommendation: 'Flag for compliance review',
    status: 'New',
    trendData: [
      { day: 'Day 1', score: 15 },
      { day: 'Day 2', score: 20 },
      { day: 'Day 3', score: 28 },
      { day: 'Day 4', score: 40 },
      { day: 'Day 5', score: 52 },
      { day: 'Day 6', score: 58 },
      { day: 'Day 7', score: 65 },
    ],
    aiExplanation:
      'This transaction shows several characteristics that deviate from the established baseline. The combination of a new payee in a high-risk region with an above-average amount warrants compliance review.',
    actions: [
      'Review transaction details',
      'Verify payee information',
      'Check against compliance rules',
      'Escalate if needed',
    ],
  },
];

// --- Use Cases Data ---
export const useCasesData = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'Heart',
    color: '#4f46e5',
    description: 'Predict patient deterioration, prioritize nurse interventions, and reduce alert fatigue.',
    capabilities: [
      'Predict patient deterioration & non-adherence',
      'Prioritize nurse interventions by urgency',
      'Reduce alert fatigue across care teams',
    ],
    inputs: ['Patient check-ins', 'Reminders', 'Symptoms', 'Care plans'],
    signals: ['Missed reminders', 'Symptom change', 'No response'],
    output: 'Prioritized nurse alert with recommended action',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'Shield',
    color: '#0ea5e9',
    description: 'Detect abnormal behavior, identify risky access patterns, and prioritize insider threats.',
    capabilities: [
      'Detect abnormal user behavior patterns',
      'Identify risky access and permission changes',
      'Prioritize possible insider threats',
    ],
    inputs: ['Login logs', 'Device data', 'Permissions', 'Activity logs'],
    signals: ['Unusual login time', 'Sensitive data access', 'Location mismatch'],
    output: 'Security review alert with threat assessment',
  },
  {
    id: 'operations',
    title: 'Operations',
    icon: 'Settings',
    color: '#8b5cf6',
    description: 'Predict missed tasks, detect overloaded teams, and improve resource allocation.',
    capabilities: [
      'Predict missed tasks and workflow bottlenecks',
      'Detect overloaded teams and resources',
      'Improve resource allocation and scheduling',
    ],
    inputs: ['Task logs', 'Team assignments', 'Deadlines', 'Performance data'],
    signals: ['Delayed follow-ups', 'Task overload', 'Missed deadlines'],
    output: 'Workload rebalancing recommendation',
  },
  {
    id: 'finance',
    title: 'Finance & Compliance',
    icon: 'DollarSign',
    color: '#059669',
    description: 'Detect risky transactions, identify compliance anomalies, and prioritize investigation queues.',
    capabilities: [
      'Detect risky or anomalous transactions',
      'Identify compliance and regulatory anomalies',
      'Prioritize investigation queues by risk',
    ],
    inputs: ['Transaction logs', 'Customer profiles', 'Regulatory rules', 'Historical patterns'],
    signals: ['Volume spikes', 'New high-risk payees', 'Threshold violations'],
    output: 'Compliance review alert with risk context',
  },
];

// --- Experiments Data ---
export const experimentsData = [
  {
    id: 1,
    title: 'Predictive Signal Accuracy',
    hypothesis: 'Hypersense can identify high-risk cases from multi-source signal patterns.',
    method: 'Use sample/simulated care coordination data to test signal detection algorithms.',
    metric: 'Precision/recall for high-risk case identification',
    status: 'Planned',
    progress: 0,
  },
  {
    id: 2,
    title: 'Prioritized Alerts vs Raw Alerts',
    hypothesis: 'Users can make faster decisions with prioritized alerts compared to unranked alert lists.',
    method: 'Compare mock prioritized alert queue vs unranked alert list with user feedback sessions.',
    metric: 'Time-to-decision and perceived usefulness rating',
    status: 'Planned',
    progress: 0,
  },
  {
    id: 3,
    title: 'Nurse Workflow Fit',
    hypothesis: 'Nurses and care managers will trust and act on explainable AI-generated alerts.',
    method: 'Show prototype to Coordination Centric stakeholders and gather structured feedback.',
    metric: 'Qualitative feedback and workflow adoption intent score',
    status: 'Planned',
    progress: 0,
  },
  {
    id: 4,
    title: 'Cross-Domain Generalizability',
    hypothesis: 'The same risk-prioritization framework can apply beyond healthcare to cybersecurity and operations.',
    method: 'Map signal → risk → action pipeline to cybersecurity and operations use case examples.',
    metric: 'Clarity of framework mapping and stakeholder feedback',
    status: 'Planned',
    progress: 0,
  },
];

// --- Highest Risk Assumptions ---
export const riskAssumptions = [
  'Organizations will trust AI-generated risk insights enough to act on them',
  'Available data from existing systems is sufficient to detect meaningful risk patterns',
  'Prioritized alerts measurably improve decision-making speed and quality',
  'Users will consistently act on AI-generated recommendations',
  'The platform can integrate into existing workflows without significant disruption',
];

// --- Settings Data ---
export const settingsData = {
  riskCategories: [
    { name: 'Patient Risk', enabled: true, weight: 35 },
    { name: 'Operational Risk', enabled: true, weight: 25 },
    { name: 'System Risk', enabled: true, weight: 20 },
    { name: 'Compliance Risk', enabled: true, weight: 20 },
  ],
  thresholds: {
    low: { min: 0, max: 40, color: '#22c55e' },
    medium: { min: 41, max: 70, color: '#f59e0b' },
    high: { min: 71, max: 85, color: '#f97316' },
    critical: { min: 86, max: 100, color: '#dc2626' },
  },
  alertRules: [
    {
      id: 1,
      condition: 'Risk score exceeds 85',
      action: 'Notify care manager immediately',
      enabled: true,
    },
    {
      id: 2,
      condition: 'No response for 24 hours',
      action: 'Auto-escalate to supervisor',
      enabled: true,
    },
    {
      id: 3,
      condition: 'Abnormal system access after hours',
      action: 'Flag for security review',
      enabled: true,
    },
    {
      id: 4,
      condition: 'Task overdue by more than 12 hours',
      action: 'Reassign and notify team lead',
      enabled: false,
    },
  ],
};
