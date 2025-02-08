import Link from "next/link";

export default function EarnPage() {
  return (
    <div className="min-h-screen bg-[#131E28]  text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex gap-4">
          <Link href="/earn" className="border-b-2 border-white">
            <span className="text-xl font-semibold">Campaigns</span>
          </Link>
          <Link href="/earn/surveys" className="text-gray-400">
            <span className="text-xl font-semibold">Surveys</span>
          </Link>
          <Link href="/earn/freelance" className="text-gray-400">
            <span className="text-xl font-semibold">Freelance</span>
          </Link>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-[#f8fafc] rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <img
                  src="/eth.jpg"
                  alt="Ethereum"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-black text-xl font-semibold">
                  Exclusive Genesis NFT Drop
                </h3>
                <p className="text-gray-600">
                  Mint a rare NFT and unlock community perks
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span>75/100 Minted</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
