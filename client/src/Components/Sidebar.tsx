import { FC, useState } from 'react'
import SearchInput from './SearchInput';
import { BiHomeCircle, BiListOl, BiListUl } from 'react-icons/bi';

interface SidebarProps {

}

const SidebarMenu = ({ items, onClick }) => {
    return <div>
        {
            items.map(item => <div onClick={() => onClick(item.id)} className={`flex p-3 text-white ${item.active && "bg-indigo-700"} p-2 cursor-pointer hover:bg-indigo-700 m-2 rounded-lg transition-all`}>
                <div className='text-2xl mr-3'>{item.icon}</div>
                <div>{item.title}</div>
            </div>)
        }
    </div>
}

const menuItems = [
    { id: 1, icon: <BiHomeCircle />, title: "Explore", active: true },
    { id: 2, icon: <BiListUl />, title: "Subscription" },
    { id: 3, icon: <BiListOl />, title: "Queue" }
]

const Sidebar: FC<SidebarProps> = ({ }) => {
    const [items, setItems] = useState(menuItems)

    const setActiveItem = (selectedItem) => {
        setItems(items.map(item => ({ ...item, active: item.id === selectedItem })))
    }

    return (
        <div className='px-2 w-1/5'>
            <div className="bg-zinc-900 h-full w-full rounded-lg pt-1">
                <div className={"text-white text-lg rounded-lg p-4 bg-gradient-to-b from-indigo-700 to-indigo-800"}>
                    Good Morning!
                </div>
                <SidebarMenu items={items} onClick={(itemId) => setActiveItem(itemId)} />

            </div>
        </div>
    )
}

export default Sidebar;