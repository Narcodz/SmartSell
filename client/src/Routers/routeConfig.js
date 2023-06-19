import { Home, Dashboard } from "../Components/ComponentsExports"
import LayoutSiteNavBar from "../Layouts/LayoutSiteNavBar"
import LayoutNoSiteNavBar from "../Layouts/LayoutNoSiteNavBar"
import Login from "../Components/login/Login"
import Register from "../Components/register/Register"
import AddInfo from "../Components/AddInfo"


export const routes = [
    {
        path: '/',
        component: Home,
        layout: LayoutNoSiteNavBar,
        name: 'Home',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    },
    {
        path: '/home',
        component: Home,
        layout: LayoutSiteNavBar,
        name: 'Home',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    },
    {
        path: '/dashboard',
        component: Dashboard,
        layout: LayoutSiteNavBar,
        name: 'Home',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    },
    {
        path: '/register',
        component: Register,
        layout: LayoutSiteNavBar,
        name: 'Register',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    },
    {
        path: '/login',
        component: Login,
        layout: LayoutSiteNavBar,
        name: 'Login',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    },
    {
        path: '/addinfo',
        component: AddInfo,
        layout: LayoutSiteNavBar,
        name: 'AddInfo',
        permissions: ['SuperAdmin', 'Admin', 'SalesMan']
    } 
]