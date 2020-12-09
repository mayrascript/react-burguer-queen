import styled from "styled-components";

import { color, fontFamily } from "../styles/styles";

const Button = styled.button`
    width: 290px;
    height: 54px;
    border: none;
    border-radius: 8px;
    margin: 6px;
`;

const ButtonFlat = styled(Button)`
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: ${color.white};
`;

export const ButtonFlatPrimary = styled(ButtonFlat)`
    background-color: ${color.primary};
`;
