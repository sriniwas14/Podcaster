import React, { FC } from 'react'

interface SearchInputProps {
    placeholder: string
}

const SearchInput: FC<SearchInputProps> = ({ placeholder }) => {
    return (
        <input className='csSearchInput' type="text" placeholder={placeholder} />
    )
}

export default SearchInput;