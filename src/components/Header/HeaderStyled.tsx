import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 10px ${(props) => props.theme.size.padding.overall};
  background-color: ${(props) => props.theme.color.primary.base};
  color: ${(props) => props.theme.color.whites.lightest};
  font-size: ${(props) => props.theme.font.main.sizes.headline};
  font-weight: ${(props) => props.theme.font.main.weights.bold};
  display: flex;
  align-items: center;
  .title-container {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
  }

  .header-icon {
    min-width: 50px;
    width: 60px;
    height: 49px;
    color: ${(props) => props.theme.color.whites.lightest};
  }
`;

export default HeaderStyled;
