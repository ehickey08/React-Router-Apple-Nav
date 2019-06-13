import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaApple} from 'react-icons/fa'
const NavWrapperDiv = styled.div`
    background: rgba(45,45,45,0.98);
    width: 100%;
    height: 44px;
    padding: 0 22px;

    div{
        display: flex;
        justify-content: space-between;
        margin 0 auto;
        max-width: 980px;
        align-items: center;
    }

    a{
        color: white;
        font-size: 14px;
        line-height: 44px;
        text-decoration: none;
        white-space: nowrap;
    }

`

const AppleSpan = styled.span`
    color: white;
    font-size: 24px;
`
const NavWrapper = props => {
    return (
        <NavWrapperDiv>
            <div>
                <Link to="/"><AppleSpan><FaApple /></AppleSpan></Link>
                {props.tabs.map(tab => {
                    return <NavLink activeClassName = "selected" activeStyle ={{opacity: 0.65}} to={`/${tab.title}`}>{tab.title}</NavLink>
                })}
            </div>
        </NavWrapperDiv>
    );
}

export default NavWrapper
