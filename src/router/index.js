import {createRouter, createWebHashHistory} from 'vue-router'
import axios from 'axios';
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '@/views/AddPostView.vue';
import ApostView from '../views/ApostView.vue'

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
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
        meta: {noAuth: true}
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () =>
            import ( /* webpackChunkName: "contacts" */ '../views/ContactsView.vue'),
        meta: {noAuth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {noAuth: true}
    },
    {
        path: '/add-post',
        name: 'add-post',
        component: AddPostView
    },
    {
        path: '/apost',
        name: 'apost',
        component: ApostView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    if (to.meta.noAuth) {
        console.log('No authentication required. Proceeding to:', to.name);
        return true;
    } else {
        const isAuthenticated = await checkAuthentication();
        if (!isAuthenticated) {
            console.warn('User is not authenticated. Redirecting to login.');
            return '/login';
        } else {
            console.log('User is authenticated. Proceeding to:', to.name);
            return true;
        }
    }
});

export default router