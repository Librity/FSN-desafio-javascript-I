import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Course } from '../../app/entities/Course';

export default class coursesSeed1585547496800 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Course)
      .values([
        {
          name: 'Full Stack',
          enrollmentDate: new Date(),
        },
        {
          name: 'UX',
          enrollmentDate: new Date(),
        },
      ])
      .execute();
  }
}
