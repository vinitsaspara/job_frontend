import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import React, { useEffect, useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { useDispatch } from 'react-redux'
import { setSearchQurey } from '@/redux/jobSlice'

const filterData = [
    {
        filtertype : "Location",
        array:["Delhi NCR","Bangalore","Heydrabad","Pune","Mumbai"]
    },
    {
        filtertype : "Industry",
        array:["Frontend Developer","Backend Developer","Fullstack Developer","Data Science"]
    },
    {
        filtertype : "Salary",
        array:["0-40k","42-1lakh","1lakh to 5lakh"]
    },
]

function FillterCard() {

    const dispatch = useDispatch();

    const [selectedValue,setSelectedValue] = useState('');
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchQurey(selectedValue));
    },[selectedValue])

  return (
    <div className='w-full bg-white p-3 rounded-md shadow-2xl'>
        <h1 className='font-bold text-lg text-[#903b3b]'>Filler Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup value={selectedValue} onValueChange = {changeHandler}>
            {
                filterData.map((data,index)=>(
                    <div>
                        <h1 className='font-bold text-lg text-[#be5555]'>{data.filtertype}</h1>
                        {
                            data.array.map((item,idx)=>{
                                const itemId = `r${index}-${idx}`
                                return(
                                    <div className='flex items-center space-x-2 m-2'>
                                        <RadioGroupItem id={itemId} value={item}/>
                                        <Label htmlFor={itemId} >{item}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FillterCard