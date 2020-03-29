module.exports = {
  up: (QueryInterface: any) => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Henrique',
          absences: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Edson',
          absences: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bruno',
          absences: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Guilherme',
          absences: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Carlos',
          absences: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lucca',
          absences: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
