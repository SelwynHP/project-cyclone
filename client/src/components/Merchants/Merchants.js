import Merchant from "./Merchant";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Loader from "../Loader";

const Merchants = () => {
    const [merchants, setMerchants] = useState(null);
    useEffect(() => {
        fetch("/api/merchants")
            .then(res => res.json())
            .then(data => setMerchants(data.merchants));
    }, [])
    return (
        <Wrapper>
            {/*{stores.map(store => {*/}
            {/*    return <Merchant key={store.merchantId} store={store}/>*/}
            {/*})}*/}
            {merchants &&
                merchants.map(merchant => {
                    return <Merchant key={merchant._id} merchant={merchant}/>
                })}
            {!merchants &&
                <Loader/>}
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