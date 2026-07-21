const habits = [
  { name: "Study JavaScript", completed: false },
  { name: "Review Japanese", completed: true },
  { name: "Exercise", completed: false },
];
function toggleHabit(habits, habitName) {
  return habits.map((habit) => {
    return {
      ...habit,
      completed: habit.name === habitName ? !habit.completed : habit.completed,
    };
  });
}
//const updatedHabits = toggleHabit(habits, "Study JavaScript");

function addHabit(habits, habitName) {
  return [...habits, { name: habitName, completed: false }];
}
//console.log(addHabit(habits, "Read a book"));

function deleteHabit(habits, habitName) {
  return habits.filter((habit) => habit.name !== habitName); //keep every habit whose name is not the habit we want to delete.
}
//console.log(deleteHabit(habits, "Exercise"));

function countCompletedHabits(habits) {
  return habits.filter((habit) => habit.completed).length;
}
//console.log(countCompletedHabits(habits));
function getCompletionSummary(habits) {
  const total = habits.length;
  const completed = countCompletedHabits(habits);
  const incomplete = total - completed;
  return { total, completed, incomplete };
}
//console.log(getCompletionSummary(habits));

function getIncompleteHabits(habits) {
  return habits.filter((habit) => !habit.completed);
}
//console.log(getIncompleteHabits(habits));

function getHabitNames(habits) {
  return habits.map((habit) => habit.name);
}
//console.log(getHabitNames(habits));

function getCompletedHabitNames(habits) {
  return habits
    .map((habit) => (habit.completed ? habit.name : null))
    .filter((name) => name !== null);
}
//console.log(getCompletedHabitNames(habits));

function findHabitByName(habits, habitName) {
  return habits.find((habit) => habit.name === habitName);
}
//console.log(findHabitByName(habits, "Review Japanese"));

function habitExists(habits, habitName) {
  return habits.some((habit) => habit.name === habitName);
}
//console.log(habitExists(habits, "Sleep early"));
//console.log(habitExists(habits, "Exercise"));

function allHabitsComplete(habits) {
  return habits.every((habit) => habit.completed);
}
//console.log(allHabitsComplete(habits));

function markAllComplete(habits) {
  return habits.map((habit) => ({ ...habit, completed: true }));
}
//console.log(markAllComplete(habits));

function markAllIncomplete(habits) {
  return habits.map((habit) => ({ ...habit, completed: false }));
}
//console.log(markAllIncomplete(habits));

function renameHabit(habits, oldName, newName) {
  return habits.map((habit) => {
    if (habit.name === oldName) {
      return { ...habit, name: newName };
    }
    return habit;
  });
}
//console.log(renameHabit(habits, "Exercise", "Go for a run"));

function clearCompletedHabits(habits) {
  return habits.filter((habit) => !habit.completed);
}
//console.log(clearCompletedHabits(habits));

function getHabitStats(habits) {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.completed).length;
  const incomplete = total - completed;
  return {
    total,
    completed,
    incomplete,
    allHabitsComplete: habits.every((habit) => habit.completed),
    hasIncompleteHabits: habits.some((habit) => !habit.completed),
  };
}

//console.log(getHabitStats(habits));

function getHabitByStatus(habits, status) {
  if (status === "completed") {
    return habits.filter((habit) => habit.completed);
  } else if (status === "incomplete") {
    return habits.filter((habit) => !habit.completed);
  }
  return [];
}

function getHabitMessage(habits, habitName) {
  const habit = habits.find((habit) => habit.name === habitName);
  if (!habit) {
    return "Habit not found.";
  }

  if (habit.completed) {
    return `${habit.name} is completed. Great job!`;
  }

  return `${habit.name} is incomplete. Keep going!`;
}

console.log(getHabitMessage(habits, "Exercise"));
console.log(getHabitMessage(habits, "Review Japanese"));
console.log(getHabitMessage(habits, "Sleep early"));
