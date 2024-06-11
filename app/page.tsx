'use client';
import Link from 'next/link';

import { availableRoutes } from '@/utils/mocks/login/routes.mock';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <h1>Available routes</h1>
      {availableRoutes.map((route, index) => (
        <div key={index} className="underline text-blue-400">
          <Link href={route.path}>{route.title}</Link>
        </div>
      ))}
    </div>
  );
}
