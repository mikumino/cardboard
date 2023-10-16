import React, { useEffect, useState } from 'react';

interface Post {
    id: number; // i may be dumb but i cant find post url, so i just have this to build the url
    file_url: string;
    tag_string_general: string;
    tag_string_artist: string;
    tag_string_copyright: string;
    tag_string_character: string;
    tag_string_meta: string;
    source: string;
}

interface Props {
    search: string;
}

const PostMasonryDisplay = ({ search }: Props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://testbooru.donmai.us/posts.json?&tags=rating:general ${search}`);
            // const response = await fetch(`https://testbooru.donmai.us/posts.json?&tags=hoshimachi_suisei`);
            const data = await response.json();            
            setPosts(data);
        };

        fetchPosts();
    }, [search]);
    
    return (
        <div className='columns-1 lg:columns-3 xl:columns-5 gap-3 mx-6'>
            {posts.map((post: Post) => (
                <img className='mb-3 rounded-xl' src={post.file_url} alt="funny" key={post.file_url}/>
            ))}
        </div>
    );
};

export default PostMasonryDisplay;    