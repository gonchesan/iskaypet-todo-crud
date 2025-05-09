# Todo App

## Description

A simple to-do app designed to help you manage your tasks efficiently. After the
initial load, the app retrieves and displays the first three to-dos from a
public API, if you don't have any previously saved sessions (check your local
storage). It offers full CRUD (Create, Read, Update, Delete) functionality for
your personal tasks, utilizing local storage to retain data.

To manage state and local storage seamlessly, the application implements custom
hooks for local storage interaction and task management, along with their
respective contexts for global state handling. Upon running the project, you
will be automatically redirected to the "/tasks" route, which displays the main
task list. While other sections are visible in the navigation, they are
currently under development. A global modal component is also implemented,
managed through a context with its own custom hook.

## Getting Started

Here's how to get the Todo app up and running on your local machine.

### Dependencies

The project relies on the following core dependencies:

- `react`: The fundamental library for building the user interface.
- `react-dom`: Provides DOM-specific methods for React.
- `wouter`: A minimalist routing library for React.

### Installing

1.  **Clone the repository:** Use Git to clone the project files from GitHub.

    ```bash
    git clone https://github.com/gonchesan/iskaypet-todo-crud.git
    ```

2.  **Navigate to the project directory:** Once the cloning is complete, move
    into the project's main directory in your terminal.

    ```bash
    cd iskaypet-todo-crud
    ```

3.  **Install npm packages:** Install all the necessary dependencies listed in
    the `package.json` file using npm.

    ```bash
    npm install
    ```

### Executing the program

The default development server port has been changed to `8080`. Therefore, once
the application is running, you will be able to access it at
`https://localhost:8080` in your web browser. However, you must first start the
development server using the following command:

```bash
npm run dev
```

## Structure:

```
.
├── src                     # Source files
│   ├── assets              # Static assets like images, public files, etc.
│   ├── components          # Global and reusable UI components
│   ├── constants           # Globally used constant values
│   ├── contexts            # Global state management contexts
│   ├── hooks               # Reusable custom hooks used throughout the project
│   ├── routes              # Route definitions for navigation using Wouter
│   ├── types               # TypeScript type definitions for better code management
│   ├── utils               # Utility and helper functions
│   ├── views               # Application views (screens)
│   ├── App.js              # Main application component where the primary route is defined
│   ├── index.js            # Main entry point with MUI provider and global context providers
│   ├── vite.config.ts      # Configuration for the Vite build tool
│   └── ...                 # Other files
└── ...
```

## Features:

- **Initial Task Loading**: The primary view, "Task List," automatically fetches
  and displays the first 3 todo items from a public dummy REST API upon loading.

- **My Tasks Section**: You can manage your personal tasks in the "My Tasks"
  section. This includes the ability to:
  - **Add**: Create new todo items through the form available in the "Add Task"
    view.
  - **Delete**: Remove existing todo items from your list.
- **Local Storage Persistence**: All actions performed on your personal tasks
  (Add, Delete) are saved using the browser's local storage, ensuring that your
  data persists across sessions.
