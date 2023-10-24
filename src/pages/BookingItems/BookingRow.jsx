import React from 'react';

const BookingRow = ({booking}) => {
    const {name,price,img,date}=booking
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
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
          <br/>
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-error">Pending</button>
        </th>
      </tr>
    );
};

export default BookingRow;