import styled from "styled-components";

export const FilterCountriesStyles = styled.div`
  padding: 5px 1rem;
  border: 1px solid var(--shadow);
  border-radius: 5px;
  margin: 3rem 0;
  font-size: 1.6rem;
  background-color: var(--element);
  color: var(--text);

  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  select {
    appearance: none;
    background-color: transparent;
    width: 100%;
    outline: none;
    border: none;
    display: block;

    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    padding: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  option {
    padding: 1rem;
  }

  @media screen and (max-width: 37.5em) {
    width: 100%;
    margin: 1rem 0;
  }
`;
