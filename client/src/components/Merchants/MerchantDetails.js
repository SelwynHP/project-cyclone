import styled from "styled-components";
import {useEffect, useState} from "react";
import Item from "../Items/Item";
import {useParams} from "react-router-dom";
import Loader from "../Loader";

const MerchantDetails = () => {
    const [items, setItems] = useState(null);
    const {merchantId} = useParams();
    useEffect(() => {
        const page = 0;
        const limit = 16;
        fetch(`/api/items?page=${page}&limit=${limit}&merchantId=${merchantId}`)
            .then(res => res.json())
            .then(data => setItems(data.items))
    }, []);
    return (
        <Wrapper>
            {items &&
                items.map(item => {
                    return <Item key={item._id} item={item}/>
                })}
            {!items &&
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

export default MerchantDetails;