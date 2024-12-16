import {createRouter, createWebHashHistory} from 'vue-router'
import axios from 'axios';
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '@/views/AddPostView.vue';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const checkAuthentication = async () => {
    try {
        return (await axiosInstance.get('/auth/authenticate')).data.authenticated;
    } catch (error) {
        console.error('Authentication check failed:', error.message || error.response?.data);
        return false;
    }
};

const routes = [{
        path: '/',
        name: 'home',
        component: MainView,
        meta: {requiresAuth: true}
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
        meta: {requiresAuth: false}
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () =>
            import ( /* webpackChunkName: "contacts" */ '../views/ContactsView.vue'),
        meta: {requiresAuth: false}
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {requiresAuth: false}
    },
    {
        path: '/add-post',
        name: 'add-post',
        component: AddPostView,
        meta: {requiresAuth: false}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    if (to.meta.requiresAuth) {
        const isAuthenticated = await checkAuthentication();
        if (!isAuthenticated) {
            console.warn('User is not authenticated. Redirecting to login.');
            return '/login';
        } else {
            console.log('User is authenticated. Proceeding to:', to.name);
            return true;
        }
    } else {
        console.log('No authentication required. Proceeding to:', to.name);
        return true;
    }
});

export default router