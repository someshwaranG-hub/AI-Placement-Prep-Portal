// ================================================
// DASHBOARD SCRIPT
// ================================================

// Sample Problems Data
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

// ================================================
// PAGE INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadProblems();
    setupEventListeners();
    console.log('Dashboard loaded successfully');
});

// ================================================
// LOAD USER DATA
// ================================================

function loadUserData() {
    const userPreferences = localStorage.getItem('userPreferences');
    
    if (userPreferences) {
        const user = JSON.parse(userPreferences);
        const userName = user.fullName || 'User';
        
        document.getElementById('userName').textContent = userName;
        document.getElementById('userDisplayName').textContent = userName.split(' ')[0];
    }
}

// ================================================
// LOAD AND DISPLAY PROBLEMS
// ================================================

function loadProblems() {
    const problemsGrid = document.getElementById('problemsGrid');
    problemsGrid.innerHTML = '';

    problemsData.forEach(problem => {
        const card = createProblemCard(problem);
        problemsGrid.appendChild(card);
    });
}

// ================================================
// CREATE PROBLEM CARD
// ================================================

function createProblemCard(problem) {
    const card = document.createElement('div');
    card.className = 'problem-card';
    card.innerHTML = `
        <div class="problem-header">
            <h4 class="problem-title">${problem.title}</h4>
            <span class="problem-difficulty difficulty-${problem.difficulty}">
                ${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
            </span>
        </div>
        <p class="problem-description">${problem.description}</p>
        <div class="problem-meta">
            <span class="problem-language">${problem.language.toUpperCase()}</span>
            <span>⏱️ ${problem.time}</span>
        </div>
        <div class="problem-actions">
            <button onclick="solveProblem(${problem.id})">Solve</button>
            <button onclick="viewProblem(${problem.id})">View</button>
        </div>
    `;
    return card;
}

// ================================================
// FILTER PROBLEMS
// ================================================

function filterProblems() {
    const languageFilter = document.getElementById('languageFilter').value;
    const levelFilter = document.getElementById('levelFilter').value;

    const filtered = problemsData.filter(problem => {
        const languageMatch = !languageFilter || problem.language === languageFilter;
        const levelMatch = !levelFilter || problem.difficulty === levelFilter;
        return languageMatch && levelMatch;
    });

    const problemsGrid = document.getElementById('problemsGrid');
    problemsGrid.innerHTML = '';

    if (filtered.length === 0) {
        problemsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No problems found</p>';
        return;
    }

    filtered.forEach(problem => {
        const card = createProblemCard(problem);
        problemsGrid.appendChild(card);
    });
}

// ================================================
// SELECT LANGUAGE (SIDEBAR)
// ================================================

function selectLanguage(lang) {
    document.getElementById('languageFilter').value = lang;
    filterProblems();
}

// ================================================
// SELECT LEVEL (SIDEBAR)
// ================================================

function selectLevel(level) {
    document.getElementById('levelFilter').value = level;
    filterProblems();
}

// ================================================
// SOLVE PROBLEM
// ================================================

function solveProblem(problemId) {
    const problem = problemsData.find(p => p.id === problemId);
    if (problem) {
        // Show in-page modal with problem summary and action
        showModal(`Open: ${problem.title}`, `Language: ${problem.language}\nDifficulty: ${problem.difficulty}\n\n${problem.description}`);
        console.log('Redirecting to solver (simulated):', problem);
    }
}

// ================================================
// VIEW PROBLEM
// ================================================

function viewProblem(problemId) {
    const problem = problemsData.find(p => p.id === problemId);
    if (problem) {
        showModal(`View: ${problem.title}`, `${problem.description}`);
        console.log('Viewing problem (modal):', problem);
    }
}

// ================================================
// IN-PAGE MODAL
// ================================================
function ensureModal() {
    if (document.getElementById('portalModal')) return;
    const modal = document.createElement('div');
    modal.id = 'portalModal';
    modal.innerHTML = `
        <div class="modal-overlay" id="modalOverlay"></div>
        <div class="modal-content" id="modalContent">
            <button class="modal-close" id="modalClose">×</button>
            <h3 id="modalTitle"></h3>
            <div id="modalBody" class="modal-body"></div>
            <div class="modal-actions">
                <button id="modalPrimary" class="btn btn-primary">Solve</button>
                <button id="modalSecondary" class="btn btn-secondary">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalSecondary').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
}

function showModal(title, body, primaryCb) {
    ensureModal();
    document.getElementById('modalTitle').textContent = title;
    const bodyEl = document.getElementById('modalBody');
    // Preserve simple newlines
    bodyEl.innerHTML = body.replace(/\n/g, '<br>');
    const primaryBtn = document.getElementById('modalPrimary');
    primaryBtn.onclick = () => {
        if (typeof primaryCb === 'function') primaryCb();
        closeModal();
    };
    document.getElementById('portalModal').classList.add('open');
}

function closeModal() {
    const modal = document.getElementById('portalModal');
    if (modal) modal.classList.remove('open');
}

// ================================================
// SETUP EVENT LISTENERS
// ================================================

function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// ================================================
// HANDLE LOGOUT
// ================================================

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userPreferences');
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    }
}

// ================================================
// UPDATE STATS (Simulated)
// ================================================

function updateStats() {
    document.getElementById('problemsSolved').textContent = '12';
    document.getElementById('streakDays').textContent = '5';
    document.getElementById('totalSolved').textContent = '12';
    document.getElementById('accuracyRate').textContent = '92%';
    document.getElementById('timeSpent').textContent = '8h 30m';
    document.getElementById('currentLevel').textContent = 'Intermediate';
}

// Run on load
updateStats();

console.log('%cDashboard Ready', 'font-size: 16px; font-weight: bold; color: #667eea;');
