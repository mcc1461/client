import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
       <div className='flex flex-col gap-5 text-danger '>
         <h1 className='text-danger'>404</h1>
         <h2>Page Not Found</h2>
         <p>The page you are looking for doesn't exist or another error occurred.</p>
         <Link to="/">Go back to the homepage</Link>
       </div>
    );
}
