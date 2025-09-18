import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>nav</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default SiteLayout;
