// This private-demo build cannot enable live submissions until approved separately.
export const isDemo = true;

export function fillSampleDetails(form: HTMLFormElement | null) {
  if (!isDemo || !form) return;
  form.reset();
  const samples: Record<string, string> = {
    name: 'Demo visitor', phone: '0000000000', email: 'demo@example.invalid',
    reference: 'DEMO-NOT-A-PAYMENT', school: 'Demo school — not an NGO record', class: '9',
  };
  for (const [name, value] of Object.entries(samples)) {
    const control = form.elements.namedItem(name);
    if (control instanceof HTMLInputElement) control.value = value;
  }
}

export function validationError(form: HTMLFormElement, required: string[]): string | null {
  const value = (name: string) => {
    const control = form.elements.namedItem(name);
    return control instanceof HTMLInputElement ? control.value.trim() : '';
  };
  if (required.some((name) => !value(name))) return 'Complete every required field with more than spaces.';
  const email = value('email');
  if (email && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) return 'Enter a valid email address.';
  if (!/^\+?[\d\s()-]{10,20}$/.test(value('phone')) || !/^\d{10,15}$/.test(value('phone').replace(/\D/g, ''))) return 'Enter a phone number with 10–15 digits; spaces, parentheses, hyphens and a leading + are allowed.';
  if (required.includes('class') && !['9', '10', '11', '12'].includes(value('class'))) return 'Choose a class from 9 to 12.';
  return null;
}
