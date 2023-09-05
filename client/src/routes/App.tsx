import { FC } from 'react'
import UserHeader from "../Components/UserHeader"
import Layout from '../Components/Layout'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

interface AppProps { }

const App: FC<AppProps> = () => {
    return <Layout header={<UserHeader title="Podcaster" />} footer={<Footer />} sidebar={<Sidebar />} />
}

export default App;