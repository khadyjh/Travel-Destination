import { useParams } from "react-router-dom";
import { useState } from "react";
import './TourDetails.css'


function Tourdetails(props) {
    const { id } = useParams();
    const [readMore, setReadMore] = useState(false);
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '
    return (
        <div className='rendDiv'>


            {props.data.filter(tour => tour.id === id).map(dist => {


                return (
                    <div className='dataDiv'>
                        <p  >{dist.name}</p>
                        <img src={dist.image} className='imgStyle' />
                        {/* <p style={{ margin: 20 }}>{dist.info}</p> */}

                        <div style={{margin:20}} className="dataDiv1, rendDiv">
                            <a onClick={() => { setReadMore(!readMore) }}  ><h1>{linkName}</h1></a>
                           <p> {readMore && dist.info} </p>
                        </div>


                    </div>
                )




            })}
        </div>
    )
}
export default Tourdetails;