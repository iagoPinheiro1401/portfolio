import styled from "styled-components"

import H1 from "../src/components/typography/h1/H1"
import H2 from "../src/components/typography/h2/H2"
import Profile from "../src/components/profile/profile"
import Presentation from "../src/components/presentation/Presentation"
import Skills from "../src/components/skills/SkillsCard"
import Projects from "../src/components/projects/Projects"
import Baseboard from "../src/components/baseboard/Baseboard"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 30px;
`

const Img = styled.img`
    position: relative;
    bottom: -30px;

    @media (max-width: 850px) {
        width: 400px
    }
`


const ImgIP = styled.img`
    max-width: 100px;
    max-height: 100%;
`

const LineSmall = styled.div`
    background-color: #6E07F3;
    min-height: 7px;
    width: 100px;
    border-radius: 20px;
    position: relative;
    top: -50px;
`

const NewH2 = styled(H2)`
    color: #6E07F3;
`

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
`

export default function HomePage() {
   return(
    <>
        <ContainerLogo>
            <ImgIP src="ipPurple.png"/>
            <NewH2>Iago Pinheiro</NewH2>
        </ContainerLogo>
        <Container>
            <H1>Desenvolvedor Frontend, Backend e Fullstack</H1>
            <H2>Capaz de atuar no frontend e backend com código simples e limpo</H2>
            <Profile />
            <Img src="image.png"/>  
            <Presentation />
            <Skills />
            <LineSmall />
            <Projects />
            <Baseboard />
        </Container>
    </>
   )
}