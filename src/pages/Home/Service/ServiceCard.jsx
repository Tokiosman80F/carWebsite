
const ServiceCard = ({service}) => {
    const {title,img,price}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-[22px] font-semibold text-red-500">Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;