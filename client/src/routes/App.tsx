import { FC } from 'react'
import UserHeader from "../Components/UserHeader"
import Layout from '../Components/Layout'
import Sidebar from '../Components/Sidebar'

interface AppProps { }

const App: FC<AppProps> = () => {
    return <Layout header={<UserHeader title="Podcaster" />} sidebar={<Sidebar />} />
}

export default App;