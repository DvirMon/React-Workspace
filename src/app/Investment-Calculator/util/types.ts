export type InvestmentData = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export interface InvestmentTable {
  year: number;
  interestValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}
