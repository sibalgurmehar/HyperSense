'use client';
import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="top-header">
      <div className="header-left">
        <span className="header-org">Coordination Centric Pilot</span>
        <span className="header-env">Healthcare Pilot</span>
      </div>
      <div className="header-right">
        <span className="header-date">Apr 1 – Apr 27, 2026</span>
        <button className="close-btn" style={{ border: '1px solid var(--border)' }}>
          <Bell size={16} />
        </button>
        <div className="header-avatar">JD</div>
      </div>
    </header>
  );
}
