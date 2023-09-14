import styled from "styled-components"

const H2 = styled.h2`
    font-weight: 300;
    font-size: 17px;
`

export default function Subtitle(props) {
    return(
        <H2>{props.children}</H2>
    )
}