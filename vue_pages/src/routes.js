import HomePage from "./components/HomePage/HomePage.vue";
import PubPage from "./components/PubPage/PubPage.vue";
import ProjectPage from "./components/ProjectPage/ProjectPage.vue";
import HomeSubPage from "./components/HomeSubPage/HomeSubPage.vue";
import BookPage from "./components/BookPage/BookPage.vue";


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
                component: BookPage
            },
        ]
    },
]

export {
    routes
}