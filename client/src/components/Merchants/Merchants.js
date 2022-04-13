import {stores} from "../../data";
import Merchant from "./Merchant";
import styled from "styled-components";

const Merchants = () => {
    return (
        <Wrapper>
            {stores.map(store => {
                return <Merchant store={store}/>
            })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`

export default Merchants;