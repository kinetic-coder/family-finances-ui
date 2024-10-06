import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="content">
      <main className="">
        <div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Smart Financial Planning for Your Family
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
              Take control of your family&apos;s financial future. Our tools and expertise help you make informed decisions for a secure and prosperous life together.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Family Finances. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}