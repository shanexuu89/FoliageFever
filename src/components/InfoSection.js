import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
`;
const Container = styled.div`
  padding: 4rem calc((100vw - 1200px) /2);
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

    p {
        color: #35503F;
        font-weight: bold;
        font-size: 35px;

    }

  @media screen and (max-width: 768px) {
  grid-template-areas: ${({ imgStart }) => 
     imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}
  }
`;
const ColumnLeft = styled.div` 
  
  padding: 1rem 2rem;
  grid-area: col1;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;

@media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
}
  
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  grid-area: col2;
  img {
      width: 80%;
      height: 80%;
      object-fit: cover;
  
  @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
  }
}
`;


const InfoSection = ({paragraphOne, 
    paragraphTwo, 
    imgStart, 
    image
    
}) => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
    return (
        <Section>
            <Container imgStart={imgStart}>
                <ColumnLeft >
                <p data-aos="fade-up">{paragraphOne}</p>
                <p data-aos="fade-up">{paragraphTwo}</p>
                </ColumnLeft>
                <ColumnRight>
                <img src={image} data-aos="fade-right" alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
