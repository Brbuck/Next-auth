import styled from 'styled-components';
import Button from '../Components/Button'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

export const Sign = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;

    padding: 20px 50px;
    background-color: #e5e5e5;

    h1{
        margin-bottom: 20px;
        color: #7a7672;
    }

    span{
        margin-bottom: 25px;
        color: #7a7672;
    }
`

export const EditGoogleButton = styled(Button)`
    background-color: #FFF;
    margin-bottom: 15px;
`

export const EditLinkedinButton = styled(Button)`
    background-color: #1E90FF;
    
    span{
        color: #FFF;
    }
`