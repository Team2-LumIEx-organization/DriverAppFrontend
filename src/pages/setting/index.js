import React, { useContext } from 'react'
import { AuthorizedBackground } from '../../components/base/common'
import Button from '../../components/base/button'
import MainContext from "../../MainContext";
import axios from 'axios'
import { ThemeContext } from "../../context/themeContext";

const SettingPage = () => {

    const { deleteAccountContext, setTokenContext } = useContext(MainContext).login;
    const { toggleTheme } = useContext(ThemeContext);
    const onDeleteAccountClick = () => {
        deleteAccountContext()
        setTokenContext('')
        localStorage.removeItem('token')
        axios.defaults.headers.common.token = ''
    }

    return (
        <AuthorizedBackground>
            <div style={{ height: '400px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Button
                    onClick={() => toggleTheme()}
                    text='Toggle Theme'
                    type='primary'
                />
            </div>
        </AuthorizedBackground>
    )
}

export default SettingPage