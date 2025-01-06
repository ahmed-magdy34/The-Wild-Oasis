import styled from "styled-components";
import LogoImg from "../data/img/logo-light.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={LogoImg} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;