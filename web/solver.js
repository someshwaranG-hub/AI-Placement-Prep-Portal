// Solver page logic
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const problem = getProblemById(id);
    if (!problem) {
        document.getElementById('probTitle').textContent = 'Problem not found';
        document.getElementById('probDesc').textContent = '';
        return;
    }

    document.getElementById('probTitle').textContent = problem.title;
    document.getElementById('probMeta').textContent = `${problem.language.toUpperCase()} • ${problem.difficulty} • ${problem.time}`;
    document.getElementById('probDesc').textContent = problem.description;

    // Load previous code if any
    const saved = localStorage.getItem(`code_problem_${problem.id}`);
    if (saved) document.getElementById('codeEditor').value = saved;

    document.getElementById('runBtn').addEventListener('click', () => {
        const code = document.getElementById('codeEditor').value;
        const out = document.getElementById('runOutput');
        out.style.display = 'block';
        out.textContent = 'Simulation: Code saved locally. (No runtime evaluation in this build)\n' + (code.slice(0,500) || '<no code>');
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        const code = document.getElementById('codeEditor').value;
        // Save code locally
        localStorage.setItem(`code_problem_${problem.id}`, code);

        // Mark as solved
        const solved = JSON.parse(localStorage.getItem('solvedProblems') || '[]');
        if (!solved.includes(problem.id)) {
            solved.push(problem.id);
            localStorage.setItem('solvedProblems', JSON.stringify(solved));
        }

        alert('Solution saved and marked as solved. Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    });
});
