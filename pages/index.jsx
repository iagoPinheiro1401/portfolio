import styled from "styled-components"

import H1 from "../src/components/typography/h1/H1"
import H2 from "../src/components/typography/h2/H2"
import Profile from "../src/components/profile/profile"
import Presentation from "../src/components/presentation/Presentation"
import Skills from "../src/components/skills/SkillsCard"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    gap: 30px;
`

export default function HomePage() {
   return(
    <Container>
        <H1>Desenvolvedor Frontend, Backend e Fullstack</H1>
        <H2>Capaz de atuar no frontend e backend com código simples e limpo</H2>
        <Profile />
        <Presentation />
        <Skills />
    </Container>
   )
}