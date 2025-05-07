import {
    createBrowserRouter,
} from "react-router";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ShowCourseMaterials from "../Components/ShowCourseMaterials/ShowCourseMaterials";
import AddNotesPage from "../Components/AddNotesPage/AddNotesPage";
import ProfilePage from "../Components/ProfilePage/ProfilePage";
import LoginPage from "../Components/LoginPage/LoginPage";
import RegisterPage from "../Components/RegisterPage.jsx/RegisterPage";
import CourseCard from "../Components/CourseCard";
import CourseGrid from "../Components/CourseGrid";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                index: true,
                Component: ShowCourseMaterials,

            },

            {
                path: 'course-materials',
                Component: ShowCourseMaterials,

            },
            {
                path: 'add-notes',
                element:
                    <PrivateRoute>
                        <AddNotesPage></AddNotesPage>
                    </PrivateRoute>,
            },
            {
                path: 'my-profile',
                element:
                    <PrivateRoute>
                        <ProfilePage></ProfilePage>
                    </PrivateRoute>,
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
                ,
            },
            {
                path: 'register',
                element:
                    <RegisterPage></RegisterPage>

            },
            {
                path: 'marketplace',
                element: <PrivateRoute>
                    <CourseGrid></CourseGrid>
                </PrivateRoute>,
            },

            {
                path: '*',
                Component: ErrorPage
            }
        ]

    }
])