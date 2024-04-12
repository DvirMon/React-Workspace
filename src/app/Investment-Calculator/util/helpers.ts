import { v4 as uuidv4 } from 'uuid';

// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return

import {
  InvestmentData,
  InvestmentDataTable,
  InvestmentMapData,
  InvestmentResult,
} from "./types";

// - duration: The investment duration (time frame)
// Pure function to calculate interest earned in a year
function calculateInterest(investmentValue: number, expectedReturn: number) {
  return investmentValue * (expectedReturn / 100);
}

// Pure function to calculate investment value at end of a year
function calculateEndOfYearValue(
  investmentValue: number,
  interestEarnedInYear: number,
  annualInvestment: number
) {
  return investmentValue + interestEarnedInYear + annualInvestment;
}

// Pure function to calculate investment data results
export function calculateInvestmentDataResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentData): InvestmentResult[] {
  const annualData = [];
  let investmentValue = +initialInvestment;

  for (let i = 0; i < +duration; ++i) {
    const interestEarnedInYear = calculateInterest(
      investmentValue,
      expectedReturn
    );
    investmentValue = calculateEndOfYearValue(
      investmentValue,
      interestEarnedInYear,
      annualInvestment
    );

    annualData.push({
      id : uuidv4(),
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatText(style: string, value: unknown) {
  const formatter = new Intl.NumberFormat("en-US", {
    style,
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  if (typeof value === "number") {
    return formatter.format(+(value as number));
  }

  return value;
}

export function mapItem({
  id,
  year,
  annualInvestment,
  interest,
  valueEndOfYear,
  initialInvestment,
}: InvestmentMapData): InvestmentDataTable {
  const totalInterest =
    valueEndOfYear - annualInvestment * year - initialInvestment;

  return {
    year,
    interest,
    interestValue: valueEndOfYear,
    totalInterest,
    investedCapital: interest,
  } as InvestmentDataTable;
}

export function mapData(state: InvestmentData): InvestmentDataTable[] {
  const data = calculateInvestmentDataResults(state);
  const initialInvestment =
    data[0]?.valueEndOfYear - data[0]?.interest - data[0]?.annualInvestment;
  return [
    ...data.map((item) => ({
      ...mapItem({ ...item, initialInvestment } as InvestmentMapData),
    })),
  ];
}
