# Bootcamp JS 2 - Module 2 Lab - Data Types and Operators

## Exercise: Birthday Dinner with Friends

### Description

You have a group of 6 friends, and you want to invite them for your birthday dinner.  
You can only afford to pay for the drinks because you are on a tight budget.  

You have a dinner ticket that costs €120, which already includes drinks valued at €18.  

The task is to calculate how much each friend should pay to evenly split the costs, excluding the drinks you will cover.  

### Requirements

- Calculate the amount to be paid by each friend to share the cost fairly (excluding the drinks).
- Use JavaScript for the calculation.
- Display the result in the console.

### Solution

In my solution, I use an object literal to represent the dinner ticket details, including the total cost (€120), the drinks cost (€18), the number of friends (6), and the total number of people including myself (7). I calculate how much each friend should pay by subtracting the drinks cost from the total and dividing the remainder evenly among all people.

Then, I calculate my own total payment by adding the drinks cost to my share. I round all amounts to two decimal places to ensure accurate currency values.

Finally, I output to the console the amount each friend has to pay as well as the total amount I pay for the birthday dinner.

---
