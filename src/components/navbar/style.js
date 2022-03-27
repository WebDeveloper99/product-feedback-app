import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import styled from "styled-components"
import { ReactComponent as lamp } from '../../assets/icons/lamp.svg';

export const Container = styled.div`
display: flex;
width: 1200px;
height: 100px;
position: absolute;
right: 165px;
padding: 0 25px;
border-radius: 15px;
background: var(--navbarBgColor);
color: white;
align-items: center;

`

export const TextWrapper = styled.div`
display: flex;
align-items: center;
flex: 1;



`

TextWrapper.Logo = styled(lamp)`
width: 30px;
height: 30px;

`

TextWrapper.TextItem = styled.div`
font-weight: 700;
font-size: 24px;
margin: 0 35px 0 20px;

`

TextWrapper.SortBar = styled.div`
font-weight: 400;
font-size: 20px;
.ant-select{
    font-size: 18px;
    font-weight: 500;
    .ant-select-selector{
        background-color: transparent;
        border: none;
    }
    .ant-select-arrow{
        color: white;
    }
}

`



export const BtnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: end;
flex: 1;
`

export const AddButton = styled(Button)`
color: white;
width: 220px;
height: 60px;
background-color: var(--btnBgColor);
border-radius: 10px;
font-weight: 700;
font-size: 18px;

`

export const Add = styled(PlusOutlined)`
width: 120x;
height: 12px;

`

