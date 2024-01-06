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
    
  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  return (
    <div className="grid grid-cols-6 gap-4 bg-slate-100">
      <div className="col-span-1">
        <HomeSidebar />
      </div>

      <div className="col-span-5 flex flex-col h-full">
        <div className='mt-2 flex flex-col items-start'>
          <h1 className="text-3xl p-7 mt-6">Welcome back {user.email}!</h1>
          <form action={signOut}>
            <button className="ml-6 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
              Logout
            </button>
          </form>
        </div>

        <div className="mt-14 h-5/6">
          {/* Email Generation Form Needs Editing */}
          <EmailGenerationForm userId={user.id}/>
        </div>
      </div>

    </div>
  )
}
