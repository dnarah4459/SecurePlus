import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";
import { getLoggedInUser } from "../../../lib/actions/user.actions";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    ///This bascialy represents a dummy test user 
  const loggedIn = await getLoggedInUser()
  return (
    ///As you can see here, we are applying the inter font for all the pages that include the a sidebar and left sidebar. We define the --font-inter font in the main layout page
    <main className="flex h-screen w-full font-inter ">
      {/*This code is basically used to display the sidebar component. SO bascially, what we do is  pass in the current user, so we can customize the sidebar based on the current user*/}
      <Sidebar user={loggedIn} />

      {/* We basicaly want this div to show on the screen on  medium designs. It is like the header at the very top, and we want it to show on every sreen that is (root) folder. like a header at the very top and we want to it to show on every component that inside of the root folder */}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          {/*So, on the top naviagation/sidebar that will display on meidum screens, we can render out an image of our app logo*/}

          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />

          {/* On sidebar uptop, we want to render out a mobile navbar, lke a hamburgur logo*/}
          <div>
            <MobileNavbar 
             user={loggedIn}
            />
          </div>


        </div>
        {children}
      </div>


    </main>
  );
};

export default RootLayout;
