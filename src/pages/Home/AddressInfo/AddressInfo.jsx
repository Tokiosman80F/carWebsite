import { FaCalendarDays, FaLocationDot, FaPhone } from "react-icons/fa6";
const AddressInfo = () => {
    return (
        <div className="bg-black rounded-2xl my-10"> 
            <div className="text-white flex justify-around items-center py-24">
            {/* div -1 */}
            <div className="flex justify-center items-center gap-4">
                {/* icon */}
                <FaCalendarDays size="46px" className="text-red-500" ></FaCalendarDays>
                {/* info */}
                <div >
                    <p className="font-semibold">We are open monday-friday</p>
                    <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            {/* div -2 */}
            <div className="flex justify-center items-center gap-4">
                {/* icon */}
              <FaPhone size="46px" className="text-red-500"></FaPhone>
                {/* info */}
                <div>
                    <p className="font-semibold">Have a question?</p>
                    <h2  className="text-2xl font-bold">+2546 251 2658</h2>
                </div>
            </div>
            {/* div -3 */}
            <div className="flex justify-center items-center gap-4">
                {/* icon */}
                <FaLocationDot size="46px" className="text-red-500"></FaLocationDot>
                {/* info */}
                <div>
                    <p className="font-semibold">Need a repair? our address</p>
                    <h2  className="text-2xl font-bold">Liza Street, New York</h2>
                </div>
            </div>
            </div>        
        </div>
    );
};

export default AddressInfo;