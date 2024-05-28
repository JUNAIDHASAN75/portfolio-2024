import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Home/Home/Home';
import Skills from './Home/Skills/Skills';
import ContactMe from './Home/ContactaMe/ContactMe';
import Projects from './Home/Projects/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'skill',
        element: <Skills></Skills>
      },
      {
        path: 'contact',
        element: <ContactMe></ContactMe>
      },
      {
        path: 'projects',
        element: <Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='max-w-screen-xl mx-auto md:px-2 font-serif'>
        <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
