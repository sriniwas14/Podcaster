import React, { FC } from 'react'

interface SearchInputProps {
    placeholder: string
}

const SearchInput: FC<SearchInputProps> = ({ placeholder }) => {
    return (
        <input className='w-1/3 text-center hover:bg-zinc-700 focus:bg-zinc-700 text-white transition-all mx-auto bg-zinc-800 p-2 rounded-xl mr-auto w-2/4' type="text" placeholder={placeholder} />
    )
}

export default SearchInput;