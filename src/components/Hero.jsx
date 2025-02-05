import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="max-w-4xl mx-auto">
            <span className="block text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
              Expense Management
            </span>
            <span className="block text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
              made simple
            </span>
            <span className="block text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              for businesses.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Most expense tracking software is accurate, but hard to use. We make
            the opposite trade-off, and hope you don't get audited.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
            >
              Get 1 months free
            </Link>
            <Link
              href="#demo"
              className="flex items-center text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-all duration-300"
            >
              <span>Watch demo</span>
              <svg
                className="ml-2 w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
{/* 
        <div className="mt-20">
          <h2 className="text-center text-gray-500 text-sm font-semibold mb-8">
            Trusted by these six companies so far
          </h2>
          <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-items-center opacity-75">
            <img src="/logos/transistor.svg" alt="Transistor" className="h-8" />
            <img src="/logos/tuple.svg" alt="Tuple" className="h-8" />
            <img src="/logos/statickit.svg" alt="StaticKit" className="h-8" />
            <img src="/logos/mirage.svg" alt="Mirage" className="h-8" />
            <img src="/logos/laravel.svg" alt="Laravel" className="h-8" />
            <img src="/logos/statamic.svg" alt="Statamic" className="h-8" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
