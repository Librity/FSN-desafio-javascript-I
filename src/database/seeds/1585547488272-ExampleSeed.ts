import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Student } from '../../app/entities/Student';

export default class ExampleSeed1585547488272 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Student)
      .values([
        { name: 'Henrique', absences: 5 },
        { name: 'Edson', absences: 2 },
        { name: 'Bruno', absences: 0 },
        { name: 'Guilherme', absences: 0 },
        { name: 'Carlos', absences: 0 },
        { name: 'Lucca', absences: 0 },
      ])
      .execute();
  }
}
