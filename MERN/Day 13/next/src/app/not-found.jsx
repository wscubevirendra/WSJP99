export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-red-600 mb-4 animate-bounce">404 - Page Not Found</h1>
            <p className="text-lg text-gray-700 animate-fadeIn">The page you are looking for does not exist.</p>
        </div>
    );
}

