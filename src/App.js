import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PublicHome from "./views/pages/PublicPage/PublicHome";
import AuthActivation from "./views/pages/AuthActivation/AuthActivation";
import Dashboard from "./views/pages/Dashboard/Dashboard";
import SearchCar from "./views/pages/PublicPage/SearchCar";
import AllListRentCar from "./views/pages/PublicPage/AllListRentCar";
import AllListSellCar from "./views/pages/PublicPage/AllListSellCar";
import RenterPayment from "./views/pages/PublicPage/RenterPayment";
import Login from "./views/pages/Login/Login";
import Signup from "./views/pages/Signup/Signup";
import RentCarDetails from "./views/pages/PublicPage/RentCarDetails";
import SellCarDetails from "./views/pages/PublicPage/SellCarDetails";
import AboutUsComponent from "./views/components/PublicPageComponent/AboutUs/AboutUsComponent";
import ContactUsComponent from "./views/components/PublicPageComponent/ContactUs/ContactUsComponent";
import PrivacyPolicyComponent from "./views/components/PublicPageComponent/PrivacyPolicy/PrivacyPolicyComponent";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicHome />} exact />
          <Route path="/search" element={<SearchCar />} />
          <Route path="/rent-car" element={<AllListRentCar />} />
          <Route path="/sell-car" element={<AllListSellCar />} />
          <Route path="/about-us" element={<AboutUsComponent />} />
          <Route path="/contact-us" element={<ContactUsComponent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rent-car-details/:id" element={<RentCarDetails />} />
          <Route path="/sell-car-details/:id" element={<SellCarDetails />} />
          <Route
            path="/renter-pay/*"
            element={
              <PrivateRoute>
                <RenterPayment />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/auth/activate/:id" element={<AuthActivation />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
