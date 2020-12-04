import React from 'react'
import { ApiContext } from '../../ApiContext';
import CardItem from './CardItem';
import "../Accordion/AccordionInfo/AccordionInfoStyles.css"
import AccordionInfo from '../Accordion/AccordionInfo/AccordionInfo';

/**
 * titolo riga.places[0].name
 */

function CardList() {
    const { dataApi } = React.useContext(ApiContext);
    console.log(dataApi);
    dataApi.rows.map( riga => {
        // console.log(riga);
        
    })
    
    return (
        <div className="cardItems">
            <AccordionInfo title={"SIRACUSA"}
            children={
                <CardItem  luogo={"SIRACUSA"} nome={"days.name"} data={"dayDate"}/>
            }
            />
            
        </div>
    )
}

export default CardList
