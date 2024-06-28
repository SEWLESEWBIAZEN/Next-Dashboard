import { Metadata } from "next";
import { fetchCustomersPages, fetchFilteredCustomers } from "@/app/lib/data";
import Table from '@/app/ui/customers/table';
import Pagination from "@/app/ui/invoices/pagination";


export const metadata:Metadata={
  title:"Customers | Acme Dashboard"
}



export default async function Page({
  searchParams,
}:{
  searchParams?:{
    query?:string;
    page?:string;
  }
}) { 
  const query=searchParams?.query || '';
  const totalPages=await fetchCustomersPages(query)
  const currentPage=Number(searchParams?.page) ||1;
  
  // const customers= await fetchFilteredCustomers(query); 
  
 
    return<main>
      <Table query={query} currentPage={currentPage}/>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  }