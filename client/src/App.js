import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
        <Router>
            <Routes>
                <Route exact path="/" element={<Header />} />
            </Routes>
        </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`

export default App;
