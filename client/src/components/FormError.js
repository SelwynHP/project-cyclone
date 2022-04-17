import styled from "styled-components";

const FormError = ({error}) => {
    return (
        <Wrapper>
            {error}
        </Wrapper>
    )
}

const Wrapper = styled.span`
  color: darkred;
`

export default FormError;