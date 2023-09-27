export const myTasks = [
  {
    title: "Clean Room",
    description: "",
    dueDate: "2023-11-20",
    priority: "Low",
  },
  {
    title: "Fill out Chinese Visa",
    description: "Fill out application for chinese visas",
    dueDate: "2023-09-30",
    priority: "High",
  },
  {
    title: "Pack up items to move to new house",
    description:
      "Pack up all items to move to new house when its done building",
    dueDate: "2023-10-02",
    priority: "Medium",
  },
];

// Project factory
class Tasks {
  constructor(title, description = "N/A", dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function makeNewTask(title, description, duedate, priority) {
  let addTasks = new Tasks(title, description, duedate, priority);
  myTasks.push(addTasks);
}

export function removeTask(task) {
  for (let i = 0; i < myTasks.length; i++) {
    if (task.dataset.remove == i) {
      myTasks.splice(i, 1);
      return;
    }
  }
}

export function updateTask(index, description) {
  myTasks[index].description = description;
}
