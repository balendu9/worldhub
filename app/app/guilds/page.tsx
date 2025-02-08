import { Plus } from "lucide-react";

export default function GuildView() {
  const joinedGuilds = [
    { name: "World Build", avatar: "/world.jpg", unread: 3 },
    { name: "Crypto Traders", avatar: "/agric.jpg", unread: 0 },
    { name: "NFT Creators", avatar: "/constr.jpg", unread: 1 },
    { name: "DeFi Explorers", avatar: "/money.jpg", unread: 0 },
    { name: "Blockchain Devs", avatar: "/sunset.jpg", unread: 2 },
  ];

  return (
    <div className="flex h-screen bg-[#1a1d21]">
      {/* Sidebar */}
      <div className="w-20 bg-[#2a2f35] p-4 flex flex-col items-center">
        <div className="flex-grow overflow-y-auto space-y-4">
          {joinedGuilds.map((guild, index) => (
            <div key={index} className="relative cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={guild.avatar || "/placeholder.svg"}
                  alt={guild.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {guild.unread > 0 && (
                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {guild.unread}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-4 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center gap-4 border-b border-gray-800">
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
            <img
              src="/world.jpg"
              alt="World Build"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">World Build</h1>
            <p className="text-gray-400">128 members</p>
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto">
          {/* Announcements */}
          <div className="p-4 hover:bg-gray-800/50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Announcements"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Announcements
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>will: Online session now with world...</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm">10:08</span>
            </div>
          </div>

          {/* General Discussions */}
          <div className="p-4 hover:bg-gray-800/50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="General"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    General Discussions
                  </h2>
                  <p className="text-gray-400">
                    will: Anyone interested in building a...
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  3
                </span>
                <span className="text-gray-400 text-sm">23:12</span>
              </div>
            </div>
          </div>

          {/* Find A Team */}
          <div className="p-4 hover:bg-gray-800/50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Find A Team
                  </h2>
                  <p className="text-gray-400">
                    Maxi: I am building an AI based cro...
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  7
                </span>
                <span className="text-gray-400 text-sm">12:08</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
