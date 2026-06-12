# Web Portal Guide - AI Placement Prep Portal

## 📱 Web Interface Overview

The web portal provides an interactive platform for placement preparation with a modern, responsive interface.

---

## 📂 Files Included

### 1. **index.html** - Login Page
- Professional login interface
- Form fields: Name, College, Year, Password
- Password strength indicator
- Remember me functionality
- Social login options (Google, GitHub)
- Responsive design for all devices

### 2. **style.css** - Login Page Styles
- Modern gradient backgrounds
- Responsive layout (2-column on desktop, 1-column on mobile)
- Brand information section
- Professional styling with animations
- Dark mode support

### 3. **script.js** - Login Page Logic
- Real-time form validation
- Password strength checker
- Form submission handling
- Local storage for saved preferences
- Error and success messages
- Development helpers

### 4. **dashboard.html** - Main Dashboard
- User welcome section
- Problem browser with filters
- Language and difficulty level selection
- Performance statistics
- Daily challenge section
- Responsive navigation bar

### 5. **dashboard.css** - Dashboard Styles
- Modern card-based layout
- Sidebar for quick navigation
- Responsive grid system
- Mobile-friendly design

### 6. **dashboard.js** - Dashboard Logic
- Problem loading and filtering
- User data management
- Statistics tracking
- Problem interaction handlers

---

## 🚀 Getting Started

### Open the Portal

**Option 1: Using Python's built-in server**
```bash
cd web
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

**Option 2: Using Node.js**
```bash
cd web
npx http-server
```

Then open: `http://localhost:8080`

**Option 3: Direct file access**
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

---

## 📝 Login Page Features

### Form Fields
1. **Full Name**
   - Validates: 3-50 characters, letters only
   - Real-time validation feedback
   - Min 3 characters required

2. **College Name**
   - Validates: 3-100 characters
   - Allows alphanumeric and common symbols
   - Real-time validation feedback

3. **Year of Study**
   - Dropdown selection
   - Options: 1st, 2nd, 3rd, 4th Year, Other
   - Required field

4. **Password**
   - Minimum 6 characters required
   - Strength indicator (Weak/Fair/Strong)
   - Toggle visibility button (Eye icon)
   - Shows real-time strength feedback

### Additional Features
- **Remember Me**: Saves user preferences locally
- **Show/Hide Password**: Toggle with eye icon
- **Password Strength Indicator**: Color-coded feedback
- **Error Messages**: Inline validation feedback
- **Success Messages**: Confirmation on successful login
- **Social Login**: Google and GitHub buttons (placeholder)
- **Forgot Password**: Link for password recovery

---

## 🎨 Dashboard Features

### Navigation Bar
- Portal branding
- Main navigation links
- Current user display
- Logout button

### Sidebar
- **Language Selection**: Python, Java, C, C++
- **Level Selection**: Beginner, Intermediate, Advanced
- **Progress Stats**: Problems solved, day streak

### Main Content Area

#### Welcome Section
- Personalized greeting
- Today's challenge suggestion
- Weekly progress summary
- Next milestone display

#### Problems Grid
- Problem cards with title, difficulty, description
- Language tag
- Time estimate
- Solve and View buttons
- Filters by language and difficulty level

#### Statistics Section
- Total problems solved
- Accuracy rate
- Time spent
- Current level
- Performance overview

---

## 🔧 Development Helpers

### Console Commands (Open DevTools)

**Fill form with test data:**
```javascript
loginHelpers.fillForm()
```

**Test the login flow:**
```javascript
loginHelpers.testLogin()
```

**Clear all form fields:**
```javascript
loginHelpers.clearForm()
```

---

## 🎯 User Workflow

### 1. First Visit
- User opens `index.html`
- Fills in login form with credentials
- Enters password and checks strength
- Clicks "Sign In" button

### 2. After Login
- Redirects to `dashboard.html`
- Dashboard loads with personalized greeting
- User sees available problems
- Can filter by language or difficulty

