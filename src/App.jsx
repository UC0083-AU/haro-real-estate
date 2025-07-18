import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const chartData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "USDC Income",
        data: [7.2, 7.5, 7.9, 8.3, 8.6, 9.1],
        borderColor: "#00A8A5",
        backgroundColor: "#00A8A540",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly USDC Income Trend" },
    },
  };

  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <header className="text-center py-4 border-b">
        <h1 className="text-2xl font-bold">Haro Real Estate (Demo)</h1>
        <p className="text-sm text-red-500">Demo Only – No Real Transactions</p>
        {!walletConnected ? (
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setWalletConnected(true)}>
            Connect Wallet (Simulated)
          </button>
        ) : (
          <p className="text-green-600 mt-2">Wallet Connected: 0x123...789</p>
        )}
      </header>

      <main className="max-w-4xl mx-auto mt-6">
        <div className="flex justify-around mb-4 border-b pb-2">
          {["dashboard", "property", "buy", "wallet", "charts"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg hover:bg-blue-100 ${activeTab === tab ? "bg-gray-200 font-semibold" : "text-gray-600"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <div className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Your Portfolio</h2>
            <p>Total RET Tokens: <strong>1,250 RET</strong></p>
            <p>Estimated USDC Income (Monthly): <strong>85 USDC</strong></p>
            <p>Annual Yield: <strong>8.2%</strong></p>
          </div>
        )}

        {activeTab === "property" && (
          <div className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Sydney Apartment – 99 George St</h2>
            <p>Price per Token: 50 USDC</p>
            <p>Total Tokens: 10,000</p>
            <p>Yield: 7.5% / year</p>
            <p>Description: Modern 2-bedroom unit near CBD with high rental demand.</p>
          </div>
        )}

        {activeTab === "buy" && (
          <div className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Buy RET Tokens</h2>
            <p className="mb-2">Enter number of tokens to simulate purchase:</p>
            <input className="border p-2 w-full max-w-sm mb-2" placeholder="e.g. 100" />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => alert("Simulated purchase successful.")}
            >
              Simulate Purchase
            </button>
          </div>
        )}

        {activeTab === "wallet" && (
          <div className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Wallet Summary</h2>
            <p>USDC Balance: <strong>320 USDC</strong></p>
            <p className="mt-2 font-semibold">Income History (simulated)</p>
            <ul className="list-disc pl-6">
              <li>2025-07-01: 8.50 USDC</li>
              <li>2025-06-01: 7.90 USDC</li>
              <li>2025-05-01: 7.50 USDC</li>
            </ul>
          </div>
        )}

        {activeTab === "charts" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <Line options={chartOptions} data={chartData} />
          </div>
        )}
      </main>
    </div>
  );
}
