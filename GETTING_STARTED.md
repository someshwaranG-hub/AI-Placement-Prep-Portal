# Getting Started Guide

Welcome to the **AI Placement Prep Portal**! This guide will help you get started quickly.

---

## 📋 Quick Setup (5 minutes)

### 1. **Clone or Download the Project**
```bash
git clone https://github.com/someshwaranG-hub/AI-Placement-Prep-Portal.git
cd AI-Placement-Prep-Portal
```

### 2. **Check Prerequisites**
Verify you have the required compilers/interpreters:

```bash
# Check Python
python3 --version

# Check Java
javac -version
java -version

# Check C
gcc --version

# Check C++
g++ --version
```

If any are missing, install them:
- **Python:** `apt install python3`
- **Java:** `apt install openjdk-11-jdk`
- **GCC (C/C++):** `apt install build-essential`

### 3. **Verify Installation**
Run a test program:

```bash
# Test Python
python3 python/beginner/01_hello_world.py

# Test C
gcc -o test_c c/beginner/hello_world.c && ./test_c

# Test C++
g++ -o test_cpp cpp/beginner/hello_world.cpp && ./test_cpp

# Test Java
cd java/beginner && javac HelloWorld.java && java HelloWorld && cd ../..
```

---

## 🎯 Your First Day

### Step 1: Choose Your Language
Pick one language to start with (recommended: **Python**)

### Step 2: Start with Beginner Level
Open the first problem in your chosen language:
- **Python:** `python/beginner/01_hello_world.py`
- **Java:** `java/beginner/HelloWorld.java`
- **C:** `c/beginner/hello_world.c`
- **C++:** `cpp/beginner/hello_world.cpp`

### Step 3: Read the Problem
- Understand what the problem is asking
- Note the expected input and output
- Review the constraints

### Step 4: Solve It!
- **Don't peek at the solution immediately**
- Try to code the solution yourself
- Test with the provided examples
- Fix any errors

### Step 5: Compare & Learn
- Look at the provided solution
- Understand the approach
- Learn what you did differently
- Mark the problem as completed in `PRACTICE_TRACKER.md`

---

## 📅 Your First Week Plan

### Day 1-2: Python Basics
- [ ] 01_hello_world.py
- [ ] 02_sum_of_two_numbers.py
- [ ] 03_even_or_odd.py

### Day 3-4: Python Basics (Continued)
- [ ] 04_factorial.py
- [ ] 05_fibonacci_series.py

### Day 5: Java Basics
- [ ] HelloWorld.java
- [ ] SumOfTwoNumbers.java
- [ ] EvenOrOdd.java

### Day 6-7: Review & Practice
- Review any difficult concepts
- Try solving problems without looking at solutions
- Move to Intermediate level if ready

---

## 📂 Project Navigation

### Main Folders
```
python/    → Python solutions
java/      → Java solutions
c/         → C solutions
cpp/       → C++ solutions
resources/ → Learning materials
```

### Key Files
- **README.md** - Project overview
- **INDEX.md** - Complete problem list
- **PRACTICE_TRACKER.md** - Track your progress
- **resources/ROADMAP.md** - Detailed learning roadmap
- **resources/TIPS_AND_TRICKS.md** - Problem-solving strategies
- **assessment/ASSESSMENT_CRITERIA.md** - Self-evaluation guide

---

## 🔄 Daily Routine (30-45 minutes)

**Ideal Schedule:**

```
⏱️ 5 min   - Read problem & understand requirements
⏱️ 10 min  - Think about approach (don't code yet)
⏱️ 15 min  - Write pseudocode / comments
⏱️ 10 min  - Write actual code
⏱️ 5 min   - Test with examples
```

---

## 💻 How to Run Programs

### Python
```bash
cd python/beginner
python3 01_hello_world.py
```

### Java
```bash
cd java/beginner
javac HelloWorld.java
java HelloWorld
```

### C
```bash
cd c/beginner
gcc -o hello_world hello_world.c
./hello_world
```

### C++
```bash
cd cpp/beginner
g++ -o hello_world hello_world.cpp
./hello_world
```

---

## 📊 Tracking Progress

Use `PRACTICE_TRACKER.md` to:
- [ ] Check off completed problems
- [ ] Note difficult topics
- [ ] Track weekly progress
- [ ] Plan next week's goals

