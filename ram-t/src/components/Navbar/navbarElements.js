import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  font-size: 2vw;
  font-family: sans-serif;
  background: #658864;
  display: flex;
  justify-content: space-between;
  padding: 2vw;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`

export const NavLogo = styled.div`
  color: #333333;
  padding: 0 1vw;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

export const NavLink = styled(Link)`
  color: #B7B78A;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1vw;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #DDDDDD;
  };
`