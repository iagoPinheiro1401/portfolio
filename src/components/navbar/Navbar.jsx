import styled from "styled-components"

import H2 from "../typography/h2/H2"

const ContainerNavbar = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2000;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
    justify-content: center;
`

const NewH2 = styled(H2)`
    color: #6E07F3;
`

const ImgIP = styled.img`
    max-width: 100px;
    max-height: 100%;
`

export default function Navbar() {
    return(
        <ContainerNavbar>
            <ImgIP src="ipPurple.png"/>
            <NewH2>Iago Pinheiro</NewH2>
        </ContainerNavbar>
    )
}