import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [fill, setfill] = useState([])
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data)
      setfill(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  const handleSearch = (event) => {
    setfill(data.filter(f => (
      f.name.toLowerCase().includes(event.target.value)
    )))
  }
  return (
    <>
      <div className='flex flex-col justify-center w-max'>

        <div className="p-4">
          <input type='text' onChange={handleSearch} className='border my-7 p-2 ring-1 ring-black' size={30} placeholder='Search Names.' />
          <table className='max-w-full divide-y divide-gray-200 border-2 border-blue-500 shadow-lg'>
            <thead className="bg-blue-50 border-gray-900">
              <tr >
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">website</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fill.map((item, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name
                  }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.phone
                  }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.username
                  }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.website}</td>
                </tr>
              ))}
            </tbody>



          </table>
        </div>
      </div>
    </>
  )
}

export default App