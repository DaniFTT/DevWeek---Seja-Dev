import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    color:${({ theme }) => theme.colors.light};
    padding-left: 40px;

    @media (max-widht: 500px){
        min-height: 60vh;
    }
`
const FormDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`
const H2 = styled.h2`
    @media (max-width: 500px){
        margin: 20px -15px;
    }

`

export default function HomePageHeader () {
    return (
        <ImageContainer>
            <Container>
                <Logo />
                <H2>A melhor Brincadeira do Natal</H2>
            </Container>
            <FormDiv>
                <NameEmailForm />
            </FormDiv>
        </ImageContainer>
    )
}