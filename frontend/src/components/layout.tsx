import { ReactNode } from 'react';
import { Navbar } from 'src/components/navbar';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1">
    <Navbar />
    {children}
  </div>
);
