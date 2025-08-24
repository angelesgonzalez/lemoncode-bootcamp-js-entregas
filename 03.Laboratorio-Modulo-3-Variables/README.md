# 🎶 Exercise Module 3

This project displays information about several music groups using **TypeScript**.

## 📌 Exercise Summary

The goal was to represent musical groups with their main details:

- Name (string)  
- Year of foundation (number)  
- Active status (boolean)  
- Music genre (string, stored in variables)  

The groups are rendered in the browser, showing formatted details for each one.

## ✅ Solution Approach

- Created a **TypeScript interface (`Artist`)** to define the structure of a music group.  
- Defined a set of **genres as constants** for reuse.  
- Declared multiple **artist objects** (`The Beatles`, `Queen`, `AC DC`, `The Rolling Stones`) following the interface.  
- Stored all artists in an array and **iterated with `forEach`** to dynamically generate HTML elements.  
- Used **CSS classes** to style the artist name (`h2`) with emphasis (bold, larger font, green background).  

## 🖼️ Output

Each artist is displayed with:

- Name highlighted  
- Year formed  
- Genre  
- Active status (`Yes` / `No`)  

The result is shown inside the `#solution` container.

---
