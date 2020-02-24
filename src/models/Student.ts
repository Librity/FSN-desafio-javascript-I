import StudentInterface from '../interfaces/StudentInterface';
import { CourseInterface } from '../interfaces/StudentInterface';
import '../interfaces/ArrayInterface';

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

  isNotEnrolled() {
    return this.courses.isEmpty();
  }

  saveGrade(grade: number) {
    this.grades.push(grade);
  }

  hasNoGrades() {
    return this.grades.isEmpty();
  }

  gradeAvarage() {
    return (
      this.grades.reduce((increment, value) => increment + value) /
      this.grades.length
    );
  }

  applyAbsence() {
    this.absences++;
  }
}

export default Student;
