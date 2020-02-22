export default interface StudentInterface {
  name: string;
  grades: number[];
  courses: { courseName: string; enrollmentDate: Date }[];
  absences: number;
}
