import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

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
    <div>
        Welcome {user.email}!
    </div>
  )
}
