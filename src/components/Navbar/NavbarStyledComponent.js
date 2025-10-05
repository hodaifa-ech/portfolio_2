import { Link as LinkR } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`

export const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 50%;
      background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
      transition: all 0.3s ease-in-out;
      transform: translateX(-50%);
    }
    
    :hover {
      color: ${({ theme }) => theme.primary};
      
      &:after {
        width: 100%;
      }
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      
      &:after {
        width: 100%;
      }
    }
`

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: rotate(180deg) scale(1.1);
    box-shadow: 0 4px 16px ${({ theme }) => theme.shadow};
  }
  
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    gap: 8px;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`

export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
  
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${({ theme }) => theme.shadow};
    }
    
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light};
    backdrop-filter: blur(10px);
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  padding: 8px 0;
  
  :hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(5px);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`
