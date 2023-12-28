"use client";
 
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CarouselHome({}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/images.json');
            const jsonData = await response.json();
            setData(jsonData.images.filter((word) => word.type === "carousel"));
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

    const GetSlides = () => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <div className="relative h-full w-full" key={index}>
                        <img
                            src={item.src}
                            alt={item.name}
                            className="h-full w-full object-cover"
                        />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {item.content.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {item.content.description}
                            </Typography>
                            <div className="flex gap-2">
                                <Link href="/contact">
                                    <Button size="lg" color="white">
                                        Contact us
                                    </Button>
                                </Link>
                                <Link href="/gallery">
                                    <Button size="lg" color="white" variant="text">
                                        Gallery
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
        }
    }

    return (
        <Carousel>
            {
                GetSlides()
            }
        </Carousel>
    )
}