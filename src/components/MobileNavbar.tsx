"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

{
  /*To this navbar, we will be passing in the current user using this app. Like who is current using this app, we will passing int he information  about that specifc user */
}
const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    ///This sections can only have a max width of 264 pixels
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="mb-12 cursor-pointer flex items-center gap-1 px-4"
            >
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Horizon logo"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                SecurePulse
              </h1>
            </Link>
            {/*Bacially what we are doing here is that we are going through every sidebarLink, like mappin g through them . 
        After we map through them, we basically gettin each indifual item, and we are checing if the user is currenty on that apge
        if the use is currently on that page, then we set the variable isActive too true 
        After we set it to true, we return an a clickable linke to that page. and we are making it blue if the user is currently on that link 
        we are also returing a div with an image of that link and a lbel to that link */}
            <div className="mobilnav-sheet">
              {/*Bascially, anything you click on that is part of the sheet close will automatically close */}
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white ">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);

                    return (
                    ///Basically, how this works is that you will close it automatically everytime you click on a link, like you click on a link and the modal closes
                    <SheetClose asChild key = {item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
          
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width = {20}
                            height = {20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                      </SheetClose>
                    );
                  })}

                  USER. THIS IS WHY WE PASS IN THE USER OBJECT TO THE NAVBAR. EVERY USE THATS LOGS IN TO OUR AP WLL HAVE CUSTOME USER DATA IN OUR NAVBAR
                </nav>
              </SheetClose>
              FOOTER
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
