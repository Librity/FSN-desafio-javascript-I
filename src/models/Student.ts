import StudentInterface from '../interfaces/StudentInterface';

class Student {
  public name: string;
  public grades: number[];
  public courses: { courseName: string; enrollmentDate: Date }[];
  public absences: number;

  constructor(public object?: StudentInterface) {
    this.name = (object && object.name) || '';
    this.grades = (object && object.grades) || [];
    this.courses = (object && object.courses) || [];
    this.absences = (object && object.absences) || 0;
  }
}

export default Student;
