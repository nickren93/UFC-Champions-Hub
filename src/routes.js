import App from './App';
import Champions from './components/Champions';
import Home from './components/Home';
import Rankings from './components/Rankings';
import ErrorPages from './components/ErrorPages';
import UpdateFighterForm from './components/UpdateFighterForm';
import NewChampionForm from './components/NewChampionForm'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/champions',
                element: <Champions />,
                /*
                children: [
                    // Nested routes here
                    {
                        path: ':id',
                        element: <FighterProfile />
                    }
                ]
                */
            },
            {
                path: '/champions/:id/edit',  //  /champions/:id/edit    '/update_form/:id'
                element: <UpdateFighterForm />,
            },
            {
                path: '/champions/new', //  /champions/new   '/new_form'
                element: <NewChampionForm />
            },
            {
                path: '/rankings',
                element: <Rankings />
            }
        ]
    }
]

export default routes;

/*
/champions/:bob   {bob: xxxxx}
/champions/new
*/
