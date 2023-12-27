import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignupForm from '../signup/form'
import EmailGenerationForm from './form'

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
    <div className="flex-1 w-full flex bg-gradient-to-tr from-white from-35% to-sky-300 h-full">

      <div className="bg-white flex-col justify-between items-center px-10 py-2 w-1/5 h-full">
        
        <div className="text-4xl font-bold text-gray-800 mt-2">
          Snowmail
        </div>

        <div className='mt-5'>
          <div>
            <a href="#" className="hover:underline">Dashboard</a>
          </div>

          <div className='mt-3'>
            <a href="#" className="hover:underline">Profile</a>
          </div>
        </div>
        
      </div>

      Welcome {user.email}!

      {/* Email Generation Form Needs Editing */}
      <div>
        <EmailGenerationForm userId={user.id}/>
      </div>

    </div>
  )
}
