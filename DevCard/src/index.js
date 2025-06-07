import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="me.png" alt="Me" className="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Ivan Borisov</h1>
      <p>
        I am a skilled Web-Developer with eager to learn new technologies and
        techniques every day. My hobbies includes Programming, Singing and
        Sightseeing in different new cities for me. I love traveling and
        exploring new areas. Prefer flying with airplane rather that bus or car.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {/* <Skill name="HTML & CSS" emoji="😊" backgroundColor="blue" />
      <Skill name="React" emoji="❤️" backgroundColor="yellow" />
      <Skill name="MSSQL" emoji="👍" backgroundColor="green" />
      <Skill name="JavaScript" emoji="🚀" backgroundColor="red" /> */}

      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </ul>
  );
}

function Skill({ skill }) {
  let emoji = "";

  switch (skill.level) {
    case "advanced":
      emoji = "💪";
      break;
    case "intermediate":
      emoji = "👍";
      break;
    default:
      emoji = "👶";
      break;
  }

  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>{emoji}</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
