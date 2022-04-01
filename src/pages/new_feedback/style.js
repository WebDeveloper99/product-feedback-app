

import styled from "styled-components"
import { Input } from 'antd'

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
font-size: 24px;
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
color: var(--titleColor);
position: relative;
border: 1px solid red;

&::after{
    content: '';
    display: flex;
    position: absolute;
    width: 50px;
    height: 50px;
    width: 50%;
    border: 1px solid red;
}


`

export const Title = styled.div`
display: flex;
flex-direction: column;
font-weight: 700;
font-size: 28px;
line-height: 60px;


`
// ---------------------------------------------------------------
export const FeedbackTitle = styled.div`
display: flex;
flex-direction: column;


`

FeedbackTitle.Title = styled.div`
display: flex;
font-weight: 700;
font-size: 20px;
line-height: 28px;
color: var(--titleColor);

`

FeedbackTitle.Desc = styled.div`
display: flex;
font-weight: 400;
font-size: 20px;
line-height: 24px;
margin-bottom: 20px;
color: var(--textColor);

`
FeedbackTitle.Input = styled(Input)`
display: flex;
height: 60px;
font-size: 18px;
border-radius: 5px;
background: var(--bodyColor);

`

// ---------------------------------------------------------------
export const Category = styled.div`
display: flex;
flex-direction: column;

.ant-select{
    .ant-select-selector{
    background-color: var(--bodyColor);
    border-radius: 5px;
    height: 60px!important;
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
flex-direction: column;


`


// ----------------------end-wrapper--------------<<<