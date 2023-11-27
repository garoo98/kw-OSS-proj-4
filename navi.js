const navigationBar = `
    <div class="navbar">
        <a href="index.html">MyPortfolio</a>
        <div>
            <a href="index.html">Home</a>
            <a href="login.html" id='nav-log'>Log In</a>
            <a href="search.html">Search</a>
            <a href="profile.html">MyProfile</a>
        </div>
    </div>
`;
const navbarStyle = `
    .navbar {
        display: flex;
        justify-content: space-between;
        background-color: #f8f8f8;
        padding: 10px 20px;
    }
    .navbar a {
        text-decoration: none;
        color: #333;
        padding: 10px 15px;
    }
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = navbarStyle;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('navbar').innerHTML = navigationBar;
});
