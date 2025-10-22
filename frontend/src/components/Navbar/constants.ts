import {privateRoutes} from '@routes/routes';

export const navbarRoutes = [
    {label: 'Home', route: '/'},
    {label: 'My Books', route: privateRoutes.myBooks},
    {label: 'Browse', route: '/browse'},
];

export const subMenuRoutes = [
    {label: 'Profile', route: '/myprofile'},
    {label: 'Quotes', route: '/myquotes'},
];

// TODO: Delete after integrating seraching API
export const searchingBookMock = [
    {
        id: 'jLnv0AEACAAJ',
        title: 'Harry Potter Y El Prisionero de Azkaban / Harry Potter and the Prisoner of Azkab an',
        authors: ['J K Rowling'],
        imageCover:
            'http://books.google.com/books/content?id=jLnv0AEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
    {
        id: 'nmUB0AEACAAJ',
        title: 'Harry Potter y el prisionero de Azkaban ( Harry Potter 3 )',
        authors: ['J.K. Rowling'],
    },
    {
        id: '2EaOj7-ozKgC',
        title: 'Harry Potter y el prisionero de Azkaban',
        authors: ['J.K. Rowling'],
        imageCover:
            'http://books.google.com/books/content?id=2EaOj7-ozKgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    },
    {
        id: 'lK2NpwAACAAJ',
        title: 'HARRY POTTER Y EL PRISIONERO DE AZKABAN',
        authors: ['J. K. Rowling'],
        imageCover:
            'http://books.google.com/books/content?id=lK2NpwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
    {
        id: 'vmKREAAAQBAJ',
        title: 'Harry Potter y el prisionero de Azkaban. Edición Ravenclaw / Harry Potter and the Prisoner of Azkaban. Ravenclaw Edition',
        authors: ['J.K. Rowling'],
        imageCover:
            'http://books.google.com/books/content?id=vmKREAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    },
];
