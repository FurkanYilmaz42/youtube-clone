import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/layout/Header"
import Sidebar from "./Components/layout/Sidebar"
import Feed from "./pages/feed"
import Details from "./pages/detail"
import Search from "./pages/search"

const App = () => {
  return (
      <BrowserRouter>
    <div className="min-h-screen">
      <Header/>

    <div className="flex w-full">
      <Sidebar /> 

      <main className="flex-1 w-full overflow-y-auto overflow-x-hidden ">
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/watch" element={<Details/>}/>
          <Route path="/results" element={<Search/>}/>
        </Routes>
      </main>
    </div>
    </div>
      </BrowserRouter>
  )
}

export default App