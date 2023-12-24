"use client"
import { useState, FormEvent, ChangeEvent } from 'react';
import { createClient } from '@supabase/supabase-js'

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  school: string;
  major: string;
  gpa: number;
  user: string;
}

interface Props {
    userId: string;
}

export default function SignupForm(props : Props) {

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    school: '',
    major: '',
    gpa: 0,
    user: props.userId,
  });

  // Supabase
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
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="gpa">GPA:</label>
        <input
          type="text"
          id="gpa"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
