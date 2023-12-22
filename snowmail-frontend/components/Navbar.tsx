

export default function Header() {
  return (
     <div className="flex justify-between items-center bg-grey p-4 w-full bg-blue-900">
          {/* <nav className="flex justify-between items-center bg-grey p-4 w-full bg-blue-900"> */}
        <div className="text-2xl font-bold">
          Snowmail
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      {/* </nav> */}
     </div>
  )
}