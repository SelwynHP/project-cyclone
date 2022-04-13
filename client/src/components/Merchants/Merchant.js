import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Merchant = ({store}) => {
    return (
        <Wrapper>
            <NavLink to={`/stores/${store.companyHandle}`}>
                <div>
                    <img src={store?.companyLogo} alt="a company logo"/>
                    <span>{store.companyName}</span>
                    <p>{store?.companySlogan}</p>
                </div>

            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: navajowhite;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border-radius: 20px;

  a {
    text-decoration: none;

    & :hover {
      cursor: pointer;
    }
  }
`

export default Merchant;