import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HeaderHome from "./components/HomeHeader";
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

let isAuthenticated = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassword />} />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
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
            <Route path="/pages/person/password" element={<ForgotPassword isProfile={false}/>} />
            <Route
              path="/pages/person/password-reset"
              element={<ForgotPassword isProfile={true}/>}
            />

            <Route
              path="/pages/person/complaint"
              element={<ComplaintsAndSuggestions />}
            />
            <Route
              path="/pages/person/addComplaint"
              element={<AddSuggNComp />}
            />

            <Route path="/pages/person/privacy" element={<PrivacyPolicy />} />
            <Route path="/pages/person/risk" element={<Rda />} />
          </Route>

          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/pages/person/recharge"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Recharge />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/pages/person/recharge-record"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <RechargeRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pages/person/withdrawl"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Withdrawl />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/pages/person/withdrawl-record"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <WithdrawlRecord />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/transactions"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Transactions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/bank"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <BankCard />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route
            path="/pages/person/addbank"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddBankCard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/address"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Address heading="Address" />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/add-address"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditAddress heading="Add Address" />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route
            path="/pages/person/password"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ForgotPassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/complaint"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ComplaintsAndSuggestions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pages/person/privacy"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PrivacyPolicy />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route
            path="/pages/person/risk"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Rda />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route path="/" element={<Profile />} /> */}
          {/* <Route path="/" element={<Recharge />} /> */}
          {/* <Route path="/" element={<RechargeRecord />} /> */}
          {/* <Route path="/" element={<Withdrawl />} /> */}
          {/* <Route path="/" element={<WithdrawlRecord />} /> */}
          {/* <Route path="/" element={<Transactions />} /> */}
          {/* <Route path="/" element={<AddBankCard />} /> */}
          {/* <Route path="/" element={<BankCard />} /> */}
          {/* <Route path="/" element={<Address heading="Address" />} /> */}
          {/* <Route path="/" element={<EditAddress heading="Add Address"/>} /> */}
          {/* <Route path="/" element={<ComplaintsAndSuggestions/>} /> */}
          {/* <Route path="/" element={<AddSuggNComp/>} /> */}
          {/* <Route path="/" element={<PrivacyPolicy/>} /> */}
          {/* <Route path="/" element={<Rda/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
