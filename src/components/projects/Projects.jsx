import styled from "styled-components"

import H1 from "../typography/h1/H1"
import H2 from "../typography/h2/H2"

const Container = styled.div`
    display: flex;
    gap: 100px;
    padding: 50px 0;

    @media (max-width: 1070px) {
        flex-direction: column;
    }
`

const ProjectsCard = styled.div`
    max-width: 400px;
    margin: 50px 30px 70px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media (max-width: 450px) {
        width: 300px;
    }
`

const NewH2 = styled(H2)`
    color: #6E07F3;
`

const Img = styled.img`
    height: 200px;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.4);
    }

    @media (max-width: 500px) {
        max-width: 350px;
    }
`

const ImgSkills = styled.img`
    width: 70px;
    height: 63px;
    border-radius: 10px;
`

const Card = styled.div`
    background-color: white;
    display: flex;
    border-radius: 20px;
    border: 1px solid #C9C9C9;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`

const ContainerImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`

function Projects() {
    return(
        <>
            <H1>Com esses conhecimentos eu criei esses projetos:</H1>
            <Container>
                <Card>
                    <ProjectsCard>
                        <H1>Social Dev</H1>
                        <a href="https://social-dev-7un2-rcsbg9sib-iagopinheiro1401.vercel.app/">
                            <Img src="socialdev.png"/>
                        </a>
                        <H2>Este projeto foi construído inteiramente por mim, ele consiste em um site onde Devs podem trocar ideias.</H2>
                        <NewH2>Principais ferramentas:</NewH2>
                        <ContainerImage>
                            <ImgSkills src="react.png"/>
                            <ImgSkills src="node.png"/>
                            <ImgSkills src="mongo.png"/>
                            <ImgSkills src="next.png"/>
                        </ContainerImage>
                    </ProjectsCard>
                </Card>
                <Card>
                    <ProjectsCard>
                            <H1>Jogo da Velha</H1>
                            <a href="https://react-jogo-da-velha-sigma.vercel.app/">
                                <Img src="jogo.png"/>
                            </a>
                            <H2>Este é o famoso jogo da velha, bem simples mais muito intuitivo.</H2>
                            <NewH2>Principais ferramentas:</NewH2>
                            <ContainerImage>
                                <ImgSkills src="react.png"/>
                                <ImgSkills src="next.png"/>
                            </ContainerImage>
                        </ProjectsCard>
                </Card>
                <Card>
                    <ProjectsCard>
                            <H1>Clima Dev</H1>
                            <a href="https://clima-dev-six.vercel.app/">
                                <Img src="climadev.png"/>
                            </a>
                            <H2>Projeto que qpresenta temperatura atual e futuira, informações buscadas em uma API.</H2>
                            <NewH2>Principais ferramentas:</NewH2>
                            <ContainerImage>
                                <ImgSkills src="react.png"/>
                                <ImgSkills src="api.png"/>
                                <ImgSkills src="next.png"/>
                                <ImgSkills src="styled.jpg"/>
                            </ContainerImage>
                        </ProjectsCard>
                </Card>
            </Container>
        </>
    )
}

export default Projects