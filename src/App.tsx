import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: string;
};

const teachers: Teacher[] = [
  {
    job: "Opr",
    name: "Harun",
    year: 2006,
    id: "1",
  },
  {
    job: "Dosen",
    name: "Dhhika",
    year: 1990,
    id: "2",
  },

  {
    name: "Theo",
    job: "conten creator",
    year: 2000,
    id: "3",
  },

  {
    name: "Eko",
    job: "tech lead",
    year: 1985,
    id: "4",
  },
];

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>

      <div className="p-4 gap-2 flex flex-row border-b-emerald-400">
        {teachers.map((teacher) => {
          return (
            <ProfileCard
              name={teacher.name}
              year={teacher.year}
              job={teacher.job}
              key={teacher.id}
            />
          );
        })}
      </div>

      <Welcome />
    </>
  );
}

export default App;
