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
import { MoreHorizontal } from "lucide-react";
import { Edit2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function CompaniesTable() {
  const companies = useSelector((store) => store.company.companies);
  const searchCompanyByText = useSelector((store)=>store.company.searchCompanyByText);
  const [filterCompany,setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(()=>{
    const filterdCompany = companies.length >= 0 && companies.filter((company)=>{
      if(!searchCompanyByText){
        return true;
      }

      return company?.name.toLowerCase().includes(searchCompanyByText.toLowerCase());
    })
    setFilterCompany(filterdCompany);
  },[companies,searchCompanyByText])

  return (
    <div>
      <Table>
        <TableCaption>List of your recent registed company</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4}>
                You haven't register any company yet.
              </TableCell>
            </TableRow>
          ) : (
            filterCompany?.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage className="h-16 w-16" src={company.logo} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-20">
                      <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CompaniesTable;
