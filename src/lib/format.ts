const currency = new Intl.NumberFormat('en-PK', {
  style: 'currency',
  currency: 'PKR',
  maximumFractionDigits: 0,
});

const decimal = new Intl.NumberFormat('en-PK', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export function money(value: number): string {
  return currency.format(Number.isFinite(value) ? value : 0);
}

export function number(value: number, digits = 2): string {
  return new Intl.NumberFormat('en-PK', {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

export function decimalNumber(value: number): string {
  return decimal.format(Number.isFinite(value) ? value : 0);
}

export function inputNumber(form: FormData, name: string, fallback = 0): number {
  const raw = String(form.get(name) ?? '').replace(/,/g, '').trim();
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function percent(value: number): string {
  return `${number(value, 2)}%`;
}
