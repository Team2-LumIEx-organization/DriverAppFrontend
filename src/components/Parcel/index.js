import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { StyledListItem, StyledItem } from '../base/list'
import { HorizentalSpace } from '../base/common'

const ReceivedCard = ({ parcel }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledListItem title={title} theme={theme}>
            <StyledItem title={title} theme={theme} >
                {parcel.sender.location}
            </StyledItem>
            <HorizentalSpace width={250} />
            <StyledItem title={title} theme={theme} >
                {parcel.sender.cabinent}
            </StyledItem>
            <HorizentalSpace width={350} />
            <StyledItem title={title} theme={theme} >
                {item.reciver.location}
            </StyledItem><HorizentalSpace width={350} />
            <StyledItem title={title} theme={theme} >
                {item.reciver.cabinent}
            </StyledItem>
        </StyledListItem>
    )
}

export default ReceivedCard

