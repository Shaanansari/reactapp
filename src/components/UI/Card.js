import "./Card.css";

function Card(props) {
    const classes = 'card ' + props.className; // Organise code of imported Component or
    //passing multiple css

    return (
        <div className={classes}> {props.children} </div>//render data in Components 
    );

}

export default Card;