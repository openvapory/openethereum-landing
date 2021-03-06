import React from 'react'
import styled from 'styled-components'

import DiscordSVG from './img/discord.svg'
import GithubSVG from './img/github.svg'
import TwitterSVG from './img/twitter.svg'

const Wrapper = styled.div`
  display: flex;
`

const Icon = styled.a`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: 29px;
  text-decoration: none;
  width: 40px;

  &:first-child {
    margin-left: 0;
  }
`

const IconSVG = styled.img`
  display: block;
  height: 36px;
  transition: all 0.15s ease-out;
  width: 36px;

  &:hover {
    height: 40px;
    width: 40px;
  }
`

const SocialIconsData = [
  {
    href: 'https://twitter.com/OpenEthereumOrg',
    image: TwitterSVG,
    title: 'Twitter',
  },
  {
    href: 'https://discord.io/openethereum',
    image: DiscordSVG,
    title: 'Discord',
  },
  {
    href: 'https://github.com/openethereum',
    image: GithubSVG,
    title: 'Github',
  },
]

const SocialIcons = ({ ...restProps }) => (
  <Wrapper className="socialIcons" {...restProps}>
    {SocialIconsData.map((item, index) => {
      return (
        <Icon href={item.href} title={item.title} key={index} target="_blank">
          <IconSVG src={item.image} alt={item.title} />
        </Icon>
      )
    })}
  </Wrapper>
)

export default SocialIcons
