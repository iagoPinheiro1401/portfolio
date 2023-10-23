import styled from "styled-components"

const Img = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 220px;
    margin-top: 70px;
`

function Profile() {
    return(
        <Img src="perfil.jpeg"/>  
    )
}

export default Profile