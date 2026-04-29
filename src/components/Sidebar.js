'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Radio, ListOrdered, Layers, FlaskConical, Settings } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/signals', label: 'Signals', icon: Radio },
  { href: '/dashboard/risk-queue', label: 'Risk Queue', icon: ListOrdered },
  { href: '/dashboard/use-cases', label: 'Use Cases', icon: Layers },
  { href: '/dashboard/experiments', label: 'Experiments', icon: FlaskConical },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link href="/"><h1>Hypersense</h1></Link>
        <span>AI Risk Intelligence</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`sidebar-link ${isActive ? 'active' : ''}`}>
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <p>Hypersense v0.1 — Prototype</p>
        <p style={{ marginTop: 4 }}>Human oversight required</p>
      </div>
    </aside>
  );
}
