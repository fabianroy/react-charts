import './App.css'
import Navbar2 from './components/navbar2/Navbar2';
import Priceoptions from './components/priceOptions/PriceOptions';
import Linechart from './components/linechart/Linechart';
import Phones from './components/phones/Phones';

function App() {

  return (
    <>

      <Navbar2></Navbar2>
      <Priceoptions></Priceoptions>
      <div className='w-fit mx-auto mt-20'>
        <Linechart></Linechart>
        <Phones></Phones>
      </div>
    </>
  )
}

export default App