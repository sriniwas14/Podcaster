import { FC } from 'react'
import UserHeader from "./Components/UserHeader"
import Layout from './Components/Layout'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'

interface AppProps { }

const recentCards = [
    { title: "How to sell your kidney", artist: "StupidBaka@69420" },
    { title: "How to sell your kidney", artist: "StupidBaka@69420" },
    { title: "How to sell your kidney", artist: "StupidBaka@69420" },
    { title: "How to sell your kidney", artist: "StupidBaka@69420" },
    { title: "How to sell your kidney", artist: "StupidBaka@69420" },

]

const PodcastCard = ({ title, artist }) => {
    return <div className='w-1/6 py-2 pr-4'>
        <img className='rounded-xl mb-2' src="https://dummyimage.com/640x360/222/aaa" />
        <div className='text-slate-100 text-lg px-2'>{title}</div>
        <div className='text-slate-400 px-2'>by {artist}</div>
    </div>
}

const App: FC<AppProps> = () => {
    return <div className=''>
        <div className='text-zinc-400 text-md cursor-default p-3 rounded-lg bg-zinc-900'>Trending</div>
        <div className='' style={{ display: "ruby" }}>
            {
                recentCards.map(card => <PodcastCard title={card.title} artist={card.artist} />)
            }
        </div>
        <div className='text-zinc-400 text-md cursor-default p-3 rounded-lg bg-zinc-900'>Recently Played</div>
        <div className='' style={{ display: "ruby" }}>
            {
                recentCards.map(card => <PodcastCard title={card.title} artist={card.artist} />)
            }
        </div>
    </div>
}

export default App;