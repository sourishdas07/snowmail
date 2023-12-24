"use client"

export default function Card() {
    return (
        <div className="bg-white mt-32 rounded-lg shadow-3xl w-1/2">
          <div className="bg-gray-200 rounded-t-lg mb-1 p-4 w-full">
            <h2 className="text-xl font-bold">Subject: Application for Software Engineering Position</h2>
          </div>
          <div className="bg-white rounded-b-lg p-4">
            <p>Dear Mr. Smith,</p>
            <br></br>
            <p>I trust this email finds you well. My name is <span className="text-blue-500">[Your Full Name]</span>, 
                and I am reaching out to express my keen interest in the Software Engineering position at <span className="text-blue-500">[Company Name]</span>. With 2 of experience in <span className="text-blue-500">[mention relevant technologies]</span>, I am confident 
                in my ability to contribute effectively to your dynamic team. I am drawn to [Company Name] for its 
                commitment to innovation, and I believe my skills in <span className="text-blue-500">[specific skills]</span> align well with the challenges 
                of the role. I have attached my resume for your consideration and would appreciate the opportunity to 
                discuss further how my background and expertise make me a valuable asset to <span className="text-blue-500">[Company Name]</span>. I am available 
                for an interview at your earliest convenience.
            </p>
            <br></br>
            <p>Sincerely, </p>
            <p><span className="text-blue-500">[Your Full Name]</span></p>
          </div>
        </div>
      );
}