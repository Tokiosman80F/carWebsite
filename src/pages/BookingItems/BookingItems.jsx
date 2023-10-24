import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const BookingItems = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/booking?email=${user?.email}`;
  
  const [bookings, setBookings] = useState([]);

  const handleDeleteItem = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/booking/${id}`, {
        method:"DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount>0)
        {
            confirm("Wanna a delete the item?")
            const remainingItems=bookings.filter(item=>item._id!==id)
            setBookings(remainingItems)
        }
      });
  };
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data)
        console.log(data);
      });
  }, []);
  
  
  
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
          <tbody>{bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDeleteItem={handleDeleteItem}></BookingRow>)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingItems;
