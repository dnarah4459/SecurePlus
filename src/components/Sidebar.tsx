"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
///We are basically passing in an user into a sidebar so we can render the sdiebar based on the current user
///Root layout basically compbines the sidebr code and the code of our other pages. We are passing in a user and then rendering out this sidebar component
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">SecurePulse</h1>
        </Link>
        {/*Bacially what we are doing here is that we are going through every sidebarLink, like mappin g through them . 
        After we map through them, we basically gettin each indifual item, and we are checing if the user is currenty on that apge
        if the use is currently on that page, then we set the variable isActive too true 
        After we set it to true, we return an a clickable linke to that page. and we are making it blue if the user is currently on that link 
        we are also returing a div with an image of that link and a lbel to that link */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
