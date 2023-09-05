import { FC } from 'react'

interface LayoutProps {
    header: any;
    sidebar: any;
    footer: any;
    outlet: any;
}

const Layout: FC<LayoutProps> = ({ header, sidebar, footer, outlet }) => {
    return <div className='csLayout bg-zinc-950'>
        <div>
            {header}
        </div>
        <div className='flex h-full w-full'>
            {sidebar}
            <div className='w-4/5'>
                {outlet}
            </div>

        </div>
        {footer}
        <div>

        </div>
    </div>
}

export default Layout;