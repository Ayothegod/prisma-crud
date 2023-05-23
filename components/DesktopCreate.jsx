
const DesktopCreate = () => {
  return (
    <div className="hidden sm:block sticky top-0 bg-white w-1/3 mt-6">
      <div>
        <textarea rows="10" className="border border-neutral-400 rounded w-full outline-none focus:border-purple-300 p-2"></textarea>
        <button className="bg-purple-500 text-white rounded shadow-md py-1 px-4">Post</button>
      </div>
    </div>
  )
}

export default DesktopCreate