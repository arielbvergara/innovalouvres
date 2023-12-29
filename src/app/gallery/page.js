'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery({}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/images.json');
                const jsonData = await response.json();
                setData(jsonData.images);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
            {data ? (data.map(({ src }, index) => (
                <div key={index}>
                <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={src}
                    alt="gallery-photo"
                />
                </div>
            ))) : (
                <div className="flex items-center justify-center">
                    Loading
                </div>
            )
        }
        </div>
    );
}