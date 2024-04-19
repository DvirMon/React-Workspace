import { UUID } from "crypto";

export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentResult {
  id : string,
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export interface InvestmentDataTable {
  year: number;
  interestValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}

export interface InvestmentMapData extends InvestmentResult {
  initialInvestment: number;
}
