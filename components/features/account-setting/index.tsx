"use client"

import React, { ReactNode, useState } from 'react'
import LoginAndSecurity from './category-item/login-and-security'
import Notifications from './category-item/notifications'
import Payments from './category-item/payments'
import PersonalInfo from './category-item/personal-info'
import { BiUser, BiLockAlt, BiBell, BiCreditCardAlt } from "react-icons/bi"
import { UserProfileType } from '@/types/features/user'

const categories = [
    {
        label: "Personal info",
        key: "personalInfo",
        icon: <BiUser className='mr-3 font-medium' />
    },
    {
        label: "Login and security",
        key: "loginAndSecurity",
        icon: <BiLockAlt className='mr-3 font-medium' />
    },
    {
        label: "Payments",
        key: "payments",
        icon: <BiCreditCardAlt className='mr-3 font-medium' />
    },
    {
        label: "Notifications",
        key: "notifications",
        icon: <BiBell className='mr-3 font-medium' />
    },
] as {
    label: string,
    key: string,
    icon: ReactNode
}[]

type TypeProps = {
    userInfo: UserProfileType
}

const AccountSetting: React.FC<TypeProps> = ({ userInfo }: TypeProps) => {
    const [activeKey, setActiveKey] = useState<string>("personalInfo");

    const onChangeActiveKey = (key: string) => {
        setActiveKey(key);
    }

    function renderComponent() {
        switch (activeKey) {
            case "personalInfo":
                return <PersonalInfo userInfo={userInfo} />
            case "loginAndSecurity":
                return <LoginAndSecurity />
            case "payments":
                return <Payments />
            case "notifications":
                return <Notifications />
            default:
                break;
        }
    }

    return (
        <div className='flex account-setting'>
            <div className='w-[30%]'>
                <ul className="categories list-none rounded-xl shadow-xl p-5 w-[70%]">
                    {categories.map(category => {
                        return (
                            <li
                                key={category.key}
                                id={category.key}
                                className={`${activeKey === category.key ? "text-[var(--primary)]" : ""} flex items-center text-[14px] font-medium p-3 cursor-pointer primary--hover`}
                                onClick={() => onChangeActiveKey(category.key)}
                            >
                                {category.icon} {category.label}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="w-[70%]">
                {renderComponent()}
            </div>
        </div >
    )
}

export default AccountSetting