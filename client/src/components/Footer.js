import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <Copyright>© Cyclone 2022 {""}</Copyright>
            <Navigation>
                <Button>Terms</Button>
                <Button>Privacy</Button>
                <Button>Return Policy</Button>
                <Button>About Cyclone</Button>
            </Navigation>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: #1c1819;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 0.75em;
  color: #4d4f50;
`;

const Copyright = styled.div`
  padding-left: 50px;
`;

const Navigation = styled.div`
  padding-right: 50px;
`;

const Button = styled.button`
  padding: 0 25px 0 25px;
  font-family: sans-serif;
  font-size: 1em;
  color: gray;
  background: none;
  border: 0;
  height: 25px;

  :hover {
    color: #b0b1b1;
    cursor: pointer;
  }
`;

export default Footer;
