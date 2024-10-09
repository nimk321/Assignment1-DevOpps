export interface IPrescription {
  id: string;
  patientId: string;
  doctorId: string;
  medication: string;
  dosage: string;
}

export class Prescription implements IPrescription {
  constructor(
    public id: string,
    public patientId: string,
    public doctorId: string,
    public medication: string,
    public dosage: string
  ) {}
}

