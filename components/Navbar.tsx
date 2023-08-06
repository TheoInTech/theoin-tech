"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import Logo from "public/images/avatar.svg";

const navItems = {
  "/": {
    name: "home",
  },
  "/works": {
    name: "works",
  },
  "/blog": {
    name: "blog",
  },
  //   "/say-hi": {
  //     name: "say hi 👋",
  //   },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex relative items-center justify-center h-20 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <Link
              href={"/"}
              className={"hidden md:block absolute left-0 top-0"}
            >
              <Logo className="w-20 h-20" />
            </Link>
            <div className="flex flex-row gap-2 md:gap-4 items-center justify-center ">
              <Link href={"/"} className={"md:hidden"}>
                <Logo className="w-16 h-16 md:w-20 md:h-20" />
              </Link>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={twMerge(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      !isActive && "text-neutral-500"
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
