import styled from "styled-components";

const SocialMediaWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  text-decoration: none;

  @media not screen and (max-width: 680px){
    gap: 2rem;
  }
  
  @media only screen and (max-width: 680px){
    justify-content: space-between;
  }
  
  svg {
    cursor: pointer;
    user-select: none;
    
    border: var(--highlight1) 2px solid;
    border-radius: 1rem;
    
    padding: 1rem;
    
    filter: drop-shadow(1rem 1rem 2rem rgba(0,0,0,0.5));

    :hover {
      transform: scale(1.2);
    }

    transition: var(--favorite-bezier) all .25s;
  }
`

export default SocialMediaWrapper;