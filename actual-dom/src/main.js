// Helper function to create elements
function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

// Create main card
const card = createElement("div", "card");

// Main Title
const mainTitle = createElement("h1", "main-title", "Developer Profile");
card.appendChild(mainTitle);


// Profile information
const basicSection = createElement("section", "section");

const basicTitle = createElement("h2", "section-title", "Basic Info");
basicSection.appendChild(basicTitle);

const nameEl = createElement("p", "info-text");
nameEl.innerHTML = "<strong>Name:</strong> Vishnuprakash R";

const role = createElement("p", "info-text");
role.innerHTML = "<strong>Role:</strong> Fullstack Engineer";

basicSection.appendChild(nameEl);
basicSection.appendChild(role);

card.appendChild(basicSection);

// Skills section
const skillSection = createElement("section", "section");

const skillTitle = createElement("h2", "section-title", "Skills");
skillSection.appendChild(skillTitle);

const skillList = createElement("ul", "skill-list");

const skills = ["HTML", "CSS", "JavaScript", "React"];

skills.forEach(skill => {
  const li = createElement("li", "skill-item", skill);
  skillList.appendChild(li);
});

skillSection.appendChild(skillList);
card.appendChild(skillSection);

// Project section
const projectSection = createElement("section", "section");

const projectTitle = createElement("h2", "section-title", "Projects");
projectSection.appendChild(projectTitle);

// Project 1
const project1 = createElement("div", "project");

const p1Title = createElement("h3", "project-title", "Portfolio Website");
const p1Desc = createElement("p", "project-desc", "Personal portfolio built using React.");
const p1Status = createElement("span", "status completed", "Status: Completed");

project1.appendChild(p1Title);
project1.appendChild(p1Desc);
project1.appendChild(p1Status);

// Project 2
const project2 = createElement("div", "project");

const p2Title = createElement("h3", "project-title", "Task Manager");
const p2Desc = createElement("p", "project-desc", "A simple task management app.");
const p2Status = createElement("span", "status progress", "Status: In Progress");

project2.appendChild(p2Title);
project2.appendChild(p2Desc);
project2.appendChild(p2Status);

projectSection.appendChild(project1);
projectSection.appendChild(project2);

card.appendChild(projectSection);

// Append card to body
document.getElementById("root").appendChild(card);
