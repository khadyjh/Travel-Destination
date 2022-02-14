
import data from '../../data/data.json'
import Tour from  './Tour/Tour'
function Tours() {
    // return (
    //     <div className='rendDiv'>
    //         {props.data.map(dist => {
    //             return (
    //                 <div className='dataDiv'>
    //                     <p>
    //                         {dist.name}
    //                     </p>

    //                     <img src={dist.image} alt={dist.name} className='imgStyle' />

    //                 </div>
    //             )
    //         })}

    //     </div>
    // )

    return(
        <div>
            <Tour data={data}/>
        </div>
        
    )

}
export default Tours;

