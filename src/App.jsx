import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';

function App() {
   const coffees = useLoaderData();

   return (
      <div>
         <h1 className="text-4xl text-stone-500 text-center font-semibold pt-10">Our Popular Products</h1>

         <div className='md:p-20 grid md:grid-cols-2 gap-6'>
            {
               coffees.map(coffee => <CoffeeCard
                  key={coffee._id}
                  coffee={coffee}
               ></CoffeeCard>)
            }
         </div>
      </div>
   )
}

export default App
