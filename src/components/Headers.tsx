import * as React from 'react';
import styled, { css } from 'styled-components'
import {ReactComponent as menu} from 'svg/menu.svg';
import {ReactComponent as youTubeLogo} from 'svg/youtube-logo.svg';
import {ReactComponent as addVideo } from 'svg/btn-add-video.svg';
import {ReactComponent as topMenu } from 'svg/top-menu.svg';
import SearchBar from "./SearchBar";

const Headers = () => {
  return (
    <Header>
      <Container>
        <Menu />
        <YoutubeLogo />
        <SearchBar />
        <ToolBar>
          <TabItem>
            <AddVideo/>
          </TabItem>
          <TabItem>
            <TopMenu/>
          </TabItem>
          <TabItem>
          </TabItem>
          <TabItem>
          </TabItem>
          <TabItem>
          </TabItem>
        </ToolBar>
      </Container>
    </Header>
  )
};

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  &:after {
      bottom: -5px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
    content: "";
    height: 5px;
    left: 0px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 2050;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
 
`;

const Menu = styled(menu)`
  width: 24px;
  height: 24px;
  padding: 8px;
  margin: 0 16px 0 0;
  flex: none;
`;

const YoutubeLogo = styled(youTubeLogo)`
  width: 80px;
  height: 24px;
  flex: none
`;

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabItem = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: inherit;
  outline: none;
  border: none;
  padding: 0;
  margin-right: 8px;
`;

const tabItemImg = css`
  width: 18px;
  height: 18px;
`;

const AddVideo = styled(addVideo)`
  ${tabItemImg}
`;

const TopMenu = styled(topMenu)`
  ${tabItemImg}
`;

export default Headers;
