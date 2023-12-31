const BookingRow = ({ booking, handleDeleteItem, handleBookingItem }) => {
  const { _id, name, price, img, date, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            className="btn btn-circle btn-sm btn-outline"
            onClick={() => handleDeleteItem(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 h-24 rounded">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            {/* <div className="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
        {price}
        <br />
      </td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-success">Confirm</button>
        ) : (
          <button
            className="btn btn-error"
            onClick={() => handleBookingItem(_id)}
          >
            Confirm Now
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
