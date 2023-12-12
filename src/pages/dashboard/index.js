import React, { useContext, useEffect, useState } from 'react'
import MainContext from "../../MainContext";
import { AuthorizedBackground } from '../../components/base/common'
import Tabs from "../../components/base/Tabs";
import PickupCard from "../../components/pickup-card";
import OnTheWayCard from "../../components/on_the_way_card";

const DashboardPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const { pickupParcels, onThewayParcels, getPickupParcelsContext, getOnThewayParcelsContext } = useContext(MainContext).dashboard;


    useEffect(() => {
        getPickupParcelsContext()
        getOnThewayParcelsContext()
    }, [])



    return (
        <AuthorizedBackground>
            <Tabs
                selectedTab={selectedTab}
                onTabClick={setSelectedTab}
                tabs={[{
                    name: 'Pickup',
                    id: 1,
                }, {
                    name: 'On The Way',
                    id: 0
                }]}
            />
            <PickupCard
                item={{
                    name: 'Parcel Name',
                    sender_location: "Sender Location",
                    sender_cabinent: "/ Cabinent",
                    reciver_location: "Reciver Location",
                    reciver_cabinent: "/ Cabinent",
                    reciver: { email: "Reciver Email" },
                    sender: { email: "Sender Email" }
                }}
                title={true}
            />
            {selectedTab === 0 && pickupParcels && pickupParcels.map(item => {
                return (
                    <PickupCard item={item} />
                )
            })}
            {selectedTab === 1 && onThewayParcels && onThewayParcels.map(item => {
                return (
                    <PickupCard item={item} />
                )
            })}
        </AuthorizedBackground>
    )
}

export default DashboardPage