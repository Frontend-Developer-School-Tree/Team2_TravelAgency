import React from 'react'
import { ApiContext } from '../../ApiContext';
import CardItem from './CardItem';

function CardList() {
    const { dataApi } = React.useContext(ApiContext);

    dataApi.rows.map( riga => {
        console.log(riga.places[0].name);
        
    })

    return (
        <h1>Hello </h1>
    )
}

export default CardList
