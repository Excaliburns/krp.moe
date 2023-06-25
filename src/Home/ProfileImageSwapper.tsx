import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpringCarousel } from "react-spring-carousel";
import picture1 from '../images/mugshot.jpg';
import picture2 from '../images/ralsei_main.png';
import picture3 from '../images/anime.png';
import picture4 from '../images/furry.png';


const ProfileImage = styled.img`
  height: 20rem;
  width: 20rem;

  user-select: none;
  
  border-radius: 100%;
  
  margin: 0 auto;
`

const ImageItems = [
    {
        id: 'main1',
        renderItem: <ProfileImage src={picture1}  alt={`Profile Picture 1`} draggable={false}/>
    },
    {
        id: 'main2',
        renderItem: <ProfileImage src={picture2}  alt={`Profile Picture 2`} draggable={false}/>
    },
    {
        id: 'main3',
        renderItem: <ProfileImage src={picture3}  alt={`Profile Picture 3`} draggable={false}/>
    },
    {
        id: 'main4',
        renderItem: <ProfileImage src={picture4}  alt={`Profile Picture 4`} draggable={false}/>
    }
]

const ProfileImageSwapper = () => {
    const  ProfileImageCarousel = useSpringCarousel({
        items: ImageItems,
        withLoop: true
    })

    const [profileImageIndex, setProfileImageIndex] = React.useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProfileImageIndex(profileImageIndex >= ImageItems.length - 1 ? 0 : profileImageIndex + 1);
            ProfileImageCarousel.slideToItem(profileImageIndex)
        }, 7000);

        return () => clearInterval(timer);
    }, [ProfileImageCarousel, profileImageIndex]);

    return (
            <div>
                {ProfileImageCarousel.carouselFragment}
            </div>
    )
}

export default ProfileImageSwapper;