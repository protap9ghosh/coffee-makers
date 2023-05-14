import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
   const coffee = useLoaderData();
   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

   const handleUpdateCoffee = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;

      const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
      console.log(updatedCoffee);

      // send data to the server
      fetch(`http://localhost:5000/coffee/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(updatedCoffee)
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: 'success',
                  text: 'Coffee Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
               })
            }
         })
   }

   return (
      <div className="bg-[#F4F3F0] py-10 px-5 md:px-56">
         <h2 className="text-slate-700 text-4xl font-bold text-center">Update Existing Coffee Details</h2>
         <p className="my-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

         <form onSubmit={handleUpdateCoffee}>

            {/* Form name & quantity row */}
            <div className="md:flex gap-5 mb-4">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Coffee Name</span>
                  </label>
                  <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" required className="input input-bordered w-full" />
               </div>

               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Available Quantity</span>
                  </label>
                  <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" required className="input input-bordered w-full" />
               </div>
            </div>

            {/* Form supplier & taste row */}
            <div className="md:flex gap-5 mb-4">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Supplier</span>
                  </label>
                  <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" required className="input input-bordered w-full" />
               </div>

               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Taste</span>
                  </label>
                  <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" required className="input input-bordered w-full" />
               </div>
            </div>

            {/* Form category & details row */}
            <div className="md:flex gap-5 mb-4">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Category</span>
                  </label>
                  <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" required className="input input-bordered w-full" />
               </div>

               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Details</span>
                  </label>
                  <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" required className="input input-bordered w-full" />
               </div>
            </div>

            {/* Form photo url row */}
            <div>
               <div className="form-control w-full mb-6">
                  <label className="label">
                     <span className="label-text text-[#474646] text-[16px] font-semibold">Photo</span>
                  </label>
                  <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" required className="input input-bordered w-full" />
               </div>
            </div>
            <input type="submit" value="Update Coffee Details" className="btn btn-block text-slate-600 bg-[#D2B48C] hover:bg-[#c0a37e]" />
         </form>
      </div>
   );
};

export default UpdateCoffee;