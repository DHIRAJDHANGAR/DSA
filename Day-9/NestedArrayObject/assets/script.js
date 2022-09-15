const profile = [
  {
    name: "Ashwini",
    hobbies: [
      {
        id: 1,
        title: "Music",
      },
      {
        id: 2,
        title: "Coding",
      },
      {
        id: 3,
        title: "Biking",
      },
    ],
  },
];

// Hobbies -> 1

const findHobby = (id) => {
  for (let i = 0; i < profile.length; i++) {
    if (profile[i].hobbies) {
      const hobbies = profile[i].hobbies;
      for (let j = 0; j < hobbies.length; j++) {
        if (hobbies[j].id === id) {
          console.log(hobbies[j].title);
          return;
        }
      }
    }
    console.log("Not Exiest");
  }
};
findHobby(1); // Music
findHobby(2); // Coding
findHobby(3); // "Biking",
findHobby(5); // Not Exiest
findHobby(10); // Not Exiest
