import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Tagline() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return user? (
        <div className="mt-32 rounded-lg w-1/2">
            <h1 className="text-6xl pb-5">Find your dream job with our help</h1>
            <p className="text-lg pb-5">No longer spend hours writing emails to recruiters, instead spend that time on your personal development</p>
                        
            <Link
                href="/home"
                className="py-3 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
                Dashboard
            </Link>
        </div>
    ) : (
        <div className="mt-32 rounded-lg w-1/2">
            <h1 className="text-6xl pb-5">Find your dream job with our help</h1>
            <p className="text-lg pb-5">No longer spend hours writing emails to recruiters, instead spend that time on your personal development</p>
                        
            {/* <Link
                href="/login"
                className="py-3 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
                Join Today
            </Link> */}

            <Link
                href=""
                className="py-3 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
                Try Our Beta Release
            </Link>
        </div>
    )
}