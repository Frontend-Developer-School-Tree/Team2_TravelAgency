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
            <h2>---</h2>
            {
                dataApi.rows.map( riga =>{
                    const name  = riga.places.map(el => el.name );
                    console.log(riga);
                    return(
                        <>
                        <AccordionInfo
                        children={
                            riga.days.map(giorno => {
                                return(
                                    <CardItem  luogo={"luogo"}
                                                titolo={name} 
                                                nome={giorno.name}
                                                data={dateFormat(riga.dayDate)}
                                                descrizione={riga.days[0].description}
                                    />
    
                                )
                            })

                        }
                        // {
                        // }
                        />
                        <h2>****</h2>
                        </>
                    ) 
                    
                })
            }


                    {/* <AccordionInfo title={"SIRACUSA"}
                    children={ 
                    <CardItem  luogo={"luogo"} nome={giorno.name} data={dateFormat(riga.dayDate)}
                    descrizione={riga.days[0].description}
                    />
                    }
                    
                    /> */}
                
            <h2>---</h2>
        </div>
            
    )
}

export default CardList
