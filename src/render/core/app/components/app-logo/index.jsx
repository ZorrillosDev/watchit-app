import React from 'react'
import icon from 'render/media/icons/icon.png'
import setting from 'settings'
import styled, {keyframes} from 'styled-components';

export default class Logo extends React.Component {

    static get defaultProps() {
        return {
            show: true,
            absolute: false,
            thumbnail: true,
        }
    }

    render() {
        return (
            <LogoWrapper show={this.props.show} absolute={this.props.absolute} thumbnail={this.props.thumbnail}>
                <LogoImg src={icon} alt="Logo" width={50} height={50}/>
                <LogoText>ATCH</LogoText>
                <LogoColoredText>IT</LogoColoredText>
            </LogoWrapper>
        )
    }
}

const LogoWrapper = styled.h5`
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  transform: ${props => !props.thumbnail ? 'scale(3) translateY(-2.7rem)' : 'scale(1)'};
  letter-spacing: 2px;
  font-family: "Oswald", Arial, sans-serif;
  display: ${props => props.show ? 'inline-block' : 'none'};
  margin: 0;  
  @media ${setting.styles.devices.mobileS} {
    font-size: 1.5rem !important;
  }
  
  @media ${setting.styles.devices.laptop} {
    font-size: 2rem !important;
  }
  
  @media ${setting.styles.devices.desktop} {
    font-size: 3rem !important;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: -3px;

  @media (min-width: 300px) {
    width: 40px;
    height: 40px;
  }
  
  @media (min-width: 992px) {
    width: 50px;
    height: 50px;
  }
  
  @media (min-width: 2000px) {
    width: 70px;
    height: 70px;
  }
`;

const LogoText = styled.span`
  position: relative;
  color: #fff;
  top: -9px;
  font-weight: 600;

  @media (min-width: 2000px) {
    top: -12px;
  }
`;

const Colors = keyframes`
  0% {
    color: rgb(251, 211, 1);
  }
  25% {
    color: rgb(255, 50, 112);
  }
  50% {
    color: rgb(32, 139, 241);
  }
  75% {
    color: rgb(175, 225, 2);
  }
  100% {
    color: rgb(251, 211, 1);
  }
`;

const LogoColoredText = styled.span`
  font-weight: bold;
  position: relative;
  top: -9px;
  animation: ${Colors} 4.6s ease infinite;
  
  @media (min-width: 2000px) {
    top: -12px;
  }
`;