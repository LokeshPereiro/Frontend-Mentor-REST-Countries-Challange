import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  /* Dynamic Theme Mode */
  --bg:  ${({ theme }) => theme.bg}; 
  --text:  ${({ theme }) => theme.text};
  --text2:  ${({ theme }) => theme.text2};
  --element: ${({ theme }) => theme.element};
  --shadow: ${({ theme }) => theme.shadow};
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;

   @media screen and (max-width: 37.5rem) {
     font-size: 58%;
    }
  
}

body {
  font-family: 'Nunito Sans', sans-serif;
   background-color: var(--bg);
   font-size: 1.4rem;   
}

.container{
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;
}

a {
  text-decoration: none;
  color: var(--text);
  display: inline-block;
}

img{
	width: 100%;
  height: 100%;
  object-fit: cover;
}

button{
  border: none;
  outline: none;
  cursor: pointer;
}

.btn {
  padding: 1rem 2rem;
  box-shadow: 0 1px 6px 0 var(--shadow);
  background-color: var(--element);
  font-size: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  color:var(--text);
   transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(.95);
    }
}
`;
