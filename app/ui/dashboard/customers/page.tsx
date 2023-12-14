import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import CustomersTable from '../../customers/table';
export const metadata: Metadata = {
  title: 'Customer List',
  description: 'Contain Information about customer',
};

const Page = async ({ searchParams }: { searchParams?: { query?: string, page?: string } }) => {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');
  console.log(customers)
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  )
}
export default Page;
