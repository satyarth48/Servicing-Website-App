import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color } = props;

  return (
    <BrandLogoContainer>
      <LogoImage size={logoSize}>
            <img src="/images/logos/logo.png" alt="Logo" />
          </LogoImage>
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Servicing-Express
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}
