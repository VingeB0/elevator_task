## npm run dev - run dev server

## npm run lint - run liner

## npm run fmt - check prettier

## npm run fmt:fix - fix prettier

## npm run test - run tests

## Elevator Exercise

## Part 1 – Setup Base Solution According to Standards

You are required to create a base solution according to the following standards:

- **General Requirements**

  - Develop the solution structure and code using best practices.
  - Use design patterns acceptable for React and TypeScript.
  - Include at least one test.
  - Split the application into components using best practices.
  - Optional: Add simple visualizations, such as images for floors or sounds for elevator arrivals.

- **Preferred Tools, Technologies, and Packages**
  - React, TypeScript, HTML, CSS.
  - Responsive design with styled-components.
  - Styled System, theme-ui, radix forms, react-form-hook.
  - Vite package manager.
  - Jest testing package.

## Part 2 – The Application

You are required to write an elevator control software that consists of the following parts:

- **UI**

  - Display a building with floors separated by numbers and an elevator image.
  - When a floor is clicked, call the elevator to that floor.
  - Display a moving elevator that stops at a specific floor.

- **Logic**
  - When the first person calls the elevator, it starts to move.
  - An unlimited number of people on different floors can call the elevator.
  - The elevator arrives at floors in the order it was called.
  - When multiple elevators exist, detect the one that can arrive faster.

**Example 1:**

- Person calls elevator on floor 7, and it's moving.
- Elevator number 1 starts moving
