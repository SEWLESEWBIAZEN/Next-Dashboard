'use client'
import { useState } from 'react';

import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import { fetchRevenue } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {

  // const [hoveredMonth, setHoveredMonth]= useState("");
  const revenue=await fetchRevenue();
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

   const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
   return <p className="mt-4 text-gray-400">No data available.</p>;
   }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <div className="rounded-xl bg-gray-50 p-4">
        <div className=" mt-0 items-end  grid grid-cols-12 gap-2 rounded-md bg-white p-4">
          <div
            className="mb-6 hidden justify-between text-sm text-gray-400 "
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300 bar"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
                // onMouseEnter={()=>setHoveredMonth(month.month)}
                // onMouseLeave={()=>setHoveredMonth("")}
              >
                 {/* {hoveredMonth === month.month && (
              <div className="absolute bottom-full mb-2 p-1 text-xs bg-black text-white rounded">
                {`Revenue: $${month.revenue}`}
              </div>
            )} */}
              </div>
              <p className="text-sm text-gray-400 -rotate-90">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
