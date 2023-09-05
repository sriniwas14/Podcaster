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
        <div style={{ display: "flex", height: "100%" }}>
            {sidebar}
            <div style={{ width: "100%", padding: 10 }}>
                B
            </div>

        </div>
        {footer}
        <div>

        </div>
    </div>
}

export default Layout;