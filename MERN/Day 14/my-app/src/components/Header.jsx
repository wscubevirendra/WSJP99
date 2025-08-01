import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-green-600 w-full text-white shadow-md">
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <h1 className="text-2xl font-bold">RecipeHub</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/recipes" className="hover:text-yellow-300 transition">Recipes</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;