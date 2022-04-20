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
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: var(--dark-purple);
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 0.75em;
  color: var(--english-red);
`;

const Copyright = styled.div`
  color: var(--english-red);
  padding-left: 50px;
`;

const Navigation = styled.div`
  padding-right: 50px;
`;

const Button = styled.button`
  padding: 0 25px 0 25px;
  font-family: sans-serif;
  font-size: 1em;
  color: var(--english-red);
  background: none;
  border: 0;
  height: 25px;

  :hover {
    color: var(--lemon-glacier);
    cursor: pointer;
  }
`;

export default Footer;
