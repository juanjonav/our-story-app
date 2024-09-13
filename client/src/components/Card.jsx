import { Children } from "react";

const twitt = [
  {
    id: 1,
    user: {
      name: "John Doe",
      handle: "vickypalami",
    },
    content: "Just setting up my Twitter clone!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta atque omnis eum quibusdam eius odit esse ab iusto provident ex modi voluptatibus ut ipsum blanditiis totam, a consectetur accusantium?",
    timestamp: "2m",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      handle: "janesmith",
    },
    content: "This dark mode is looking pretty slick. #webdev #ui",
    timestamp: "10m",
  },
  {
    id: 3,
    user: {
      name: "Bob Johnson",
      handle: "bobjohnson",
    },
    content: "Learning Next.js and Tailwind CSS is fun! Building this Twitter clone is a great way to practice.",
    timestamp: "30m",
  },
  {
    id: 4,
    user: {
      name: "Alice Williams",
      handle: "juanjonavx",
    },
    content: "Just pushed my latest project to GitHub. Open source is the way to go!",
    timestamp: "1h",
  },
  {
    id: 5,
    user: {
      name: "Charlie Brown",
      handle: "rubynavx",
    },
    content: "Who's up for a coding challenge? Let's build something awesome this weekend!",
    timestamp: "2h",
  },
];
export default function Card({UserName, Children}){
  return(
    <div key={tweet.id} className="bg-gray-800 hover:bg-gray-750 transition-colors border-gray-700">
    <div className="flex flex-row items-center space-x-4 pb-2">
      
      <img src={`${avatarurl}${tweet.user.handle}`} alt="" className="w-16 h-16 rounded-full" />
      <div>
        <p className="font-semibold">{tweet.user.name}</p>
        <p className="text-sm text-slate-50">@{tweet.user.handle}</p>
      </div>
      <p className="ml-auto text-sm text-slate-50">{tweet.timestamp}</p>
    </div>
    <div>
      <p>{tweet.content}</p>
      <p>{Children}</p>
    </div>
    </div>
  )
  
}