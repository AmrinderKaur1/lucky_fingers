import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Footer from "./components/Footer";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./components/Home";
import SearchPage from "./components/Search";
import Login from "./components/Auth/Login/LoginWrapper";
import Register from "./components/Auth/Login/Register";
import ForgotPassword from "./components/Auth/Login/ForgotPassword";
import Profile from "./components/MyProfile";
import Recharge from "./components/ChildComps/Recharge";
import RechargeRecord from "./components/ChildComps/RechargeRecord";
import Withdrawl from "./components/ChildComps/Withdrawl";
import WithdrawlRecord from "./components/ChildComps/WithdrawlRecord";
import Transactions from "./components/ChildComps/Transactions";
import AddBankCard from "./components/ChildComps/AddBankCard";
import BankCard from "./components/ChildComps/BankCard";
import Address from "./components/ChildComps/Address";
import EditAddress from "./components/ChildComps/EditAddress";
import ComplaintsAndSuggestions from "./components/ChildComps/ComplaintsNSug";
import AddSuggNComp from "./components/ChildComps/AddSuggNComp";
import PrivacyPolicy from "./components/ChildComps/PrivacyPolicy";
import Rda from "./components/ChildComps/Rda";
import ProtectedRoute from "./ProtectedRoutes";
import BetGame from "./components/game";
import store, {persistor} from "./store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/win' element={<BetGame />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pages/person/recharge" element={<Recharge />} />
            <Route
              path="/pages/person/recharge-record"
              element={<RechargeRecord />}
            />
            <Route path="/pages/person/withdrawl" element={<Withdrawl />} />
            <Route
              path="/pages/person/withdrawl-record"
              element={<WithdrawlRecord />}
            />

            <Route
              path="/pages/person/transactions"
              element={<Transactions />}
            />

            <Route path="/pages/person/bank" element={<BankCard />} />
            <Route path="/pages/person/addbank" element={<AddBankCard />} />

            <Route
              path="/pages/person/address"
              element={<Address heading="Address" />}
            />

            <Route
              path="/pages/person/add-address"
              element={<EditAddress heading="Add Address" />}
            />
            <Route
              path="/pages/person/password"
              element={<ForgotPassword isProfile={false} />}
            />
            <Route
              path="/pages/person/password-reset"
              element={<ForgotPassword isProfile={true} />}
            />

            <Route
              path="/pages/person/complaint"
              element={<ComplaintsAndSuggestions />}
            />
            <Route
              path="/pages/person/addComplaint"
              element={<AddSuggNComp />}
            />

            <Route path="/pages/person/risk" element={<Rda />} />
          </Route>
          <Route path="/pages/person/privacy" element={<PrivacyPolicy />} />
        </Routes>
        {/* {!isAuthenticated && <Footer /> } */}
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
