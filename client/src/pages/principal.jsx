
import React from "react";
const avatarurl = "https://unavatar.io/"
// Datos de ejemplo para los posts
const posts = [
  {
    id: 1,
    user: {
      name: "Vicky",
      handle: "vickypalami",
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "2m",
  },
  {
    id: 2,
    user: {
      name: "mire",
      handle: "mireee",
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "10m",
  },
  {
    id: 3,
    user: {
      name: "EmetSuki",
      handle: "@EmetTwitch",
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "30m",
  },
  {
    id: 4,
    user: {
      name: "JuanjoNavx",
      handle: "juanjonavx",
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "1h",
  },
  {
    id: 5,
    user: {
      name: "Rubynavx",
      handle: "rubynavx",
    },
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "2h",
  },
];

export default function Post() {
  

  return (
    <div className="text-gray-100">
      
      <main className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto space-y-10 rounded">
          {posts.map((post) => (
            <div key={post.id} className="bg-zinc-800 hover:bg-gray-750 transition-colors border-gray-700">
              <div className="flex flex-row items-center space-x-4 pb-2">
                
                <img src={`${avatarurl}${post.user.handle}`} alt="" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-sm text-slate-50">@{post.user.handle}</p>
                </div>
                <p className="ml-auto text-sm text-slate-50">{post.timestamp}</p>
              </div>
              <div>
                <p >{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
};

