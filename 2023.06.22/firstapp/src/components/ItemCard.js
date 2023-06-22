import './ItemCard.css'

function ItemCard(props) {
    return(
        <div className='ItemCard'>
            <img src={props.img} alt={props.name}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default ItemCard