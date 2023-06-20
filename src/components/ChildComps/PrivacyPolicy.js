import React from "react";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header style={{ marginBottom: "0" }}>
        <AuthLink to={"/profile"}>
          {" "}
          {/* put link here  */}
          <Icon />
          <h1>Privacy Policy</h1>
        </AuthLink>
      </Header>
      <Content>
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <Headings1>Interpretation and Definitions</Headings1>
        <Headings2>Interpretation</Headings2>
        <Para>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions.
        </Para>
        <Para>
          The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </Para>
        <Headings2>Definitions</Headings2>
        <Para>For the purposes of this Privacy Policy:</Para>
        <UnOrderedList>
          <li>
            <Para>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </Para>
          </li>
          <li>
            <Para>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to{" "}
              <text className="dfTxt">LuLu Malls</text>.
            </Para>
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of
            directors or other managing authority.
          </li>
          <li>
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </li>
          <li>
            <strong>Website</strong> refers to{" "}
            <text className="dfTxt">LuLu Malls</text>, accessible from{" "}
            <text className="httpTxt">https://lulumalls.vip</text>
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Country</strong> refers to: Uttar Pradesh, India
          </li>
          <li>
            <Para>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used.
            </Para>
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> refers to any
            website or any social network website through which a User can log
            in or create an account to use the Service.
          </li>
          <li>
            <Para>
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
            </Para>
          </li>
          <li>
            <strong>Cookies</strong> are small files that are placed on Your
            computer, mobile device or any other device by a website, containing
            the details of Your browsing history on that website among its many
            uses.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </li>
          <li>
            <strong>Usage Data</strong> refers to data collected automatically,
            either generated by the use of the Service or from the Service
            infrastructure itself (for example, the duration of a page visit).
          </li>
        </UnOrderedList>
        <h1>Changes to this Privacy Policy</h1>
        <Para>
          We may update our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </Para>
        <Para>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the "Last
          updated" date at the top of this Privacy Policy.
        </Para>
        <h1>Contact Us</h1>
        <Para>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </Para>
        <UnOrderedList>
          <li>By visiting this page on our website</li>
        </UnOrderedList>
      </Content>
    </div>
  );
};

const Content = styled.div`
  padding: 16px 16px 50px 16px;
`;
const Para = styled.p`
  margin-block-start: 1em;
  margin-block-end: 1em;
`;
const UnOrderedList = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Headings1 = styled.h1`
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
`;

const Headings2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`;

export default PrivacyPolicy;
