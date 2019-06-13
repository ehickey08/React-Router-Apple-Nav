import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const SubNavDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgba(242,242,242,0.7);
    padding: 12px 0;
    text-align: center;
    height: 92px;
    
`

const SubNavComponent = styled.div`
    padding: 0 20px;
    vertical-align: top;
    margin-top: 3px;
    text-decoration: none;
    cursor: pointer;
`

const IconImage = styled.div`
    width: 46px;
    height: 54px;
    font-size: 30px;
    margin: auto;
    vertical-align: middle;
`

const IconText = styled.div`
    font-size: 11px;
    letter-spacing: -.008em
`

const SubNav = props => {
    return (
        <SubNavDiv>
            {props.tab.subNav.map(subNavComponent => {
                let Logo = subNavComponent[1]
                return(
                    <SubNavComponent>
                        <NavLink className="subnav-link" activeClassName="selected-subnav-link" to={`/${props.tab.title}/${subNavComponent[0]}`}>
                            <IconImage><Logo /></IconImage>
                            <IconText>{subNavComponent[0]}</IconText>
                        </NavLink>
                    </SubNavComponent>
                );
            })}
        </SubNavDiv>
    )
}

export default SubNav
