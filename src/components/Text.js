import styled from "styled-components";
import { color, fontFamily } from "../styles/styles";

export const Title = styled.h1`
    font-family: ${fontFamily.primary};
    font-size: 56px;
    color: ${color.white};
`;

export const SubTitle = styled.h2`
    font-family: ${fontFamily.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: ${color.white};
`;

export const Paragraph = styled.p`
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: ${color.white};
`;
