const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col animate-pulse transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Icon skeleton */}
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded transition-colors duration-300"></div>
          {/* Title skeleton */}
          <div className="flex-1">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 transition-colors duration-300"></div>
          </div>
        </div>
        {/* External link icon skeleton */}
        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded transition-colors duration-300"></div>
      </div>

      {/* Description skeleton */}
      <div className="flex-1 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 transition-colors duration-300"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 transition-colors duration-300"></div>
      </div>

      {/* URL and Port skeleton */}
      <div className="flex gap-4 mt-auto">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 transition-colors duration-300"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
