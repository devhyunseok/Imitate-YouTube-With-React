import * as React from 'react';
import styled from 'styled-components'
import {ReactComponent as keyboard} from 'svg/keyboard.svg';
import {ReactComponent as searchIcon} from 'svg/search-icon.svg';

const Container = styled.div`
  flex: 1;
  margin: 0 40px;

`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto; // 가운데 정렬
  max-width: 640px;
  padding: 2px 6px;
`;

const SearchInputBox = styled.div`
  flex: 1;
  height: auto;
  width: 100%;
  border: 1px solid #E2E2E2;
  border-right: none;
  padding: 2px 6px;
`;

const InputTextWrapper = styled.div`
    overflow: hidden;
`;

const InputText = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto','Noto',sans-serif;
  
  ::placeholder {
    color: 1px solid #F6F6F6;
  }
`;

const KeyboardWrapper = styled.div`
    position: relative;
    float: right;
`;

const Keyboard = styled(keyboard)`
    width: 21px;
    height: 21px;
    padding: 0 6px;
`;

const SearchButton = styled.button`
    width: 65px;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    background-color: #F6F6F6;
    border: 1px solid #E2E2E2;
`;

const SearchIcon = styled(searchIcon)`
    width: 16px;
    height: 17px;
    padding: 3px 4px 3px 4px;
`;

const SearchBar = () => {
  return (
    <Container>
      <SearchBox>
        <SearchInputBox>
          <KeyboardWrapper>
            <Keyboard/>
          </KeyboardWrapper>
          <InputTextWrapper>
            <InputText placeholder={"검색"}/>
          </InputTextWrapper>
        </SearchInputBox>
        <SearchButton>
          <SearchIcon/>
        </SearchButton>
      </SearchBox>
    </Container>
  )
};

export default SearchBar;
