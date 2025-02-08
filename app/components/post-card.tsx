import { useState } from "react";
import { Heart, MessageCircle, Repeat2, DollarSign } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  author: string;
  handle: string;
  time: string;
  content: string;
  image: string;
  profileImage?: string; // Optional profile image
  stats: {
    likes: string;
    reposts: string;
    comments: string;
    tips: string;
  };
}

export function PostCard({
  author,
  handle,
  time,
  content,
  image,
  profileImage,
  stats,
}: PostCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#E6EEFA] rounded-lg shadow-sm">
      <div className="p-4 space-y-4">
        {/* Author Info */}
        <div className="flex items-start gap-3">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={`${author}'s profile`}
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-semibold">{author[0]}</span>
            </div>
          )}
          <div>
            <div className="flex text-[#413A3A] items-center gap-2">
              <span className="font-semibold">{author}</span>
              <span className="text-gray-500">{handle}</span>
              <span className="text-gray-500">{time}</span>
            </div>
            <p className="mt-2 text-lg text-[#272323]">{content}</p>
          </div>
        </div>

        {/* Clickable Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt="Post image"
            width={500}
            height={300}
            className="w-full h-64 object-cover object-top cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Post Stats */}
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5" />
            <span>{stats.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Repeat2 className="w-5 h-5" />
            <span>{stats.reposts}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-5 h-5" />
            <span>{stats.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5" />
            <span>{stats.tips}</span>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt="Full-screen image"
            layout="intrinsic"
            width={800}
            height={600}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
}
