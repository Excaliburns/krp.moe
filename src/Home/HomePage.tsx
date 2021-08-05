import HomePageButton from "./HomePageButton";
import styled from "styled-components";
import ProfileImageSwapper from "./ProfileImageSwapper";

const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% 30% 35%;
  grid-template-rows: repeat(5, 20%);
  
  grid-row-gap: 3rem;
  
  height: 400px;
  width: 100%;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  padding-bottom: 3rem;
`

const Title = styled.div`
  font-size: 7rem;
  font-weight: bold;
  
  text-align: center;
  width: 100%;
`
const SubTitle = styled.div`
  font-size: .8rem;
  font-style: italic;
  
  text-align: center;
  width: 100%;
  
  margin-top: -.15rem;
`

const ProfileContainer = styled.div`
  height: 20rem;
  width: 20rem;
  
  padding-top: 1rem;
  
  margin: 0 auto;
  
  filter: drop-shadow(1rem 1rem 2rem rgba(0,0,0,0.5));
`

const HomePage = (): JSX.Element => {
    return (
        <>
            <TitleWrapper>
                <Title> Kevin Patlis </Title>
                <SubTitle> (aka tut, Excaliburns, the list goes on...) </SubTitle>
                {/* Put swapping profile images here, things that people might recognize me by */}
                <ProfileContainer>
                    <ProfileImageSwapper />
                </ProfileContainer>
            </TitleWrapper>
            <HomePageWrapper>
                <HomePageButton>
                    Lorem Ipsum
                </HomePageButton>
                <HomePageButton>
                    Wow!
                    Wow!
                </HomePageButton>
                <HomePageButton>
                    Hi There!
                </HomePageButton>
            </HomePageWrapper>
        </>
    )
}

export default HomePage;