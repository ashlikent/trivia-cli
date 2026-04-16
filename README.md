# Trivia CLI Game

## Description

This project is a command-line trivia game built using JavaScript and Node.js.
The application allows users to answer multiple-choice questions, receive immediate feedback, track their score, and view their total completion time.

The purpose of this project is to demonstrate understanding of core JavaScript concepts including functions, arrays, loops, asynchronous programming, and user interaction through a CLI.

---

## Features

* Interactive command-line interface using prompts
* Sequential question display
* Multiple-choice answer selection
* Real-time feedback (correct/incorrect)
* Score tracking throughout the game
* Final results summary with performance message
* Total game timer using asynchronous JavaScript

---

## Concepts Demonstrated

This project applies the following JavaScript concepts:

* Functions and modular code structure
* Arrays and object data structures
* Array iteration methods (e.g., `.map()`)
* Looping through data (`for` loop)
* Conditional logic (`if/else`)
* Asynchronous programming with `async/await`
* Timer functionality using `Date.now()`

---

## How to Run the Application

### 1. Install dependencies

```bash
npm install
```

### 2. Run the game

```bash
node index.js
```

---

## Project Structure

```
trivia-cli/
│── index.js        # Main game logic
│── questions.js    # Question data
│── package.json    # Project configuration
│── README.md       # Project documentation
```

---

## How It Works

1. The user is prompted to start the game
2. Questions are displayed one at a time
3. The user selects an answer from multiple choices
4. The program checks if the answer is correct
5. The score is updated accordingly
6. After all questions are completed:

   * Final score is displayed
   * Total time taken is shown
   * A performance message is provided

---

## Example Output

```
Question 1 of 3
What does HTML stand for?

✔ Hyper Text Markup Language

Correct!

======================
Game Over
======================
Perfect score. Excellent work.
Final Score: 3/3
Time Taken: 12.45 seconds
```

---

## Technologies Used

* JavaScript (ES6+)
* Node.js
* @inquirer/prompts

---

## Future Improvements

* Add per-question time limits
* Allow users to restart the game
* Expand question set dynamically
* Add difficulty levels

---

## Author

Created as part of a software engineering learning program to demonstrate practical application of JavaScript fundamentals.
