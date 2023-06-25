import HomePageButton from "./HomePageButton";
import styled from "styled-components";
import ProfileImageSwapper from "./ProfileImageSwapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SocialMediaWrapper from "./SocialMediaWrapper";
import { animated, config, useSpring } from "react-spring";
import { useNavigate } from "react-router";
import resume from '../images/resume.pdf';

const HomePageWrapper = styled(animated.div)`
  display: grid;
  grid-template-rows: repeat(5, 20%);

  grid-row-gap: 3rem;

  height: 400px;
  width: 100%;

  @media not screen and (max-width: 680px) {
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

  filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.5));

  overflow: hidden;
`

const DescriptionContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const HomePage = () => {
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

    const navigate = useNavigate();

    return (
        <>
            <TitleWrapper style={fallInFromTopProps}>
                <Title> Kevin Patlis </Title>
                <SubTitle> (aka tut, Excaliburns, the list goes on...) </SubTitle>
                {/* Put swapping profile images here, things that people might recognize me by */}
                <ProfileContainer>
                    <ProfileImageSwapper/>
                </ProfileContainer>
            </TitleWrapper>
            <HomePageWrapper style={fallInFromBottomProps}>

                <DescriptionContainer>
                    <span>
                        Hi there! I'm Kevin Patlis, a software and web developer that currently resides in Tallahassee, Florida.
                    </span>
                    <span>
                        You may also know me as tut, Exaliburns, or some variation of those online handles.
                    </span>
                    <span>
                        I'm a big fan of Esports, technology, and food!
                    </span>
                    <span>
                        Check out my resume to see some more of my qualifications and experience, or my projects to see some of the mods, websites, or other projects I've worked on!
                    </span>
                </DescriptionContainer>


                <HomePageButton onClick={() => window.open(resume, "_blank")}>
                    My Resume
                </HomePageButton>

                <HomePageButton onClick={() => navigate('/portfolio')}>
                    My Projects
                </HomePageButton>

                <SocialMediaWrapper>
                    <a href={"https://github.com/Excaliburns"} target={"_blank"} rel="noreferrer"
                       aria-label={"Github Link"}>
                        <FontAwesomeIcon
                            color={"#AFCFE9"}
                            icon={faGithub}
                            size={"3x"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/kevin-patlis-3788868a/"} target={"_blank"} rel="noreferrer"
                       aria-label={"LinkedIn Link"}>
                        <FontAwesomeIcon
                            color={"#AFCFE9"}
                            icon={faLinkedin}
                            size={"3x"}/>
                    </a>
                    <a href={"https://twitter.com/tut_owo"} target={"_blank"} rel="noreferrer"
                       aria-label={"Twitter Link"}>
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