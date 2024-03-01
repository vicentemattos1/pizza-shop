import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-account-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-account-card'
import { MonthOrdersAmountCard } from './month-orders-account-card'
import { MonthRevenue } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard"></Helmet>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenue />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
