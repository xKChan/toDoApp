export const myProjects = [
  {
    title: "Clean Room",
    description: "",
    dueDate: "",
    priority: "Low",
  },
  {
    title: "Fill out Chinese Visa",
    description: "Fill out application for chinese visas",
    dueDate: "",
    priority: "High",
  },
  {
    title: "Pack up items to move to new house",
    description:
      "Pack up all items to move to new house when its done building",
    dueDate: "",
    priority: "Medium",
  },
];

// Project factory
class Projects {
  constructor(title, description = "N/A", dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function newProject(title, description, duedate, priority) {
  let addProject = new Projects(title, description, duedate, priority);
  myProjects.push(addProject);
  console.log(myProjects);
}
