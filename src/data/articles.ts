export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published: string;
  updated: string;
  readingTime: string;
  author: string;
  reviewer: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
  coverImage: ArticleImage;
}

export const articles: Article[] = [
  {
    slug: 'how-salary-tax-slabs-work-pakistan',
    title: 'How Salary Tax Slabs Work in Pakistan',
    category: 'Individual tax',
    excerpt:
      'A practical guide to progressive salary slabs, monthly withholding, tax credits and the numbers that change your take-home pay.',
    published: '2026-09-18',
    updated: '2026-10-12',
    readingTime: '6 min read',
    author: 'GICT Tax Desk',
    reviewer: 'Ehsan Ur Raheem Farooqi, CA',
    metaTitle: 'How Salary Tax Slabs Work in Pakistan | GICT',
    metaDescription:
      'Understand progressive salary tax slabs in Pakistan, how monthly withholding is calculated and why your take-home pay changes.',
    coverImage: {
      src: '/assets/images/Tax_Filing_&_IRIS_Compliance.webp',
      alt: 'How Salary Tax Slabs Work in Pakistan - GICT Tax Guide',
      caption: 'Practical computation of progressive income tax slabs and monthly withholding under the Income Tax Ordinance 2001.',
    },
    body: `
      <p class="article-lead">Salary tax is progressive: each slab is taxed at its own rate, and only the income inside that slab attracts that rate. The result is a tax figure that rises in steps, not a single percentage applied to your entire salary.</p>
      <h2>Start with annual taxable salary</h2>
      <p>Employers usually withhold tax on an annualised estimate. The starting point is gross salary for the tax year, less any amounts that are exempt or treated separately under the Ordinance. Allowances, perquisites and benefits can also form part of taxable salary, so a monthly take-home figure is not always the same as taxable salary.</p>
      <p>Once the annual taxable salary is established, apply the slabs for the relevant tax year. The slab table gives a fixed amount for income already taxed in earlier slabs, plus a percentage of the amount that falls inside the current slab.</p>
      <h2>Why the marginal rate is not your effective rate</h2>
      <p>If your income falls in a 25% slab, that does not mean 25% of your whole salary is payable. Only the portion above the previous threshold is taxed at 25%. Your <strong>effective rate</strong> is total tax divided by total salary. It is almost always lower than the marginal rate.</p>
      <div class="article-callout"><strong>Example:</strong> a person with annual taxable salary of PKR 1,800,000 does not pay 15% of the full amount. The tax is built from the fixed amount for the earlier slabs plus 15% of the income above PKR 1,200,000.</div>
      <h2>What changes the final number</h2>
      <ul>
        <li><strong>Tax credits:</strong> eligible investments, donations and certain payments can reduce the tax payable, subject to statutory conditions.</li>
        <li><strong>Surcharge:</strong> higher salary levels can attract a surcharge, which is added after the ordinary tax computation.</li>
        <li><strong>Other income:</strong> rental, business or capital gains can change the total tax position, even if salary is the main source.</li>
        <li><strong>Employer withholding:</strong> the monthly deduction is an estimate. The annual return reconciles it with the actual liability.</li>
      </ul>
      <h2>Check the tax year, not just the rate</h2>
      <p>Rates and thresholds change through the annual Finance Act. A calculator or payroll sheet that uses last year’s slabs can produce a confident but incorrect answer. Always confirm the tax year, the applicable slab table and whether a surcharge or credit applies.</p>
      <p>Use the <a href="/calculators/salary-tax-calculator">salary tax calculator</a> for a quick estimate, then compare it with your salary certificate and annual tax deduction certificate. If the numbers do not reconcile, ask for the employer’s withholding working.</p>
      <h2>Where salary tax fits in the return</h2>
      <p>Salary is one head of income. The annual return also reconciles other income, assets, liabilities and tax already paid. A payroll deduction is not a substitute for filing. The <a href="/courses/tax-filing-iris-compliance">Tax Filing &amp; IRIS Compliance</a> programme covers the full filing workflow, including the wealth statement.</p>
    `,
  },
  {
    slug: 'fbr-iris-filing-checklist',
    title: 'FBR IRIS Filing Checklist for Taxpayers',
    category: 'Compliance',
    excerpt:
      'The documents, reconciliations and common errors to check before submitting an income tax return through FBR IRIS.',
    published: '2026-09-05',
    updated: '2026-10-10',
    readingTime: '7 min read',
    author: 'GICT Tax Desk',
    reviewer: 'Saeed Ahmed Awan',
    metaTitle: 'FBR IRIS Filing Checklist for Taxpayers | GICT',
    metaDescription:
      'A practical FBR IRIS filing checklist covering documents, income heads, wealth reconciliation, withholding and common errors.',
    coverImage: {
      src: '/assets/images/hero/hero-tax-filing-iris.webp',
      alt: 'FBR IRIS Filing Checklist for Taxpayers in Pakistan',
      caption: 'Step-by-step checklist and reconciliation papers before final submission in FBR IRIS portal.',
    },
    body: `
      <p class="article-lead">A successful IRIS filing is less about clicking submit and more about the reconciliation behind it. The return should tell one consistent story across income, tax paid, assets and liabilities.</p>
      <h2>Before you open IRIS</h2>
      <ul>
        <li>Confirm your NTN, CNIC and registration details.</li>
        <li>Collect salary certificates, bank statements, rent records and business accounts.</li>
        <li>Download withholding certificates and prior-year returns.</li>
        <li>Prepare a list of assets and liabilities as at 30 June.</li>
        <li>Identify foreign income, foreign assets and any exempt income.</li>
      </ul>
      <h2>Reconcile each head of income</h2>
      <p>Salary should agree with the employer certificate. Business income should agree with the accounts and tax adjustments. Property income should reflect rent received and allowable deductions. Capital gains need acquisition and disposal records. Do not force a number into a field simply because IRIS accepts it.</p>
      <h2>Check tax already paid</h2>
      <p>Compare the tax credit shown in IRIS with withholding certificates, advance tax payments and any bank deductions. Missing credits are common. Keep the certificate references and payment challans ready before you start the return.</p>
      <h2>Wealth statement reconciliation</h2>
      <p>The wealth statement is a balance-sheet view of the year. Opening assets plus additions, less disposals, should reconcile with closing assets. Liabilities and expenses should be supportable. A mismatch between the return and the wealth statement is an invitation for a notice.</p>
      <h2>Common errors</h2>
      <ul>
        <li>Using an old tax year’s rates or thresholds.</li>
        <li>Reporting net salary instead of taxable salary, or ignoring perquisites.</li>
        <li>Claiming tax credits without eligible evidence.</li>
        <li>Leaving out bank accounts, vehicles or property.</li>
        <li>Submitting before checking the draft summary and tax computation.</li>
        <li>Ignoring a notice because the return was filed.</li>
      </ul>
      <div class="article-callout"><strong>Practical rule:</strong> download the draft return and computation, review every figure against the working paper, and keep a signed copy of the final submission.</div>
      <h2>After filing</h2>
      <p>Save the acknowledgement, return, wealth statement, computation and supporting documents in one folder. If a notice arrives, the response is much easier when the file already exists. Our <a href="/courses/tax-filing-iris-compliance">IRIS compliance course</a> includes a full mock filing and notice-response exercise.</p>
    `,
  },
  {
    slug: 'pra-vs-srb-provincial-sales-tax',
    title: 'PRA vs SRB: Provincial Sales Tax Explained',
    category: 'Sales tax',
    excerpt:
      'How provincial sales tax on services works, why jurisdiction matters and where input tax credit can break down.',
    published: '2026-08-22',
    updated: '2026-10-08',
    readingTime: '5 min read',
    author: 'GICT Tax Desk',
    reviewer: 'Ehsan Ur Raheem Farooqi, CA',
    metaTitle: 'PRA vs SRB: Provincial Sales Tax Explained',
    metaDescription:
      'Compare PRA and SRB sales tax on services, including jurisdiction, registration, input tax credit and cross-province issues.',
    coverImage: {
      src: '/assets/images/Sales_Tax_&_Provincial_VAT_Seminar.webp',
      alt: 'PRA vs SRB Provincial Sales Tax Breakdown',
      caption: 'Comparative framework of provincial sales tax authorities, place of supply rules, and input tax adjustments.',
    },
    body: `
      <p class="article-lead">Provincial sales tax on services is not a single national regime. Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan each have their own law, rate schedule, return and enforcement practice.</p>
      <h2>The basic split</h2>
      <p>The federal sales tax framework mainly applies to goods. Provinces tax many services through authorities such as the Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), Khyber Pakhtunkhwa Revenue Authority (KPRA) and Balochistan Revenue Authority (BRA). The service category and the place of supply determine which regime applies.</p>
      <h2>Why jurisdiction is the hard part</h2>
      <p>A service provider may have its office in one province and deliver work in another. The customer may be registered in a third. Registration thresholds, withholding rules and the treatment of cross-province services can differ. Applying the wrong provincial law can lead to double taxation, disallowed input or a compliance notice.</p>
      <h2>Input tax is not automatic</h2>
      <p>Provincial input tax credit depends on the relevant law, the nature of the service, registration status and documentation. A tax invoice that works for one authority may not satisfy another. Reconcile output tax, input tax and withholding separately for each registration.</p>
      <h2>Practical checks</h2>
      <ul>
        <li>Identify the service category before choosing a rate.</li>
        <li>Confirm the place of supply and the applicable authority.</li>
        <li>Check whether the customer is required to withhold.</li>
        <li>Keep province-specific invoices and returns.</li>
        <li>Reconcile monthly, not at year end.</li>
      </ul>
      <div class="article-callout"><strong>Note:</strong> rates and service schedules change. This article is general information, not a ruling for a specific transaction.</div>
      <p>Our <a href="/courses/sales-tax-provincial-vat">Sales Tax &amp; Provincial VAT</a> programme works through a multi-province case study. You can also estimate output and input tax with the <a href="/calculators/sales-tax-calculator">sales tax calculator</a>.</p>
    `,
  },
  {
    slug: 'section-122-notice-first-steps',
    title: 'Received a Section 122 Notice? Start Here',
    category: 'Litigation',
    excerpt:
      'A calm, practical first-response framework for a tax assessment notice, including deadlines, documents and escalation.',
    published: '2026-08-08',
    updated: '2026-10-01',
    readingTime: '6 min read',
    author: 'GICT Legal Desk',
    reviewer: 'Adv. Abrar Ahmed Qazi',
    metaTitle: 'Received a Section 122 Notice? Start Here | GICT',
    metaDescription:
      'What to do after a Section 122 income tax notice: check deadlines, assemble records, structure a reply and escalate safely.',
    coverImage: {
      src: '/assets/images/Advanced_Income_Tax_Litigation_Desk.webp',
      alt: 'Received a Section 122 Notice? Step-by-Step Defense Guide',
      caption: 'Procedural drafting, diary management, and evidentiary record assembly for FBR tax assessment defense.',
    },
    body: `
      <p class="article-lead">A notice is not a final decision. It is a request for information or an proposed adjustment. The quality of the first response often determines how the rest of the dispute unfolds.</p>
      <h2>1. Read the notice twice</h2>
      <p>Identify the legal provision, tax year, proposed adjustment, deadline and the officer issuing it. Separate what is alleged from what is still unknown. Do not reply from memory; mark up the notice and build a list of every document requested.</p>
      <h2>2. Protect the deadline</h2>
      <p>Diary the last date immediately. If the notice is unclear or the deadline is impossible, consider a written request for clarification or additional time rather than silent non-response. Keep proof of submission.</p>
      <h2>3. Assemble the record</h2>
      <ul>
        <li>Filed return, wealth statement and computation.</li>
        <li>Ledgers, bank statements and invoices for the disputed items.</li>
        <li>Withholding certificates and payment challans.</li>
        <li>Contracts, property records or valuation reports where relevant.</li>
        <li>Prior correspondence and any earlier orders.</li>
      </ul>
      <h2>4. Build a response, not a narrative</h2>
      <p>A good reply is structured: facts, legal position, evidence, reconciliation and requested relief. Attach an index. Reference each document. If an adjustment is partly correct, address it directly rather than defending everything.</p>
      <h2>5. Escalate with a strategy</h2>
      <p>If the assessment is adverse, consider the appeal route, stay of demand and tribunal options. Deadlines are short and conditions apply. This is where a practitioner should review the file before the next step.</p>
      <div class="article-callout"><strong>Important:</strong> this is general information, not legal advice. Deadlines and remedies depend on the specific notice and facts.</div>
      <p>The <a href="/courses/advanced-income-tax-litigation">Advanced Income Tax Litigation</a> programme covers notice replies, appeals, stay and tribunal practice with drafting workshops.</p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
