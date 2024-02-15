import { RouterProvider } from 'react-router-dom'
import AppRouter from '@routers/App.router'


function App() {
  return (
    <>
     <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
