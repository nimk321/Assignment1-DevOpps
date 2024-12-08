import { Patient } from '../Patient';

test('Should create a new patient', () => {
  const patient = new Patient('1', 'John Doe');
  expect(patient.getPatientId()).toBe('1');
  expect(patient.getName()).toBe('John Doe');
});
