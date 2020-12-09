import styled from "styled-components";
import Select from "react-validation/build/select";

import { color, fontFamily } from "../styles/styles";

export const StyledSelect = styled(Select)`
    font-family: ${fontFamily.secondary};
    font-size: 18px;
    font-weight: bold;
    color: ${color.white};
    width: 290px;
    height: 54px;
    border: none;
    border-radius: 8px;
    background-color: ${color.primary};
    margin: 6px;
    padding: 6px;
`;
