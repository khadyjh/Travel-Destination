import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
import data from '../../data/data.json'

function Home(){
    return(
        <div>
            <Header />
            <Tours data={data} />
            <Footer />
        </div>
    )
}

export default Home;