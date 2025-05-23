import { Entity } from "../../core/entities/entity";

interface InstructorProps {
  name: string;
}

export class Student extends Entity<InstructorProps> {}
