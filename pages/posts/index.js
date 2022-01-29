import Link from 'next/link';
import React from 'react';

const PostList = ({posts}) => {
    return (
        <div>
            <h1>Post lists</h1>
            {
                posts.map((post) =>
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>
                        <h1>{post.id} - {post.title} </h1>
                    </Link>
                    <hr />
                </div>)
            }
        </div>
    );
};

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    return{
        props:{
            posts:data.slice(0,3)
        }
    }
}