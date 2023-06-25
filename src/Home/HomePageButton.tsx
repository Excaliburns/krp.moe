import styled from "styled-components";
import { NoStyleButton } from "../Components/CommonComponents";

const HomePageButton = styled(NoStyleButton)`
  grid-column-start: 2;
  grid-column-end: 2;
  
  border: var(--highlight1) 2px solid;
  border-radius: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  user-select: none;
  cursor: pointer;
  
  :hover {
    transform: scale(1.2);
  }
  
  transition: var(--favorite-bezier) all .25s;
`

export default HomePageButton;
