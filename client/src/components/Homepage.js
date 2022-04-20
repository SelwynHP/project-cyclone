import styled from "styled-components";
import delivery from "../assets/delivery.jpg";

const Homepage = () => {
    return (
        <Wrapper>
            <Goal>
                <img src={delivery} alt="delivery person"/>
                <div></div>
            </Goal>
            <div>Features</div>
            <div>Selection</div>
            <div>About Us</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  & > div {
    height: 300px;
  }
`
const Goal = styled.div`
  overflow: hidden;

  img {
    width: 100vw;
  }

  & div {
    width: 15%;
    height: 10%;
    background-color: #888;
    //opacity: 0.5;
  }
`

export default Homepage;