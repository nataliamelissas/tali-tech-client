import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Tali Tech - About Us',
    description: 'Where kids learn to code and create',
}

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700">
                Welcome to our company. We are dedicated to providing excellent service and innovative solutions.
            </p>
        </div>
    );
}