import React from "react";
import CountUp from "react-countup";


{/* We are bascially making this component resuable. We can pass in any amount. We should be able to pass in any amount because each user has a different toal current balance amount, so we are passing in any amount and we re returning a count up component*/}
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className = "w-full">
      <CountUp 
        duration = {2.75}
        decimals = {2}
        decimal = ","
        prefix = "$"
        end={amount} 
      />
    </div>
  );
};

export default AnimatedCounter;
