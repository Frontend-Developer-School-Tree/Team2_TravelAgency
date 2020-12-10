import React, { Children } from 'react'
import { ApiContext } from '../../ApiContext';
import CardItem from './CardItem';
import "../Accordion/AccordionInfo/AccordionInfoStyles.css"
import AccordionInfo from '../Accordion/AccordionInfo/AccordionInfo';

/**
 * titolo riga.places[0].name
 */

const dateFormat = (datain) => {
    return datain.split('-').reverse().join('/');
  }


function CardList() {
    const { dataApi } = React.useContext(ApiContext);

    // console.log(dataApi);

    return (
        <div className="cardItems">
            {
                dataApi.rows.map( riga =>{
                    const name  = riga.places.map(el => el.name );
                    const transports  = riga.transports.map(el => el);
                    const pernottamento  = riga.accomodations.map(el => el);
                    console.log(name);
                    return(
                        <>
                        <AccordionInfo title={name}

                        children={
                            riga.days.map(giorno => {
                                const imgurl  = giorno.images.map(el => el.image );                                
                                return(
                                    <CardItem   titolo={name} 
                                                nome={giorno.name}
                                                data={dateFormat(riga.dayDate)}
                                                descrizione={riga.days[0].description}
                                                img={imgurl}
                                                pernottamento={pernottamento}
                                                trasporto={transports}
                                                incluso={riga.included}
                                                escluso={riga.notIncluded}
                                    />
    
                                )
                            })

                        }
                        />
                        </>
                    ) 
                    
                })
            }
        </div>
            
    )
}

export default CardList
