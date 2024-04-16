import React from "react";
import styled from "styled-components";
import Icon from "../component/Icon";
import Input from "../component/Input";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF0000;
    padding: 15px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
`;

const QuickIcon = styled.div`
    display: flex;
    align-items: center;
`;

const LogoTitle = styled.h1`
    font-size: 3em;
    color: #fff;
    margin-left: 15px;
`;

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-right: 10px;
`;

export default function Header(props) {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <LogoTitle>ViewTube</LogoTitle>
                </Menu>
                <SearchBar>
                    <StyledInput className={"inputWithIcon"}>
                        <Input
                            type="text"
                            placeholder="Search"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        />
                    </StyledInput>
                    <Icon className="fa fa-search" />
                    <Icon className="fa fa-microphone" />
                </SearchBar>
                <QuickIcon>
                    <Icon onClick={props.toggleTheme} className="fa fa-adjust" />
                    <Icon className="fa fa-bell" />
                    <Icon className="fa fa-th" />
                    <Icon className="fa fa-user" />
                </QuickIcon>
            </Wrapper>
        </Container>
    )
}
