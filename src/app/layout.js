import './globals.css';

export const metadata = {
  title: 'Hypersense — AI Risk Intelligence Platform',
  description: 'Detect risk signals before they become critical. Hypersense transforms behavioral, operational, and system data into prioritized risk insights.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
