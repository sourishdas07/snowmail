import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import FetchData from '@/components/FetchData'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Tagline from '@/components/Tagline'
import UserReview from '@/components/UserReview'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex-1 w-full flex flex-col bg-gradient-to-tr from-white from-35% to-sky-300">

      {/* Home Screen Navbar */}
      <nav>
        <Navbar />
      </nav>

      <main className="flex flex-row items-center justify-center space-x-24 px-20">
        <Tagline />
        <Card />
      </main>

      <main className="flex flex-row items-center justify-center space-x-24">
        <UserReview />
      </main>

      {/* <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">

      </footer> */}


    </div>
  )
}
