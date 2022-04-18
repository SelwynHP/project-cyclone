import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Loader from "../Loader";

const ItemList = () => {
    let {category, page} = useParams();
    page = parseInt(page);

    useEffect(() => {
        //Load items based on itemsPerPage, Category and Page
        if (page >= 1) fetchAllProducts(page - 1, itemsPerPage, category);
    }, [page, category]);

    if (page < 1 || products.length === 0) return <Loader/>;
    return (
        <Wrapper>
            <Container>
                <Title>{category}</Title>
                <ItemsContainer>
                    {products.map((element) => {
                        return (
                            <ItemContainer to={`/product-detail/${element._id}`}>
                                <img src={element.imageSrc} alt="an item"/>
                                <p>{element.name}</p>
                            </ItemContainer>
                        );
                    })}
                </ItemsContainer>
                <Navigation>
                    <Browse hide={page <= 1} to={`/products/${category}/${page - 1}`}>
                        Previous
                    </Browse>
                    <Browse
                        hide={products.length !== itemsPerPage}
                        to={`/products/${category}/${page + 1}`}
                    >
                        Next
                    </Browse>
                </Navigation>
            </Container>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;
  background-color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 950px;
  margin: 0 auto;
`;

const Browse = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe379;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 0.5em;
  font-optical-sizing: auto;
  text-decoration: none;
  color: white;
  visibility: ${({hide}) => (hide ? "hidden" : "visible")};

  :hover {
    background-color: #22d0ff;

    text-decoration: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 950px;
  height: 75px;
  font-family: sans-serif;
  font-size: 0.75em;
`;


const Title = styled.div`
  display: flex;
  align-items: center;
  width: 950px;
  height: 75px;
  font-family: sans-serif;
  font-size: 1.5em;
  color: black;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 950px;
  height: 100%;
`;

const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 30px 10px 0 10px;
  margin: 0 25px 30px 0;
  width: 210px;
  height: 350px;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default ItemList;