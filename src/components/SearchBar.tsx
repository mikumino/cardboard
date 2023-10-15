import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

interface Tag {
    id: string;
    text: string;
}

interface DanbooruTag {
    id: number;
    name: string;
}

interface Props {
    onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [suggestions, setSuggestions] = useState([]);

    const handleDelete = (i: number) => {
        setTags(tags.filter((_tag: Tag, index: number) => index !== i));
    }

    const handleAddition = (tag: Tag) => {
        setTags([...tags, tag]);
    }

    const updateSuggestions = async (search: string) => {
        // Fetch list of tags matching search ordered by count and limited to 20
        const response = await fetch(`https://testbooru.donmai.us/tags.json?search[name_matches]=*${search}*&search[order]=count&limit=20`);
        const data = await response.json();
        // Converts DanbooruTags to Tag
        setSuggestions(data.map((tag: DanbooruTag) => ({ id: tag.id.toString(), text: tag.name })));
    }

    const handleChange = (e: string) => {
        updateSuggestions(e);
    };
    
    return (
        <div>
            <ReactTags
                classNames={{
                    tagInputField: 'input input-bordered w-full',
                    activeSuggestion: 'bg-mino-blue-700',
                    selected: 'mt-6',
                    tag: 'inline-block py-1 px-2 border border-mino-blue-300 rounded-lg mr-2 mb-2',
                    suggestions: '[&_li_mark]:bg-transparent [&_li_mark]:text-neutral bg-mino-dark-500 p-2 rounded-lg cursor-pointer',
                    remove: 'ml-2',
                }}
                tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                placeholder='Enter tags...'
                handleInputChange={handleChange}
                allowDragDrop={false}
                inputFieldPosition='top'
            />
        </div>
    );
}

export default SearchBar;