import styled from "styled-components";
import delivery from "../assets/delivery.jpg";
import products from "../assets/products.jpg";
import tracking from "../assets/tracking.jpg";

const Homepage = () => {
    return (
        <Wrapper>
            <Goal>
                <img src={delivery} alt="delivery person"/>
                <div>
                    <h2>The Goal</h2>
                    <p>From your neighborhood sushi spot to the electronics you love, choose the platform the offers you
                        what you need when you need it. From partners all over Canada.</p>
                </div>
            </Goal>
            <Features>
                <div>
                    <h2>The Features</h2>
                    <p>With cyclone, not only can you easily order your favorite dishes and products but you can track
                        'em. No more guessing games. Know where your stuff is all times and at a fast pace. More reasons
                        to shop with cyclone.</p>
                </div>
                <img src={tracking} alt="delivery person"/>
            </Features>
            <Selection>
                <img src={products} alt="delivery person"/>
                <div>
                    <h2>The Selection</h2>
                    <p>Sushi, Car parts, Movies, Smartphones, ...Kitchen Sinks!?! Yup we have it all. So stop delaying,
                        start browsing now!</p>
                </div>
            </Selection>
            <AboutUs>
                <h2>About us</h2>
                <p>Cyclone is a technology company that connects people with the best of their neighborhoods across the
                    US, Canada, Australia, Japan, and Germany. We enable local businesses to meet consumers’ needs of
                    ease and convenience, and, in turn, generate new ways for people to earn, work, and live. By
                    building the last-mile logistics infrastructure for local commerce, we’re fulfilling our mission to
                    grow and empower local economies.</p>
            </AboutUs>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;

  & p {
    margin: 0 15px;
  }

  & h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 15px;
  }

  & > div {
    height: 300px;
    display: flex;
  }

  img {

    border-radius: 5px 15px
  }
`
const Goal = styled.div`
  overflow: hidden;

  img {
    width: 50vw;
    border-radius: 5px
  }

  & div {
    text-align: center;
    width: 50vw;
    height: 100%;
    background-color: var(--hunter-green);
  }
`
const Features = styled.div`
`
const Selection = styled.div`
`
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default Homepage;