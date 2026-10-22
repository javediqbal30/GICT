export type CalculatorCategory =
  | 'Individual & salary'
  | 'Property & capital gains'
  | 'Sales tax & VAT'
  | 'Corporate & turnover'
  | 'Withholding & banking'
  | 'SECP & financial models';

export interface Calculator {
  slug: string;
  title: string;
  shortTitle: string;
  category: CalculatorCategory;
  description: string;
  law: string;
  taxYear: string;
  icon: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
}

export const calculators: Calculator[] = [
  {
    slug: 'salary-tax-calculator',
    title: 'Salary Income Tax Calculator',
    shortTitle: 'Salary tax',
    category: 'Individual & salary',
    description:
      'Estimate annual income tax, monthly withholding and take-home salary using progressive salary slabs.',
    law: 'Income Tax Ordinance 2001 · Salary',
    taxYear: '2024-25 illustrative',
    icon: 'wallet',
    featured: true,
    metaTitle: 'Salary Tax Calculator Pakistan 2024-25 | GICT',
    metaDescription:
      'Free Pakistan salary tax calculator for 2024-25. Estimate annual income tax, monthly withholding, effective rate and take-home pay using progressive slabs.',
  },
  {
    slug: 'property-advance-tax-calculator',
    title: 'Property Advance Tax Calculator',
    shortTitle: '236C / 236K',
    category: 'Property & capital gains',
    description:
      'Estimate advance tax on property purchase and sale under Sections 236K and 236C.',
    law: 'Income Tax Ordinance 2001 · 236C & 236K',
    taxYear: '2024-25 illustrative',
    icon: 'home',
    featured: true,
    metaTitle: 'Property Advance Tax 236C & 236K Calculator',
    metaDescription:
      'Estimate 236K buyer and 236C seller advance tax on property in Pakistan using the higher of DC or FBR value, with clear inputs and assumptions.',
  },
  {
    slug: 'sales-tax-calculator',
    title: 'Sales Tax Calculator',
    shortTitle: 'Sales tax',
    category: 'Sales tax & VAT',
    description:
      'Calculate output tax, eligible input tax and net sales tax payable on a taxable supply.',
    law: 'Sales Tax Act 1990 · Input tax',
    taxYear: 'Rate configurable',
    icon: 'receipt',
    featured: true,
    metaTitle: 'Sales Tax Calculator Pakistan | GICT',
    metaDescription:
      'Calculate output tax, eligible input tax credit and net sales tax payable on taxable goods or services in Pakistan with this free online estimator.',
  },
  {
    slug: 'corporate-tax-calculator',
    title: 'Corporate Tax Calculator',
    shortTitle: 'Corporate tax',
    category: 'Corporate & turnover',
    description:
      'Estimate corporate income tax from taxable profit using a selected corporate rate.',
    law: 'Income Tax Ordinance 2001 · Corporate',
    taxYear: 'Rate configurable',
    icon: 'building',
    metaTitle: 'Corporate Tax Calculator Pakistan | GICT',
    metaDescription:
      'Estimate corporate income tax on taxable profit, effective tax rate and after-tax profit for Pakistani companies using a configurable rate.',
  },
  {
    slug: 'gratuity-calculator',
    title: 'Gratuity Tax Calculator',
    shortTitle: 'Gratuity',
    category: 'Individual & salary',
    description:
      'Estimate the exempt and taxable portion of gratuity or a golden handshake.',
    law: 'Income Tax Ordinance 2001 · Sixth Schedule',
    taxYear: 'Inputs configurable',
    icon: 'gift',
    metaTitle: 'Gratuity Tax Calculator Pakistan | GICT',
    metaDescription:
      'Estimate exempt and taxable gratuity in Pakistan using the approved-fund exemption limit and your average tax rate, with a clear working.',
  },
  {
    slug: 'fbr-penalty-calculator',
    title: 'FBR Late Filing Penalty Calculator',
    shortTitle: 'FBR penalty',
    category: 'Corporate & turnover',
    description:
      'Estimate late filing penalty and default surcharge on unpaid tax.',
    law: 'Income Tax Ordinance 2001 · 182 & 205',
    taxYear: 'Inputs configurable',
    icon: 'clock',
    metaTitle: 'FBR Late Filing Penalty Calculator | GICT',
    metaDescription:
      'Estimate FBR late filing penalty and default surcharge on unpaid tax using the number of days, tax amount and applicable KIBOR rate.',
  },
  {
    slug: 'loan-dscr-calculator',
    title: 'Loan Amortization & DSCR Calculator',
    shortTitle: 'Loan & DSCR',
    category: 'SECP & financial models',
    description:
      'Calculate monthly instalments, total interest and debt service coverage for a corporate loan.',
    law: 'Corporate finance · Amortization',
    taxYear: 'Inputs configurable',
    icon: 'calculator',
    metaTitle: 'Loan Amortization & DSCR Calculator | GICT',
    metaDescription:
      'Calculate monthly loan instalments, total interest and debt service coverage ratio (DSCR) for corporate finance and project analysis.',
  },
  {
    slug: 'npv-irr-calculator',
    title: 'NPV & IRR Calculator',
    shortTitle: 'NPV & IRR',
    category: 'SECP & financial models',
    description:
      'Evaluate a project using net present value, internal rate of return, payback and profitability index.',
    law: 'Capital budgeting · DCF',
    taxYear: 'Inputs configurable',
    icon: 'chart',
    metaTitle: 'NPV & IRR Calculator | GICT',
    metaDescription:
      'Calculate NPV, IRR, payback period and profitability index for a project using discounted cash flow analysis and a clear cash-flow table.',
  },
];

export const calculatorCategories = [
  'All',
  'Individual & salary',
  'Property & capital gains',
  'Sales tax & VAT',
  'Corporate & turnover',
  'Withholding & banking',
  'SECP & financial models',
] as const;

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((calculator) => calculator.slug === slug);
}
