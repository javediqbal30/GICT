export interface CalculatorContent {
  heading: string;
  intro: string;
  steps: string[];
  notes: string[];
  courseSlug: string;
  related: string[];
}

export const calculatorContent: Record<string, CalculatorContent> = {
  'salary-tax-calculator': {
    heading: 'How salary tax is estimated',
    intro:
      'The calculator annualises your monthly salary, applies the progressive slab table and then spreads the annual tax back across twelve months. Tax credits reduce the annual tax before the monthly figure is calculated.',
    steps: [
      'Annual taxable salary = monthly salary × 12 + other annual taxable income.',
      'Apply the slab fixed amount plus the rate on the portion inside the current slab.',
      'Subtract eligible tax credits from the annual tax.',
      'Divide the result by 12 for an estimated monthly withholding.',
    ],
    notes: [
      'The slab table shown is illustrative Tax Year 2024-25 data. Confirm the current Finance Act before relying on the result.',
      'Surcharge, non-resident status, exempt allowances and other income can change the final liability.',
      'A payroll deduction is not the same as a filed return. Reconcile the annual certificate with your return.',
    ],
    courseSlug: 'tax-filing-iris-compliance',
    related: ['gratuity-calculator', 'property-advance-tax-calculator', 'fbr-penalty-calculator'],
  },
  'property-advance-tax-calculator': {
    heading: 'How property advance tax is estimated',
    intro:
      'The tool compares the sale consideration, DC value and FBR value, then applies the selected buyer and seller rates. In practice, the tax base and exemptions depend on the transaction and the law in force on the transfer date.',
    steps: [
      'Tax base = the highest of consideration, DC value and FBR value.',
      'Buyer advance tax (236K) = tax base × buyer rate.',
      'Seller advance tax (236C) = tax base × seller rate.',
      'Total advance tax = buyer tax + seller tax.',
    ],
    notes: [
      'Rates shown are illustrative and may differ for filers, non-filers, dates and property types.',
      'Inherited, gifted and exempt transfers need separate legal review.',
      'Advance tax is not always the final tax. Keep the challans and review the adjustment position.',
    ],
    courseSlug: 'tax-filing-iris-compliance',
    related: ['salary-tax-calculator', 'corporate-tax-calculator', 'fbr-penalty-calculator'],
  },
  'sales-tax-calculator': {
    heading: 'How sales tax is estimated',
    intro:
      'Output tax is calculated on the taxable value. Eligible input tax is then compared with the output tax, with an optional 90% limitation for cases where it applies.',
    steps: [
      'Output tax = taxable value × sales tax rate.',
      'Allowed input = the lower of eligible input and the applicable cap.',
      'Net tax = output tax − allowed input.',
      'Invoice value = taxable value + output tax.',
    ],
    notes: [
      'If input tax exceeds output tax and the 90% limitation is not applied, the result can show an excess or refund position.',
      'Enter the rate that applies to your specific supply. Reduced, zero-rated and exempt supplies need separate treatment.',
      'The 90% limitation does not apply to every taxpayer or every supply; do not leave it ticked by habit.',
      'Provincial sales tax on services is a separate regime with its own registration and return.',
    ],
    courseSlug: 'sales-tax-provincial-vat',
    related: ['corporate-tax-calculator', 'salary-tax-calculator', 'fbr-penalty-calculator'],
  },
  'corporate-tax-calculator': {
    heading: 'How corporate tax is estimated',
    intro:
      'This is a simplified computation on taxable profit. It applies the rate you enter, shows the gross tax, then treats credits or tax already paid as a separate settlement item. It does not replace the corporate tax return or the adjustments that lead to taxable profit.',
    steps: [
      'Gross corporate tax = taxable profit × corporate rate.',
      'Net payable or refundable = gross tax − credits / tax already paid.',
      'Effective rate = gross tax ÷ taxable profit.',
      'After-tax profit = taxable profit − gross tax.',
    ],
    notes: [
      'Credits and advance tax settle the liability; they do not reduce the tax expense shown in the after-tax profit calculation.',
      'Corporate rates depend on the company type and tax year. Minimum tax, super tax, ACT, group relief and special regimes are not modelled.',
      'Taxable profit is not the same as accounting profit. Add-backs, depreciation and other adjustments must be documented.',
      'Use the tool for a quick sanity check, then complete the statutory computation.',
    ],
    courseSlug: 'corporate-taxation-advisory',
    related: ['sales-tax-calculator', 'loan-dscr-calculator', 'npv-irr-calculator'],
  },
  'gratuity-calculator': {
    heading: 'How gratuity tax is estimated',
    intro:
      'The calculator applies the exemption limit you enter, treats the excess as taxable and applies the average tax rate you provide. The actual result can depend on whether the fund is approved, the length of service and the spread-over treatment.',
    steps: [
      'Exempt amount = the lower of the amount received and the applicable limit.',
      'Taxable amount = amount received − exempt amount.',
      'Tax = taxable amount × average tax rate.',
      'Net received = amount received − tax.',
    ],
    notes: [
      'Enter the exemption limit that applies to your fund and facts; do not assume a limit from an old year.',
      'The spread-over-three-years treatment can produce a different result from taxing the whole amount in one year.',
      'Death, disability and unapproved-fund cases need separate review.',
    ],
    courseSlug: 'tax-filing-iris-compliance',
    related: ['salary-tax-calculator', 'fbr-penalty-calculator', 'property-advance-tax-calculator'],
  },
  'fbr-penalty-calculator': {
    heading: 'How the late filing estimate works',
    intro:
      'The tool applies the daily penalty rate you enter, subject to the minimum and maximum you specify, and adds a default surcharge based on the annual rate and days late.',
    steps: [
      'Raw penalty = tax payable × daily rate × days late.',
      'Penalty = the raw amount limited by the minimum and maximum.',
      'Default surcharge = tax payable × annual surcharge rate × days late ÷ 365.',
      'Total payable = tax + penalty + surcharge.',
    ],
    notes: [
      'Penalty provisions, minimums, maximums and surcharge rates depend on the section, tax year and facts. Enter the correct figures or ask an adviser.',
      'A nil return, part payment, waiver or holiday can change the outcome.',
      'This tool does not calculate every penalty that may apply to a case.',
    ],
    courseSlug: 'tax-filing-iris-compliance',
    related: ['salary-tax-calculator', 'corporate-tax-calculator', 'property-advance-tax-calculator'],
  },
  'loan-dscr-calculator': {
    heading: 'How the loan and DSCR estimate works',
    intro:
      'The instalment is calculated using the standard amortisation formula. Annual debt service is the periodic instalment multiplied by the number of payments per year, and DSCR is EBITDA divided by total annual debt service.',
    steps: [
      'Periodic rate = annual rate ÷ payments per year.',
      'Number of periods = years × payments per year.',
      'Instalment = principal × periodic rate × (1 + periodic rate)^periods ÷ ((1 + periodic rate)^periods − 1).',
      'DSCR = EBITDA ÷ (new annual debt service + existing annual debt service).',
    ],
    notes: [
      'The model assumes a fixed rate and equal payments. Variable rates, balloon payments, grace periods and prepayments change the schedule.',
      'DSCR definitions differ between lenders. Confirm the covenant and the EBITDA definition in the facility agreement.',
      'A DSCR above 1.25x is a common rule of thumb, not a universal requirement.',
    ],
    courseSlug: 'corporate-finance-modeling',
    related: ['npv-irr-calculator', 'corporate-tax-calculator', 'sales-tax-calculator'],
  },
  'npv-irr-calculator': {
    heading: 'How NPV and IRR are estimated',
    intro:
      'The calculator discounts an equal annual cash flow at your required return. NPV is the present value of inflows minus the initial investment. IRR is the discount rate that makes NPV zero.',
    steps: [
      'PV of inflows = annual cash flow × (1 − (1 + rate)^−years) ÷ rate.',
      'NPV = PV of inflows − initial investment.',
      'IRR = the rate at which NPV equals zero, found numerically.',
      'Profitability index = PV of inflows ÷ initial investment.',
    ],
    notes: [
      'Equal annual cash flows are assumed. Uneven cash flows need a full spreadsheet model.',
      'Multiple sign changes can produce multiple IRRs. NPV is generally the more reliable decision rule.',
      'The tool excludes terminal value, tax, working capital and financing effects unless you build them into the cash flow.',
    ],
    courseSlug: 'corporate-finance-modeling',
    related: ['loan-dscr-calculator', 'corporate-tax-calculator', 'sales-tax-calculator'],
  },
};
