import React from 'react'
import Styled from 'styled-components'

function Title(props) {
    return (
        <TitleWrapper className="title" style={{color:props.color}}>
            <h2>{props.title}</h2>
            <div className="first">
                <div className="underline"></div>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = Styled.div`
text-align:center;
margin-bottom:10px;
h2{
    font-weight:400;
    text-transform: capitalize;
    letter-spacing:0.3rem;
}
.underline{
    border:1px solid #ff0000;
    margin:0 auto;
    width:40px;
}

`
export default Title
