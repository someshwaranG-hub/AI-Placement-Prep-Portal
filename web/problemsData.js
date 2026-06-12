// Shared problems data for the portal
const problemsData = [
    {
        id: 1,
        title: "Hello World",
        difficulty: "beginner",
        language: "python",
        description: "Write a program that prints 'Hello, World!' to the console.",
        time: "5 min"
    },
    {
        id: 2,
        title: "Sum of Two Numbers",
        difficulty: "beginner",
        language: "python",
        description: "Write a program that takes two numbers as input and prints their sum.",
        time: "10 min"
    },
    {
        id: 3,
        title: "Check Even or Odd",
        difficulty: "beginner",
        language: "java",
        description: "Write a program that checks if a given number is even or odd.",
        time: "10 min"
    },
    {
        id: 4,
        title: "Binary Search",
        difficulty: "intermediate",
        language: "python",
        description: "Implement binary search to find a target element in a sorted array.",
        time: "20 min"
    },
    {
        id: 5,
        title: "Bubble Sort",
        difficulty: "intermediate",
        language: "cpp",
        description: "Implement bubble sort algorithm to sort an array in ascending order.",
        time: "25 min"
    },
    {
        id: 6,
        title: "Merge Sorted Arrays",
        difficulty: "advanced",
        language: "java",
        description: "Merge two sorted arrays into one sorted array.",
        time: "30 min"
    }
];

// Utility: get problem by id
function getProblemById(id) {
    return problemsData.find(p => p.id === Number(id));
}
