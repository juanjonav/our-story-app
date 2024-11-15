import React, { useEffect, useState } from 'react';
import axios from 'axios';
const avatarurl = "https://unavatar.io/"

const url = 'https://apimocha.com/juanjonavx/post'; 
export default function Post() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);
  
  return (
    <div className="text-gray-100">
      
      <main className="container mx-auto px-4 py-8 ">
        <div className="max-w-xl mx-auto space-y-10 rounded ">
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-800 hover:bg-gray-750 transition-colors border-gray-700 ">
              <div className="flex flex-row items-center space-x-4 pb-2">
                
                <img src={`${avatarurl}${post.user.handle}`} alt="" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-sm text-slate-50">@{post.user.handle}</p>
                </div>
                <p className="ml-auto text-sm text-gray-400">{post.timestamp}</p>
              </div>
              <div className="post-content">
                <h2 className="text-xl font-bold">{post.content_title}</h2>
                <p className="text-gray-300">{post.content}</p>
                <img src={post.content_img} alt="" className="w-1200 h-1200" />
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
};

