import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,title,img,price}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-[22px] font-semibold text-red-500">Price: {price}</p>
          <div className="card-actions justify-end">
           <Link to={`/booking/${_id}`}>
           <button className="btn btn-error">Buy Now</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;