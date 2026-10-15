# Simple To-Do List

A lightweight to-do list app built with plain HTML, CSS, and JavaScript. Tasks are saved in your browser's `localStorage`, so they are still there after you refresh or close the page.

## Features

- Add new tasks with the input box and **Add** button
- Mark tasks as complete with a checkbox (completed tasks are crossed out)
- Edit a task by double-clicking its text
- Delete tasks with the **Delete Todo** button
- Tasks persist automatically using `localStorage`

## Project Structure

```
.
├── index.html   # Page markup
├── style.css    # Styling
├── script.js    # App logic
└── README.md
```

## Getting Started

1. Download or clone this project.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in any modern web browser.

No build step or dependencies required.

## How to Use

| Action | How |
| --- | --- |
| Add a task | Type in the input box and click **Add** |
| Complete a task | Tick the checkbox next to it |
| Edit a task | Double-click the task text, then enter the new text |
| Delete a task | Click **Delete Todo** |

## How It Works

- Todos are stored as an array of objects: `{ text: string, completed: boolean }`.
- Every change (add, edit, complete, delete) is saved to `localStorage` under the key `todos`.
- On page load, saved todos are read back and rendered to the list.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Possible Improvements

- Add tasks by pressing the Enter key
- Replace `prompt()` editing with inline editing
- Add filters (All / Active / Completed)
- Add a "Clear completed" button

## License

This project is free to use and modify.
