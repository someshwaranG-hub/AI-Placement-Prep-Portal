// Prepractice page logic
const languages = ['python','java','c','cpp'];

const problemsSummary = [
    { id:1, title: 'Hello World', langs: ['python','java','c','cpp'] },
    { id:2, title: 'Sum of Two Numbers', langs: ['python','java','c','cpp'] },
    { id:3, title: 'Check Even or Odd', langs: ['python','java','c','cpp'] },
    { id:4, title: 'Binary Search', langs: ['python','java','c','cpp'] },
    { id:5, title: 'Bubble Sort', langs: ['python','java','c','cpp'] },
    { id:6, title: 'Merge Sorted Arrays', langs: ['python','java','c','cpp'] }
];

const notesBank = {
    python: `Python Notes:\n- Use readable functions and list comprehensions.\n- For I/O use input()/print().\n- Built-in sorts: list.sort() or sorted().`,
    java: `Java Notes:\n- Use static main and Scanner for input.\n- Prefer Arrays.binarySearch for library use.\n- Keep types explicit (int, long).`,
    c: `C Notes:\n- Use scanf/printf for I/O.\n- Manage memory carefully.\n- Use qsort for library sorting, or implement manually.`,
    cpp: `C++ Notes:\n- Use iostream or scanf/printf.\n- Use std::vector and std::sort.\n- Pay attention to references and iterators.`
};

document.addEventListener('DOMContentLoaded', () => {
    loadUserName();
    renderLanguageTabs();
    selectLanguage('python');
    document.getElementById('proceedBtn').addEventListener('click', () => location.href = 'dashboard.html');
});

function loadUserName() {
    const prefs = localStorage.getItem('userPreferences');
    if (prefs) {
        const user = JSON.parse(prefs);
        const display = user.fullName ? user.fullName.split(' ')[0] : 'User';
        document.getElementById('userName').textContent = display;
    }
}

function renderLanguageTabs() {
    const tabs = document.getElementById('languageTabs');
    tabs.innerHTML = '';
    languages.forEach(l => {
        const btn = document.createElement('button');
        btn.className = 'lang-btn';
        btn.textContent = l.toUpperCase();
        btn.onclick = () => selectLanguage(l, btn);
        tabs.appendChild(btn);
    });
}

function selectLanguage(lang, btnEl) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderNotesForLanguage(lang);
}

function renderNotesForLanguage(lang) {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';

    // Language summary card
    const summary = document.createElement('div');
    summary.className = 'note-card';
    summary.innerHTML = `<strong>${lang.toUpperCase()} — Quick Notes</strong><br><p style="margin-top:8px">${notesBank[lang].replace(/\n/g,'<br>')}</p>`;
    const viewAllBtn = document.createElement('button');
    viewAllBtn.className = 'btn btn-secondary';
    viewAllBtn.style.marginTop = '10px';
    viewAllBtn.textContent = 'View All Notes';
    viewAllBtn.onclick = () => showNotesModal(`${lang.toUpperCase()} Notes`, notesBank[lang]);
    summary.appendChild(viewAllBtn);
    container.appendChild(summary);

    // Problems list filtered by language
    problemsSummary.forEach(p => {
        if (p.langs.includes(lang)) {
            const card = document.createElement('div');
            card.className = 'note-card';
            card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;"><div><strong>${p.title}</strong><div style="font-size:0.9rem;color:#666">Available in: ${p.langs.map(x=>x.toUpperCase()).join(', ')}</div></div></div>`;
            const actions = document.createElement('div');
            actions.style.marginTop = '10px';
            const notesBtn = document.createElement('button');
            notesBtn.className = 'btn btn-primary';
            notesBtn.textContent = 'View Notes';
            notesBtn.onclick = () => showNotesModal(`${p.title} — ${lang.toUpperCase()} Notes`, `Notes for ${p.title} in ${lang.toUpperCase()}:\n\n` + notesBank[lang]);
            actions.appendChild(notesBtn);
            card.appendChild(actions);
            container.appendChild(card);
        }
    });
}

function showNotesModal(title, body) {
    // Reuse modal CSS classes from dashboard.css
    let modal = document.getElementById('preNotesModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'preNotesModal';
        modal.innerHTML = `
            <div class="modal-overlay" id="preOverlay"></div>
            <div class="modal-content" id="preContent">
                <button class="modal-close" id="preClose">×</button>
                <h3 id="preTitle"></h3>
                <div id="preBody" class="modal-body"></div>
                <div class="modal-actions"><button id="preCloseBtn" class="btn btn-secondary">Close</button></div>
            </div>`;
        document.body.appendChild(modal);
        document.getElementById('preClose').addEventListener('click', closePreModal);
        document.getElementById('preCloseBtn').addEventListener('click', closePreModal);
        document.getElementById('preOverlay').addEventListener('click', closePreModal);
    }
    document.getElementById('preTitle').textContent = title;
    document.getElementById('preBody').innerHTML = body.replace(/\n/g,'<br>');
    modal.classList.add('open');
}

function closePreModal() { const m = document.getElementById('preNotesModal'); if (m) m.classList.remove('open'); }
