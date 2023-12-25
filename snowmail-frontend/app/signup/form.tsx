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
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="school">Most Recent Education:</label>
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
        <label htmlFor="school">Major:</label>
        <input
          type="text"
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="gpa">GPA:</label>
        <input
          type="float8"
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
