import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BookingItems = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default BookingItems;
