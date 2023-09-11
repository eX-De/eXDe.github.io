import HomePage from "./components/HomePage/HomePage.vue";
import PubPage from "./components/PubPage/PubPage.vue";
import ProjectPage from "./components/ProjectPage/ProjectPage.vue";
import HomeSubPage from "./components/HomeSubPage/HomeSubPage.vue";
import BookPage from "./components/BookPage/BookPage.vue";
import BookTab from "./components/BookPage/BookTab.vue";
import WebTab from "./components/BookPage/WebTab.vue";
import PaperTab from "./components/BookPage/PaperTab.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        children: [
            {
                path: '',
                component: HomeSubPage
            },
            {
                path: '/publications',
                component: PubPage
            },
            {
                path: '/projects',
                component: ProjectPage
            },
            {
                path: '/bookshelf',
                component: BookPage,
                children:[
                    {
                        path: '/bookshelf',
                        component: BookTab
                    },
                    {
                        path: '/bookshelf/books',
                        component: BookTab
                    },
                    {
                        path: '/bookshelf/papers',
                        component: PaperTab
                    },
                    {
                        path: '/bookshelf/webpages',
                        component: WebTab
                    },
                ]
            },
        ]
    },
]

export {
    routes
}