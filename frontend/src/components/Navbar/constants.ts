import { privateRoutes } from "../../routes/routes";

export const navbarRoutes = [
    {label: 'Home', route: '/'},
    {label: 'My Books', route: privateRoutes.myBooks},
    {label: 'Browse', route: '/browse'},
];

export const subMenuRoutes = [
    {label: 'Profile', route: '/myprofile'},
    {label: 'Quotes', route: '/myquotes'},
];
