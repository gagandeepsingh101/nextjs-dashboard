import { fetchCardData } from '@/app/lib/data'
import { Suspense } from 'react'
import { lusitana } from '../../fonts'
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../../skeletons'
import CardWrapper, { Card } from '../cards'
import LatestInvoices from '../latest-invoices'
import RevenueChart from '../revenue-chart'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: `Contain Information about customer's invoices and revenue`,
};
const Page = async () => {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
        <Suspense fallback={<CardSkeleton/>}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>        <LatestInvoices /></Suspense>
      </div>
    </main>
  )
}

export default Page
