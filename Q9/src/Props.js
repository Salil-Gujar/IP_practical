export default function Props(props){
    return(
        <div>
            <h3>Welcome to Indian Railways !</h3>
            <h3>This is your train : {props.train}</h3>
            <h3>This is your boarding station : {props.bst}</h3>
            <h3>This is your destination : {props.dest}</h3>
            <h3>This is your seating class : {props.sclass}</h3>
        </div>
    )
}