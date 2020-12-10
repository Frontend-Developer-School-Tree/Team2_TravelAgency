import React, { Component } from 'react'

export class CardItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             titolo:'',
             dateTitolo:'',

        }
    }
    
    render() {
        return (
            <div>
                <div className="cardHeader">
                    <p>{this.props.titolo}  <span>datainizio - datafine mese</span></p>
                </div>
                <hr></hr>
                <div className="cardBody">
                    <div>
                        <span>{this.props.nome}</span> <span>{this.props.data}</span>
                        <div>
                            {/* img */}
                            <p>{this.props.descrizione}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItem

