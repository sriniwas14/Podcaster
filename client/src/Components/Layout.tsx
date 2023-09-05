import { FC } from 'react'

interface LayoutProps {
    header: any;
    sidebar: any;
    footer: any;
}

const Layout: FC<LayoutProps> = ({ header, sidebar, footer }) => {
    return <div className='csLayout bg-zinc-950'>
        <div>
            {header}
        </div>
        <div className='flex h-full w-full'>
            {sidebar}
            <div className='w-4/5'>
                B
            </div>

        </div>
        {footer}
        <div>

        </div>
    </div>
}

export default Layout;