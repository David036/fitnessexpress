import { AppDataSource } from "./data-source";
import { Training } from "./entity/Training";

export const Bootstrap = async () => {
  const userRepo = AppDataSource.getRepository(Training);
    const i = 1;
    const j = 2
  const exercises = [
    {
      name: "cardio",
      hours: 0.2,
    },
    {
      name: "olympic_weightlifting",
      hours: 0.6,
    },
    {
      name: "plyometrics",
      hours: 0.3,
    },
    {
      name: "owerlifting",
      hours: 0.4,
    },
    {
      name: "strength",
      hours: 0.4,
    },
    {
      name: "stretching",
      hours: 0.1,
    },
    {
      name: "stretching",
      hours: 0.1,
    },
    {
      name: "strongman",
      hours: 0.6,
    },
  ];

  const difficulty = [
    {
        name:"beginner",
        hours:0.1
    },
    {
        name:"intermediate",
        hours:0.15
    },
    {
        name:"expert",
        hours:0.2
    }
  ]

  const user = userRepo.create({
    username: "Jackob",
    age: 27,
    exercise: exercises[i].name,
    difficulty: difficulty[j].name,
    hours: exercises[i].hours + difficulty[j].hours,
  });
  // if (user.exercise == "cardio"){
  //   hours + 0.1
  //   console.log("CARDIO")
  // } else if(user.exercise == "plyometrics") {
  //   hours + 0.3
  //   console.log("PLYOMETRICS")
  // }else {
  //   console.log("ERRRROR")
  // }
  await userRepo.save(user).catch((err) => {
    console.log("Error:", err);
  });
  console.log("New User Saved", user);
};
