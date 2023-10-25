import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const BookingItems = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/booking?email=${user?.email}`;

  const [bookings, setBookings] = useState([]);

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:3000/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          confirm("Wanna a delete the item?");
          const remainingItems = bookings.filter((item) => item._id !== id);
          setBookings(remainingItems);
        }
      });
  };

  const handleBookingItem = (id) => {
    console.log("confirm items=>", id);
    fetch(`http://localhost:3000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: "confirm",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0)
        {
          console.log("confirm");
          const remaining=bookings.filter(booking=>booking._id!==id)
          const updated=bookings.find(booking=>booking._id===id)
          updated.status="confirm"
          const newUpdate=[updated,...remaining]
          setBookings(newUpdate)
        }
      });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, [url]);

  return (
    <div>
      <h1 className="text-3xl text-center">Booking Items</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteItem={handleDeleteItem}
                handleBookingItem={handleBookingItem}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingItems;