**Sample Entry:**
```
Week 1:
- [x] Python: 01_hello_world.py
- [x] Python: 02_sum_of_two_numbers.py
- [x] Python: 03_even_or_odd.py
- [ ] Python: 04_factorial.py
- [ ] Python: 05_fibonacci_series.py

Notes: 
- Found loops a bit tricky, need more practice
- Completed 3 problems in 2 hours
- Next: Move to intermediate or continue beginner?
```

---

## 🎯 Level Progression

### Beginner → Intermediate
**Prerequisites:**
- ✓ Solved 80%+ beginner problems in a language
- ✓ Code quality is decent
- ✓ Understand basic concepts
- ✓ Can run and test code independently

### Intermediate → Advanced
**Prerequisites:**
- ✓ Solved all intermediate problems
- ✓ Understand algorithms (search, sort)
- ✓ Can implement complex logic
- ✓ Know data structures basics

---

## 🆘 Troubleshooting

### "Command not found" error
- Ensure correct compiler is installed
- Check file path is correct
- Use absolute path if needed

### Program won't compile
- Check syntax errors
- Verify all brackets are matched
- Look for typos in variable names

### Wrong output
- Trace through code step by step
- Test with different inputs
- Print intermediate values for debugging
- Compare with expected output carefully

### Compilation success but no output
- Check if program expects input (use stdin)
- Verify output statements are present
- For Java, ensure class name matches file name

---

## 📚 Learning Resources

### Official Documentation
- Python: https://docs.python.org/3/
- Java: https://docs.oracle.com/en/java/
- C: https://www.cprogramming.com/
- C++: https://www.cplusplus.com/

### Practice Platforms
- LeetCode (highly recommended)
- HackerRank
- GeeksforGeeks
- Codeforces

### YouTube Channels
- Abdul Bari
- Code Help (Striver)
- Kunal Kushwaha
- Programming with Harry

---

## ⏰ Time Estimates

| Activity | Time |
|----------|------|
| Read problem | 5 min |
| Understand solution | 10 min |
| Write code | 15-20 min |
| Test & debug | 10 min |
| Review solution | 5-10 min |
| **Total per problem** | **45-60 min** |

---

## 🎓 Success Tips

### 1. **Consistency is Key**
- Practice daily, even if for 15 minutes
- Better than 3-hour sessions once a week

### 2. **Code Independently**
- Try to solve before looking at solutions
- Don't copy-paste - type it out

### 3. **Understand the "Why"**
- Know why an algorithm works
- Not just how to implement it

### 4. **Test Thoroughly**
- Test with given examples
- Test edge cases (empty, single element, etc.)
- Test with large numbers

### 5. **Review & Revise**
- Go back to previous topics regularly
- Revisit difficult concepts
- Try solving without looking at code

### 6. **Track Progress**
- Mark completed problems
- Note challenging topics
- Celebrate small wins!

---

## 🚀 Next Steps

1. **Choose your primary language** (Python recommended for beginners)
2. **Open the first beginner problem**
3. **Set a timer for 45 minutes**
4. **Start coding!**
5. **Mark progress in PRACTICE_TRACKER.md**
6. **Repeat daily**

---

## 📞 Common Questions

### Q: Which language should I start with?
**A:** Python is recommended for beginners - it's easy to learn and has simple syntax.

### Q: How many problems should I solve per day?
**A:** Aim for 2-3 problems daily for consistent progress.

### Q: Should I memorize solutions?
**A:** No! Understand the approach and try solving from scratch each time.

### Q: What if I can't solve a problem?
**A:** That's normal! Try for 15-20 minutes, then look at hints or the solution. Understand it and try again later.

### Q: How long to complete this course?
**A:** 9-10 weeks if practicing 30-60 minutes daily.

### Q: Can I jump to advanced level?
**A:** Not recommended. Build strong fundamentals in beginner level first.

---

## 🎉 Getting Started Checklist

- [ ] Downloaded/cloned the project
- [ ] Verified all compilers are installed
- [ ] Tested one program from each language
- [ ] Opened PRACTICE_TRACKER.md
- [ ] Chosen your primary language
- [ ] Solved your first problem
- [ ] Marked progress
- [ ] Scheduled daily practice time

---

**Now you're ready! Good luck with your coding journey! 🚀**

---

**For more detailed information:**
- See [README.md](README.md) for full project overview
- See [resources/ROADMAP.md](resources/ROADMAP.md) for learning path
- See [resources/TIPS_AND_TRICKS.md](resources/TIPS_AND_TRICKS.md) for strategies
- See [INDEX.md](INDEX.md) for complete problem list

