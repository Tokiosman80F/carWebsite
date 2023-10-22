import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price } = service;
  return (
    <div>
      <p>this is checkout:{title}</p>

      <form className="card-body">
        <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className="form-control">
          <input
            type="email"
            placeholder="First Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="tel"
            placeholder="Phone"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full">
          <textarea
            type="textarea"
            placeholder="Your Message"
            className="textarea textarea-bordered h-32"
            required
          />
        </div>
        
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn bg-red-500 text-white hover:bg-red-400 " value="Confirm Your Order"/>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
