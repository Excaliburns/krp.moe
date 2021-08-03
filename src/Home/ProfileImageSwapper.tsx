import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpringCarousel } from "react-spring-carousel-js";

const ProfileImage = styled.img`
  height: 20rem;
  width: 20rem;

  user-select: none;
  
  border-radius: 100%;
  
  margin: 0 auto;
`

const ProfileImageSwapper = (): JSX.Element => {
    const  ProfileImageCarousel = useSpringCarousel({
        items: [
            {
                id: 'main1',
                renderItem: <ProfileImage src={'img/mugshot.jpg'}  alt={`Profile Picture 1`} draggable={false}/>
            },
            {
                id: 'main2',
                renderItem: <ProfileImage src={'img/ralsei_main.png'}  alt={`Profile Picture 2`} draggable={false}/>
            },
            {
                id: 'main3',
                renderItem: <ProfileImage src={'img/anime.png'}  alt={`Profile Picture 3`} draggable={false}/>
            },
            {
                id: 'main4',
                renderItem: <ProfileImage src={'img/furry.png'}  alt={`Profile Picture 4`} draggable={false}/>
            }
        ],
        withLoop: true
    })
    
    const [idx, setIdx] = React.useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIdx(idx > 2 ? 0 : idx + 1);
            ProfileImageCarousel.slideToItem(idx)
        }, 7000);

        return () => clearInterval(timer);
    }, [ProfileImageCarousel, idx]);

    return (
            <div>
                {ProfileImageCarousel.carouselFragment}
            </div>
    )
}

export default ProfileImageSwapper;