### 3. Problem Solving
- Click "Solve" to open problem
- Click "View" to see details
- Track progress in sidebar
- Update statistics

### 4. Logout
- Click "Logout" button
- Confirm logout
- Redirected to login page

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- 2-column layout (sidebar + content)
- Full navigation visible
- Multi-column problem grid
- All features visible

### Tablet (768px - 1023px)
- Flexible sidebar
- Wrapped navigation
- 1-2 column problem grid
- Optimized touch targets

### Mobile (< 768px)
- Single column layout
- Sidebar as horizontal scroll
- Single column problems
- Simplified navigation
- Touch-friendly buttons

---

## 🔐 Data Storage

### Local Storage
- **Key**: `userPreferences`
- **Data stored**:
  - Full name
  - College name
  - Year of study
- **Auto-saved**: When "Remember Me" is checked
- **Auto-loaded**: On dashboard load if exists

---

## 🎨 Customization

### Colors
Edit `style.css` and `dashboard.css`:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Fonts
Edit `font-family` in CSS files:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Problem Data
Edit `problemsData` array in `dashboard.js`:
```javascript
const problemsData = [
    { id: 1, title: "...", difficulty: "...", ... }
];
```

---

## 🔒 Security Notes

### Current Implementation (Development)
- Passwords not actually hashed
- No backend authentication
- Data stored in localStorage only
- For development/demo purposes only

### Production Recommendations
1. Use HTTPS only
2. Implement proper password hashing (bcrypt)
3. Use JWT for authentication
4. Store data securely on backend
5. Implement CSRF protection
6. Add rate limiting
7. Use secure session management

---

## 🐛 Troubleshooting

### Portal Won't Open
- Check if file path is correct
- Try using a web server instead of direct file access
- Check browser console for errors (F12)

### Form Validation Not Working
- Clear browser cache
- Check JavaScript console for errors
- Ensure script.js is loaded correctly

### Styles Look Wrong
- Hard refresh page (Ctrl+F5 or Cmd+Shift+R)
- Check if CSS file is loaded (check Network tab)
- Verify file paths in HTML

### Dashboard Not Loading
- Ensure user data exists in localStorage
- Check browser console for errors
- Try logging in again

---

## 📊 Testing

### Test Data
Use development helpers to fill form:
```javascript
loginHelpers.fillForm(
    'John Doe',      // name
    'MIT',           // college
    '3rd_year',      // year
    'Password@123'   // password
)
```

### Manual Testing
1. Open `index.html`
2. Fill form fields
3. Check validation feedback
4. Try submitting
5. Check dashboard loads
6. Test filtering
7. Test logout

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Code editor integration
- [ ] Syntax highlighting
- [ ] Test case execution
- [ ] Solution sharing
- [ ] Discussion forum
- [ ] Leaderboard
- [ ] Badges and achievements
- [ ] Video tutorials
- [ ] Live coding sessions
- [ ] Mobile app version

---

## 📚 File Structure

```
web/
├── index.html           # Login page
├── style.css            # Login styles
├── script.js            # Login logic
├── dashboard.html       # Main dashboard
├── dashboard.css        # Dashboard styles
├── dashboard.js         # Dashboard logic
├── README.md            # This file
├── solver.html          # (To be created) Problem solver
├── solver.css           # (To be created)
└── solver.js            # (To be created)
```

---

## 🎓 Integration with Code Portal

The web portal connects with the code problems in:
- `../python/`, `../java/`, `../c/`, `../cpp/`

When user clicks "Solve", it can open the corresponding code file or redirect to a code editor.

---

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Review error messages
3. Check file paths
4. Try hard refresh
5. Clear localStorage if needed

---

## 📄 License

Same as main project - MIT License

---

**Version**: 1.0  
**Last Updated**: June 2026  
**Status**: Production Ready for Basic Use

