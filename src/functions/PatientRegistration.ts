import { IPatient } from '../entities/Patient';

export function registerPatient(patient: IPatient): string {
  if (!patient.name) throw new Error('Patient name is required.');
  return `Patient ${patient.name} registered successfully.`;
}
