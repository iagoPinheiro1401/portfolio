import H1 from "../src/components/h1/H1"
import Subtitle from "../src/components/subtitle/Subtitle"
import Profile from "../src/components/profile/profile"
import Button from "../src/components/button/Button"

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 70px;
    gap: 30px;
`

export default function HomePage() {
   return(
    <Container>
        <H1>Desenvolvedor Frontend, Backend e Fullstack</H1>
        <Subtitle>Sou capacitado para desenvolver tanto a parte do cliente tanto a parte do servidor.</Subtitle>
        <Profile />
        <Button />
    </Container>
   )
}