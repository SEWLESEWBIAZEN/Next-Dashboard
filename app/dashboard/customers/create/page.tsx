import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';



export const metadata={
    title:"create-customer | Acme Dashboard"
}

export default async function Page(){
  

    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                {label:'customers', href:'/dashboard/customers'},
                {
                    label: 'Create Customers',
                    href:'/dashboard/customers/create',
                    active:true,
                },
            ]}
            />
            <Form/>
        </main>
    )
} 