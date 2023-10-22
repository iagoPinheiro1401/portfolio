import styled from "styled-components"

import H1 from "../typography/h1/H1"
import H2 from "../typography/h2/H2"

const NewH1 = styled(H1)`
    color: white;
`

const NewH2 = styled(H2)`
    color: white;
    font-size: 20px;
    font-weight: lighter;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const PresentationContainer  = styled.div`
    min-height: 450px;
    width: 100%;
    background-color: #6E07F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px 0 100px 0;
`

function Presentation() {
    return(
            <PresentationContainer>
                <NewH1>Olá, eu sou Iago. Prazer em conhecê-lo.</NewH1>
                <TextContainer>
                     <NewH2>Olá, sou Iago Pinheiro, estudante de Ciências da Computação, tenho 18 anos, estou busca do meu</NewH2> 
                     <NewH2>primeiro emprego como desenvolvedor fullstack. Com habilidades em front-end e back-end,</NewH2>
                     <NewH2>estou pronto para contribuir em projetos inovadores. Explore meu portfólio e entre em</NewH2>
                     <NewH2>contato para saber mais.</NewH2>
                </TextContainer>
            </PresentationContainer>
    )
}

export default Presentation