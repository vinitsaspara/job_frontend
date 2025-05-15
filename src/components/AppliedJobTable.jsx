import React from 'react'
import { Table, TableHeader,TableHead,TableBody,TableCaption, TableRow, TableCell } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

function AppliedJobTable() {

    const allAppliedJobs = useSelector(store=>store.job.allAppliedJobs);

    // console.log(allAppliedJobs);
    

  return (
    <div>
        <Table>
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> :  allAppliedJobs.map((appliedJob)=>(
                        <TableRow key={appliedJob?._id}>
                            <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob.job.title}</TableCell>
                            <TableCell>{appliedJob.job.company.name}</TableCell>
                            <TableCell className="text-right"><Badge className={`${appliedJob.status === 'rejected' ? 'bg-red-500' : appliedJob.status === 'pending' ? 'bg-gray-500' : 'bg-green-500' }`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                } 
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable