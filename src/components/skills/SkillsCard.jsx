import styled from "styled-components"

import H1 from "../typography/h1/H1"
import H2 from "../typography/h2/H2"

const NewH1 = styled(H1)`
    font-size: 25px;
    font-weight: bold;
`

const NewH2 = styled(H2)`
    color: #6E07F3;
`

const ContainerCards = styled.div`
    background-color: white;
    display: flex;
    border-radius: 20px;
    border: 1px solid #C9C9C9;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    position: relative;
    top: -150px;

    @media (max-width: 1070px) {
        flex-direction: column;
        top: -100px;
    }

    @media (max-width: 500px) {
        width: 350px;
    }
`

const Card = styled.div`
    max-width: 400px;
    height: 100%;
    margin: 50px 0 150px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 500px) {
        gap: 15px;
    }
`

const Img = styled.img`
    width: 100px;
    height: 100px;
`

const Line = styled.div`
    width: 1px;
    background-color: #C9C9C9;
    min-height: 100%;
    margin: 0 20px;

    @media (max-width: 1070px) {
        width: 100%;
        height: 1px;
        position: relative;
        left: -20px;
    }
`

function Skills() {
    return(
        <ContainerCards >
            <Card>
                <Img src="frontend.png" width="50px"/>
                <NewH1>Frontend</NewH1>
                <H2>Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.</H2>
                <NewH2>Skills:</NewH2>
                <H2>ReactJs</H2>
                <H2>NextJs</H2>
                <H2>HTML</H2>
                <H2>CSS</H2>
                <H2>SASS</H2>
                <H2>Styled Components</H2>
            </Card>
            <Line/>
            <Card>
                <Img src="backend.jpg"/>
                <NewH1>Backend</NewH1>
                <H2>Meu verdadeiro prazer está em construir as engrenagens fundamentais dos sistemas.</H2>
                <NewH2>Skills:</NewH2>
                <H2>NodeJs</H2>
                <H2>NextJs</H2>
                <H2>MongoDb</H2>
                <H2>API</H2>
                <H2>Axios</H2>
                <H2>JWT</H2>
                <H2>Express</H2>
                <H2>Rest</H2>
            </Card>
        </ContainerCards>
    )
}

export default Skills