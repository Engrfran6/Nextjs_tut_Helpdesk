import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <h1> Deulo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};
