


import styled from "styled-components"
import { Button, Input } from 'antd'
import { ReactComponent as pen } from '../../assets/icons/pen.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 700px;
align-items: center;
margin: 0 auto;
background: var(--bgColor);

`


// --------------------------begin-navbar------------------>>>

export const NavContainer = styled.div`
display: flex;
width: 100%;
height: 100px;
margin: 0 auto;
padding: 0 25px;
border-radius: 15px;
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

// -----------------------end navbar----------------<<<


// ----------------------begin-wrapper-------------->>>


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 50px;
margin-top: 20px;
color: var(--titleColor);
position: relative;

&::after{
    content: '';
    display: flex;
    position: absolute;
    top: -40px;
    left: 50px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)
}

>svg{
    width: 35px;
    height: 35px;
}

`

export const PenIcon = styled(pen)`
position: absolute;
z-index: 3;
top: -18px;
left: 74px;
color: white;


`

export const Title = styled.div`
display: flex;
flex-direction: column;
font-weight: 700;
font-size: 24px;
line-height: 50px;


`
// ---------------------------------------------------------------
export const FeedbackTitle = styled.div`
display: flex;
flex-direction: column;


`

FeedbackTitle.Title = styled.div`
display: flex;
font-weight: 700;
font-size: 18px;
line-height: 24px;
color: var(--titleColor);

`

FeedbackTitle.Desc = styled.div`
display: flex;
font-weight: 400;
font-size: 18px;
line-height: 24px;
margin-bottom: 20px;
color: var(--textColor);

`
FeedbackTitle.Input = styled(Input)`
display: flex;
height: 50px;
font-size: 18px;
border-radius: 5px;
background: var(--bodyColor);

`

// ---------------------------------------------------------------
export const Category = styled.div`
display: flex;
flex-direction: column;
margin-top: 15px;

.ant-select{
    .ant-select-selector{
    background-color: var(--bodyColor);
    border-radius: 5px;
    height: 50px!important;
    align-items: center;
    font-size: 18px;
   }
}

`

Category.Title = styled(FeedbackTitle.Title)`
display: flex;


`

Category.Desc = styled(FeedbackTitle.Desc)`
display: flex;

`

// ---------------------------------------------------------------
export const FeedbackDetail = styled.div`
display: flex;
flex-direction: column;

`

FeedbackDetail.Title = styled(FeedbackTitle.Title)`
display: flex;

`

FeedbackDetail.Desc = styled(FeedbackTitle.Desc)`
display: flex;

`

FeedbackDetail.Input = styled(Input.TextArea)`
display: flex;
font-size: 18px;
border-radius: 5px;
background: var(--bodyColor);

`
// ----------------------------------------------------------------
export const BtnGroup = styled.div`
display: flex;
align-items: center;
justify-content: end;
margin-top: 30px;

`



export const AddBtn = styled(Button)`
display: flex;
color: white;
width: ${({width})=> width ? width : `180px`};
height: ${({height})=> height ? height : `50px`};
background-color: var(--btnBgColor);
border-radius: 10px;
font-weight: 700;
font-size: 18px;
align-items: center!important;
justify-content : center!important;


`

export const CancelBtn = styled(AddBtn)`
width: ${({width})=> width ? width : `180px`};
height: ${({height})=> height ? height : `50px`};
background: ${({bgcolor})=> bgcolor ? bgcolor : ``};
margin-right: 20px;

`


export const DeleteBtn = styled(CancelBtn)`
margin-right: 200px;
`


// ----------------------end-wrapper--------------<<<