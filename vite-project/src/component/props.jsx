import React from 'react';

function props(){
    return(
        <>
        <div style={{backgroundcolor:'#ccc'}}>
        <h2>{props.name}</h2>
        <h2>{props.rollno}</h2>
        <h3>{props.course}</h3>
        </div>
    </>
    )
}
export default props;