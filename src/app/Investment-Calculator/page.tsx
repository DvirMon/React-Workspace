import React from "react";
import InvestmentForm from "./components/form";
import InvestmentTable from "./components/table";

export default function InvestmentCalculator() {
  return (
    <div className="flex flex-col h-full">
      <section className="flex flex-row justify-center items-center h-1/3">
        <InvestmentForm />
      </section>
      <section className="flex flex-row justify-center h-1/3">
        <InvestmentTable />
      </section>
    </div>
  );
}
