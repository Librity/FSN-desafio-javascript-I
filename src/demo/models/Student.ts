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

  public addCourse(course: CourseInterface): void {
    this.courses.push(course);
  }

  public isNotEnrolled(): boolean {
    return this.courses.isEmpty();
  }

  public saveGrade(grade: number): void {
    this.grades.push(grade);
  }

  public hasNoGrades(): boolean {
    return this.grades.isEmpty();
  }

  public gradeAvarage(): number {
    return (
      this.grades.reduce((increment, value) => increment + value) /
      this.grades.length
    );
  }

  public applyAbsence(): void {
    this.absences++;
  }
}

export default Student;
