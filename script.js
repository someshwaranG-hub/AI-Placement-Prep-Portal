// ================================================
// AI PLACEMENT PREP PORTAL - LOGIN PAGE SCRIPT
// ================================================

// ================================================
// FORM VALIDATION
// ================================================

const loginForm = document.getElementById('loginForm');
const fullNameInput = document.getElementById('fullName');
const collegeInput = document.getElementById('college');
const yearInput = document.getElementById('year');
const passwordInput = document.getElementById('password');
const rememberMeInput = document.getElementById('rememberMe');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');
const btnLoader = document.getElementById('btnLoader');

// Validation Rules
const validationRules = {
    fullName: {
        minLength: 3,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        errorMessage: 'Name should be 3-50 characters and contain only letters'
    },
    college: {
        minLength: 3,
        maxLength: 100,
        pattern: /^[a-zA-Z0-9\s\-&]+$/,
        errorMessage: 'College name should be 3-100 characters'
    },
    year: {
        required: true,
        errorMessage: 'Please select your year of study'
    },
    password: {
        minLength: 6,
        maxLength: 50,
        errorMessage: 'Password should be 6-50 characters'
    }
};

// ================================================
// REAL-TIME VALIDATION
// ================================================

fullNameInput.addEventListener('blur', () => validateField('fullName'));
fullNameInput.addEventListener('input', () => clearFieldError('fullName'));

collegeInput.addEventListener('blur', () => validateField('college'));
collegeInput.addEventListener('input', () => clearFieldError('college'));

yearInput.addEventListener('change', () => validateField('year'));
yearInput.addEventListener('change', () => clearFieldError('year'));

passwordInput.addEventListener('blur', () => validateField('password'));
passwordInput.addEventListener('input', () => {
    clearFieldError('password');
    updatePasswordStrength();
});

// ================================================
// FIELD VALIDATION FUNCTION
// ================================================

function validateField(fieldName) {
    let field, value, rules, errorSpan, isValid = true;

    switch(fieldName) {
        case 'fullName':
            field = fullNameInput;
            value = field.value.trim();
            rules = validationRules.fullName;
            errorSpan = document.getElementById('nameError');
            break;
        case 'college':
            field = collegeInput;
            value = field.value.trim();
            rules = validationRules.college;
            errorSpan = document.getElementById('collegeError');
            break;
        case 'year':
            field = yearInput;
            value = field.value;
            rules = validationRules.year;
            errorSpan = document.getElementById('yearError');
            break;
        case 'password':
            field = passwordInput;
            value = field.value;
            rules = validationRules.password;
            errorSpan = document.getElementById('passwordError');
            break;
        default:
            return true;
    }

    // Clear previous error
    errorSpan.textContent = '';

    // Required field check
    if (!value || (fieldName === 'year' && value === '')) {
        errorSpan.textContent = rules.errorMessage || 'This field is required';
        field.style.borderColor = '#e74c3c';
        return false;
    }

    // Length validation
    if (rules.minLength && value.length < rules.minLength) {
        errorSpan.textContent = rules.errorMessage;
        field.style.borderColor = '#e74c3c';
        return false;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
        errorSpan.textContent = rules.errorMessage;
        field.style.borderColor = '#e74c3c';
        return false;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
        errorSpan.textContent = rules.errorMessage;
        field.style.borderColor = '#e74c3c';
        return false;
    }

    // Success - green border
    field.style.borderColor = '#27ae60';
    return true;
}

// ================================================
// CLEAR FIELD ERROR
// ================================================

function clearFieldError(fieldName) {
    let field, errorSpan;

    switch(fieldName) {
        case 'fullName':
            field = fullNameInput;
            errorSpan = document.getElementById('nameError');
            break;
        case 'college':
            field = collegeInput;
            errorSpan = document.getElementById('collegeError');
            break;
        case 'year':
            field = yearInput;
            errorSpan = document.getElementById('yearError');
            break;
        case 'password':
            field = passwordInput;
            errorSpan = document.getElementById('passwordError');
            break;
        default:
            return;
    }

    errorSpan.textContent = '';
    field.style.borderColor = '#e0e0e0';
}

// ================================================
// PASSWORD STRENGTH CHECKER
// ================================================

function updatePasswordStrength() {
    const password = passwordInput.value;
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.getElementById('strengthText');

    // Remove previous classes
    strengthBar.classList.remove('weak', 'fair', 'strong');

    if (!password) {
        strengthText.textContent = '';
        return;
    }

    let strength = 0;

    // Length check
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (password.length >= 14) strength++;

    // Complexity checks
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    // Set strength level
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = '❌ Weak';
        strengthText.style.color = '#e74c3c';
    } else if (strength <= 4) {
        strengthBar.classList.add('fair');
        strengthText.textContent = '⚠️ Fair';
        strengthText.style.color = '#f39c12';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = '✓ Strong';
        strengthText.style.color = '#27ae60';
    }
}

