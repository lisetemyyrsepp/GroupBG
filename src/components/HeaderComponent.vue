<template>
    <header class="header">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="separator">|</li>
            <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
    </header>
</template>

<style>

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

.nav {
    display: flex;
    align-items: center;
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
    padding: 0 10px;
}
</style>