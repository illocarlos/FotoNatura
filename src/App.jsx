import FootherPage from './pages/Foother/FootherPage.jsx'
import NavigationPage from './pages/navigation/NavigationPage.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


function App() {

  return (
    <div className=' top-0 left-0 w-screen h-screen bg-gradient-to-tr
      from-black via-lime-500 to-white -z-20'>
      <NavigationPage />
      <AppRoutes />
      <FootherPage />
    </div>
  )
}

export default App
