interface HeaderProps {
  onCreateService?: () => void;
}

export function Header({ onCreateService }: HeaderProps) {
  return (
    <header className="py-16">
      <div className="max-w-8xl mx-auto px-8 flex items-center justify-between">
        <div className="flex-1 text-center">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-yellow-500">Long The Dragon Portal</span>
          </h1>
          <p className="text-gray-600 text-lg">All Services, One Click Away</p>
        </div>
        {onCreateService && (
          <button
            onClick={onCreateService}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>New Service</span>
          </button>
        )}
      </div>
    </header>
  );
}
