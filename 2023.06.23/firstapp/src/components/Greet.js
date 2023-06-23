import './Greet.css'

function Greet(props){
    return(
        <div id="Greet">
            <h1>Hey, {props.children}!</h1>
        </div>
    )
}

export default Greet