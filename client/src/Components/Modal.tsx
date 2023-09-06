import { FC, ReactNode } from 'react';

interface PodcastCardProps {
    children: ReactNode;
}

const Modal: FC<PodcastCardProps> = ({ children }) => {
    return <div className='fixed inset-0 bg-black/60 flex'>
        <div className='bg-zinc-800 rounded-lg text-white w-1/3 m-auto p-6'>
            {children}
        </div>
    </div>
}

export default Modal