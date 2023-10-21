import styled from "styled-components"

import H1 from "../typography/h1/H1"
import H2 from "../typography/h2/H2"

const NewH1 = styled(H1)`
    color: white;
`

const PresentationContainer  = styled.div`
    min-height: 300px;
    width: 100%;
    background-color: #6E07F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px 0 100px 0;
`

function Presentation() {
    return(
            <PresentationContainer>
                <NewH1>Olá, eu sou Iago. Prazer em conhecê-lo.</NewH1>
                <H2>
                     Olá, sou Iago Pinheiro, estudante de Ciências da Computação de 18 anos em busca de meu 
                     <br/>
                     primeiro emprego como desenvolvedor fullstack. Com habilidades em front-end e back-end, 
                     <br/>
                     estou pronto para contribuir em projetos inovadores. Explore meu portfólio e entre em
                     <br />
                     contato para saber mais.
                </H2>
            </PresentationContainer>
    )
}

export default Presentation