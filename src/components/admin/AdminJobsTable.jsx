import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Eye, MoreHorizontal } from "lucide-react";
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminJobsTable() {
  const companies = useSelector((store) => store.company.companies);
  const allAdminJobs = useSelector((store) => store.job.allAdminJobs);
  const searchJobByTest = useSelector((store) => store.job.searchJobByTest);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

//   console.log(filterJobs);
  

  useEffect(() => {
    const filterdJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByTest) {
          return true;
        }

        return job?.title.toLowerCase().includes(searchJobByTest.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByTest.toLowerCase());
      });
    setFilterJobs(filterdJobs);
  }, [allAdminJobs, searchJobByTest]);

  return (
    <div>
      <Table>
        <TableCaption>List of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job) => (
            <TableRow key={job._id}>
              <TableCell>{job?.company?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job?.company?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-30">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                    <div onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center w-fit gap-2 cursor-pointer mt-2">
                      <Eye className="w-4"></Eye>
                      <span>Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminJobsTable;
