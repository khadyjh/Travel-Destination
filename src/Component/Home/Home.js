import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
import data from '../../data/data.json'
import Tour  from "../Tours/Tour/Tour";
import { Route,Routes } from "react-router-dom";

function Home(){
    return(
        <div>
            <Header />
            <Tours  />
            <Footer />
            {/* <Tour data={data} /> */}
        </div>
    )
}

export default Home;