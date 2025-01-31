import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
import { GamepadIcon } from 'lucide-react';

export default async function Header() {
  const { userId } = auth();

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a]/80 to-[#1e293b]/80 backdrop-blur-lg border-b border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          <GamepadIcon className="w-6 h-6 text-[#6094d0]" />
          GameShare
        </Link>

        {/* Navigation Links */}
        <div>
          {userId ? (
            <div className="flex items-center gap-6">
              <Link 
                href="/dashboard" 
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300" />
              </Link>
              
              <Link 
                href="/scoreboard" 
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Scoreboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300" />
              </Link>

              <Link 
                href="/upload" 
                className="px-4 py-2 bg-gradient-to-r from-blue-500/80 to-teal-500/80 hover:from-blue-500 hover:to-teal-500 rounded-lg text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Upload
              </Link>

              <div className="pl-4 border-l border-[rgba(255,255,255,0.1)]">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 rounded-full ring-2 ring-[#6094d0] hover:ring-4 transition-all duration-300"
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link 
                href="/sign-in" 
                className="text-gray-300 hover:text-white transition-colors duration-300 group relative"
              >
                Sign In
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link 
                href="/sign-up" 
                className="px-4 py-2 bg-gradient-to-r from-blue-500/80 to-teal-500/80 hover:from-blue-500 hover:to-teal-500 rounded-lg text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}