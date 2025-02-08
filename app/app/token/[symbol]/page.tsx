"use client";

import { useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TokenTradingPage({
  params,
}: {
  params: { symbol: string };
}) {
  const [orderType, setOrderType] = useState("buy");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const chartOptions = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    xaxis: {
      categories: ["1D", "1W", "1M", "3M", "6M", "1Y"],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    stroke: {
      curve: "smooth" as const,
    },
    colors: ["#3b82f6"],
    grid: {
      borderColor: "#2a2f35",
    },
  };

  const series = [
    {
      name: "Price",
      data: [30, 40, 35, 50, 49, 60],
    },
  ];

  return (
    <div className="min-h-screen bg-[#131E28] text-white p-4">
      <Link href="/token" className="flex items-center text-blue-500 mb-4">
        <ArrowLeftCircle className="mr-2" /> Back to Tokens
      </Link>
      <h1 className="text-2xl font-bold mb-4">{params.symbol} Trading</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#2a2f35] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Price Chart</h2>
          <Chart
            options={chartOptions}
            series={series}
            type="line"
            height={300}
          />
        </div>

        <div className="bg-[#2a2f35] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Trade {params.symbol}</h2>
          <div className="mb-4">
            <div className="flex rounded-md overflow-hidden">
              <button
                className={`flex-1 py-2 ${
                  orderType === "buy"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => setOrderType("buy")}
              >
                Buy
              </button>
              <button
                className={`flex-1 py-2 ${
                  orderType === "sell"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => setOrderType("sell")}
              >
                Sell
              </button>
            </div>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-300"
              >
                Amount to {orderType === "buy" ? "Buy" : "Sell"}
              </label>
              <input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-md text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-300"
              >
                Price per Token
              </label>
              <input
                id="price"
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-md text-white"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-md ${
                orderType === "buy"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } text-white font-medium`}
            >
              {orderType === "buy" ? "Buy" : "Sell"} {params.symbol}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400">
            Total:{" "}
            {(Number.parseFloat(amount) * Number.parseFloat(price)).toFixed(2)}{" "}
            USD
          </p>
        </div>
      </div>
    </div>
  );
}
