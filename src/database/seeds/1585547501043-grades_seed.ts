import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Grade } from '../../app/entities/Grade';

export default class gradesSeed1585547501043 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Grade)
      .values([
        {
          value: 10,
          student_id: 3,
        },
        {
          value: 9.8,
          student_id: 3,
        },
        {
          value: 9.6,
          student_id: 3,
        },
        {
          value: 10,
          student_id: 4,
        },
        {
          value: 9.8,
          student_id: 4,
        },
        {
          value: 9.6,
          student_id: 4,
        },
        {
          value: 10,
          student_id: 6,
        },
        {
          value: 9.8,
          student_id: 6,
        },
        {
          value: 9.6,
          student_id: 6,
        },
      ])
      .execute();
  }
}
