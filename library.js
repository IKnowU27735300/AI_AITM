// Global variables
const languageData = {
    python: {
        title: "Python Programming Library",
        icon: "fab fa-python",
        color: "#3776ab",
        categories: [
            "Built-in Functions", 
            "String Methods", 
            "List Methods", 
            "Dictionary Methods", 
            "Set Methods", 
            "File I/O", 
            "Math Functions", 
            "Date & Time", 
            "OS & System", 
            "Regular Expressions", 
            "JSON", 
            "Collections", 
            "Itertools", 
            "Threading", 
            "Multiprocessing", 
            "Networking", 
            "Web Frameworks", 
            "Data Analysis", 
            "Machine Learning"
        ]
    },
    c: {
        title: "C Programming Library",
        icon: "fas fa-c",
        color: "#a8b9cc",
        categories: [
            "Standard Library", 
            "Input/Output", 
            "String Handling", 
            "Memory Management", 
            "Math Functions", 
            "Character Handling", 
            "Time Functions", 
            "Utility Functions", 
            "Random Number Generation", 
            "Error Handling"
        ]
    },
    html: {
        title: "HTML Elements & Attributes Library",
        icon: "fab fa-html5",
        color: "#e34c26",
        categories: [
            "Document Structure", 
            "Text Formatting", 
            "Links & Navigation", 
            "Lists", 
            "Tables", 
            "Forms", 
            "Media Elements", 
            "Semantic Elements", 
            "Meta Elements", 
            "Interactive Elements", 
            "Canvas & SVG", 
            "Global Attributes"
        ]
    },
    css: {
        title: "CSS Properties & Selectors Library",
        icon: "fab fa-css3-alt",
        color: "#1572b6",
        categories: [
            "Box Model", 
            "Text Styling", 
            "Colors & Backgrounds", 
            "Borders & Outlines", 
            "Layout", 
            "Flexbox", 
            "Grid", 
            "Transitions & Animations", 
            "Transforms", 
            "Responsive Design", 
            "Pseudo-classes", 
            "Pseudo-elements", 
            "Filters", 
            "Variables", 
            "Media Queries"
        ]
    },
    java: {
        title: "Java Standard Library",
        icon: "fab fa-java",
        color: "#f89820",
        categories: [
            "Core Java", 
            "Collections Framework", 
            "I/O Streams", 
            "Networking", 
            "Concurrency", 
            "Date & Time", 
            "Math & Utility", 
            "Reflection", 
            "Security", 
            "Database Access", 
            "XML Processing", 
            "JSON Processing", 
            "Annotations", 
            "JavaFX", 
            "Swing", 
            "JDBC", 
            "NIO"
        ]
    },
    r: {
        title: "R Programming Library",
        icon: "fas fa-r-project",
        color: "#198CE7",
        categories: [
            "Base R", 
            "Data Manipulation", 
            "Data Visualization", 
            "Statistical Tests", 
            "Regression Analysis", 
            "Time Series", 
            "Machine Learning", 
            "Data Import/Export", 
            "String Manipulation", 
            "Date & Time", 
            "Matrix Operations", 
            "Functional Programming", 
            "Package Management", 
            "Reporting", 
            "Parallel Computing"
        ]
    },
    cpp: {
        title: "C++ Standard Library",
        icon: "fab fa-cuttlefish",
        color: "#00599c",
        categories: [
            "Standard Library", 
            "Input/Output", 
            "String Handling", 
            "Memory Management", 
            "Containers", 
            "Algorithms", 
            "Iterators", 
            "Functional", 
            "Numerics", 
            "Time", 
            "Utilities", 
            "Thread Support", 
            "Regular Expressions", 
            "Filesystem", 
            "Atomic Operations"
        ]
    }
};

// Function to navigate to language page
function navigateToLanguage(language) {
    // Show loading animation
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = `
        <div class="spinner"></div>
    `;
    document.body.appendChild(loadingScreen);
    
    // Simulate loading delay
    setTimeout(() => {
        window.location.href = `${language}.html`;
    }, 800);
}

// Function to go back to main page
function goToMainPage() {
    window.location.href = 'index.html';
}

// Add event listener for back button on language pages
document.addEventListener('DOMContentLoaded', function() {
    // Add this to all language pages
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', goToMainPage);
    }
});