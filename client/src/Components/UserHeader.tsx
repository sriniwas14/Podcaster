import React, { FC } from 'react'

interface HeaderPropsType {
    title: string
}

const UserHeader: FC<HeaderPropsType> = ({ title }) => {
    return (
        <div>{title}</div>
    )
}

export default UserHeader;