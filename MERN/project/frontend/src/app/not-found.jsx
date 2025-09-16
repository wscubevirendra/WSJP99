import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-4">
            <div className="animate-bounce-slow mb-8">
                <div className="w-40 h-40 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-6xl font-bold text-green-600">404</span>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">Page Not Found</h1>
            <p className="text-green-700 mb-6 max-w-md">
                Oops! It seems the page you're looking for doesn't exist. Maybe you'd like to go back to the homepage and explore our eco-friendly solutions.
            </p>
            <Link href="/">
                <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
                    Go to Homepage
                </button>
            </Link>
        </div>
    );
}
