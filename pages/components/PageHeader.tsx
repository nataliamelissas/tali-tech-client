import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const PageHeader = () => {
    return (
        <div >
            <Navbar />
            <div className="w-full relative">
                <div className="h-50 relative">
                    <Image
                        src="/assets/gradient-solid-banner.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default PageHeader;