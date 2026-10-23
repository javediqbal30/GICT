export interface StudentReview {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
  city: string;
  verified: boolean;
}

export const googleReviewsConfig = {
  gmbUrl: 'https://share.google/fegqgKzT1sXXLHuLP',
  ratingValue: 4.9,
  totalReviews: '150+',
  badgeText: 'Verified Google Business Profile',
  campusLocation: 'Committee Chowk, Rawalpindi',
};

export const featuredReviews: StudentReview[] = [
  {
    id: 'review-1',
    name: 'Muhammad Usman',
    role: 'Tax Associate',
    course: 'Tax Filing & IRIS Compliance',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'GICT completely transformed my career. Tariq Sahib doesn’t just teach theory; he opens the live FBR IRIS portal, explaining wealth statements, Section 111 reconciliation, and withholding certificates step-by-step.',
    initials: 'MU',
    city: 'Islamabad',
    verified: true,
  },
  {
    id: 'review-2',
    name: 'Hamza Tariq',
    role: 'Advocate High Court',
    course: 'Advanced Income Tax Litigation',
    rating: 5,
    date: '1 month ago',
    comment:
      'Adv. Abrar Ahmed Qazi’s litigation sessions are invaluable. The practical breakdown of drafting grounds of appeal under Section 127, stay applications, and appellate tribunal precedents gave me exceptional courtroom confidence.',
    initials: 'HT',
    city: 'Rawalpindi',
    verified: true,
  },
  {
    id: 'review-3',
    name: 'Ayesha Siddiqui',
    role: 'Corporate Accountant',
    course: 'Corporate Taxation & Advisory',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Hands-down the best corporate tax training in the twin cities. Saeed Sahib seamlessly connects trial balance adjustments to corporate income tax returns, turnover tax, and super tax with zero fluff.',
    initials: 'AS',
    city: 'Rawalpindi',
    verified: true,
  },
  {
    id: 'review-4',
    name: 'Bilal Ahmed Khan',
    role: 'Senior Finance Officer',
    course: 'Sales Tax & Provincial VAT',
    rating: 5,
    date: '2 months ago',
    comment:
      'Navigating multi-provincial PRA, SRB, and FBR sales tax withholding rules was our company’s biggest hurdle. GICT’s practical case files and reconciliation templates solved our compliance issues completely.',
    initials: 'BK',
    city: 'Islamabad',
    verified: true,
  },
];
