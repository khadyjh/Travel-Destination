import '../Tours.css'
import { Link } from 'react-router-dom';

function Tour(props) {

    return (
        <div className='rendDiv' >
            {props.data.map(dist => {
                return (
                    <div className='dataDiv' key={dist.id}>
                        <p>
                            {dist.name}
                        </p>

                       <Link to= {`/detal/${dist.id}`} > <img src={dist.image} alt={dist.name} className='imgStyle' /> </Link> 

                    </div>
                )
            })}

        </div>
    )

}

export default Tour;