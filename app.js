const myProfile = {
  personalInfo: {
    name: "Jannat",
    age: 14,
    birthYear: 2010,
    zodiac: "Libra",
    siblings: {
      names: ["Laiba", "Hamza"],
      total: 2
    },
    bestFriend: "Iqra",
    father: {
      name: "Mr. Sadique",
      occupation: "Engineer"
    },
    mother: {
      name: "Mrs. Rehana",
      occupation: "House Wife"
    }
  },

  education: {
    school: "Malir Public",
    level: "10th",
    subjects: {
      favorite: "Math",
      marks: 92,
      interest: {
        Science: true,
        History: false
      }
    },
    test: {
      name: "JavaScript",
      score: 83,
      teacher: "Sir Adeel"
    },
    book: {
      title: "Smartest Way to Learn JS",
      pages: 250,
      chapter: 60,
      topic: "Objects"
    }
  },

  hobbies: {
    list: ["Drawing", "Coding", "Reading"],
    favoriteSeason: "Winter",
    coldLover: true
  },

  techSkills: {
    codingLanguages: ["HTML", "CSS", "JS"],
    laptop: {
      brand: "Tinkpad",
      RAM: "8GB"
    },
    platform: "GitHub",
    browser: {
      name: "Chrome",
      version: 138
    },
    internet: {
      speed: 20,
      unit: "Mbps"
    }
  },

  healthAndHabits: {
    weight: {
      value: 48,
      unit: "kg"
    },
    height: {
      value: 5.2,
      unit: "feet"
    },
    waterReminder: true,
    glassesPerDay: 8,
    breakfast: {
      meal: "Toast & Egg",
      time: "9AM"
    }
  },

  lifestyle: {
    clothing: {
      shirtColor: "Pink",
      size: "M",
      shoes: ["Sneakers", "Flats", "Sandals"]
    },
    favoriteFood: "Biryani",
    spicy: true,
    favoriteSinger: {
      name: "Atif Aslam",
      songs: 30
    },
    camera: {
      brand: "Canon",
      megapixel: 24
    },
    furniture: {
      chairType: "Revolving",
      adjustable: true,
      tableItems: ["Pen", "Notebook", "Lamp"]
    },
    clock: {
      type: "Analog",
      working: true
    },
    light: {
      on: false,
      lastUsed: "Night"
    }
  },

  environment: {
    weather: {
      temperature: 35,
      condition: "Sunny"
    },
    room: {
      clean: true,
      cleaningDay: "Friday"
    },
    pet: {
      type: "Cat",
      likesAnimals: true
    }
  },

  goals: {
    summerGoal: "Finish JS",
    progress: "On Track",
    examStatus: "Pending",
    preparation: "70%",
    appUsed: "Instagram",
    helpful: true
  },

  entertainment: {
    favoriteApp: {
      name: "YouTube",
      dailyUse: "2 hours"
    },
    movie: {
      watched: "Inside Out 2",
      rating: 9
    },
    festival: {
      name: "Eid",
      month: "ZilHajj"
    },
    milk: {
      type: "Olparse",
      cold: true
    }
  },

  bills: {
    electricity: {
      amount: 15000,
      paid: false
    },
    mobile: {
      model: "Samsung A32",
      storage: "128GB"
    }
  },

  account: {
    username: "jannat14",
    active: true
  }
};
console.log(" Name: ", myProfile.personalInfo.name);
console.log(" Favorite Subject: ", myProfile.education.subjects.favorite);
console.log(" Book Title: ", myProfile.education.book.title);
console.log(" Father's Job: ", myProfile.personalInfo.father.occupation);
console.log(" Laptop RAM: ", myProfile.techSkills.laptop.RAM);
console.log(" Favorite Singer: ", myProfile.lifestyle.favoriteSinger.name);
console.log(" Last Movie Watched: ", myProfile.entertainment.movie.watched);
console.log(" Mobile Model: ", myProfile.bills.mobile.model);
console.log(" Shoes Collection: ", myProfile.lifestyle.clothing.shoes.join(", "));
console.log(" Weather Condition: ", myProfile.environment.weather.condition);
