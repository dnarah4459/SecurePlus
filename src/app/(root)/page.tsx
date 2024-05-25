import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const HomePage = () => {
  ///Rrepresents a test user
  ///Right now, this is static, but once we have users signing up and making real accounts, we can pull this account information for real
  const loggedIn = {
    firstName: "Priya",
    lastName: "Grace",
    email: "priyagrace@gmail.com",
  };
  return (
    <section className="home">
      {/*Home is not a native Tailwind CSS classname. But, it is a collection of native tailwind css classes*/}
      {/*Bascially, how it works is that all this code that we are writing for the home page is passed into the children part of the root layout. After it is passed into the children part of the root layout, it is put in where the the children part and there could be other code around it and then this home page is rendered out */}
      <div className="home-content">
        {/*This div will basically include all of our content on the home page*/}
        {/*This dheader will be used on multiple pages, so we can make it a resuable component, so we can put it on mulitple component */}

        <header className="home-header">
          {/*We are going to pass in acouple of props so we can make it resubale
          We are going to pass in the current user. It will be the first name of the user
          Like we are going to pass in the fristm naem of the ucrrent user so it gets renderd out 
           For whatever user that is logged in, we are going to display al of theses prosp. like user lgos in and then we display all of this components and UI
           */}

          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently."
          />

          {/*We are going to pass in the user's connected accounts, all banks, and the total amount of moeny they have */}
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/*Basically, for this sidebar, it will be csutomized for each user, so we are passing in the user deatials, all of thier recent transactions, and all of thier connected banks */}
      </div>
      <RightSidebar 
        user = {loggedIn} 
        transactions = {[]} 
        banks = {[{currentBalance: 123.5}, {currentBalance: 500}]}
        />
    </section>
  );
};

export default HomePage;
