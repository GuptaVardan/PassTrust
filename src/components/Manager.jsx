import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v4 as uuidv4} from 'uuid';

const Manager = () => {
  const ref = useRef()
  const password = useRef()
  const [form, setForm] = useState({
    website: '',
    username: '',
    password: ''
  })
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || []
    setPasswords(storedPasswords)
  }, [])

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png"
      password.current.type = "password"
    }
    else {
      ref.current.src = "icons/eye.png"
      password.current.type = "text"
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const savePassword = () => {
    console.log(form);
    setPasswords([...passwords, {id: uuidv4(), ...form}]);
    localStorage.setItem('passwords', JSON.stringify([...passwords, {id: uuidv4(), ...form}]));
    setForm({ website: '', username: '', password: '' });
    toast('Password saved successfully');
  }

  const copyItem = (item) => {
    navigator.clipboard.writeText(item);
    toast('Copied to clipboard successfully');
  }

  const deleteItem = (id) => {
    const updatedPasswords = passwords.filter(item => item.id !== id);
    const confirmation = confirm(`Click 'Ok' if you really want to delete this password`);
    if (!confirmation) return;
    setPasswords(updatedPasswords);
    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    toast('Password deleted successfully');
  }

  const editItem = (id) => {
    const itemToEdit = passwords.find(item => item.id === id);
    const confirmation = confirm(`Click 'Ok' if you really want to edit this password`);
    if (!confirmation) return;
    setForm(itemToEdit);
    const updatedPasswords = passwords.filter(item => item.id !== id);
    setPasswords(updatedPasswords);
    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    toast('Password is ready to edit');
  }

  return (
    <>
      <ToastContainer/>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto max-w-4xl bg-slate-50 my-10">
        <div className="flex flex-col p-4">
          <h1 className='text-4xl text-center font-bold'>&lt;PassTrust/&gt;</h1>
          <p className='text-xl text-center'>Your Personal Password Manager</p>
          <input value={form.website} onChange={handleChange} placeholder='Enter the website URL' type="text" name="website" id="website" className='border-2 rounded-xl border-black w-full mx-auto my-5 p-2 text-black bg-white' />
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <input value={form.username} onChange={handleChange} placeholder='Enter the username' type="text" name="username" id="username" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-2 text-black bg-white' />
            <div className="relative w-full">
              <input ref={password} value={form.password} onChange={handleChange} placeholder='Enter the password' type="password" name="password" id="password" className='border-2 rounded-xl border-black w-full my-2 mx-auto p-2 text-black bg-white' />
              <span className="absolute right-0 top-0 hover:cursor-pointer" onClick={showPassword}>
                <img ref={ref} src="icons/eyecross.png" alt="loading.." className="py-4.5 px-2" width={40} />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='border-2 rounded-xl border-green-500 my-2 mx-auto p-2 text-white bg-green-500 hover:font-bold hover:cursor-pointer hover:bg-green-600 w-1/2 ' >Save Password</button>
        </div>

        <div className="password width-full p-4 flex flex-col gap-10">
          <h1 className='text-2xl font-bold text-center'>Saved Passwords</h1>
          {passwords.length === 0 ? (<p className='text-center text-gray-500'>No passwords saved yet.</p>) :
            (<table className="table-auto bg-green-100 rounded-md overflow-hidden">
              <thead>
                <tr className='bg-green-600 text-white'>
                  <th className='text-center py-2'>Website</th>
                  <th className='text-center py-2'>Username</th>
                  <th className='text-center py-2'>Password</th>
                  <th className='text-center py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwords.map((item, index) => (
                  <tr key={index}>
                    <td className='py-2 text-center'>
                      <div className="flex justify-center items-center gap-2">
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className='text-blue-700 hover:underline'>{item.website}</a>
                        <button onClick={() => copyItem(item.website)} className=' hover:cursor-pointer'>
                          <img src="icons/copy.png" alt="Copy" width={20} />
                        </button>
                      </div>
                    </td>
                    <td className='text-center py-2'>
                      <div className="flex justify-center items-center gap-2">
                        <span>{item.username}</span>
                        <button onClick={() => copyItem(item.username)} className=' hover:cursor-pointer'>
                          <img src="icons/copy.png" alt="Copy" width={20} />
                        </button>
                      </div>
                    </td>
                    <td className='text-center py-2'>
                      <div className="flex justify-center items-center gap-2">
                        <span>{item.password}</span>
                        <button onClick={() => copyItem(item.password)} className=' hover:cursor-pointer'>
                          <img src="icons/copy.png" alt="Copy" width={20} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <button onClick={() => editItem(item.id)} className='hover:cursor-pointer'>
                          <img src="icons/edit.png" alt="Edit" width={20} />
                        </button>
                        <button onClick={() => deleteItem(item.id)} className='hover:cursor-pointer'>
                          <img src="icons/delete.png" alt="Delete" width={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>)}
        </div>
      </div>
    </>
  )
}

export default Manager
