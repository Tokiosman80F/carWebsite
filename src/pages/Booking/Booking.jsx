import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, img, _id } = service;
  const onhandleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const message = form.message.value;

    const bookingOrder = {
      name,
      email,
      price,
      message,
      date,
      img,
      service: title,
      service_id: _id,
    };
    console.log(bookingOrder);

    fetch('http://localhost:3000/booking', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingOrder)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        Booking Service for : {title}
      </h2>

      <form className="card-body" onSubmit={onhandleBooking}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              className="input input-bordered"
              required
              name="date"
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              defaultValue={user?.email}
              name="email"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={`$` + price}
              className="input input-bordered"
              required
              name="price"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <textarea
            type="textarea"
            placeholder="Your Message"
            className="textarea textarea-bordered h-32"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            name="message"
            className="btn bg-red-500 text-white hover:bg-red-400 "
            value="Confirm Your Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Booking;
