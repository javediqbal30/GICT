export const site = {
  name: 'GICT',
  legalName: 'Global Institute of Corporate Training',
  tagline: 'Practitioner-led taxation, corporate law and finance training.',
  description:
    'Practitioner-led taxation, FBR IRIS, sales tax, corporate law and finance training in Rawalpindi. Weekend on-campus and live online cohorts.',
  url: 'https://www.gict.edu.pk',
  phoneDisplay: '051 8442474',
  phoneHref: 'tel:+92518442474',
  whatsappDisplay: '0339 0006854',
  whatsappNumber: '923390006854',
  email: 'admissions@gict.edu.pk',
  generalEmail: 'info@gict.edu.pk',
  address: {
    line1: 'Office-11, First Floor, Alfalah Askaria Plaza',
    line2: 'Committee Chowk, Murree Road',
    city: 'Rawalpindi',
    country: 'Pakistan',
    full: 'Office-11, First Floor, Alfalah Askaria Plaza, Committee Chowk, Murree Road, Rawalpindi, Pakistan',
  },
  hours: 'Mon–Fri 9:00–18:00 · Sat 10:00–16:00',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=33.61386,73.06504',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=33.61386,73.06504&t=&z=17&ie=UTF8&iwloc=&output=embed',
  established: 2018,
} as const;

export const admissionSteps = [
  {
    title: 'Choose your programme',
    text: 'Compare the six practitioner-led programmes and pick the track that matches your work.',
  },
  {
    title: 'Send a short enquiry',
    text: 'Share your background and preferred schedule. Admissions will confirm the next step.',
  },
  {
    title: 'Confirm your seat',
    text: 'Complete the admission formalities and join the next weekend or online cohort.',
  },
] as const;
