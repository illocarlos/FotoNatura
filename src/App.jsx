import Foother from "./components/Foother/Foother"
import NavBar from "./components/NavBar/NavBar"
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Foother />
    </div>
  )
}

export default App
