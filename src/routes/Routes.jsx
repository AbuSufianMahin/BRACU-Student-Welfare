import {
    createBrowserRouter,
} from "react-router";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ShowCourseMaterials from "../Components/ShowCourseMaterials/ShowCourseMaterials";
import AddNotesPage from "../Components/AddNotesPage/AddNotesPage";


export const router = createBrowserRouter([
    {
        path : '/',
        Component : Home,
        children: [
            {
                index: true,
                Component : ShowCourseMaterials,
                
            },

            {
                path: 'course-materials',
                Component : ShowCourseMaterials,
                
            },
            {
                path: 'add-notes',
                Component: AddNotesPage,
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]

    }
])