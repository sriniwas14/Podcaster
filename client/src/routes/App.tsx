import { FC } from 'react'
import UserHeader from "../Components/UserHeader"

interface AppProps { }

const App: FC<AppProps> = () => {
    return <div>
        <UserHeader title="Podcaster" />
    </div>
}

export default App;