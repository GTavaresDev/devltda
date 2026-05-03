type Users = {
  id: number;
  name: string;
  cargo: string;
  salary: number;
};

export const users: Users[] = [
  {
    id: 1,
    name: "Leanne Graham",
    cargo: "Software Engineer",
    salary: 5000,
  },
  {
    id: 2,
    name: "Ervin Howell",
    cargo: "Product Manager",
    salary: 6000,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    cargo: "UX Designer",
    salary: 4500,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    cargo: "Data Analyst",
    salary: 5500,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    cargo: "HR Specialist",
    salary: 4000,
  },
];

export default users;
