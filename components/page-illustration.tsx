import React from 'react'

export default function PageIllustration() {
  return (
    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
      <svg className="absolute top-0 right-0 transform translate-x-1/2 -mr-16" width="722" height="320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="illustration-01" x1="-4.14" y1="43.12" x2="303.145" y2="391.913" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5D5DFF" stopOpacity=".01" />
            <stop offset=".538" stopColor="#5D5DFF" stopOpacity=".32" />
            <stop offset="1" stopColor="#5D5DFF" stopOpacity=".01" />
          </linearGradient>
        </defs>
        <path d="M14.533 12.543 2.753 26.61 4.574 43 5.565 6.569.396 13.266.739 19.819 1.066l9.412.47c5.157.26 10.38.533 15.519.837 z" fill="url(#illustration-01)" />
      </svg>
    </div>
  )
}
