import styled from "styled-components";

const ItemsForm = () => {
    return (
        <Wrapper>
            <h2>Item</h2>
            <form>
                <input id="title" type="text" placeholder="Name"/>
                <input id="description" type="text" placeholder="Description"/>
                <input id="price" type="number" placeholder="Price"/>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default ItemsForm;