// Simulated User Database
let users = [];

// Function to switch to the login form
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

// Function to switch to the signup form
function showSignup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// Handle Login
function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    // Check if the user exists and the password matches
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert("Login successful!");
        // You can add further actions, like displaying the product list or redirecting to a new page.
        renderProducts(products);  // Example of displaying products after login
    } else {
        alert("Invalid email or password.");
    }
}

// Handle Signup
function signupUser() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    
    // Check if the user already exists
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        alert("User already exists. Please login.");
    } else {
        // Add new user to the simulated database
        users.push({ email, password });
        alert("Signup successful! You can now login.");
        showLogin(); // Automatically switch to the login form after successful signup
    }
}

// Example product data (use your actual product list)
const products = [
    { image: "product1.jpg", name: "Product 1", description: "Description 1", price: 19.99, category: "Electronics" },
    { image: "product2.jpg", name: "Product 2", description: "Description 2", price: 29.99, category: "Clothing" },
    // Add more products...
];
