import styled from "styled-components"
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { ReactComponent as YourSvg } from '../../assets/icons/empty.svg'


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 130px 0 0 50px;
width: 1200px;
border-radius: 15px;
background: var(--bgColor);
padding: 110px 220px;

.ant-empty{
    .ant-empty-image{
        height: 200px;
        svg{
            width: 200px;
            height: 200px;
        }
    }
    
}

`


export const NoDataImg = styled(YourSvg)`

`


export const AddButton = styled(Button)`
color: white;
width: 220px;
height: 60px;
background-color: var(--btnBgColor);
border-radius: 10px;
font-weight: 700;
font-size: 18px;
margin-top: 50px;

`

export const Add = styled(PlusOutlined)`
width: 120x;
height: 12px;

`
