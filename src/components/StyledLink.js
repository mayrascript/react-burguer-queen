import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, fontFamily } from "../styles/styles";

export const StyledLink = styled(Link)`
    font-family: ${fontFamily.secondary};
    font-size: 18px;
    font-weight: bold;
    color: ${color.primary};
`;
