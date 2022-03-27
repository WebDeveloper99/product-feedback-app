import { Button } from "antd"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 340px;

`


export const SectionHead = styled.div`
display: flex;
width: 100%;
height: 200px;
padding: 30px;
border-radius: 15px;
background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)

`

SectionHead.Title = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
color: white;

.title{
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
}

.desc{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
}

`

export const SectionBody = styled(SectionHead)`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
padding: 20px;
background: var(--bgColor);
margin: 30px 0;

`

export const AntButton = styled(Button)`
color: var(--activeBgColor);
background: var(--defaultBtnBgColor);
border: none;
border-radius: 15px;

:hover{
    background: var(--hoverBtnBgColor);
}

&:focus{
    background:  #4661E6;
}

`


export const SectionFooter = styled(SectionHead)`
background: var(--bgColor);
display: flex;
flex-direction: column;

`

SectionFooter.Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
font-weight: 700;
color: var(--titleColor);
font-size: 24px;
line-height: 26px;


`

SectionFooter.UL = styled.ul`
display: flex;
flex-direction: column;
color: var(--textColor);
font-weight: 400;
font-size: 20px;
line-height: 28px;

`

SectionFooter.LI = styled.li`
display: flex;
justify-content: space-between;
position: relative;
margin: 4px 0;

::before{
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: -24px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #333;
}


:nth-child(1)::before{
    background: #F49F85;
}
:nth-child(2)::before{
    background: #AD1FEA;
}
:nth-child(3)::before{
    background: #62BCFA;
}


`

export const Link = styled(NavLink)`
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-decoration: underline;

`