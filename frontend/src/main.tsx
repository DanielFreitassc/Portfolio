import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/Global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <>
     <Header/>
     <Home/>
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
