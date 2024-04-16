const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));

// Database simulation (replace with actual database integration)
const users = [];

// Passport.js configuration
passport.use(new LocalStrategy(
    { usernameField: 'username' }, // Specify the field name for username
    (username, password, done) => {
        // Find user in database (replace with database query)
        const user = users.find(user => user.username === username);
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }
        // Compare hashed passwords
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

// Signup Route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        return res.status(400).send('Username already exists');
    }
    // Hash password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        // Save user to database (replace with database logic)
        users.push({ id: Date.now().toString(), username, password: hash });
        res.send('Signup successful');
    });
});

// Login Route
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard');
});

app.get('/login', (req, res) => {
    res.send('Login form goes here');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.static(C:\Users\besan\OneDrive\Desktop\acehack,'acehack')); // Serves files from the current directory

// Your other routes and middleware should be defined here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
