"use client";

import { useState } from "react";
import InvestmentForm from "./components/form";
import InvestmentTable from "./components/table";
import { InvestmentData } from "./util/types";

const initState: InvestmentData = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function View({ state }: { state: InvestmentData }) {
  if (state.duration >= 1) {
    return <InvestmentTable state={state} />;
  } else {
    return <p>Please enter Duration greater then 0</p>;
  }
}

export default function InvestmentCalculator() {
  const [investmentState, setInvestmentState] = useState(initState);

  function handleInvestmentResultState(
    key: keyof InvestmentData,
    value: unknown
  ) {
    setInvestmentState((state) => ({ ...state, [key]: value }));
  }

  let view;

  if (investmentState.duration >= 1) {
    view = <InvestmentTable state={investmentState} />;
  } else {
    view = <span>Please enter duration greater then 0</span>;
  }

  return (
    <div className="flex flex-col h-full">
      <section className="flex flex-row justify-center items-center h-1/3">
        <InvestmentForm
          state={investmentState}
          change={handleInvestmentResultState}
        />
      </section>
      <section className="flex flex-row justify-center h-full">
        <View state={investmentState} />
      </section>
    </div>
  );
}
