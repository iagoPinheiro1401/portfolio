import styled from "styled-components"

import H1 from "../src/components/typography/h1/H1"
import H2 from "../src/components/typography/h2/H2"
import Profile from "../src/components/profile/profile"
import Presentation from "../src/components/presentation/Presentation"
import Skills from "../src/components/skills/SkillsCard"
import Contacts from "../src/components/contacts/Contacts"
import Projects from "../src/components/projects/Projects"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    gap: 30px;
`
const Line = styled.div`
    background-color: #C9C9C9;
    min-height: 1px;
    width: 100%;
`

export default function HomePage() {
   return(
    <Container>
        <H1>Desenvolvedor Frontend, Backend e Fullstack</H1>
        <H2>Capaz de atuar no frontend e backend com código simples e limpo</H2>
        <Profile />
        <Contacts />
        <Presentation />
        <Skills />
        <Line />
        <Projects />
    </Container>
   )
}