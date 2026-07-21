import React from 'react';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className={'flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#1e1e1e] px-10 text-[#f1f1f1]'}>
            <h1 className={'text-4xl font-semibold tracking-tight'}>{'404'}</h1>
            <p className={'text-base text-[#a8a8a8]'}>{'This page could not be found.'}</p>
            <Link
                href={'/'}
                className={'mt-4 text-base font-semibold text-[#FF5C00] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]'}
            >
                {'Back home'}
            </Link>
        </div>
    );
}
