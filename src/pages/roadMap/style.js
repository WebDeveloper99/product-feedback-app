
import styled from "styled-components"
import { Button } from "antd"
import { CaretUpOutlined as up } from '@ant-design/icons';
import { ReactComponent as msg } from '../../assets/icons/msg.svg';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 1490px;

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
justify-content: space-between;

`



export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;



`


TextWrapper.TextItem = styled.div`
font-weight: 700;
font-size: ${({fontSize})=> fontSize ? fontSize : "16px"};
margin: 0 35px 0 20px;
cursor: pointer;

`


export const BtnWrapper = styled.div`
display: flex;
align-items: center;
justify-content: end;
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
// ------------------------------body Container--------------->>>



export const BodyContainer = styled.div`
display: flex;
height: 80vh;
border-bottom: 5px solid var(--navbarBgColor);
border-radius: 10px;
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
// --------------------------------Left------------------------------

export const Left = styled.div`
display: flex;
flex-direction: column;
flex: 1;

`

export const LeftHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 50px 0 30px 0;

`

LeftHeader.Title = styled.div`
display: flex;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: var(--titleColor);

`


LeftHeader.Desc = styled.div`
display: flex;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: var(--textColor);

`


export const LeftItem = styled.div`
display: flex;
flex-direction: column;
background: var(--bgColor);
border-top: 5px solid #F49F85;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
padding: 35px;
margin-bottom: 25px;

`

LeftItem.Status = styled.div`
display: flex;
font-weight: 400;
font-size: 18px;
line-height: 24px;
margin-left: 30px;
color: var(--textColor);
position: relative;

&::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    left: -25px;
    top: 8px;
    border-radius: 50%;
    background: #F49F85;
}

`

LeftItem.Title = styled.div`
display: flex;
font-weight: 700;
font-size: 20px;
line-height: 26px;
margin: 10px 0;
color: var(--titleColor);

`

LeftItem.Desc = styled.div`
display: flex;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: var(--textColor);

`

export const LeftItemCategory = styled.div`
display: flex;
width: 130px;
align-items: center;
justify-content: center;
color: var(--activeBgColor);
padding: 2px 16px;
font-weight: 600;
font-size: 16px;
line-height: 28px;
border: none;
margin: 20px 0;
border-radius: 10px;
background: var(--bodyColor);
cursor: pointer;

:hover{
    background: var(--hoverBtnBgColor);
}

&:focus{
    background: #4661E6;
    color: white;
}


`


LeftItem.About = styled.div`
display: flex;
justify-content: space-between;

`


export const LikeBar = styled.div`
display: flex;
align-items: center;
justify-content: center;

`



export const LikeBtn = styled.button`
display: flex;
padding: 10px 12px;
background: var(--bodyColor);
border: none;
color: var(--textColor);
border-radius: 10px;
font-weight: 700;
font-size: 18px;
line-height: 22px;
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
margin-right: 7px;
color: var(--activeBgColor);


`


export const MessageBar = styled.div`
display: flex;
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



// -----------------------------Center------------------------------



export const Center = styled(Left)`
margin: 0 35px;

`

export const CenterHeader = styled(LeftHeader)``

CenterHeader.Title = styled(LeftHeader.Title)``

CenterHeader.Desc = styled(LeftHeader.Desc)``

export const CenterItem = styled(LeftItem)`
border-top: 5px solid  #AD1FEA;

`

CenterItem.Status = styled(LeftItem.Status)`
&::before{
    background: #AD1FEA;
}

`

CenterItem.Title = styled(LeftItem.Title)``

CenterItem.Desc = styled(LeftItem.Desc)``

export const CenterItemCategory = styled(LeftItemCategory)``

CenterItem.About = styled(LeftItem.About)``

// -------------------------right-----------------------------


export const Right = styled(Left)``

export const RightHeader = styled(LeftHeader)``

RightHeader.Title = styled(RightHeader.Title)``

RightHeader.Desc = styled(RightHeader.Desc)``

export const RightItem = styled(LeftItem)`
border-top: 5px solid  #62BCFA;

`

RightItem.Status = styled(LeftItem.Status)`
&::before{
    background: #62BCFA;
}

`

RightItem.Title = styled(LeftItem.Title)``

RightItem.Desc = styled(LeftItem.Desc)``

export const RightItemCategory = styled(LeftItemCategory)``

RightItem.About = styled(LeftItem.About)``

// ------------------------------body Container---------------<<<









