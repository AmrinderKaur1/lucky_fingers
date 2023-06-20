import React from "react";
import styled from "styled-components";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";

function Rda() {
  return (
    <div>
      <Header style={{ margin: "0" }}>
        <AuthLink to="/profile">
          {" "}
          {/* put link here  */}
          <Icon />
          <h1>Risk Disclosure Aggrement</h1>
        </AuthLink>
      </Header>
      <Content>
        <Heading3 className="text-xs-center">
          Chapter 1.Booking/Collection Description
        </Heading3>
        <Para>
          <span>
            Prepayment Booking/Recycling Customer should read and understand the
            business content carefully before making prepayment bookings
            (prepayment lock price, payment settlement and shipment) /recovery
            or repurchase (prepayment lock price, shipping payment) before
            making prepayment bookings to{" "}
            <text className="dfTxt">LuLu Malls</text>:
          </span>
        </Para>
        <Para>
          <span>
            1. Before making an appointment/restoring the prepayment business,
            the customer should complete the real name authentication in the
            mall and ensure that the name, ID number, bank account number,
            delivery address and other information filled in are true, accurate
            and valid; Otherwise, the user will be liable for the consequences
            of false information.
          </span>
        </Para>
        <Para>
          <span>
            2. Before making an appointment/restoring the prepayment business,
            the customer should complete the real name authentication in the
            mall and ensure that the name, ID number, bank account number,
            delivery address and other information filled in are true, accurate
            and valid; Otherwise, the user will be liable for the consequences
            of false information.
          </span>
        </Para>
        <Para>
          <span>
            3. Before making an appointment/restoring the prepayment business,
            the customer should complete the real name authentication in the
            mall and ensure that the name, ID number, bank account number,
            delivery address and other information filled in are true, accurate
            and valid; Otherwise, the user will be liable for the consequences
            of false information.
          </span>
        </Para>
        <Para>
          <span>
            4. Before making an appointment/restoring the prepayment business,
            the customer should complete the real name authentication in the
            mall and ensure that the name, ID number, bank account number,
            delivery address and other information filled in are true, accurate
            and valid; Otherwise, the user will be liable for the consequences
            of false information.
          </span>
        </Para>

        <Heading3>Cancellation and refundable Policy</Heading3>
        <Para>
          <span>
            In case of any discrepancy we can cancel any of the orders placed by
            you. A few reasons for cancellation from our end usually include
            limitation of the product in the inventory, error in pricing, error
            in product information etc. We also have the right to check out for
            extra information for the purpose of accepting orders in a few
            cases. We make sure to notify you if in case your order is cancelled
            partially or completely or if in case any extra data is required for
            the purpose of accepting your order.
          </span>
        </Para>
        <Para>
          <span>
            Once you place the order, such order can be cancelled from your end
            before the shipping is undertaken to the destination. Once the
            request of cancellation for ready for shipping product is received
            by us, we make sure to refund the amount through the same mode of
            payment within 5 working days. Cancellation of the order of Gold
            coin(exchanged by integrals) shall not be accepted as under
            Company’s policies.
          </span>
        </Para>
        <Para>
          <span>
            We don’t accept Cancellation requests for Smart Buy orders or
            customized jewellery orders. In specific situations when the
            customer wants the money back or wants to exchange it with other
            products, making charges of the product and stone charges, if there
            is any stone on the product shall be deducted from the payment and
            balance will be refunded back to customer account within 5 working
            days.
          </span>
        </Para>
        <Para>
          <span>
            If in case the amount is deducted from your account and the
            transaction has failed, the same will be refunded back to your
            account within 72 hours.
          </span>
        </Para>
      </Content>
    </div>
  );
}

const Content = styled.div`
  padding: 16px 16px 50px 16px;
`;
const Heading3 = styled.h3`
  margin-bottom: 12px;
`;
const Para = styled.p`
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

export default Rda;
