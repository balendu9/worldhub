import { PostCard } from "@/components/post-card";

export default function FeedPage() {
  const posts = [
    {
      author: "Diana Ross",
      handle: "@dr_oss",
      time: "~2h",
      content:
        "Valentine's Day is not always about dating. Show love to your parents too ❤️ this 14th.",
      image: "/post2.jpg",
      profileImage: "/profile2.jpg",
      stats: { likes: "22.1k", reposts: "1.5k", comments: "21", tips: "$100" },
    },
    {
      author: "Michal Santi",
      handle: "@ms_arty",
      time: "~5h",
      content:
        "Art is a universal language, expressing emotions, stories, and dreams beyond words and boundaries.",
      image: "/post3.jpg",
      profileImage: "/profile3.jpg",
      stats: { likes: "11k", reposts: "17", comments: "89", tips: "$10" },
    },
    {
      author: "Alex Johnson",
      handle: "@aj_tech",
      time: "~1h",
      content:
        "Just launched my new app! Check it out and let me know what you think. #TechLaunch #NewApp",
      image: "/post1.jpg",
      profileImage: "/profile1.jpg",
      stats: { likes: "5.2k", reposts: "987", comments: "203", tips: "$50" },
    },
  ];

  return (
    <div className="max-w-lg mx-auto space-y-4 p-4">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
