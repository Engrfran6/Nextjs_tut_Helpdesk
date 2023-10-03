import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import './globals.css';
import {Rubik} from 'next/font/google';

const rubik = Rubik({subsets: ['latin']});

export const metadata = {
  title: 'Deulo Helpdesk App',
  description: 'Made with nextjs 13.4.9',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
