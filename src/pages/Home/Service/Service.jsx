import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`service.json`)
      .then((res) => res.json())
      .then(data=>setServices(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center space-y-5">
        <h5 className="text-red-500 font-bold text-2xl">Service</h5>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          <br /> humour, or randomised words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-5 mt-12">
        {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
      </div>
    </div>
  );
};

export default Service;
