import styled from "styled-components"

const ContactsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 30px 0 170px 0;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`

function Contacts() {
    return(
        <ContactsContainer>
            <a href="https://www.linkedin.com/in/iago-pinheiro-37980926b/">
                <Img src="linkedin.png"/>
            </a>
            <a href="https://github.com/iagoPinheiro1401">
                <Img src="GIT.png"/>
            </a>
        </ContactsContainer>
    )
}

export default Contacts