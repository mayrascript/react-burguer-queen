import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, fontFamily } from "../styles/styles";

export const StyledSideMenu = styled.nav`
    width: 292px;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(67, 67, 67, 0.98);
    // padding-top: 6em;
    // position: relative;
`;

export const StyledSideMenuLink = styled(Link)`
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: ${color.secondary};
    width: 183px;
    height: 39px;
    text-decoration: none;
`;

export const StyledSideMenuLinkSignOut = styled(Link)`
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: ${color.white};
    text-decoration: none;
    // position: absolute;
    // bottom: 1em;
`;
