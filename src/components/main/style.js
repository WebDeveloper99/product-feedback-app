import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { CaretUpOutlined as up } from '@ant-design/icons';
import { ReactComponent as msg } from '../../assets/icons/msg.svg';
import { keyframes } from "styled-components";



export const Container = styled.div`
border-top: 5px solid var(--navbarBgColor);
border-bottom: 5px solid var(--navbarBgColor);
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: start;
margin: 130px 0 0 50px;
width: 1200px;
height: 85vh;
overflow-y: scroll;
::-webkit-scrollbar{
    width: 15px;
    overflow-y: hidden;
}
::-webkit-scrollbar-thumb{
    border: 2px solid var(--bodyColor);
    background: var(--navbarBgColor);
    border-radius: 10px;
}



`



export const WrapperItem = styled.div`
display: flex;
background: var(--bgColor);
border-radius: 15px;
padding: 10px 30px 30px 30px;
margin-bottom: 20px;


`


export const LikeBar = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;

`



export const LikeBtn = styled.button`
display: flex;
flex-direction: column;
padding: 10px 12px;
background: var(--defaultBtnBgColor);
border: none;
border-radius: 10px;
font-weight: 700;
font-size: 18px;
line-height: 28px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

:hover{
    background: var(--hoverBtnBgColor);
}

&:focus{
    background: var(--activeBgColor);
    color: white;
}

&:focus .icon{
    color: white;
}

`


LikeBtn.LikeIcon = styled(up)`
width: 20px;
height: 20px;
color: var(--activeBgColor);


`


export const DataBar = styled.div`
display: flex;
flex-direction: column;
flex: 8;
margin: 35px 0 0 20px;

`
export const Link = styled(NavLink)`
display: flex;
font-weight: 700;
font-size: 24px;
line-height: 26px;
color: var(--titleColor);

`


export const Discreption = styled.div`
display: flex;
margin: 8px 0 16px 0;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: var(--textColor);

`
export const DataType = styled.div`
display: flex;

`

DataType.Btn = styled.button`
display: flex;
color: var(--activeBgColor);
padding: 2px 16px;
font-weight: 600;
font-size: 16px;
line-height: 28px;
border: none;
border-radius: 10px;
background: var(--defaultBtnBgColor);
cursor: pointer;

:hover{
    background: var(--hoverBtnBgColor);
}

&:focus{
    background:  #4661E6;
    color: white;
}


`


export const MessageBar = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-align: center;

`

MessageBar.Msg = styled(msg)`
display: flex;
width: 25px;
height: 25px;
margin-right: 10px;

`


