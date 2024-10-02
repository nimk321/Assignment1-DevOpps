export interface IPatient {
  id: string;
  name: string;
  age: number;
}

export class Patient implements IPatient {
  constructor(public id: string, public name: string, public age: number) {}
}
