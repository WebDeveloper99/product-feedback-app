
import styled from "styled-components"
import { Button } from "antd"
import { NavLink } from 'react-router-dom'
import { CaretUpOutlined as up } from '@ant-design/icons';
import { ReactComponent as msg } from '../../assets/icons/msg.svg';




export const Container = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
margin: 0 auto;
border-radius: 15px;
color: white;
align-items: center;

`


export const NavContainer = styled.div`
display: flex;
width: 100%;
height: 100px;
margin: 0 auto;
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


TextWrapper.TextItem = styled.div`
font-weight: 700;
font-size: 24px;
margin: 0 35px 0 20px;
cursor: pointer;

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



// ---------------------begin feedback box -----------------------


export const WrapperItem = styled.div`
display: flex;
width: 100%;
background: var(--bgColor);
border-radius: 15px;
margin-top: 30px;
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
color: var(--textColor);
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
color: var(--textColor);

`

MessageBar.Msg = styled(msg)`
display: flex;
width: 25px;
height: 25px;
margin-right: 10px;

`
// ----------------------------Begin---CommentsWrapper-------------------

export const CommentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background: var(--bgColor);
margin-top: 30px;
padding: 10px 30px 30px 30px;
color: #000;

`

CommentWrapper.Theme = styled.div`
display: flex;

`

export const CommentItem = styled.div`
display: flex;
flex-direction: column;

`

CommentItem.Title = styled.div`
display: flex;

`

CommentItem.Desc = styled.div`
display: flex;

`