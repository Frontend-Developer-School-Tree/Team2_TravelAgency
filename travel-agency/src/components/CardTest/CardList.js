import React from 'react'
import { ApiContext } from '../../ApiContext';
import CardItem from './CardItem';

/**
 * titolo riga.places[0].name
 */

function CardList() {
    const { dataApi } = React.useContext(ApiContext);

    dataApi.rows.map( riga => {
        console.log(riga);
        
    })
    
    return (
        <CardItem titolo={"SIRACUSA"} luogo={"SIRACUSA"} nome={"days.name"} data={"dayDate"}
 
        />
    )
}

export default CardList
