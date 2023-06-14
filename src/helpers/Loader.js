import React from 'react';
import styled from 'styled-components';

import Spinner from '../images/Spinner.gif';

const Loader = () => {

  return (
    <LoaderWrapper>
      <Img src={Spinner} alt="Loading..." />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  text-align: right;
  padding-right: 1.5rem;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export default Loader;

