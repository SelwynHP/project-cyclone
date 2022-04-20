import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Homepage from "./components/Homepage";
import ClientLogin from "./components/ClientCredentials/ClientLogin";
import Merchants from "./components/Merchants/Merchants";
import MerchantDetails from "./components/Merchants/MerchantDetails";
import GlobalStyles from "./components/GlobalStyles";
import MerchantLogin from "./components/MerchantCredentials/MerchantLogin";
import Footer from "./components/Footer";
import ClientAccount from "./components/Account";
import TrackingDetails from "./components/Tracking/TrackingDetails";
import Tracking from "./components/Tracking/Tracking";
import Confirmation from "./components/Confirmation";

const App = () => {
    return (
        <Wrapper>
            <GlobalStyles/>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/login" element={<ClientLogin type="login"/>}/>
                    <Route exact path="/login/merchant" element={<MerchantLogin type="mLogin"/>}/>
                    <Route exact path="/signup" element={<ClientLogin type="signup"/>}/>
                    <Route exact path="/signup/merchant" element={<MerchantLogin type="mSignup"/>}/>
                    <Route exact path="/stores" element={<Merchants/>}/>
                    <Route exact path="/stores/:merchantId" element={<MerchantDetails/>}/>
                    {"Login Required"}
                    <Route exact path="/confirmation/:itemId" element={<Confirmation/>}/>
                    <Route exact path="/profile/client" element={<ClientAccount/>}/>
                    <Route exact path="/tracking" element={<Tracking/>}/>
                    <Route exact path="/tracking/:orderId" element={<TrackingDetails/>}/>
                </Routes>
                <Footer/>
            </Router>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: var(--hunter-green);
  height: 100vh;
`

export default App;
