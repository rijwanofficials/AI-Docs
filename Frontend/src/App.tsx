function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white px-4">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">AI Docs Verification</h1>

        <p className="text-lg text-blue-100">
          An AI-driven document verification platform with secure
          authentication, OTP-based signup, and role-based access.
        </p>

        <p className="text-sm text-blue-200">
          Built with React, TypeScript, Tailwind, Redux, and a secure Node.js
          backend.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="px-5 py-2 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-100 transition">
            Get Started
          </button>

          <button className="px-5 py-2 border border-white rounded-md hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
