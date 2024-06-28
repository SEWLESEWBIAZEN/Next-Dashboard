'use client'
import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
   PhotoIcon,
   EnvelopeIcon,
    UserCircleIcon,
   
 
} from '@heroicons/react/24/outline';
import { createCustomer, CState } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';



export default function Form() {
    const initialState: CState = { message: null, errors: {} };
    const [state, formAction] = useActionState(createCustomer, initialState);

    console.log(state)
    return (
        <form action={formAction}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Enter Name
                    </label>
                    <div className="relative">
                        <input
                            type='text'
                            id="name"
                            name="name"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby='name-error'
                            placeholder='Enter customers name'
                            required
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))}

                    </div>
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Enter Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                // step="0.01"
                                placeholder="Enter Email"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='email-error'
                                required
                            />
                            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                            state.errors.email.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Enter Image Url
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="img"
                                name="img_url"
                                type="text"
                                // step="0.01"
                                placeholder="Enter Image Url"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='img-error'
                                required
                            />
                            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div id="img-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.img_url &&
                            state.errors.img_url.map((error: string) => (
                                <p className='mt-2 text-sm text-red-500' key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>                
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/customers"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Customer</Button>
            </div>
        </form>
    );
}
