
import './App.css'
import HomeLeft from './components/HomeLeft/HomeLeft'
import HomeRight from './components/HomeRight/HomeRight'
import Navbar from './components/Nave/Navbar'

function App() {

  return (
    <div className='max-w-[1280px] mx-auto'>
     <Navbar></Navbar> 

     <div className='w-full border-t border-cafe-accent my-8'></div>

      <div className='flex justify-between gap-6'>
      <div>
      <HomeLeft></HomeLeft>
     </div>

     <div>
      <HomeRight></HomeRight>
      </div>
      </div>
     
    </div>
  )
}

export default App
