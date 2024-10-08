import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/Global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Projects } from './pages/Projects'

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  },
  {
    path:"/projects",
    element:
    <>
      <Header/>
      <Projects/>
      <Footer/>
    </>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </StrictMode>,
)
