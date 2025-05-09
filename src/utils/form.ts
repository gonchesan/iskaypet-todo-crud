import type { FormField } from '@/types/Form';

export function isFormField(field: unknown): field is FormField {
  return typeof field === 'object' && field !== null && 'value' in field;
}
export const normalize = (field: string | FormField): FormField =>
  typeof field === 'string' || typeof field === 'undefined'
    ? { value: field || '', error: '' }
    : field;
