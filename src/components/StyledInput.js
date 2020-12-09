import styled from "styled-components";
import Input from "react-validation/build/input";

import { color, fontFamily } from "../styles/styles";

export const StyledInput = styled(Input)`
    font-family: ${fontFamily.secondary};
    font-size: 18px;
    font-weight: bold;
    color: ${color.primary};
    background: transparent;
    border: none;
    border-bottom: 3px solid white;
    width: 290px;
    height: 47px;
    margin: 6px;
    padding: 6px;
}
`;
