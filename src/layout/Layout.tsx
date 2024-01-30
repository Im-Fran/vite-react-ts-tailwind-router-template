import { Outlet, ScrollRestoration } from "react-router-dom";
import { clsx } from "clsx";

import { LayoutProps } from "@/interfaces/layout/LayoutProps.ts";
import Header from "@/layout/Header.tsx";
import Footer from "@/layout/Footer.tsx";

const Layout = ({ className, ...rest }: LayoutProps) => {
  const containerClasses = clsx([
    "bg-neutral-100 text-neutral-800 transition-colors duration-200 dark:bg-neutral-800 dark:text-neutral-50",
    className || "",
  ]);

  return (
    <div
      className={containerClasses}
      {...rest}>
      <div className={"flex"}>
        <div className={"flex h-full w-full flex-col gap-20"}>
          <Header />
          <div className={"container mx-auto min-h-screen"}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
