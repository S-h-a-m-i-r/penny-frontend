const Signup = () => {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-left">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-gray-500 mt-2">Enter your details to get started</p>
      </div>
      
      <form className="space-y-4 text-left">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent-600 bg-success-500 text-white py-2 px-4 rounded-md hover:bg-accent-700"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default Signup; 