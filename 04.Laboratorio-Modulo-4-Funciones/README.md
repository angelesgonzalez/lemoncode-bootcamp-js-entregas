# Turn Tracker – Module 4: Functions Lab

This project is a **turn tracker** for a clinic scenario, built with **TypeScript** and **Vite** as part of *Module 4 - Functions Lab*.
The application displays the current turn, allows the operator to move forward or backward, reset the counter, and optionally set a custom value.

---

## ✨ Features

* Display current turn in a **large format**
* **Next / Previous** buttons to increment or decrement the turn
* **Reset** button to set the turn back to `0`
* **Input field + button** to directly set the turn to a custom number
* **Two-digit formatting** for consistency (e.g., `01`, `02`, `10`)

---

## 📂 Project Structure

```
src/
│
├── utilities/                  # Main logic extracted for cleaner code
│   ├── DOMmanipulation.ts       # Functions to update/manipulate the DOM
│   ├── editCurrentNumber.ts     # Logic for editing the current number
│   ├── Tracker.ts               # Tracker type definition
│   ├── updateNumber.ts          # Functions to update the number
│   └── validations.ts           # Input validation utilities
│
├── main.ts                      # Entry point (kept clean, imports utilities)
├── numberTracker.ts             # Tracker object with its logic encapsulated
├── style.css                    # Basic styling
├── index.html                   # App structure
```

---

## 🧮 Tracker Object

The **tracker** is an object encapsulated in `numberTracker.ts`.
It contains the following methods:

* `nextNumber()` → increments the turn
* `previousNumber()` → decrements the turn
* `insertNumber(newNumber: number)` → sets a custom value
* `resetNumberTracker()` → resets the turn to `0`

### Example

```ts
import { numberTracker } from "./numberTracker";

numberTracker.nextNumber();        // → 2
numberTracker.previousNumber();    // → 1
numberTracker.insertNumber(10);    // → 10
numberTracker.resetNumberTracker(); // → 0
```

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

---

## 📝 Notes

* Written in **TypeScript strict mode** for better type safety
* Core logic has been **modularized** into `/utilities` to keep `main.ts` cleaner
* Uses **`padStart`** to ensure all numbers display with two digits
