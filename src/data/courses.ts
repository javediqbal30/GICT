export type CourseCategory = 'Taxation' | 'Law' | 'Finance' | 'Technology';
export type CourseStatus = 'Admissions open' | 'Coming soon' | 'Waiting list';

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  duration: string;
  format: string;
  level: string;
  status: CourseStatus;
  featured?: boolean;
  summary: string;
  description: string;
  outcomes: string[];
  audience: string[];
  prerequisites: string;
  assessment: string;
  certificate: string;
  modules: CourseModule[];
  facultySlugs: string[];
  icon: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const courses: Course[] = [
  {
    slug: 'tax-filing-iris-compliance',
    title: 'Tax Filing & IRIS Compliance',
    shortTitle: 'Tax Filing & IRIS',
    category: 'Taxation',
    duration: '8 weeks',
    format: 'On-campus · Live online',
    level: 'Beginner to intermediate',
    status: 'Admissions open',
    featured: true,
    image: '/assets/images/Tax_Filing_&_IRIS_Compliance.webp',
    summary:
      'A portal-first programme covering income tax filing, wealth reconciliation, withholding and the practical use of FBR IRIS.',
    description:
      'Learn how a Pakistani tax return is actually prepared. This programme moves from the statutory framework to live IRIS workflows, with weekly exercises on salary, business, property and foreign income. It is designed for people who need to file accurately, respond to notices and explain the numbers to a client.',
    outcomes: [
      'Register and navigate FBR IRIS with confidence.',
      'Compute taxable income for salary, business and property.',
      'Reconcile a wealth statement under Section 116.',
      'Prepare and review withholding statements.',
      'Respond to common IRIS notices and errors.',
      'Complete an end-to-end mock filing with a defensible working paper.',
    ],
    audience: [
      'Tax consultants and tax preparers',
      'Accountants and finance officers',
      'Law graduates entering tax practice',
      'Business owners who manage their own filings',
    ],
    prerequisites: 'Basic accounting knowledge and comfort using a computer. No prior IRIS experience required.',
    assessment: 'Weekly practical exercises, a mid-programme review and an end-to-end capstone filing.',
    certificate: 'Certificate of completion issued on meeting attendance and capstone requirements.',
    modules: [
      {
        title: 'The Pakistani tax framework',
        topics: ['Income Tax Ordinance overview', 'Tax year and residential status', 'NTN registration and biometric verification', 'IRIS navigation'],
      },
      {
        title: 'Salary and allowances',
        topics: ['Salary income and perquisites', 'Exemptions and tax credits', 'Surcharge basics', 'Monthly withholding review'],
      },
      {
        title: 'Business income',
        topics: ['Admissible and inadmissible expenses', 'Depreciation', 'Minimum tax overview', 'Working papers and reconciliations'],
      },
      {
        title: 'Property and capital gains',
        topics: ['Rent chargeable to tax', 'Property deductions', 'Capital gains basics', 'Advance tax on property'],
      },
      {
        title: 'Foreign income and assets',
        topics: ['Foreign-source income', 'Foreign assets and wealth statement', 'Double taxation relief', 'Documentation'],
      },
      {
        title: 'Wealth reconciliation',
        topics: ['Section 116 statement', 'Reconciling assets and liabilities', 'Common mismatches', 'Supporting evidence'],
      },
      {
        title: 'Withholding and notices',
        topics: ['Withholding statements', 'Section 114 and 122 notices', 'Reply structure', 'Penalties and surcharge'],
      },
      {
        title: 'Capstone filing',
        topics: ['Case study', 'Return preparation', 'Review checklist', 'Presentation and feedback'],
      },
    ],
    facultySlugs: ['saeed-ahmed-awan', 'tariq-mahmood-anjum'],
    icon: 'file-check',
    metaTitle: 'Tax Filing & IRIS Compliance Course | GICT',
    metaDescription:
      'Practical 8-week tax filing course in Rawalpindi. Learn FBR IRIS, salary and business income, wealth reconciliation, withholding and filing.',
  },
  {
    slug: 'corporate-taxation-advisory',
    title: 'Corporate Taxation & Advisory',
    shortTitle: 'Corporate Taxation',
    category: 'Taxation',
    duration: '10 weeks',
    format: 'On-campus · Live online',
    level: 'Intermediate',
    status: 'Admissions open',
    image: '/assets/images/Corporate_Taxation_&_Advisory_Workspace.webp',
    summary:
      'Build the corporate tax computation from accounting profit to taxable profit, including minimum tax, ACT and super tax.',
    description:
      'A programme for finance professionals who need to move beyond compliance checklists. You will work through corporate tax computations, adjustments, advance tax, withholding and the interaction between minimum tax, alternative corporate tax and super tax, using practical case studies.',
    outcomes: [
      'Reconcile accounting profit with taxable profit.',
      'Apply corporate tax, minimum tax, ACT and super tax concepts.',
      'Prepare advance tax and withholding workings.',
      'Identify common audit and reconciliation risks.',
      'Build a clear corporate tax working paper.',
      'Explain tax positions to management and advisers.',
    ],
    audience: [
      'Corporate finance and accounts teams',
      'Tax advisers and consultants',
      'Internal auditors',
      'CFO and finance manager track',
    ],
    prerequisites: 'Working knowledge of financial statements and basic tax concepts.',
    assessment: 'Case-based assignments, a corporate tax computation project and a final review.',
    certificate: 'Certificate of completion issued on meeting attendance and project requirements.',
    modules: [
      { title: 'Corporate tax framework', topics: ['Entity types', 'Tax year and rates', 'Residential status', 'Return obligations'] },
      { title: 'Accounting to taxable profit', topics: ['Add-backs and deductions', 'Depreciation', 'Provisions', 'Reconciliation format'] },
      { title: 'Minimum tax and ACT', topics: ['Section 113', 'Section 113C', 'Carry-forward', 'Interaction with normal tax'] },
      { title: 'Super tax', topics: ['Section 4C', 'Income thresholds', 'Computation', 'Planning considerations'] },
      { title: 'Advance tax and withholding', topics: ['Section 147', 'Sections 149–153', 'Statements', 'Reconciliation'] },
      { title: 'Audits and notices', topics: ['Audit selection', 'Documentation', 'Reply strategy', 'Penalties'] },
      { title: 'SECP interface', topics: ['Annual filings', 'Financial statements', 'Director reporting', 'Common defaults'] },
      { title: 'Corporate tax project', topics: ['Case study', 'Computation', 'Review', 'Board summary'] },
    ],
    facultySlugs: ['tariq-mahmood-anjum', 'saeed-ahmed-awan'],
    icon: 'building',
    metaTitle: 'Corporate Taxation & Advisory Course | GICT',
    metaDescription:
      'Ten-week corporate tax course covering taxable profit, minimum tax, ACT, super tax, advance tax and practical advisory workings in Pakistan.',
  },
  {
    slug: 'sales-tax-provincial-vat',
    title: 'Sales Tax & Provincial VAT',
    shortTitle: 'Sales Tax & VAT',
    category: 'Taxation',
    duration: '6 weeks',
    format: 'On-campus · Live online',
    level: 'Beginner to intermediate',
    status: 'Admissions open',
    image: '/assets/images/Sales_Tax_&_Provincial_VAT_Seminar.webp',
    summary:
      'Understand federal sales tax and the provincial sales tax on services, from registration and invoicing to input adjustment and returns.',
    description:
      'Sales tax problems rarely stay inside one statute. This programme connects the federal sales tax on goods with the provincial sales tax on services, with practical work on registration, invoicing, input tax, withholding and monthly returns.',
    outcomes: [
      'Explain the federal and provincial sales tax framework.',
      'Determine the correct jurisdiction for a service.',
      'Prepare sales tax invoices and working papers.',
      'Reconcile output tax, input tax and withholding.',
      'Identify common input tax disallowances.',
      'Complete a multi-province compliance scenario.',
    ],
    audience: [
      'Accounts and compliance officers',
      'Sales tax practitioners',
      'Business owners and finance managers',
      'Internal audit teams',
    ],
    prerequisites: 'Basic accounting and familiarity with business invoices.',
    assessment: 'Weekly computations, a multi-province case study and a final practical assessment.',
    certificate: 'Certificate of completion issued on meeting attendance and assessment requirements.',
    modules: [
      { title: 'Federal sales tax fundamentals', topics: ['Scope', 'Registration', 'Rates', 'Zero-rated and exempt supplies'] },
      { title: 'Invoicing and records', topics: ['Tax invoices', 'Credit and debit notes', 'Record-keeping', 'Returns'] },
      { title: 'Input tax', topics: ['Eligible input', 'Apportionment', 'Disallowed input', '90% limitation'] },
      { title: 'Provincial sales tax', topics: ['PRA', 'SRB', 'KPRA', 'BRA'] },
      { title: 'Jurisdiction and services', topics: ['Place of supply', 'Cross-province services', 'Withholding', 'Double taxation risk'] },
      { title: 'Practical case study', topics: ['Multi-province scenario', 'Reconciliation', 'Return preparation', 'Review'] },
    ],
    facultySlugs: ['saeed-ahmed-awan', 'tariq-mahmood-anjum'],
    icon: 'receipt',
    metaTitle: 'Sales Tax & Provincial VAT Course | GICT',
    metaDescription:
      'Six-week sales tax course covering FBR sales tax, PRA, SRB, KPRA, input tax, withholding and multi-province compliance in Pakistan.',
  },
  {
    slug: 'advanced-income-tax-litigation',
    title: 'Advanced Income Tax Litigation',
    shortTitle: 'Tax Litigation',
    category: 'Law',
    duration: '8 weeks',
    format: 'On-campus · Live online',
    level: 'Advanced',
    status: 'Admissions open',
    image: '/assets/images/Advanced_Income_Tax_Litigation_Desk.webp',
    summary:
      'A drafting and advocacy programme for tax practitioners handling assessments, appeals, stay orders and tribunal work.',
    description:
      'Built for lawyers and senior tax practitioners, this programme works through the life of a tax dispute: assessment, show-cause notice, reply, appeal, stay, tribunal and reference. The emphasis is on structured drafting, evidence and oral argument.',
    outcomes: [
      'Read and respond to assessment and show-cause notices.',
      'Draft grounds of appeal and written submissions.',
      'Apply for and defend stay of demand.',
      'Prepare an evidence bundle for ATIR.',
      'Identify grounds for reference and ADR.',
      'Present a mock case with a clear legal theory.',
    ],
    audience: [
      'Advocates and legal consultants',
      'Senior tax practitioners',
      'In-house counsel',
      'Tax managers handling disputes',
    ],
    prerequisites: 'Working knowledge of the Income Tax Ordinance and some dispute experience.',
    assessment: 'Drafting assignments, a mock hearing and a final case file.',
    certificate: 'Certificate of completion issued on meeting attendance and case-file requirements.',
    modules: [
      { title: 'Assessment framework', topics: ['Section 121', 'Section 122', 'Limitation', 'Record and evidence'] },
      { title: 'Notices and replies', topics: ['Show-cause notices', 'Reply structure', 'Documentation', 'Without-prejudice positions'] },
      { title: 'First appeal', topics: ['Section 127', 'Grounds', 'Written submissions', 'Commissioner (Appeals) practice'] },
      { title: 'Recovery and stay', topics: ['Recovery framework', 'Stay applications', 'Conditions', 'Practical strategy'] },
      { title: 'Tribunal practice', topics: ['ATIR procedure', 'Evidence', 'Case management', 'Oral argument'] },
      { title: 'Reference and ADR', topics: ['Section 133', 'Section 134A', 'FTO complaints', 'Settlement considerations'] },
      { title: 'Drafting workshop', topics: ['Grounds of appeal', 'Synopsis', 'Authorities', 'Bundle preparation'] },
      { title: 'Mock hearing', topics: ['Case theory', 'Opening', 'Rebuttal', 'Feedback'] },
    ],
    facultySlugs: ['abrar-ahmed-qazi', 'tariq-mahmood-anjum'],
    icon: 'scale',
    metaTitle: 'Advanced Income Tax Litigation Course | GICT',
    metaDescription:
      'Practical tax litigation course for lawyers and practitioners covering assessments, appeals, stay orders, ATIR and drafting in Pakistan.',
  },
  {
    slug: 'corporate-finance-modeling',
    title: 'Corporate Finance & Financial Modelling',
    shortTitle: 'Financial Modelling',
    category: 'Finance',
    duration: '10 weeks',
    format: 'On-campus · Live online',
    level: 'Intermediate',
    status: 'Coming soon',
    image: '/assets/images/Corporate_Finance_&_Financial_Modelling.webp',
    summary:
      'Build a three-statement model, value a business and present a clear investment case with defensible assumptions.',
    description:
      'A hands-on finance programme for analysts and finance managers. You will build a three-statement model, run sensitivity analysis, calculate WACC and valuation ranges, and communicate the result in a concise management or board format.',
    outcomes: [
      'Build a clean three-statement financial model.',
      'Forecast revenue, costs and working capital.',
      'Calculate free cash flow and WACC.',
      'Run DCF, sensitivity and scenario analysis.',
      'Evaluate projects using NPV, IRR and payback.',
      'Present a valuation and recommendation.',
    ],
    audience: [
      'Finance managers and analysts',
      'Corporate development teams',
      'Accountants moving into FP&A',
      'MBA and finance graduates',
    ],
    prerequisites: 'Comfort with Excel and financial statements.',
    assessment: 'Model-building assignments, a valuation project and a final presentation.',
    certificate: 'Certificate of completion issued on meeting attendance and project requirements.',
    modules: [
      { title: 'Model architecture', topics: ['Inputs and assumptions', 'Model map', 'Checks', 'Formatting standards'] },
      { title: 'Three-statement model', topics: ['Income statement', 'Balance sheet', 'Cash flow', 'Circularity'] },
      { title: 'Forecasting', topics: ['Revenue drivers', 'Cost structure', 'Working capital', 'Capex'] },
      { title: 'Valuation', topics: ['Free cash flow', 'WACC', 'Terminal value', 'DCF'] },
      { title: 'Scenarios', topics: ['Sensitivity tables', 'Scenario switches', 'Breakeven', 'Risk'] },
      { title: 'Capital budgeting', topics: ['NPV', 'IRR', 'Payback', 'Project ranking'] },
      { title: 'Communication', topics: ['Dashboard', 'Board summary', 'Recommendation', 'Q&A'] },
      { title: 'Final project', topics: ['Company model', 'Valuation', 'Presentation', 'Feedback'] },
    ],
    facultySlugs: ['saeed-ahmed-awan'],
    icon: 'chart',
    metaTitle: 'Corporate Finance & Financial Modelling | GICT',
    metaDescription:
      'Ten-week financial modelling course covering three-statement models, DCF, WACC, sensitivity analysis and capital budgeting in practice.',
  },
  {
    slug: 'computerized-accounting-quickbooks',
    title: 'Computerized Accounting & QuickBooks',
    shortTitle: 'Accounting & QuickBooks',
    category: 'Technology',
    duration: '8 weeks',
    format: 'On-campus · Live online',
    level: 'Beginner',
    status: 'Coming soon',
    image: '/assets/images/Computerized_Accounting_&_QuickBooks.webp',
    summary:
      'Set up a Pakistani business in QuickBooks, record transactions, reconcile banks and produce management reports.',
    description:
      'A practical accounting software programme for bookkeepers, accounts assistants and business owners. You will set up a company, build a chart of accounts, process sales and purchases, reconcile bank accounts and produce reports that a finance manager can use.',
    outcomes: [
      'Set up a company and chart of accounts.',
      'Record sales, purchases, payments and receipts.',
      'Manage sales tax–aware invoicing.',
      'Reconcile bank and cash accounts.',
      'Process payroll and withholding basics.',
      'Produce and interpret management reports.',
    ],
    audience: [
      'Accounts assistants and bookkeepers',
      'Small business owners',
      'Finance students and graduates',
      'Administrative staff handling accounts',
    ],
    prerequisites: 'Basic computer skills and an understanding of debits and credits.',
    assessment: 'Weekly software exercises, a company set-up project and a final reporting task.',
    certificate: 'Certificate of completion issued on meeting attendance and project requirements.',
    modules: [
      { title: 'Accounting refresh', topics: ['Debits and credits', 'Ledger', 'Trial balance', 'Financial statements'] },
      { title: 'Company setup', topics: ['QuickBooks company', 'Chart of accounts', 'Opening balances', 'Users'] },
      { title: 'Sales and receivables', topics: ['Invoices', 'Sales tax', 'Receipts', 'Aging'] },
      { title: 'Purchases and payables', topics: ['Bills', 'Expenses', 'Payments', 'Supplier balances'] },
      { title: 'Banking', topics: ['Bank feeds', 'Reconciliation', 'Transfers', 'Cash controls'] },
      { title: 'Payroll and withholding', topics: ['Employees', 'Payroll items', 'Withholding', 'Reports'] },
      { title: 'Management reports', topics: ['P&L', 'Balance sheet', 'Cash flow', 'Custom reports'] },
      { title: 'Final project', topics: ['Company file', 'Transactions', 'Reconciliation', 'Presentation'] },
    ],
    facultySlugs: ['saeed-ahmed-awan'],
    icon: 'monitor',
    metaTitle: 'Computerized Accounting & QuickBooks | GICT',
    metaDescription:
      'Practical eight-week QuickBooks and computerized accounting course for bookkeepers, accounts staff and business owners in Rawalpindi.',
  },
];

export const courseCategories = ['All', 'Taxation', 'Law', 'Finance', 'Technology'] as const;

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
