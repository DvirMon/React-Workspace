import React from "react";
import InvestmentForm from "./components/form";
import InvestmentTable from "./components/table";

export default function InvestmentCalculator() {
  return (
    <div className="flex flex-col">
      <InvestmentForm />
      <InvestmentTable />
    </div>
  );
}
