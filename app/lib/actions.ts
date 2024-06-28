'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { signIn } from '../auth';


const FormSchemaInvoice = z.object({
    id: z.string(),
    customerId: z.string({
      invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce
      .number()
      .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
      invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
  });

const FormSchemaCustomer = z.object({
    id: z.string(),
    name: z.string({
      invalid_type_error: 'Please enter a customer name.',
    }),
    email:z.string({
      invalid_type_error: 'Please enter a customer email.',
    }),
    img_url: z.string({
      invalid_type_error: 'Please enter a customer img Url.',
    }) || null,
    date: z.string(),
  });

//exporting a state

export type State={
    errors?:{
        customerId?:string[];
        amount?:string[];
        status?:string[];
        
    };
    message?:string | null;
};

//creating invoices
const CreateInvoice = FormSchemaInvoice.omit({ id: true, date: true })
export async function createInvoice(prevState:State,formData: FormData) {
    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });

      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }
   // Prepare data for insertion into the database
   const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    //insert data to the database
    try {

        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId},${amountInCents}, ${status},${date})
        `;
        
    }
    catch (error) {
        return { message: ' Database Error :Failed to Create Invoice' }
            }

  // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')    

}



//use Zod to update the expected types
const UpdateInvoice = FormSchemaInvoice.omit({ id: true, date: true });

//updating invoices
export async function updateInvoice(
  id: string, 
  prevState:State,
  formData: FormData) {

    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      };
    }
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;

    try {       
        await sql`
        UPDATE invoices
        SET customer_id=${customerId}, amount=${amountInCents}, status=${status}
        WHERE id=${id}
        `;
    } catch (error) {
        return { message: 'Database Error :Failed to Update Invoice' }

    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');

}

//deleting Invoices
export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice');
    try {
        await sql` DELETE FROM invoices WHERE id=${id}`;
        revalidatePath('/dashboard/invoices')
    } catch (error) {
        return { message: ' Database Error :Failed to Delete Invoice' }

    }    

}


//Add customers

const CreateCustomers = FormSchemaCustomer.omit({ id: true, date: true })
 export async function createCustomer(prevState:State,formData:FormData) {
  const validatedFields = CreateCustomers.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    img_url: formData.get('img_url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
// Prepare data for insertion into the database
const { name, email, img_url } = validatedFields.data;
const date = new Date().toISOString().split('T')[0];

//insert data to the database
try {

    await sql`
    INSERT INTO customers (name, email, img_url, date)
    VALUES (${name},${email}, ${img_url},${date})
    `;
    
}
catch (error) {
    return { message: ' Database Error :Failed to Create Invoice' }
        }

// Revalidate the cache for the invoices page and redirect the user.
revalidatePath('/dashboard/customers');
redirect('/dashboard/customers')    


  
 }



//authenticate
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

