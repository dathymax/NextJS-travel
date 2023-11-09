import AccountSetting from '@/components/features/account-setting'
import React from 'react'

const AccountSettingPage = async () => {
    const userInfo = {
        displayName: "Jtadd",
        realName: "Do Tuan Dat",
        phone: "0984193954",
        email: "dathymax@gmail.com",
        bio: "Happiness looks greater on you <3"
    };

    return (
        <AccountSetting userInfo={userInfo} />
    )
}

export default AccountSettingPage