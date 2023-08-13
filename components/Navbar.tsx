"use client";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import Logo from "public/images/avatar.svg";
import HomeIcon from "public/icons/home.svg";
import WorksIcon from "public/icons/works.svg";
import BlogIcon from "public/icons/blog.svg";

const iconsClassName =
  "w-12 h-12 p-2 stroke-white stroke-[1rem] text-white hover:bg-gray-50 hover:bg-opacity-10 rounded-md transition-all";

const navItems = {
  "/": {
    icon: <HomeIcon className={iconsClassName} />,
  },
  "/works": {
    icon: <WorksIcon className={iconsClassName} />,
  },
  "/blog": {
    icon: <BlogIcon className={iconsClassName} />,
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
            className="relative flex items-center justify-between h-20 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <Link href={"/"}>
              <Logo className="w-16 h-16 md:w-20 md:h-20" />
            </Link>
            <div className="flex flex-row items-center justify-end gap-4 md:gap-8">
              {Object.entries(navItems).map(([path, { icon }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={twMerge(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      !isActive && "fill-none",
                      isActive && "fill-current stroke-current"
                    )}
                  >
                    <span className="relative">
                      {icon}
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
