import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ id, name, image, prepTimeMinutes, cookTimeMinutes }) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <Link href={`/recipe/${id}`}>
            <Image
                className="w-full h-48 object-cover"
                width={400}
                height={300}
                src={image}
                alt={name}

            />
        </Link>

        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="flex justify-between text-gray-700 text-sm mt-4">
                <span>
                    <span className="font-medium">Prep:</span> {prepTimeMinutes}  min
                </span>
                <span>
                    <span className="font-medium">Cook:</span> {cookTimeMinutes} min
                </span>
            </div>
        </div>
    </div>
);

export default RecipeCard;