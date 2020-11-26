import React from 'react'
import logo from '../../img/logo.svg'
import Btn from '../Button/Btn'
import { ImgNav, Logo, SfondoBlack, TextPres } from "./PhotoPrincipalStyles";

const PhotoPrincipal = () => {
    
    return (
        <div>
            <ImgNav />
            <SfondoBlack>
                <Logo src={logo} />
                <TextPres>
                    <h1>
                        PER VANLATUM <br />
                        TEST TOUR SICILE ORIENTALE NOTO ET TAORMINA
                    </h1>
                    <Btn title="SCOPRI DI PIU'" />
                </TextPres>
            </SfondoBlack>
        </div>
    )
}

export default PhotoPrincipal
