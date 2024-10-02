import { Patient } from '../src/entities/Patient';
import { registerPatient } from '../src/functions/registerPatient';

test('registerPatient should return success message', () => {
  const patient = new Patient('1', 'John Doe', 25);
  const result = registerPatient(patient);
  expect(result).toBe('Patient John Doe registered successfully.');
});
