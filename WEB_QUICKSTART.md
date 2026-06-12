# Web Portal - Quick Start Guide

## 🌐 Opening the Web Portal

Your **AI Placement Prep Portal** now has a complete web interface! Follow these steps to open it.

---

## ⚡ Quick Start (30 seconds)

### Method 1: Using Python (Recommended)

```bash
cd /workspaces/AI-Placement-Prep-Portal/web
python3 -m http.server 8000
```

Then open your browser and go to: **http://localhost:8000**

### Method 2: Using Node.js

```bash
cd /workspaces/AI-Placement-Prep-Portal/web
npx http-server
```

Then open your browser and go to: **http://localhost:8080**

### Method 3: Direct File Access

```bash
# Windows
cd web
start index.html

# macOS
cd web
open index.html

# Linux
cd web
xdg-open index.html
```

---

## 🔑 Login Credentials (For Testing)

Use these test credentials to login:

| Field | Value |
|-------|-------|
| **Full Name** | John Doe |
| **College** | MIT |
| **Year** | 3rd Year |
| **Password** | Password@123 |

**Or use the developer helper:**
```javascript
loginHelpers.fillForm()
loginHelpers.testLogin()
```

---

## 📱 Web Portal Pages

### 1. **Login Page** (`index.html`)
- Professional login interface
- Form validation with real-time feedback
- Password strength indicator
- Remember me functionality
- Social login options
- Responsive design

**URL**: `http://localhost:8000/`

**Features:**
- ✓ Full name field (3-50 chars, letters only)
- ✓ College name field (3-100 chars)
- ✓ Year dropdown (1st, 2nd, 3rd, 4th year)
- ✓ Password field with strength indicator
- ✓ Show/hide password toggle
- ✓ Remember me checkbox
- ✓ Form validation with error messages
- ✓ Social login buttons
- ✓ Responsive on all devices

### 2. **Dashboard** (`dashboard.html`)
- Welcome section with personalized greeting
- Problem browser with filtering
- Language and level selection
- Statistics and performance tracking
- Responsive navigation

**URL**: `http://localhost:8000/dashboard.html`

**Features:**
- ✓ User profile display
- ✓ Language filter (Python, Java, C, C++)
- ✓ Difficulty filter (Beginner, Intermediate, Advanced)
- ✓ Problem cards with descriptions
- ✓ Time estimates for each problem
- ✓ Solve and View buttons
- ✓ Performance statistics
- ✓ Progress tracking

---

## 🎯 How to Use

### Login Flow

1. **Open the portal**: Open `index.html` in your browser
2. **Fill in your details**:
   - Enter your full name
   - Enter your college name
   - Select your year of study
   - Enter a password
3. **Check password strength**: Watch the strength indicator as you type
4. **Optional - Remember Me**: Check to save your preferences
5. **Sign In**: Click the "Sign In" button
6. **Access Dashboard**: You'll be redirected to the dashboard

### After Login

1. **Welcome Section**: See personalized greeting and today's challenge
2. **Filter Problems**: 
   - Use sidebar to select language
   - Use sidebar to select difficulty level
3. **View Problems**: Browse available coding problems
4. **Solve Problem**: Click "Solve" to open a problem
5. **Track Progress**: Check sidebar for statistics
6. **Logout**: Click "Logout" button to exit

---

## 💻 Browser Developer Tools

### Access Developer Tools
- **Windows/Linux**: Press `F12` or `Ctrl+Shift+I`
- **macOS**: Press `Cmd+Option+I`

### Development Helpers (Paste in Console)

**Fill form with test data:**
```javascript
loginHelpers.fillForm()
```

**Auto-submit login:**
```javascript
loginHelpers.testLogin()
```

**Clear all fields:**
```javascript
loginHelpers.clearForm()
```

---

## 📊 File Structure

```
web/
├── index.html              # Login page
├── style.css               # Login page styles
├── script.js               # Login page logic
├── dashboard.html          # Main dashboard
├── dashboard.css           # Dashboard styles
├── dashboard.js            # Dashboard logic
├── README.md               # Web portal documentation
└── WEB_QUICKSTART.md       # This file
```

---

## ✨ Features

### Login Page
- Modern gradient design
- Brand information section (left side)
- Login form (right side)
- Real-time validation
- Password strength checker
- Show/hide password button
- Remember me functionality
- Social login options
- Dark mode support
- Fully responsive

