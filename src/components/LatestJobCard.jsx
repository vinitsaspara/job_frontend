import { useNavigate } from 'react-router-dom'
import { Badge } from './ui/badge'
import React from 'react'

function LatestJobCard({job}) {   
  const navigate = useNavigate(); 

  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className='p-5 cursor-pointer rounded-md shadow-lg bg-white border border-gray-100'>
        <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-800 font-bold' variant="ghost">{job?.position} positions</Badge>
            <Badge className='text-[#903b3b] font-bold' variant="ghost">{job?.jobType}</Badge>
            <Badge className='text-[#d98825]' variant="ghost">{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCard