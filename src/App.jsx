import FootherPage from './pages/Foother/FootherPage.jsx'
import NavigationPage from './pages/navigation/NavigationPage.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


function App() {

  return (
    <div className=' top-0 left-0 w-screen h-screen bg-gradient-to-tr
     from-lime-950 via-lime-500 to-yellow-200 -z-20'>
      <NavigationPage />
      <AppRoutes />
      <FootherPage />
    </div>
  )
}

export default App
