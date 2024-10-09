export interface ITeleMedicineCommunication {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  notes: string;
}

export class TeleMedicineCommunication implements ITeleMedicineCommunication {
  constructor(
    public id: string,
    public patientId: string,
    public doctorId: string,
    public date: Date,
    public notes: string
  ) {}
}

