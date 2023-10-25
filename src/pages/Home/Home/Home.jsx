import About from "../About/About";
import AddressInfo from "../AddressInfo/AddressInfo";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
    return (
        <>
         <Banner></Banner> 
         <About></About>
         <Service></Service>
         <AddressInfo></AddressInfo>
        </>
    );
};

export default Home;