
# Simon Game

## Overview
The Simon Game is a simple yet challenging memory game in which players must repeat an increasingly long sequence of colors. Each level adds a new color to the sequence, and the player must remember and replicate it to advance to the next level. The game is built using HTML, CSS, and JavaScript with jQuery for DOM manipulation.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [Code Explanation](#code-explanation)

## Features
- Interactive and user-friendly interface.
- Responsive design suitable for both desktop and mobile devices.
- Increasing difficulty with each level.
- Game over detection and restart functionality.
- Sound effects for each button press and game event.

## Setup
To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/sadique21hs/simon-game.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Simon-game
    ```
3. **Open `index.html` in your preferred web browser:**
    ```bash
    open index.html
    ```

## How to Play
1. **Start the Game:**
   - Press any key to start the game. The title will change to "Level 0" and the first sequence will begin.

2. **Watch the Sequence:**
   - Observe the sequence of colors and sounds displayed by the game. Each level adds one more color to the sequence.

3. **Repeat the Sequence:**
   - Click the buttons in the order they were presented to replicate the sequence.

4. **Advance to the Next Level:**
   - If you successfully repeat the sequence, you advance to the next level. A new color is added to the sequence.

5. **Game Over:**
   - If you click the wrong button, the game is over. The title will display "Game Over, Press Any Key to Restart." Press any key to start a new game.

## Code Explanation
- **HTML (`index.html`):**
  - Contains the basic structure of the game interface, including buttons for each color and a title element.

- **CSS (`styles.css`):**
  - Styles the game interface, providing colors, layout, and animations.

- **JavaScript (`game.js`):**
  - Handles the game logic, including generating sequences, detecting user input, checking answers, and managing game state.
  - Utilizes jQuery for DOM manipulation and event handling.

### JavaScript Breakdown
- **Variables:**
  - `buttonColours`: Array containing the colors used in the game.
  - `game pattern`: Array storing the sequence of colors generated by the game.
  - `userClickedPattern`: Array storing the sequence of colors clicked by the user.
  - `started`: Boolean indicating if the game has started.
  - `level`: Integer representing the current game level.

- **Functions:**
  - `next sequence ()`: Generates the next color in the sequence and updates the game state.
  - `checkAnswer(current level)`: Checks the user's input against the game sequence.
  - `playSound(name)`: Plays the corresponding sound for a given color.
  - `animatePress(currentColor)`: Animates the button press for a given color.
  - `startOver()`: Resets the game state for a new game.


Feel free to modify this README file to better suit your project's needs and include any additional information you deem necessary.