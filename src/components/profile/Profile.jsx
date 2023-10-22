import styled from "styled-components"

const Img = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 220px;
    margin: 60px 0 100px 0;
    background-color: red;
`

function Profile() {
    return(
        <Img src="perfil.jpeg"/>  
    )
}

export default Profile