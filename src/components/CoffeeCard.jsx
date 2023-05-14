import { FaRegEye, FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

   const handleDelete = _id => {
      // console.log(_id);

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
               method: 'DELETE',
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        'Deleted!',
                        'Your coffee has been deleted.',
                        'success'
                     )
                     const remaining = coffees.filter(cof => cof._id !== _id);
                     setCoffees(remaining);
                  }
               })
         }
      })
   }

   return (
      <div>
         <div className="card card-side shadow-md rounded-md bg-[#F5F4F1] p-8">
            <figure><img src={photo} alt="coffee" /></figure>
            <div className="flex justify-between items-center w-full">
               <div>
                  <h2 className="card-title">Name: {name}</h2>
                  <p className='mt-2'><span className='font-semibold'>Quantity:</span> {quantity}</p>
                  <p className='mt-1'><span className='font-semibold'>Supplier:</span> {supplier}</p>
                  <p className='mt-1'><span className='font-semibold'>Taste:</span> {taste}</p>
                  <p className='mt-1'><span className='font-semibold'>Category:</span> {category}</p>
                  <p className='mt-1'><span className='font-semibold'>Details:</span> {details}</p>
               </div>

               <div className="card-actions justify-end">
                  <div className="grid space-y-2">
                     <button className="btn btn-sm rounded-md bg-orange-300 hover:bg-[#c79852]"><FaRegEye /></button>
                     <Link to={`update-coffee/${_id}`}>
                        <button className="btn btn-sm rounded-md"><FaRegEdit /></button>
                     </Link>
                     <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm rounded-md bg-red-500 hover:bg-[#bd4242]"><FaTrash /></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;