import './ItemCard.css'
import { useState } from 'react'

function ItemCard(props) {

    const [STATE, ToggleSTATE] = useState(<button id='SELECT_BTN' onClick={ToggleUnselect}>Select</button>)

    function ToggleUnselect() {
        ToggleSTATE(<button id='UNSELECT_BTN' onClick={ToggleSelect}>Unselect</button>)
    }

    function ToggleSelect() {
        ToggleSTATE(<button id='SELECT_BTN' onClick={ToggleUnselect}>Select</button>)
    }


    return (
        <div className='ItemCard'>
            <img src={props.obj.img} alt={props.obj.name} />
            <div>
                <h2>{props.obj.name}</h2>
                {STATE}
            </div>
        </div>
    )
}

export default ItemCard