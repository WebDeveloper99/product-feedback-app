import styled from "styled-components"
import { Button } from "antd"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
margin: 130px 0 0 50px;
width: 1200px;
border: 1px solid red;

`



export const Wrapper = styled.div`
display: flex;
background: var(--bgColor);
border-radius: 15px;
padding: 30px;
border: 1px solid aqua;


`


export const LikeBar = styled.div`
display: flex;
flex: 1;
border: 1px solid red;
align-items: center;
justify-content: center;


`


export const DataBar = styled.div`
display: flex;
flex-direction: column;
flex: 8;
border: 1px solid red;

`
export const Title = styled.div`
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
export const DataType = styled(Button)`
display: flex;
color: var(--activeBgColor);
border: none;
border-radius: 15px;
background: var(--defaultBtnBgColor);

:hover{
    background: var(--hoverBtnBgColor);
}

&:focus{
    background:  #4661E6;
}

`


export const MessageBar = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
border: 1px solid red;

`


