import AccountSetting from '@/components/features/account-setting'
import React from 'react'

export async function getUserInfo() {
    const data = {
        displayName: "Jtadd",
        realName: "Do Tuan Dat",
        phone: "0984193954",
        email: "dathymax@gmail.com",
        bio: "Happiness looks greater on you <3"
    }

    return data
}

const AccountSettingPage = async () => {
    const userInfo = await getUserInfo();

    return (
        <AccountSetting userInfo={userInfo} />
    )
}

export default AccountSettingPage