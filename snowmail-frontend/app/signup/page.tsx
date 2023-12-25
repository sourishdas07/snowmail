import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignupForm from './form'

export default async function Signup() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: { user },} = await supabase.auth.getUser();
    
    if (!user) {
        redirect('/login')
    }

  return (
    <div>
        <SignupForm userId={user.id}/>
    </div>
  )
}
