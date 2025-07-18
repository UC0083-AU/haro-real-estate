import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly USDC Income Trend",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 text-sm sm:text-base">
      <header className="text-center py-4 border-b">
        <h1 className="text-2xl sm:text-3xl font-bold">Haro Real Estate (Demo)</h1>
        <p className="text-xs sm:text-sm text-red-500">Demo Only – No Real Transactions</p>
        {!walletConnected ? (
          <Button className="mt-2" onClick={() => setWalletConnected(true)}>
            Connect Wallet (Simulated)
          </Button>
        ) : (
          <p className="text-green-600 mt-2 text-sm">Wallet Connected: 0x123...789</p>
        )}
      </header>

      <main className="max-w-5xl mx-auto mt-6 px-2 sm:px-6">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-2">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="property">Property</TabsTrigger>
            <TabsTrigger value="buy">Buy/Sell</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card className="mt-4">
              <CardContent className="space-y-4 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold">Your Portfolio</h2>
                <p>Total RET Tokens: <strong>1,250 RET</strong></p>
                <p>Estimated USDC Income (Monthly): <strong>85 USDC</strong></p>
                <p>Annual Yield: <strong>8.2%</strong></p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="property">
            <Card className="mt-4">
              <CardContent className="space-y-4 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold">Sydney Apartment – 99 George St</h2>
                <p>Price per Token: 50 USDC</p>
                <p>Total Tokens: 10,000</p>
                <p>Yield: 7.5% / year</p>
                <p>Description: Modern 2-bedroom unit near CBD with high rental demand.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buy">
            <Card className="mt-4">
              <CardContent className="space-y-4 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold">Buy RET Tokens</h2>
                <p>Enter number of tokens to simulate purchase:</p>
                <input className="border p-2 w-full max-w-sm" placeholder="e.g. 100" />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-2">Simulate Purchase</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Transaction Complete</DialogTitle>
                    </DialogHeader>
                    <p>Successfully simulated purchase of RET tokens.</p>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet">
            <Card className="mt-4">
              <CardContent className="space-y-4 p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold">Wallet Summary</h2>
                <p>USDC Balance: <strong>320 USDC</strong></p>
                <p>Income History (simulated)</p>
                <ul className="list-disc pl-6">
                  <li>2025-07-01: 8.50 USDC</li>
                  <li>2025-06-01: 7.90 USDC</li>
                  <li>2025-05-01: 7.50 USDC</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="charts">
            <Card className="mt-4">
              <CardContent className="p-4 sm:p-6">
                <Line options={chartOptions} data={chartData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
