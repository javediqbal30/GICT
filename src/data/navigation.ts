export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const primaryNav: NavItem[] = [
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'Tax Filing & IRIS', href: '/courses/tax-filing-iris-compliance', description: 'Portal-first income tax filing' },
      { label: 'Corporate Taxation', href: '/courses/corporate-taxation-advisory', description: 'Computation and advisory' },
      { label: 'Sales Tax & VAT', href: '/courses/sales-tax-provincial-vat', description: 'Federal and provincial' },
      { label: 'Tax Litigation', href: '/courses/advanced-income-tax-litigation', description: 'Drafting and appeals' },
      { label: 'Financial Modelling', href: '/courses/corporate-finance-modeling', description: 'Models and valuation' },
      { label: 'Accounting & QuickBooks', href: '/courses/computerized-accounting-quickbooks', description: 'Practical bookkeeping' },
    ],
  },
  {
    label: 'Calculators',
    href: '/calculators',
    children: [
      { label: 'Salary tax', href: '/calculators/salary-tax-calculator' },
      { label: 'Property advance tax', href: '/calculators/property-advance-tax-calculator' },
      { label: 'Sales tax', href: '/calculators/sales-tax-calculator' },
      { label: 'Corporate tax', href: '/calculators/corporate-tax-calculator' },
      { label: 'All calculators', href: '/calculators' },
    ],
  },
  { label: 'Faculty', href: '/faculty' },
  { label: 'About', href: '/about' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  programmes: [
    { label: 'Tax Filing & IRIS', href: '/courses/tax-filing-iris-compliance' },
    { label: 'Corporate Taxation', href: '/courses/corporate-taxation-advisory' },
    { label: 'Sales Tax & VAT', href: '/courses/sales-tax-provincial-vat' },
    { label: 'Tax Litigation', href: '/courses/advanced-income-tax-litigation' },
    { label: 'All programmes', href: '/courses' },
  ],
  explore: [
    { label: 'Calculators', href: '/calculators' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'About GICT', href: '/about' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Corporate training', href: '/corporate-training' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};
