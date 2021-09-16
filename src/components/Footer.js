import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const FooterContainer = styled.footer `
  background-color: #F0F0F0;
  justify-content: space-between; 
`
const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
      padding-top: 32px;
  }
`

const FooterLinkItems = styled.div `
  display: flex;
  flex-direction: column;
  align-items: felx-start;
  margin: 16px;
  text-align: left;
  width: 600px;
  box-sizing: border-box;
  color: #3F5748;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`


const FooterLink = styled(Link)`
  color: #818181;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 12px;
  

  &:hover {
      color: #3F5748;
      transition: 0.3s ease-out;
  }
`

const CopyRight = styled.div`
  color: #818181;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 12px;
  white-space: pre;  
  
  
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: felx-start;
  width: 140px;
  margin: 0 auto 0 auto;
  box-sizing: border-box;
  
  @media screen and (max-width: 768px) {
      flex-direction: column;
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;

  
}

`
const SocialIconLink = styled.a`
  color: #818181;
  font-size: 24px;

  &:hover {
    color: #3F5748;
    transition: 0.3s ease-out;
`


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinkItems>
                   <SocialMediaWrap>
                      <CopyRight>© {new Date().getFullYear()} FoliageFever</CopyRight>
                      <SocialIcons>
                          <SocialIconLink href="/" target="_blank" aria-lable="Facebook" >
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-lable="Twitter" >
                              <FaTwitter/>
                          </SocialIconLink>
                          <SocialIconLink href="/" target="_blank" aria-lable="Instagram" >
                              <FaInstagram />
                          </SocialIconLink>
                      </SocialIcons>
                   </SocialMediaWrap>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLink to="/contact">CONTACT US</FooterLink>
                    <FooterLink to="/termsofservice">TERMS OF SERVICE</FooterLink>
                    <FooterLink to="/privacy">PRIVACY</FooterLink>
                    <FooterLink to="/refundpolicy">REFUND POLICY</FooterLink>
                </FooterLinkItems>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
