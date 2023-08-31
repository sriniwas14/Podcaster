import { FC } from 'react'

interface LayoutProps {
    header: any;
    sidebar: any;
}

const Layout: FC<LayoutProps> = ({ header, sidebar }) => {
    return <div className='csLayout'>
        <div>
            {header}
        </div>
        <div style={{ display: "flex", height: "100%" }}>
            {sidebar}
            <div style={{ width: "100%", padding: 10 }}>
                B
            </div>
        </div>
    </div>
}

export default Layout;