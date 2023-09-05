import React, { FC } from 'react'
import SearchInput from './SearchInput';
import { BiMenu, BiNotification } from 'react-icons/bi';
import Logo from "../assets/Logo.png";

interface HeaderPropsType {
    title: string
}

const UserHeader: FC<HeaderPropsType> = ({ title }) => {
    return (
        <div className='p-2'>
            <div className='bg-zinc-900 rounded flex p-4'>
                <div className='text-white text-size-100 text-xl my-auto'>{title}</div>
                <SearchInput placeholder='Search Podcasts...' />
                <div className='text-slate-300 px-2'><BiNotification size={32} /></div>
                <div className='text-slate-300 px-2'><BiMenu size={32} /></div>
            </div>
        </div>
    )
}

export default UserHeader;