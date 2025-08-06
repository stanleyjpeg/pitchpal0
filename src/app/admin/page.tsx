"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const MOCK_STATS = {
  totalUsers: 42,
  proUsers: 10,
  freeUsers: 32,
  payments: [
    { id: 1, user: "user1@example.com", amount: 2000, method: "Paystack", date: "2024-07-24" },
    { id: 2, user: "user2@example.com", amount: 2000, method: "Flutterwave", date: "2024-07-23" },
    { id: 3, user: "user3@example.com", amount: 2000, method: "Paystack", date: "2024-07-22" },
  ],
};

export default function AdminPage() {
  const { user, isSignedIn } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Clerk: check if user is admin (e.g., by email or metadata)
    if (user && (user.emailAddresses?.[0]?.emailAddress === "admin@example.com" || user.publicMetadata?.admin)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  if (!isSignedIn) {
    return <div className="p-8 text-center">Please sign in to view admin dashboard.</div>;
  }
  if (!isAdmin) {
    return <div className="p-8 text-center">You do not have admin access.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Users" value={MOCK_STATS.totalUsers} />
        <StatCard label="Pro Users" value={MOCK_STATS.proUsers} />
        <StatCard label="Free Users" value={MOCK_STATS.freeUsers} />
      </div>
      <h2 className="text-lg font-semibold mb-2">Recent Payments</h2>
      <table className="w-full text-left border rounded-xl overflow-hidden">
        <thead className="bg-zinc-100 dark:bg-zinc-800">
          <tr>
            <th className="p-2">User</th>
            <th className="p-2">Amount (NGN)</th>
            <th className="p-2">Method</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_STATS.payments.map((p) => (
            <tr key={p.id} className="border-b last:border-b-0">
              <td className="p-2">{p.user}</td>
              <td className="p-2">{p.amount}</td>
              <td className="p-2">{p.method}</td>
              <td className="p-2">{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center">
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-zinc-500 text-sm">{label}</div>
    </div>
  );
} 