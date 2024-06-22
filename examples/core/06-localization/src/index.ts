// Define a class for managing a simple to-do list
export class TodoList {
  private todos: string[]; // Array to hold the list of tasks
  private completed: boolean[]; // Array to track completion status of tasks

  constructor() {
    this.todos = [];
    this.completed = [];
  }

  // Method to add a new task to the list
  addTask(task: string): void {
    this.todos.push(task);
    this.completed.push(false);
    console.log(`Added task: ${task}`);
  }

  // Method to remove a task from the list by index
  removeTask(index: number): void {
    if (index < 0 || index >= this.todos.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }
    const removedTask = this.todos.splice(index, 1);
    this.completed.splice(index, 1);
    console.log(`Removed task: ${removedTask}`);
  }

  // Method to mark a task as completed by index
  completeTask(index: number): void {
    if (index < 0 || index >= this.todos.length) {
      console.error(`Invalid index: ${index}`);
      return;
    }
    this.completed[index] = true;
    console.log(`Completed task: ${this.todos[index]}`);
  }

  // Method to list all tasks with their completion status
  listTasks(): void {
    if (this.todos.length === 0) {
      console.log("No tasks in the list.");
      return;
    }
    this.todos.forEach((task, index) => {
      const status = this.completed[index] ? "Completed" : "Pending";
      console.log(`${index + 1}. ${task} - ${status}`);
    });
  }
}

// Define an interface for a generic user profile
export interface UserProfile {
  // Properties
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  address: {
    street: string;
    city: string;
    country: string;
  };

  // Methods
  displayInfo(): string; // Method to display user info
  updateEmail(newEmail: string): void; // Method to update user's email
  isAdult?(): boolean; // Optional method to check if the user is an adult
}

// Example class implementing the UserProfile interface
export class User implements UserProfile {
  id: number;
  name: string;
  email: string;
  age?: number;
  address: {
    street: string;
    city: string;
    country: string;
  };

  constructor(
    id: number,
    name: string,
    email: string,
    address: { street: string; city: string; country: string },
    age?: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    if (age !== undefined) {
      this.age = age;
    }
  }

  displayInfo(): string {
    return `User: ${this.name}, Email: ${this.email}, Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
  }

  isAdult?(): boolean {
    if (this.age !== undefined) {
      return this.age >= 18;
    }
    return false;
  }
}
