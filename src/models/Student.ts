import StudentInterface from '../interfaces/StudentInterface';
import { CourseInterface } from '../interfaces/StudentInterface';

class Student {
  public name: string;
  public grades: number[];
  public courses: CourseInterface[];
  public absences: number;

  constructor(public object?: StudentInterface) {
    this.name = (object && object.name) || '';
    this.grades = (object && object.grades) || [];
    this.courses = (object && object.courses) || [];
    this.absences = (object && object.absences) || 0;
  }

  addCourse(course: CourseInterface) {
    this.courses.push(course);
  }

  applyAbsence() {
    this.absences++;
  }
}

export default Student;
