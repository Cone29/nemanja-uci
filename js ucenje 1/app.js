const users = [
  {
    name: "Djura",
    age: 15,
  },

  {
    name: "mica",
    age: 15,
  },

  {
    name: "trifun",
    age: 13,
  },

  {
    name: "matko",
    age: 18,
  },

  {
    name: "misko",
    age: 12,
  },

  {
    name: "rale",
    age: 35,
  },

  {
    name: "dusko",
    age: 25,
  },
];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.age >= 18) {
    user.sub = 66;
    console.log(user);
  } else {
    user.sub = 22;
  }
}

console.log(users);
