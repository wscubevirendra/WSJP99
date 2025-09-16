export default function Loader() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Rotating leaf circle */}
        <div className="relative w-24 h-24 animate-spin-slow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-green-300 rounded-full"></div>
        </div>
        <p className="mt-6 text-lg text-green-700 font-medium animate-pulse">
          Loading eco-friendly experience...
        </p>
      </div>
    </div>
  );
}
