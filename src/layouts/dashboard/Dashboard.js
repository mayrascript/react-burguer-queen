import React from "react";

import "./Dashboard.scss";
import {
    StyledSideMenu,
    StyledSideMenuLink,
    StyledSideMenuLinkSignOut,
} from "../../components/StyledSideMenu";
import { SubTitle } from "../../components/Text";
import { Avatar } from "../../components/Avatar";

function Dashboard(props) {
    return (
        <div className="dashboard">
            <StyledSideMenu>
                <Avatar></Avatar>
                <SubTitle>Mayra</SubTitle>
                <ul>
                    <li>
                        <StyledSideMenuLink to="/d/new-order">New Order</StyledSideMenuLink>
                    </li>
                    <li>
                        <StyledSideMenuLink to="/d/orders">Orders</StyledSideMenuLink>
                    </li>
                </ul>

                <StyledSideMenuLinkSignOut>Sign Out</StyledSideMenuLinkSignOut>
            </StyledSideMenu>

            {props.children}
        </div>
    );
}

export default Dashboard;
