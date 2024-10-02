import { IPatient } from '../entities/Patient';

export function scheduleAppointment(patient: IPatient, date: Date): string {
  if (!patient) throw new Error('Patient is required');
  if (!date) throw new Error('Appointment date is required');
  return `Appointment for ${patient.name} is scheduled on ${date.toDateString()}.`;
}
