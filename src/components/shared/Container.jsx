import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
        w-11/12
        max-w-7xl
        my-0
        mx-auto
        p-2.5
    `}
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
