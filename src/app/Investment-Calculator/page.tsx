"use client";

import { useState } from "react";
import InvestmentForm from "./components/form";
import InvestmentTable from "./components/table";
import { InvestmentData } from "./util/types";

const state: InvestmentData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function InvestmentCalculator() {
  const [investmentState, setInvestmentState] = useState(state);

  const tableState: InvestmentData[] = [state];

  return (
    <div className="flex flex-col h-full">
      <section className="flex flex-row justify-center items-center h-1/3">
        <InvestmentForm state={investmentState} />
      </section>
      <section className="flex flex-row justify-center h-1/3">
        <InvestmentTable state={tableState} />
      </section>
    </div>
  );
}
