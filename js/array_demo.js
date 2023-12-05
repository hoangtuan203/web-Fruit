// user
const user = [
  {
    user_id: 1,
    username: 'admin',
    password: 'Lahuuminh1.',
    email: 'lahuuminh678@gmail.com',
    phone: '0782713663',
    status: 'active',
    role: 'admin',
  },
  {
    user_id: 2,
    username: 'lytruong',
    password: 'Lahuuminh1.',
    email: 'truonglykhong2003@gmail.com',
    phone: '0782713663',
    status: 'active',
    role: 'admin',
  },
  {
    user_id: 3,
    username: 'admin',
    password: 'Lahuuminh1.',
    email: 'admin@gmail.com',
    phone: '0782713663',
    status: 'active',
    role: 'admin',
  },
];
// product


const userJSON = JSON.stringify(user);
localStorage.setItem('users', userJSON);
