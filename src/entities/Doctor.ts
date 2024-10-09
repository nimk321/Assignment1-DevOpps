export interface IDoctor {
  id: string;
  name: string;
  specialty: string;
}

export class Doctor implements IDoctor {
  constructor(public id: string, public name: string, public specialty: string) {}
}

