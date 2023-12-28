import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignupForm from '../signup/form'
import EmailGenerationForm from './form'
import HomeSidebar from '@/components/Sidebar'
import Link from 'next/link'

export default async function Home() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const {
        data: { user },
        } = await supabase.auth.getUser()
    
    if (!user) {
        redirect('/login')
    }

  return (
    <div className="grid grid-cols-6 gap-4 bg-slate-100">
      <div className="col-span-1">
        <HomeSidebar />
      </div>

      <div className="col-span-5 flex flex-col h-full">

        
        <div className="h-1/6 flex">
          <h1 className="text-xl p-7">Welcome {user.email}!</h1>
        </div>

        <div className='mt-4'>
          <Link
                href="/home"
                className="py-3 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-sm" // Added text-sm class for smaller button size
            >
                Logout
            </Link>
        </div>



        <div className="h-5/6">
          {/* Email Generation Form Needs Editing */}
          <EmailGenerationForm userId={user.id}/>
        </div>
      </div>

    </div>
  )
}
