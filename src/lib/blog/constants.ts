import type { StatutorySource, BlogLeadCourse } from './types';

export const STATUTORY_AUTHORITY_SOURCES: StatutorySource[] = [
  {
    title: 'Federal Board of Revenue (FBR)',
    authority: 'FBR',
    url: 'https://www.fbr.gov.pk/',
    description: 'Federal Income Tax Ordinance 2001, Sales Tax Act 1990, and active SROs.',
  },
  {
    title: 'Punjab Revenue Authority (PRA)',
    authority: 'PRA',
    url: 'https://pra.punjab.gov.pk/',
    description: 'Punjab Sales Tax on Services Act 2012 & Withholding Regulations.',
  },
  {
    title: 'Sindh Revenue Board (SRB)',
    authority: 'SRB',
    url: 'https://www.srb.gop.pk/',
    description: 'Sindh Sales Tax on Services Act 2011 & Compliance Circulars.',
  },
  {
    title: 'Securities and Exchange Commission of Pakistan (SECP)',
    authority: 'SECP',
    url: 'https://www.secp.gov.pk/',
    description: 'Companies Act 2017, Statutory Filings, and Corporate Governance.',
  },
];

export const CATEGORY_COURSE_MAPPINGS: Record<string, BlogLeadCourse> = {
  'Individual tax': {
    slug: 'tax-filing-iris-compliance',
    title: 'Tax Filing & IRIS Compliance',
    shortTitle: 'Tax Filing & IRIS',
    tagline: 'Master the entire personal return & wealth reconciliation workflow in live IRIS.',
    description: 'Connect this article to hands-on portal filing, wealth statement balancing, and bank reconciliation.',
  },
  Compliance: {
    slug: 'tax-filing-iris-compliance',
    title: 'Tax Filing & IRIS Compliance',
    shortTitle: 'Tax Filing & IRIS',
    tagline: 'Practical return filing, withholding credits, and wealth statements.',
    description: 'Learn the exact working paper method to defend every figure before submission.',
  },
  'Sales tax': {
    slug: 'sales-tax-provincial-vat',
    title: 'Sales Tax & Provincial VAT',
    shortTitle: 'Sales Tax & VAT',
    tagline: 'Federal and provincial sales tax rules, input tax adjustments, and cross-border invoicing.',
    description: 'Work through real PRA, SRB, and FBR portal filings without disallowances.',
  },
  Litigation: {
    slug: 'advanced-income-tax-litigation',
    title: 'Advanced Income Tax Litigation',
    shortTitle: 'Tax Litigation',
    tagline: 'Notice drafting, appeal memo preparation, stay applications, and tribunal defense.',
    description: 'Taught by practicing High Court advocates with live case files and mock hearings.',
  },
  'Corporate taxation': {
    slug: 'corporate-taxation-advisory',
    title: 'Corporate Taxation & Advisory',
    shortTitle: 'Corporate Taxation',
    tagline: 'Statutory corporate computation, minimum tax, super tax, and advisory memos.',
    description: 'Practical tax accounting and computation working papers for corporate entities.',
  },
  'Financial modelling': {
    slug: 'corporate-finance-modeling',
    title: 'Corporate Finance & Financial Modeling',
    shortTitle: 'Financial Modelling',
    tagline: 'Dynamic 3-statement financial models, DCF valuations, and sensitivity analysis.',
    description: 'Build enterprise-grade Excel models used by CFOs and corporate advisory firms.',
  },
};
