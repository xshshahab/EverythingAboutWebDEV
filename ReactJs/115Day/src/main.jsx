import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Service from "./components/Service/Service.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Login/Login.jsx"
import NotFound from './components/NotFound/NotFound.jsx';
import User from './components/User/User.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "user/:username",
        element: <User />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
