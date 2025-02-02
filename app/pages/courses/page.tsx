'use client';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Tali Tech - Courses',
    description: 'Where kids learn to code and create',
}

const CoursesPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Our Courses</h1>
            <div className="grid gap-4">
                <p>Welcome to our courses section</p>
            </div>
        </div>
    );
};

export default CoursesPage;