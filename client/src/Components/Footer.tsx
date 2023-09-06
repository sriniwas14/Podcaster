import React, { FC } from 'react'
import SearchInput from './SearchInput';
import { BiMenu, BiNotification, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

interface FooterPropsType { }


interface RoundedButtonType {
    icon: any;
    padding: Number;
}

const RoundedButton: FC<RoundedButtonType> = ({ icon, padding }) => {
    return <div className={`hover:bg-zinc-800 transition-all bg-zinc-700 block w-auto p-${padding} m-auto rounded-full text-zinc-200 mx-1`}>
        {icon}
    </div>
}

const Footer: FC<FooterPropsType> = ({ }) => {
    return (
        <div className='p-2 full rounded-xl'>
            <div className='flex text-white'>
                <input className="playSlider" type="range" />
            </div>
            <div className='bg-zinc-900 rounded flex p-4'>
                <div className='text-white text-size-100 text-xl my-auto'>Something</div>
                <div className='w-auto mx-auto flex'>
                    <RoundedButton padding={2} icon={<BiSkipPrevious size={25} />} />
                    <RoundedButton padding={4} icon={<BiPlay size={30} />} />
                    <RoundedButton padding={2} icon={<BiSkipNext size={25} />} />
                </div>
                <div className='text-slate-300 px-2'><BiNotification size={32} /></div>
                <div className='text-slate-300 px-2'><BiMenu size={32} /></div>
            </div>
        </div >
    )

}

export default Footer;