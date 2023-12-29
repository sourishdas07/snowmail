"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface FormData {
  firstname: string;
  lastname: string;
  school: string;
  major: string;
  gpa: number;
  user: string;
}

interface Props {
    userId: string;
}

export default function EmailGenerationForm(props : Props) {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    school: '',
    major: '',
    gpa: 0,
    user: props.userId,
  });

  const router = useRouter();

  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAPI = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseURL, supabaseAPI);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const { error } = await supabase
        .from('UserProfile')
        .insert(formData)
    console.log("ERROR", error);
    router.replace("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      <h2 className="text-xl">Generate Snowmail!</h2>

      <form onSubmit={handleSubmit} className="p-6 rounded-lg text-black">
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium mb-1">Recipient Email:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="school" className="block text-sm font-medium mb-1">Most Recent Education:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="major" className="block text-sm font-medium mb-1">Major:</label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gpa" className="block text-sm font-medium mb-1">GPA:</label>
          <input
            type="text"
            id="gpa"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300">
          Finish
        </button>
      </form>
      
    </div>
  );
};
