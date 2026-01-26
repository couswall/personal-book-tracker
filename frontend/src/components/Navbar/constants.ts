import {privateRoutes} from '@routes/routes';

export const navbarRoutes = [
    {label: 'Home', route: '/'},
    {label: 'My Books', route: privateRoutes.myBooks},
    {label: 'Browse', route: '/browse'},
];

export const subMenuRoutes = [
    {label: 'Profile', route: '/myprofile', iconClassName: 'fa-regular fa-user'},
    {label: 'Setting', route: '/settings', iconClassName: 'fa-solid fa-gear'},
];

export const SUB_MENU = {
    LOGOUT: 'Logout',
    WELCOME_BACK: 'Welcome back!',
};
