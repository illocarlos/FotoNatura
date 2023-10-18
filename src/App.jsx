import FootherPage from './pages/Foother/FootherPage.jsx'
import NavigationPage from './pages/navigation/NavigationPage.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


function App() {

  return (
    <div className=' top-0 left-0 w-screen h-screen bg-gradient-to-tr
     from-green-950 via-green-700 to-gray-500 -z-10'>
      <NavigationPage />
      <AppRoutes />
      <FootherPage />
    </div>
  )
}

export default App
