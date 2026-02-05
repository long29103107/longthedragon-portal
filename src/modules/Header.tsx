interface HeaderProps {
  environment?: string;
}

export function Header({ environment = 'staging' }: HeaderProps) {
  return (
    <header className="text-center py-16">
      <h1 className="text-6xl font-bold mb-4">
        Welcome to <span className="text-yellow-500">Link Hub</span>
      </h1>
      <p className="text-gray-600 text-lg">All Apps, One Click Away</p>
      <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
        {environment}
      </span>
    </header>
  );
}