// ================================================
// TOGGLE PASSWORD VISIBILITY
// ================================================

function togglePasswordVisibility() {
    const toggleIcon = document.getElementById('toggleIcon');
    const isPassword = passwordInput.type === 'password';

    if (isPassword) {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

// ================================================
// FORM SUBMISSION
// ================================================

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous messages
    formError.classList.remove('show');
    formSuccess.classList.remove('show');

    // Validate all fields
    const isNameValid = validateField('fullName');
    const isCollegeValid = validateField('college');
    const isYearValid = validateField('year');
    const isPasswordValid = validateField('password');

    if (!isNameValid || !isCollegeValid || !isYearValid || !isPasswordValid) {
        showError('Please fix the errors above');
        return;
    }

    // Show loading state
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.disabled = true;
    btnLoader.style.display = 'block';

    try {
        // Simulate API call (replace with actual backend call)
        const response = await simulateLogin({
            fullName: fullNameInput.value.trim(),
            college: collegeInput.value.trim(),
            year: yearInput.value,
            password: passwordInput.value,
            rememberMe: rememberMeInput.checked
        });

        if (response.success) {
            showSuccess('Login successful! Redirecting...');
            
            // Save user data if remember me is checked
            if (rememberMeInput.checked) {
                localStorage.setItem('userPreferences', JSON.stringify({
                    fullName: fullNameInput.value.trim(),
                    college: collegeInput.value.trim(),
                    year: yearInput.value
                }));
            }

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        } else {
            showError(response.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        showError('An error occurred. Please try again later.');
        console.error('Login error:', error);
    } finally {
        // Hide loading state
        loginBtn.disabled = false;
        btnLoader.style.display = 'none';
    }
});

// ================================================
// SIMULATE LOGIN (Replace with real API)
// ================================================

function simulateLogin(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate successful login
            // In production, send to backend API
            const success = userData.fullName.length > 0 && 
                           userData.college.length > 0 && 
                           userData.year.length > 0 && 
                           userData.password.length >= 6;

            resolve({
                success: success,
                message: success ? 'Welcome!' : 'Invalid credentials'
            });
        }, 1500);
    });
}

// ================================================
// SHOW ERROR MESSAGE
// ================================================

function showError(message) {
    formError.textContent = message;
    formError.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formError.classList.remove('show');
    }, 5000);
}

// ================================================
// SHOW SUCCESS MESSAGE
// ================================================

function showSuccess(message) {
    formSuccess.textContent = message;
    formSuccess.classList.add('show');
}

// ================================================
// SOCIAL LOGIN HANDLERS
// ================================================

function handleGoogleLogin() {
    alert('Google login integration coming soon!\n\nIn production, this would redirect to Google OAuth.');
    console.log('Google login clicked');
}

function handleGithubLogin() {
    alert('GitHub login integration coming soon!\n\nIn production, this would redirect to GitHub OAuth.');
    console.log('GitHub login clicked');
}

// ================================================
// LOAD SAVED PREFERENCES
// ================================================

function loadSavedPreferences() {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
        const prefs = JSON.parse(saved);
        fullNameInput.value = prefs.fullName || '';
        collegeInput.value = prefs.college || '';
        yearInput.value = prefs.year || '';
        rememberMeInput.checked = true;
    }
}

// ================================================
// INITIALIZE PAGE
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    loadSavedPreferences();
    
    // Add enter key support
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });

    console.log('AI Placement Prep Portal - Login Page Loaded');
});

// ================================================
// PREVENT FORM SUBMISSION ON ENTER FOR INPUTS
// ================================================

[fullNameInput, collegeInput, yearInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
});

// ================================================
// CLEAR FIELDS FUNCTION (For testing)
// ================================================

function clearAllFields() {
    loginForm.reset();
    
    const fields = [fullNameInput, collegeInput, yearInput, passwordInput];
    fields.forEach(field => {
        field.style.borderColor = '#e0e0e0';
    });

    const errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(span => {
        span.textContent = '';
    });

    formError.classList.remove('show');
    formSuccess.classList.remove('show');
}

// ================================================
// CONSOLE HELPERS (Development)
// ================================================

window.loginHelpers = {
    clearForm: clearAllFields,
    fillForm: (name = 'John Doe', college = 'MIT', year = '3rd_year', password = 'Password@123') => {
        fullNameInput.value = name;
        collegeInput.value = college;
        yearInput.value = year;
        passwordInput.value = password;
        updatePasswordStrength();
        console.log('Form filled with test data');
    },
    testLogin: () => {
        window.loginHelpers.fillForm();
        loginForm.dispatchEvent(new Event('submit'));
    }
};

console.log('%cAI Placement Prep Portal', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cDevelopment Helpers:', 'font-weight: bold; color: #667eea;');
console.log('• loginHelpers.fillForm() - Fill form with test data');
console.log('• loginHelpers.testLogin() - Test the login flow');
console.log('• loginHelpers.clearForm() - Clear all fields');
