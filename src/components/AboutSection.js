import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
  background: #35503F;
`;

const AboutTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 8rem;
  padding-bottom: 0;
}
@media screen and (max-width: 768px) {
 padding: 4rem;
 padding-bottom: 0;

`
const AboutContent = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  padding: 10rem;
  p {
     font-size: 17px;
     color: #fff;
     line-height:200%;
 }
 @media screen and (max-width: 768px) {
  padding: 4rem;
  padding-bottom: 5rem;
  p {
    text-align: left;
    
}

}
 
`

const AboutSection = ({title,
    contentOne,
    contentTwo

}) => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

    return (
        <Section>
        <AboutTitle >
        <h1 data-aos="fade-down" >{title}</h1>
        </AboutTitle>
        <AboutContent data-aos="fade-up">
        <p>{contentOne}</p>
        <br/>
        <p>{contentTwo}</p>
        </AboutContent>
        </Section>
    )
}

export default AboutSection
