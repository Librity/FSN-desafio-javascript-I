export default interface StudentInterface {
  name: string;
  grades: number[];
  courses: CourseInterface[];
  absences: number;
}

export interface CourseInterface {
  courseName: string;
  enrollmentDate: Date;
}
