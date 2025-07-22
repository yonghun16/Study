import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About US",
};

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}

