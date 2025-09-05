// OBJEKTI

// standardna struktura objekta izgleda ovako

const user = {
  name: "Nikola",
  age: 38,
  website: "https://nikola-djordjevic.com",
  role: "admin",
};
// strucni naziv je (key:value)
console.log(user);
// kako se pristupa pojedinacnom elementu
user.name;
user.age;
// kako se dodaje novi element
user.motorcycle = "Kawasaki Z900";
console.log(user);
// Kako se brise element -npr kada hoces da izbacis password ili nebitan key
delete user.age;
console.log(user);

// NAUCI OVO PA TE PITAM ZA 2 DANA
