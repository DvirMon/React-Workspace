"use client";

import { useState } from "react";
import InvestmentForm from "./components/form";
import InvestmentTable from "./components/table";
import { InvestmentData } from "./util/types";

const state: InvestmentData = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function InvestmentCalculator() {
  const [investmentState, setInvestmentState] = useState(state);

  function handleInvestmentResultState(key : keyof InvestmentData, value : unknown) {
    setInvestmentState((state) => ({ ...state, [key]: value }))
  }

  return (
    <div className="flex flex-col h-full">
      <section className="flex flex-row justify-center items-center h-1/3">
        <InvestmentForm state={investmentState} change={handleInvestmentResultState} />
      </section>
      <section className="flex flex-row justify-center h-full">
        <InvestmentTable state={investmentState} />
      </section>
    </div>
  );
}
