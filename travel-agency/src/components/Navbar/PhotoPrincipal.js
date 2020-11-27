import React from 'react'
import logo from '../../img/logo.svg'
import Btn from '../Button/Btn'
import { ImgNav, Logo, SfondoBlack, TextPres } from "./PhotoPrincipalStyles";
import ApiContext from "../../ApiContext";
import NavBar from './NavBar';


const PhotoPrincipal = () => {
    
    return (
        <ApiContext.Consumer>
            { value => (
                <div style={{padding:0}}>
                    <ImgNav />
                    <div className="bckImg">
                        {/* <Logo src={logo} /> */}
                        <NavBar logo={logo}/>
                        <TextPres>
                            <h1>
                                PER {value.customerName} <br />
                                {value.title}
                            </h1>
                            <Btn title="SCOPRI DI PIU'" />
                        </TextPres>
                    </div>
                    {/* <SfondoBlack> */}
                    {/* </SfondoBlack> */}
                </div>
            )}
        </ApiContext.Consumer>
    )
}

export default PhotoPrincipal
