import React, { useState } from 'react';

interface Props {
    onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const [search, setSearch] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
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