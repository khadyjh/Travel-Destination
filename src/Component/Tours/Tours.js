
import './Tours.css'

function Tours(props) {
    return (
        <div className='rendDiv'>
            {props.data.map(dist => {
                return (
                    <div className='dataDiv'>
                        <p>
                            {dist.name}
                        </p>

                        <img src={dist.image} alt={dist.name} className='imgStyle' />

                    </div>
                )
            })}

        </div>
    )
}
export default Tours;

