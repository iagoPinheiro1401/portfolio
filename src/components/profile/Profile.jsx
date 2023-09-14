import styled from "styled-components"

const Img = styled.img`
    border-radius: 100px;
    padding-top: 25px;
`

function Profile() {
    return(
        <Img src="perfil.jpeg" width="200px"/>  
    )
}

export default Profile