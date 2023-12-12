import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../../components/base/common'
import { StyledListItem, StyledItem } from '../../components/base/list'
import { HorizentalSpace } from '../../components/base/common'

const ReceivedCard = ({ item, title }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledListItem title={title} theme={theme}>
            <StyledItem title={title} theme={theme} >
                {item.name}
            </StyledItem>
            <HorizentalSpace width={200} />
            <StyledItem title={title} theme={theme} >
                {item.sender_location}
            </StyledItem>
            <HorizentalSpace width={130} />
            <StyledItem title={title} theme={theme} >
                {item.sender_cabinent}
            </StyledItem>
            <HorizentalSpace width={100} />
            <StyledItem title={title} theme={theme} >
                {item.reciver_location}
            </StyledItem>
            <HorizentalSpace width={130} />
            <StyledItem title={title} theme={theme} >
                {item.reciver_cabinent}
            </StyledItem>
            <HorizentalSpace width={100} />
            <StyledItem title={title} theme={theme} >
                {item.reciver.email}
            </StyledItem>
            <HorizentalSpace width={220} />
            <StyledItem title={title} theme={theme} >
                {item.sender.email}
            </StyledItem>
        </StyledListItem>
    )
}

export default ReceivedCard

