import { Search, History } from "lucide-react";
import Link from "next/link";

export default function TokenPage() {
  const actions = [
    { icon: "↓", label: "Deposit", number: "5" },
    { icon: "₿", label: "Trade", number: "8" },
    { icon: "🐷", label: "Earn", text: "" },
    { icon: "◎", label: "Airdrop", text: "" },
    { icon: "+", label: "Create Token", text: "" },
    { icon: "↑", label: "Withdraw", text: "" },
  ];

  const tokens = [
    { pair: "ABC/USDC", price: "$648.31", change: "+0.49%" },
    { pair: "TUY/USDC", price: "$32.5", change: "+4.59%" },
    { pair: "MNK/WLD", price: "$15029", change: "+323%" },
    { pair: "LTK/USDC", price: "$0.00192", change: "-3.37%" },
  ];

  return (
    <div className="min-h-screen bg-[#131E28] text-white">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              className="w-full pl-10 pr-3 py-2 bg-[#2a2f35] rounded-md text-white"
              placeholder="WLD"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="p-2 rounded-md bg-[#2a2f35]">
            <History className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {actions.map((action) => (
            <div
              key={action.label}
              className="aspect-square rounded-2xl border border-gray-800 flex flex-col items-center justify-center gap-2 p-4"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-sm text-center">{action.label}</span>
              {action.number && (
                <span className="text-xs text-gray-400">{action.number}</span>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 border-b border-gray-800 pb-2">
            <button className="text-white font-semibold">Favorites</button>
            <button className="text-gray-400">Hot</button>
            <button className="text-gray-400">Gainers</button>
            <button className="text-gray-400">Losers</button>
            <button className="text-gray-400">New</button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 text-gray-400 text-sm">
              <span>Token</span>
              <span>Last Price</span>
              <span>24h chg%</span>
            </div>
            {tokens.map((token) => (
              <Link
                href={`/token/${token.pair.split("/")[0]}`}
                key={token.pair}
              >
                <div className="grid grid-cols-3 items-center hover:bg-gray-800 p-2 rounded cursor-pointer">
                  <span>{token.pair}</span>
                  <span>{token.price}</span>
                  <span
                    className={
                      token.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {token.change}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
