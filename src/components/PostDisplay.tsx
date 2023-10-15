import React, { useEffect, useState } from 'react';

interface Post {
    file_url: string;
}

interface Props {
    search: string;
}

const PostDisplay = ({ search }: Props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            // const response = await fetch(`https://testbooru.donmai.us/posts.json?&tags=-child ${search}`);
            const response = await fetch(`https://testbooru.donmai.us/posts.json?&tags=hoshimachi_suisei`);
            const data = await response.json();            
            setPosts(data);
        };

        fetchPosts();
    }, [search]);
    
    return (
        <div className='columns-1 lg:columns-3 xl:columns-5 gap-6 mx-6 '>
            {posts.map((post: Post) => (
                <img className='mb-6 rounded-xl' src={post.file_url} alt="funny"/>
            ))}
        </div>
    );
};

export default PostDisplay;    