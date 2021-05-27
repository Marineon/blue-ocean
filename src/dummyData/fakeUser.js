const users = [
    /*adminUser*/
  {
    userId: '1',
    fullName: 'Boss Man',
    email: 'boss.man@admin.com',
    password: "ImDaBoss69",
    userLevel: 3,
    friends: [
      {
      userId: '2',
      userName: 'Scrub User'
      },
      {
        userId: '3',
        userName: 'Beta Tester'
      }
    ],
    pending: [],
    requested: []
  },
    /* general users */
  {
<<<<<<< HEAD
    userId: '2',
=======
    userId: 2,
>>>>>>> 7c0dff214ec292c48327b7f6254c90fa646979dc
    fullName: 'Scrub User',
    email: 'scrub.adubdub@rubberduck.com',
    password: "PW$420blazers",
    userLevel: 1,
    friends: [
      {
        userId: '3',
        userName: 'Beta Tester'
      }
    ],
    pending: [],
    requested: []
  },
  {
<<<<<<< HEAD
    userId: '3',
=======
    userId: 3,
>>>>>>> 7c0dff214ec292c48327b7f6254c90fa646979dc
    fullName: 'Beta Tester',
    email: 'test.icicles@testes.com',
    password: "73$7@CUL4R",
    userLevel: 1,
    friends: [
      {
        userId: '2',
        userName: 'Scrub User'
        }
    ],
    pending: [],
    requested: []
  }
]

export default users;