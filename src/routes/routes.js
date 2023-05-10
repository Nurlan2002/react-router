import AddEmployee from "../pages/Admin/AddEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";
import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Employees from "../pages/Main/Employees";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import Employee from "../pages/Admin/Employee";
import EmployeeDetai from "../pages/Admin/EmployeeDetai";

export const ROUTES = [
    // Main Root - user side
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'employees',
                element: <Employees />
            },
            {
                path: 'employeesdetail',
                element: <EmployeeDetail />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    // Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children:[
            {
                path:'',
                element:<EmployeeDetai/>
            },
            {
                path:'employ',
                element:<Employee/>

            },
            {
                path:'add',
                element:<AddEmployee/>
            }

        ]

    }
]

