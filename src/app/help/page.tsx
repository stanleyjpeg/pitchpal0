"use client";

export default function HelpPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Help & FAQ</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I generate a script, voice, or video?</h2>
          <p>Go to the home page, enter a product link or description, select your style and platform, and click Generate. You can then edit, download, or share your results.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Where can I find my previous creations?</h2>
          <p>Visit the <b>My Creations</b> page to see all your generated scripts, voices, and videos. You can download, delete, or favorite any item.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I upgrade to Pro?</h2>
          <p>Click the upgrade button in the app or visit your profile page. Pro users get higher export limits and access to premium features.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I change my profile or password?</h2>
          <p>Go to your <b>Profile</b> page to update your display name, avatar, or manage your account settings.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Who can I contact for support?</h2>
          <p>Email us at <a href="mailto:support@pitchpal.com" className="text-blue-600 underline">support@pitchpal.com</a> or use the contact form on our website.</p>
        </div>
      </div>
    </div>
  );
} 