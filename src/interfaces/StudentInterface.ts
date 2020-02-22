export default interface StudentInterface {
  name: string;
  grades: number[];
  courses: CourseInterface[];
  absences: number;
}

interface CourseInterface {
  courseName: string;
  enrollmentDate: Date;
}

export { CourseInterface };
