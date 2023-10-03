import {Suspense} from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

export default function Tickets() {
  return (
    <main>
      <div>
        <nav>
          <h2>tickets </h2>
          <p>
            <small>Currently open tickets.</small>
          </p>

          <Link href="tickets/create">
            <h2> Add Ticket</h2>
          </Link>
        </nav>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
