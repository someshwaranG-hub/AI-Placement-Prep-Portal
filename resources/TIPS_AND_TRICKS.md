# Tips & Tricks for Problem Solving

## General Problem-Solving Strategy

### Step 1: Understand the Problem
- [ ] Read the problem 2-3 times
- [ ] Identify inputs and outputs
- [ ] Note any constraints
- [ ] Write down what you need to do

### Step 2: Think About Approach
- [ ] Brainstorm multiple solutions
- [ ] Think of brute force first
- [ ] Then think of optimizations
- [ ] Draw diagrams if needed

### Step 3: Write Pseudocode
- [ ] Write logic in plain English
- [ ] Don't worry about syntax yet
- [ ] Break into smaller steps

### Step 4: Code It
- [ ] Convert pseudocode to actual code
- [ ] Use meaningful variable names
- [ ] Add comments

### Step 5: Test It
- [ ] Test with provided examples
- [ ] Test with edge cases
- [ ] Test with corner cases
- [ ] Fix any issues

### Step 6: Optimize
- [ ] Check time complexity
- [ ] Check space complexity
- [ ] See if there's a better approach

---

## Common Patterns & Techniques

### 1. Two-Pointer Technique
**When to use:** Sorted arrays, finding pairs, merging

**Example:**
```python
# Find two numbers that sum to target
def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None
```

---

### 2. Sliding Window
**When to use:** Subarray problems, consecutive elements, finding patterns

**Example:**
```python
# Find max sum of subarray of size k
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

---

### 3. Fast & Slow Pointers
**When to use:** Linked lists, cycle detection, finding middle

**Example:**
```python
# Detect cycle in linked list
def has_cycle(head):
    if not head:
        return False
    
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False
```

---

### 4. Recursion
**When to use:** Trees, backtracking, divide and conquer

**Example:**
```python
# Binary tree traversal (recursive)
def inorder(root):
    if not root:
        return []
    
    result = []
    result += inorder(root.left)
    result.append(root.val)
    result += inorder(root.right)
    
    return result
```

---

### 5. Hash Map/Dictionary
**When to use:** Counting, mapping, finding pairs

**Example:**
```python
# Count element frequencies
def count_frequencies(arr):
    freq_map = {}
    for num in arr:
        freq_map[num] = freq_map.get(num, 0) + 1
    
    return freq_map
```

---

### 6. Sorting
**When to use:** Organizing data, eliminating duplicates, finding pairs

**Key sorts to know:**
- **Bubble Sort:** Simple but O(n²)
- **Merge Sort:** Efficient, stable, O(n log n)
- **Quick Sort:** Fast average case, O(n log n)
- **Binary Search:** Only on sorted arrays

---

### 7. Backtracking
**When to use:** Combinations, permutations, subsets, puzzles

**Example:**
```python
# Generate all subsets
def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])
        
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result
```

---

## Language-Specific Tips

### Python
- Use `list comprehension` for concise code
- Use `built-in functions` but understand their implementation
- Use `set` for O(1) lookups
- Use `defaultdict` for cleaner code
- Remember: Lists are mutable, tuples are not

### Java
- Use `ArrayList` instead of Array for flexibility
- Use `HashMap` for key-value pairs
- Remember: String is immutable, use StringBuilder for concatenation
- Use `try-catch` for exception handling
- Understand: Pass-by-value even for objects

### C
- Careful with `memory allocation` (malloc, free)
- Use `pointers` correctly
- Remember: Arrays decay to pointers
- Use `scanf/printf` for I/O
- Avoid: Buffer overflows

### C++
- Use `STL` (vector, map, set, etc.)
- Use `smart pointers` to avoid memory leaks
- Remember: String is mutable
- Use `pair` and `tuple` for multiple returns
- Use `auto` for type inference

---

## Debugging Tips

### When code doesn't work:
1. Print intermediate values
2. Check edge cases (empty, single element, large numbers)
3. Verify logic step by step
4. Use debugger if available
5. Compare with working example

### Common mistakes:
- [ ] Off-by-one errors
- [ ] Not handling null/empty cases
- [ ] Integer overflow
- [ ] String case sensitivity
- [ ] Forgetting to initialize variables

---

## Optimization Checklist

- [ ] Can I reduce time complexity?
- [ ] Can I reduce space complexity?
- [ ] Am I doing repeated calculations? (Use memoization)
- [ ] Am I iterating unnecessarily?
- [ ] Can I use data structures better?
- [ ] Are there library functions that do this faster?

---

## Interview Tips

- [ ] **Think aloud:** Explain your approach before coding
- [ ] **Ask questions:** Clarify requirements
- [ ] **Start simple:** Brute force first, then optimize
- [ ] **Test code:** Walk through examples
- [ ] **Discuss trade-offs:** Time vs Space
- [ ] **Mention complexity:** Always state Big-O
- [ ] **Be confident:** Own your solution

---

## Daily Practice Routine (Optimal)

**30-45 minutes:**
- 5 min: Understand problem
- 10 min: Think approach
- 15 min: Code solution
- 10 min: Test & debug
- 5 min: Review & optimize

**60 minutes:**
- Add another problem
- Review someone else's code
- Read editorial solutions
- Learn new concepts

---

## Resources for Learning

### Algorithm Visualization
- https://visualgo.net/
- https://www.cs.usfca.edu/~galles/visualization/

### Concept Learning
- GeeksforGeeks
- Coding Ninjas
- Abdul Bari on YouTube

### Practice Platforms
- LeetCode
- HackerRank
- InterviewBit
- Codeforces

### Interview Preparation
- Blind 75 List
- LeetCode Premium
- AlgoExpert

---

Keep practicing, stay consistent, and you'll master problem-solving! 💪
