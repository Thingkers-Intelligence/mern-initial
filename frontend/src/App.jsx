import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { HomePasge } from './pages/HomePage'
import { Navbar } from './components/Navbar'
import { useColorModeValue } from '@chakra-ui/react'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"} bg={useColorModeValue('gray.100','ray.900')}> 
    
    <Navbar />
      <Routes>
        <Route path='/' element={< HomePasge/>}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
      </Routes>



    </Box>
  )
}

export default App
