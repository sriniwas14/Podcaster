import React, { FC } from 'react'
import SearchInput from './SearchInput';

interface HeaderPropsType {
    title: string
}

const UserHeader: FC<HeaderPropsType> = ({ title }) => {
    return (
        <div className='csHeader'>
            <div className='csCard'>
                <div className='csTitle'>{title}</div>
                <SearchInput placeholder='Search Podcasts...' />
                <div>Menu</div>
            </div>
        </div>
    )
}

export default UserHeader;