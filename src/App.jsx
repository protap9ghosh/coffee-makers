import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';
import { useState } from 'react';

function App() {
   const loadedCoffees = useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffees);

   return (
      <div>
         <h1 className="text-4xl text-stone-500 text-center font-semibold pt-10">Our Popular Products</h1>

         <div className='md:p-20 grid md:grid-cols-2 gap-6'>
            {
               coffees.map(coffee => <CoffeeCard
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
               ></CoffeeCard>)
            }
         </div>
      </div>
   )
}

export default App
