<template>
    <header class="header">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="separator">|</li>
            <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
    </header>
</template>

<style>
    :root {
    --text-color: #ffffff;
    --primary-color: #499899;
    --primary-shadow: #204444;
    --secondary-color: #589949;
    --secondary-shadow: #274420;
    --background-color: #282828;
    --box-color: #465050;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    background: var(--primary-color);
    background: linear-gradient(90deg, var(--primary-color) 50%, var(--secondary-color) 100%);
    border-radius: 0 0 10px 10px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
}

.header::before {
    content: "";
    position: absolute;
    inset: -0.2em;
    background: linear-gradient(90deg, var(--primary-shadow) 50%, var(--secondary-shadow) 100%);
    filter: blur(1em);
    transform: translate3d(0px, 0px, -10px);
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
}

/*a {
    color: var(--text-color);
    text-decoration: none;
}*/

.nav {
    display: flex;
    align-items: center;
    /*justify-content: center;
    font-size: larger;
    /*margin-left: 0.5em;*/
}

.nav a {
    padding: 10px 15px;
    text-align: center;
    display: block;
    font-size: .99em;
}

.nav a:hover {
    background-color: var(--secondary-color);
    color: darkgray;
    border-radius: 20px;
}

.separator {
    font-size: 1em;
    padding: 0 10px/*10px 15px*/;
}
/** 
@media (min-width: 800px) {
    /*.header,
    .nav {
        display: flex;
    }
    .header {
        /*flex-direction: row;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: 1000px) {
    .header {
        /*flex-direction: row;
        justify-content: center;
    }
}

@media (max-width: 800px) {
    .header {
        flex-direction: row;
    }
}*/
</style>