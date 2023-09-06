import { FC } from 'react'
import Modal from './Components/Modal';

interface AppProps { }

const recentCards = [
    { title: "How to sell your kidney", artist: "Alan Watts" },
    { title: "How to sell your kidney", artist: "Alan Watts" },
    { title: "How to sell your kidney", artist: "Alan Watts" },
    { title: "How to sell your kidney", artist: "Alan Watts" },
    { title: "How to sell your kidney", artist: "Alan Watts" },

]

interface PodcastCardProps {
    title: String;
    artist: String;
}

const PodcastCard: FC<PodcastCardProps> = ({ title, artist }) => {
    return <div className='w-1/6 py-2 pr-4'>
        <img className='rounded-xl mb-2' src="https://dummyimage.com/360x360/222/aaa" />
        <div className='text-slate-100 text-lg px-2'>{title}</div>
        <div className='text-slate-400 px-2'>by {artist}</div>
    </div>
}

const App: FC<AppProps> = () => {
    return <div style={{ maxHeight: "67vh" }}>
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
        <div className='text-zinc-400 text-md cursor-default p-3 rounded-lg bg-zinc-900'>Recently Played</div>
        <div className='' style={{ display: "ruby" }}>
            {
                recentCards.map(card => <PodcastCard title={card.title} artist={card.artist} />)
            }
        </div>
    </div>
}

export default App;