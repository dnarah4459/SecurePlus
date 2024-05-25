"use client";
import React from "react";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

import { formatAmount } from "../../lib/utils";
///User logs in, enters home page, and then we pass in all of the user's account details into these props
const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />

        {/* We will be rendering a doughnut chart that will be custom for each user*/}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