### Dashboard
- User profile section
- Problem browser with search
- Language and difficulty filters
- Problem cards with metadata
- Statistics dashboard
- Progress tracker
- Responsive sidebar
- Mobile-friendly layout

---

## 🔒 Security Features

**Login Form Validation:**
- ✓ Name: 3-50 characters, letters only
- ✓ College: 3-100 characters, alphanumeric
- ✓ Year: Required dropdown selection
- ✓ Password: Minimum 6 characters

**Password Strength Indicators:**
- 🔴 **Weak**: Red (< 2 criteria met)
- 🟡 **Fair**: Yellow (2-4 criteria met)
- 🟢 **Strong**: Green (5+ criteria met)

**Data Privacy:**
- User data saved to browser localStorage (local only)
- Can be cleared with "Clear Data" option
- No data sent to external servers (development version)

---

## 🎨 Customization

### Change Colors
Edit `style.css` and `dashboard.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Font
Edit CSS files:
```css
font-family: 'Your Font', sans-serif;
```

### Add More Problems
Edit `problemsData` in `dashboard.js`:
```javascript
const problemsData = [
    { id: 1, title: "Problem", ... }
];
```

---

## 🐛 Troubleshooting

### Portal Won't Load
**Problem**: Page shows blank or won't load
**Solution**:
- Use a web server (Python or Node.js)
- Direct file access may not work due to CORS

### Forms Not Validating
**Problem**: Validation not showing errors
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh page (Ctrl+F5)
- Check browser console for errors

### Can't See Styles
**Problem**: Page looks unstyled
**Solution**:
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check CSS file is loading (F12 → Network tab)
- Verify file paths are correct

### Dashboard Not Loading
**Problem**: After login, dashboard doesn't appear
**Solution**:
- Check browser console (F12 → Console)
- Check localStorage has user data
- Try logging in again

---

## 📚 Browser Compatibility

### Supported Browsers
- ✓ Chrome 90+
- ✓ Firefox 88+
- ✓ Safari 14+
- ✓ Edge 90+
- ✓ Mobile browsers

### Tested On
- ✓ Windows 10/11
- ✓ macOS Big Sur+
- ✓ Ubuntu 20.04+
- ✓ iPhone/iPad
- ✓ Android phones

---

## 🚀 Running the Portal

### Start Web Server

**Terminal 1: Start the server**
```bash
cd /workspaces/AI-Placement-Prep-Portal/web
python3 -m http.server 8000
```

**Terminal 2: Open in browser**
```bash
# macOS
open http://localhost:8000

# Linux
xdg-open http://localhost:8000

# Windows (or just paste in browser)
start http://localhost:8000
```

**Output:**
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

### Stop Web Server
Press `Ctrl+C` in terminal

---

## 🎓 Next Steps

1. ✓ **Open Portal**: Use one of the methods above
2. ✓ **Test Login**: Use test credentials or developer helpers
3. ✓ **Explore Dashboard**: Browse problems and features
4. ✓ **Check Responsiveness**: Resize browser to test mobile view
5. ✓ **Review Code**: Check HTML, CSS, JS files
6. ✓ **Customize**: Modify colors, text, or add features

---

## 📖 Additional Resources

### Web Portal Files
- [Web Portal README](README.md) - Complete documentation
- [Login Page](index.html) - HTML structure
- [Login Styles](style.css) - CSS styling
- [Login Logic](script.js) - JavaScript functionality
- [Dashboard Page](dashboard.html) - Dashboard HTML
- [Dashboard Styles](dashboard.css) - Dashboard CSS
- [Dashboard Logic](dashboard.js) - Dashboard JavaScript

### Main Project
- [README.md](../README.md) - Main documentation
- [GETTING_STARTED.md](../GETTING_STARTED.md) - Setup guide

---

## ✅ Checklist

Before using the portal:
- [ ] Files are in `/web/` directory
- [ ] Web server is running
- [ ] Can access `http://localhost:8000/`
- [ ] Login page displays correctly
- [ ] Form validation works
- [ ] Can login successfully
- [ ] Dashboard appears after login
- [ ] Can filter problems
- [ ] Statistics display correctly

---

## 🎉 You're Ready!

Your web portal is fully functional and ready to use!

1. Start the web server
2. Open http://localhost:8000
3. Login with test credentials
4. Explore the dashboard
5. Start your coding preparation journey!

Happy learning! 🚀

---

**Portal Status**: ✅ Ready to Use  
**Last Updated**: June 2026  
**Version**: 1.0

