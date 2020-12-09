import styled from "styled-components";
import { color, fontFamily } from "../styles/styles";
import { Link } from "react-router-dom";

export const LinkPrimary = styled(Link)`
    font-family: ${fontFamily.secondary};
    font-size: 18px;
    font-weight: bold;
    color: ${color.primary};
`;
