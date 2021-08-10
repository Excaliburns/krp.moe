import HomePageButton from "./HomePageButton";
import styled from "styled-components";
import ProfileImageSwapper from "./ProfileImageSwapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SocialMediaWrapper from "./SocialMediaWrapper";
import { useHistory } from "react-router-dom";
import { animated, config, useSpring } from "react-spring";

const HomePageWrapper = styled(animated.div)`
  display: grid;
  grid-template-rows: repeat(5, 20%);
  
  grid-row-gap: 3rem;
  
  height: 400px;
  width: 100%;

  @media not screen and (max-width: 680px){
    grid-template-columns: 25% 50% 25%;
  }
  
  @media screen and (max-width: 680px) {
    grid-template-columns: 15% 70% 15%
  }
`

const TitleWrapper = styled(animated.div)`
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
    const fallInFromTopProps = useSpring({
        to: {
            translateY: '0rem'
        },
        from: {
            translateY: '-35rem'
        },
        delay: 200,
        config: config.slow
    })

    const fallInFromBottomProps = useSpring({
        to: {
            translateY: '0rem'
        },
        from: {
            translateY: '50rem'
        },
        delay: 200,
        config: config.molasses
    })

    const history = useHistory();

    return (
        <>
            <TitleWrapper style={fallInFromTopProps}>
                <Title> Kevin Patlis </Title>
                <SubTitle> (aka tut, Excaliburns, the list goes on...) </SubTitle>
                {/* Put swapping profile images here, things that people might recognize me by */}
                <ProfileContainer>
                    <ProfileImageSwapper />
                </ProfileContainer>
            </TitleWrapper>
            <HomePageWrapper style={fallInFromBottomProps}>
                <HomePageButton onClick={() => history.push('/resume')}>
                    My Resume
                </HomePageButton>

                <HomePageButton onClick={() => history.push('/portfolio')}>
                    My Projects
                </HomePageButton>

                <SocialMediaWrapper>
                    <a href={"https://github.com/Excaliburns"} target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon
                            color={"#AFCFE9"}
                            icon={faGithub}
                            size={"3x"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/kevin-patlis-3788868a/"} target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon
                            color={"#AFCFE9"}
                            icon={faLinkedin}
                            size={"3x"}/>
                    </a>
                    <a href={"https://twitter.com/tut_owo"} target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon
                            color={"#AFCFE9"}
                            icon={faTwitter}
                            size={"3x"}/>
                    </a>
                </SocialMediaWrapper>
            </HomePageWrapper>
        </>
    )
}

export default HomePage;