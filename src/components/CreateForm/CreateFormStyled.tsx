import styled from "styled-components";

const CreateFormStyled = styled.div`
  border: 1px solid ${(props) => props.theme.color.whites.darkest};
  border-radius: ${(props) => props.theme.size.borderRadius.regular};
  padding: ${(props) => props.theme.size.padding.overall} 10px;
  .edit-profile {
    &__image {
      width: 200px;
      height: 200px;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
      border: 5px solid ${(props) => props.theme.color.characterClass.sorcerer};
      object-fit: cover;
      object-position: top;
      margin: 0 auto;
    }
  }

  .create-form {
    &__input {
      &--image {
      }
    }
  }
`;

export default CreateFormStyled;
