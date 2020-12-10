import React, { Component } from 'react'

export class CardItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            immagini:{},
            hotel:{},
        }
    }
    
    componentDidMount(){
        this.setState({hotel: [...this.props.pernottamento] });
        
        if(this.state.hotel !== undefined) this.setState({immagini: this.state.hotel.images})
    }
    
    render() {
        const [trasporto]  =[...this.props.trasporto];
        
        
        console.log("hotel " , this.state.hotel );
        // usare trasporto per il contenuto della modal per la sezione noleggio
        return (
            <>
                <div className="cardBody">
                    <div>
                        <h5>{this.props.titolo}</h5>
                        <span>{this.props.nome}</span> <span>{this.props.data}</span>
                        <div>
                            <img src={this.props.img} alt="img"/>
                            <p>{this.props.descrizione}</p>
                        </div>
                        <div>
                            <div>box colorato con auto</div>
                            {trasporto &&
                                <div className="noleggioauto">
                                    <h3>{trasporto.name}</h3>
                                    <span>LUOGO DI RITIRO</span> <span>{trasporto.pickup.name}</span><br></br>
                                    <span>LUOGO DI RILASCIO</span> <span>{trasporto.return.name}</span>
                                </div>
                            }
                            {this.state.hotel &&
                                <div className="pernottamento">
                                    hotel
                                    
                                    {this.state.immagini &&
                                        <div>
                                            <img src={this.state.immagini.image} alt={this.state.immagini.image_name}/>
                                        </div>
                                    }
                                    <h3>{this.state.hotel.name}</h3>
                                    <span>{this.state.hotel.description}</span>
                                </div>
                            }
                            <span>{this.props.incluso}</span>
                            {this.props.escluso!=null && <span> {this.props.escluso}</span>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default CardItem


CardItem.defaultProps = {
    titolo:"", 
    nome:"",
    data:"",
    descrizione:"",
    img:"",
    pernottamento:"",
    trasporto:"",
    incluso:"",
    escluso:""
  }