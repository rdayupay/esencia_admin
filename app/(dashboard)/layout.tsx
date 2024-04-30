import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import LeftSideNavigation from '@/components/layout/LeftSideNavigation';
import TopNavigation from '@/components/layout/TopNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Esencia - Admin Dashboard',
  description: "Admin Dashboard to manage Esencia's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideNavigation />
            <TopNavigation />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
