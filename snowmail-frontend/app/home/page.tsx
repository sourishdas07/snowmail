import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignupForm from '../signup/form'
import EmailGenerationForm from './form'
import HomeSidebar from '@/components/Sidebar'

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
    <div className="grid grid-cols-6 gap-4 bg-gradient-to-tr from-white from-35% to-sky-300">
      <div className="col-span-1">
        <HomeSidebar />
      </div>

      <div className="col-span-5 flex flex-col items-center h-full">
        <div className="h-1/6">
          <h1 className="text-xl p-7">Welcome {user.email}!</h1>
        </div>
        <div className="h-5/6">
          {/* Email Generation Form Needs Editing */}
          <EmailGenerationForm userId={user.id}/>
        </div>
      </div>

    </div>
  )
}
