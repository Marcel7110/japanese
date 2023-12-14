import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import VocabList from "./pages/VocabList"
import Vocabulary from "./pages/Vocabulary"
import Kanji from './pages/Kanji'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="vocabulary" element={<VocabList/>}/>
      <Route path="/vocabulary/theme/:theme" element={<Vocabulary/>}/>
      <Route path="/kanji" element={<Kanji/>}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
