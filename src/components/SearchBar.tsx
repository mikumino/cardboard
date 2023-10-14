import React, { useState } from 'react';

interface Props {
    onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const [search, setSearch] = useState('');

    const fetchTags = async (search: string) => {
        console.log(search);
        const response = await fetch(`https://testbooru.donmai.us/tags.json?search[name_matches]=${search}*`);
        const data = await response.json();
        console.log(data);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        fetchTags(search);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(search);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Enter tags...'
                type="text"
                onChange={handleChange}
                className='input input-bordered w-full'
            />
        </form>
    );
}

export default SearchBar;