import styled from "styled-components"

import H2 from "../typography/h2/H2"

const NewH2 = styled(H2)`
    color: white;
`

const Container = styled.div`
    min-height: 420px;
    width: 100%;
    background-color: #6E07F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const ContainerImg = styled.div`
    display: flex;
    gap: 60px;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
`

const ImgContacts = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 15px;
`

const Line = styled.div`
    width: 100%;
    background-color: #C9C9C9;
    min-height: 1px;
`

function Baseboard() {
    return(
        <Container>
            <Img src="ipWhite.png"/>
            <NewH2>desenvolvedor web focado na criação de soluções Full Stack</NewH2>
            <NewH2>Vivendo, aprendendo & subindo de nível um dia de cada vez.</NewH2>
            <ContainerImg>
                <a href="https://www.linkedin.com/in/iago-pinheiro-37980926b/">
                    <ImgContacts src="linkedin.png"/>
                </a>
                <a href="https://github.com/iagoPinheiro1401">
                    <ImgContacts src="GIT.png"/>
                </a>
            </ContainerImg>
            <Line/>
            <NewH2>Created by Iago Pinheiro</NewH2>
        </Container>
    )
}

export default Baseboard