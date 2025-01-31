import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Header() {
  const { userId } = auth();

  return (
    <div className='bg-[#151e28] text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/' className='text-[#6094d0] font-bold hover:bg-[#12323e] p-2 rounded-md'>Home</Link>
        
        <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              <Link href='/dashboard' className='text-[#6094d0] font-bold hover:bg-[#12323e] p-2 rounded-md'>Dashboard</Link>
              <Link href='/scoreboard' className='text-[#6094d0] font-bold hover:bg-[#12323e] p-2 rounded-md'>Scoreboard</Link>
              <Link href='/upload' className='text-[#6094d0] font-bold hover:bg-[#12323e] p-2 rounded-md'>Upload</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
