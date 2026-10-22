export interface FacultyMember {
  slug: string;
  name: string;
  prefix: string;
  designation: string;
  focus: string[];
  bio: string;
  qualifications: string[];
  courses: string[];
  image: string;
  initials: string;
  metaTitle: string;
  metaDescription: string;
}

export const faculty: FacultyMember[] = [
  {
    slug: 'abrar-ahmed-qazi',
    name: 'Abrar Ahmed Qazi',
    prefix: 'Adv.',
    designation: 'Advocate High Court',
    focus: [
      'Member, Punjab Bar Council',
      'Life Member, Rawalpindi Islamabad Tax Bar Association (RITBA)',
    ],
    bio: 'Adv. Abrar Ahmed Qazi is an Advocate of the High Court, Member of the Punjab Bar Council, and Life Member of the Rawalpindi Islamabad Tax Bar Association (RITBA). He teaches income tax litigation, appeals, and dispute strategy with a deep focus on procedure, documented evidence, and tribunal practice.',
    qualifications: [
      'Advocate High Court',
      'Member, Punjab Bar Council',
      'Life Member, Rawalpindi Islamabad Tax Bar Association (RITBA)',
    ],
    courses: ['advanced-income-tax-litigation'],
    image: '/assets/images/Adv_Abrar_Ahmed_Qazi.webp',
    initials: 'AQ',
    metaTitle: 'Adv. Abrar Ahmed Qazi | GICT Faculty',
    metaDescription:
      'Adv. Abrar Ahmed Qazi, Advocate High Court, Member Punjab Bar Council and Life Member RITBA, teaches advanced income tax litigation at GICT Rawalpindi.',
  },
  {
    slug: 'tariq-mahmood-anjum',
    name: 'Tariq Mahmood Anjum',
    prefix: 'Adv.',
    designation: 'Professional Tax Consultant | Tax Trainer',
    focus: [
      'Income Tax',
      'Sales Tax',
      'FBR Compliance',
      'IRIS',
      'E-Filing',
      'Tax Notices',
      'Corporate & Business Compliance',
    ],
    bio: 'Adv. Tariq Mahmood Anjum is an experienced Professional Tax Consultant and Tax Trainer specializing in Income Tax, Sales Tax, FBR Compliance, IRIS E-Filing, handling tax notices, and corporate & business compliance. His practical workshops equip professionals with hands-on drafting, portal submission, and dispute strategies.',
    qualifications: [
      'Professional Tax Consultant',
      'Tax Trainer',
      'Advocate, Taxation & Corporate Practice',
    ],
    courses: [
      'tax-filing-iris-compliance',
      'sales-tax-provincial-vat',
      'corporate-taxation-advisory',
      'advanced-income-tax-litigation',
    ],
    image: '/assets/images/Adv_Tariq_Mahmood_Anjum.webp',
    initials: 'TA',
    metaTitle: 'Adv. Tariq Mahmood Anjum | GICT Faculty',
    metaDescription:
      'Adv. Tariq Mahmood Anjum, Professional Tax Consultant and Tax Trainer, teaches income tax, sales tax, FBR IRIS e-filing, and corporate compliance.',
  },
  {
    slug: 'saeed-ahmed-awan',
    name: 'Saeed Ahmed Awan',
    prefix: '',
    designation: 'CA Finalist | FBR Registered Income Tax Practitioner (ITP)',
    focus: ['Accounting', 'Finance', 'Taxation Training'],
    bio: 'Saeed Ahmed Awan is a CA Finalist and FBR Registered Income Tax Practitioner (ITP) specializing in Accounting, Finance, and Taxation Training. He connects core accounting records, computerized systems, and corporate finance with end-to-end practical tax filing and compliance.',
    qualifications: [
      'CA Finalist',
      'FBR Registered Income Tax Practitioner (ITP)',
      'Accounting, Finance & Taxation Specialist',
    ],
    courses: [
      'tax-filing-iris-compliance',
      'sales-tax-provincial-vat',
      'corporate-taxation-advisory',
      'corporate-finance-modeling',
      'computerized-accounting-quickbooks',
    ],
    image: '/assets/images/Saeed_Ahmed_Awan.webp',
    initials: 'SA',
    metaTitle: 'Saeed Ahmed Awan | GICT Faculty',
    metaDescription:
      'Saeed Ahmed Awan, CA Finalist and FBR Registered Income Tax Practitioner (ITP), teaches accounting, finance, and practical taxation at GICT Rawalpindi.',
  },
];

export function getFaculty(slug: string): FacultyMember | undefined {
  return faculty.find((member) => member.slug === slug);
}
