module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'grades',
      [
        {
          value: 10,
          student_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.8,
          student_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.6,
          student_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 10,
          student_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.8,
          student_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.6,
          student_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 10,
          student_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.8,
          student_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          value: 9.6,
          student_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
