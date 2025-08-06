"use client";
import { useUser, UserProfile, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [displayName, setDisplayName] = useState(user ? `${user.firstName || ""}${user.lastName ? " " + user.lastName : ""}` : "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isLoaded) return <div className="p-8">Loading...</div>;
  if (!isSignedIn) return <div className="p-8">Please sign in to view your profile.</div>;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const [firstName, ...rest] = displayName.trim().split(" ");
      const lastName = rest.join(" ") || undefined;
      await user?.update({ firstName, lastName });
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="flex items-center gap-4 mb-6">
        <UserButton afterSignOutUrl="/" />
        <div>
          <div className="font-semibold">{user?.primaryEmailAddress?.emailAddress}</div>
          <div className="text-zinc-500 text-sm">{user?.id}</div>
        </div>
      </div>
      <form onSubmit={handleSave} className="mb-4">
        <label className="block mb-2 font-medium">Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          className="border rounded px-3 py-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save"}
        </button>
        {success && <div className="text-green-600 mt-2">Profile updated!</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Manage Account</h2>
        <UserProfile />
      </div>
    </div>
  );
} 