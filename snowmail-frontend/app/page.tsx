import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import FetchData from '@/components/FetchData'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Tagline from '@/components/Tagline'
import UserReview from '@/components/UserReview'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'

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

      <Navbar />

      <main className="flex flex-row items-center justify-center space-x-24 px-20">
        <Tagline />
        <Card />
      </main>

      <main className="flex flex-row items-center justify-center space-x-24 mt-8 mb-12">
        <UserReview />
        {/* <Reviews /> */}
      </main>

      <Footer />
    </div>
  )
}
