// TwitterClone.jsx

import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Twitter } from "lucide-react";

// Datos de ejemplo para los tweets
const tweets = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "johndoe",
    },
    content: "Just setting up my Twitter clone!",
    timestamp: "2m",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "janesmith",
    },
    content: "This dark mode is looking pretty slick. #webdev #ui",
    timestamp: "10m",
  },
  {
    id: 3,
    user: {
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "bobjohnson",
    },
    content: "Learning Next.js and Tailwind CSS is fun! Building this Twitter clone is a great way to practice.",
    timestamp: "30m",
  },
  {
    id: 4,
    user: {
      name: "Alice Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "alicew",
    },
    content: "Just pushed my latest project to GitHub. Open source is the way to go!",
    timestamp: "1h",
  },
  {
    id: 5,
    user: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "charliebrown",
    },
    content: "Who's up for a coding challenge? Let's build something awesome this weekend!",
    timestamp: "2h",
  },
];

const TwitterClone = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Twitter className="h-8 w-8 text-blue-400" />
          <h1 className="ml-4 text-xl font-bold">Home</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-gray-800 hover:bg-gray-750 transition-colors border-gray-700 p-4 rounded-lg">
              <div className="flex flex-row items-center space-x-4 pb-2">
                <Avatar>
                  <AvatarImage src={tweet.user.avatar} alt={tweet.user.name} />
                  <AvatarFallback>{tweet.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{tweet.user.name}</p>
                  <p className="text-sm text-gray-400">@{tweet.user.handle}</p>
                </div>
                <p className="ml-auto text-sm text-gray-400">{tweet.timestamp}</p>
              </div>
              <div>
                <p>{tweet.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TwitterClone;
