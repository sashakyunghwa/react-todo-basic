import React from 'react';

export default props => {

    const listElements = props.list.map((item, index) => {
        return (
        <li key={index} className="collection-item">
            <div className="col s8">
             {item.title}
            </div>
            <div className="col s4 right-align">
                <button onClick={() => props.delete(index)} className="btn-floating red darken-3">Delete</button> 
            </div>
        </li>
    )
});

//anonymous function in button click so we can pass in an argument

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}

//whoever owns the data controls the data
//only app js can control the data since app holds the data
//update the state after you delete the array

