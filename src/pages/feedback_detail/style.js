
import styled from "styled-components"
import { Button } from "antd"
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
/* background: var(--navbarBgColor); */
color: var(--titleColor);
align-items: center;

`



export const TextWrapper = styled.div`
display: flex;
align-items: center;
flex: 1;



`


TextWrapper.TextItem = styled.div`
font-weight: 700;
font-size: 18px;
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
width: ${({width})=> width ? width : `220px`};
height: ${({height})=> height ? height : `60px`};
align-items: center;
justify-content: center;
background: ${({color})=> color ? color : `var(--btnBgColor)`};
border-radius: 10px;
font-weight: 700;
font-size: 18px;

`



// ---------------------begin feedback box -----------------------


export const WrapperItem = styled.div`
display: flex;
width: 1200px;
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
padding: 30px 0 0 50px ;
border-bottom: 2px solid lightgray;
color: #000;

`

CommentWrapper.Theme = styled.div`
display: flex;
font-weight: 700;
font-size: 24px;
line-height: 28px;
margin-bottom: 20px;
color: var(--titleColor);

`

export const CommentItem = styled.div`
display: flex;
color: var(--textColor);

`

export const CommentAvatarWrapper = styled.div`
display: flex;
flex: 1;
align-items: start;
justify-content: center;

`

export const CommentAvatar = styled.div`
display: flex;
width: 50px;
height: 50px;
overflow: hidden;
background-repeat: no-repeat;
background-size: cover;
margin-top: 15px;
border: 1px solid red;
border-radius: 50%;

`

export const CommentMain = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
flex: 9;

`

CommentMain.Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;

`

CommentMain.Desc = styled.div`
display: flex;
font-weight: 400;
font-size: 20px;
line-height: 30px;
padding: 20px;


`

export const CommentReply = styled.div`
display: flex;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: var(--activeBgColor);

`

export const CommentUser = styled.div`
display: flex;
flex-direction: column;

`

CommentUser.Name = styled.div`
display: flex;
font-weight: 700;
font-size: 22px;
line-height: 26px;

`

CommentUser.Email = styled.div`
display: flex;
font-weight: 400;
font-size: 18px;
line-height: 20px;
margin: 7px 0;

`



// ---------------------------------begin-WrapperReplay---------

export const PostReplyWrapper = styled.div`
display: flex;
width: 85%;
margin-left: 140px;
margin-bottom: 40px;
transition: 1s all ease-in-out;

`


PostReplyWrapper.Text = styled.div`
display: flex;
flex: 3;
padding: 20px 30px 60px 30px;
margin-right: 20px;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: var(--textColor);
border: 2px solid  #4661E6;
border-radius: 15px;
cursor: pointer;

`


PostReplyWrapper.Btn = styled.div`
display: flex;
flex: 1;
align-items: start;
justify-content: center;

`

