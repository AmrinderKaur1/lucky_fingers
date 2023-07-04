import React, { useCallback, useState } from "react";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { PageButton } from "./Recharge";
import { handleNumericKeyPress } from "../Auth/Login/Register";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import {
  BorderlessInput,
  BoxDivider,
  BorderLessContainer,
} from "./AddBankCard";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function EditAddress() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const addAddressFieldErr = "Please fill the mandatory fields to continue!";

  const [inputFieldValues, setInputFieldValues] = useState({
    fullName: "",
    mobileNum: "",
    pincode: "",
    state: "",
    city: "",
    detailedAddress: "",
  });
  const [fieldErr, setFieldErr] = useState("");
  const [hasEmpty, setHasEmpty] = useState(false);
  const editAddress = state?.heading ? true : false;
  const [isContinueLoading, setContinueLoading] = useState(false);

  const handleIpChange = (event, name) => {
    console.log(event.target.value, "event.target.value");
    if (name === "fullName") {
      inputFieldValues.fullName = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    } else if (name === "mobileNum") {
      inputFieldValues.mobileNum = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    } else if (name === "pincode") {
      inputFieldValues.pincode = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    } else if (name === "state") {
      inputFieldValues.state = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    } else if (name === "city") {
      inputFieldValues.city = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    } else {
      inputFieldValues.detailedAddress = event.target.value;
      setInputFieldValues({ ...inputFieldValues });
    }
  };

  const renderEditAddress = () => (
    <BorderLessContainer>
      <Row>
        <BorderlessInput
          placeholder="Full Name"
          value={inputFieldValues?.fullName}
          onChange={(e) => handleIpChange(e, "fullName")}
        />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput
          onKeyPress={handleNumericKeyPress}
          maxLength={10}
          placeholder="Mobile Number"
          value={inputFieldValues?.mobileNum}
          onChange={(e) => handleIpChange(e, "mobileNum")}
        />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput
          placeholder="Pincode"
          value={inputFieldValues?.pincode}
          onChange={(e) => handleIpChange(e, "pincode")}
        />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput
          placeholder="State"
          value={inputFieldValues?.state}
          onChange={(e) => handleIpChange(e, "state")}
        />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput
          placeholder="Town/City"
          value={inputFieldValues?.city}
          onChange={(e) => handleIpChange(e, "city")}
        />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput
          placeholder="Detailed Address"
          value={inputFieldValues?.detailedAddress}
          onChange={(e) => handleIpChange(e, "detailedAddress")}
        />
      </Row>
      <BoxDivider />
    </BorderLessContainer>
  );

  const handleAddAddress = useCallback(async () => {
    if (editAddress) {
      setContinueLoading(true);
      await axios?.post(
        `http://localhost:4000/api/address/edit-address/${state?.id}`,
        inputFieldValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage?.jwtToken,
          },
        }
      ).then(() => {
        navigate('/pages/person/address');
      });
      setContinueLoading(false);
    } else {
      const isAnyEmpty = checkEmpty();
      if (isAnyEmpty) {
        setFieldErr(addAddressFieldErr);
      } else {
        setContinueLoading(true);
        await axios
          .post(
            "http://localhost:4000/api/address/add-address",
            inputFieldValues,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage?.jwtToken,
              },
            }
          )
          .then(() => {
            navigate("/pages/person/address");
          })
          .catch((err) => {
            console.log(err);
          });
        setContinueLoading(false);
      }
    }
  }, [inputFieldValues]);

  const checkEmpty = useCallback(() => {
    let incmpltMob = inputFieldValues?.mobileNum?.length < 10;
    let hasEmptyValue = Object.entries(inputFieldValues)?.some(
      (entry) => !entry?.[1]?.length
    );
    const hasLocalEmpty = hasEmptyValue || incmpltMob;
    if (hasLocalEmpty && fieldErr !== addAddressFieldErr) {
      setFieldErr(addAddressFieldErr);
    }
    return hasLocalEmpty;
  }, [JSON.stringify(inputFieldValues), fieldErr, hasEmpty]);

  return (
    <div>
      <Header style={{ margin: "0" }}>
        <AuthLink to="/pages/person/address">
          {/* put link here  */}
          <Icon />
          <h1>{state?.heading ?? "Add Address"}</h1>
        </AuthLink>
      </Header>
      {renderEditAddress()}
      <PageButton onClick={handleAddAddress} loading={isContinueLoading}>
        Continue
      </PageButton>
      <Err>{fieldErr}</Err>
    </div>
  );
}

export default EditAddress;

const Err = styled.p`
  color: red;
  padding: 8px 0;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
`;
