"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Listing = {
    address: string 
    beds: number 
    baths: number 
    area: number 
    lotAreaValue: number
    zestimate: number 
    rentZestimate: number
    monthlyHoaFee: number
    thirtyYearFixedRate: number
    propertyTaxRate: number
}

export const columns: ColumnDef<Listing>[] = [
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "beds",
    header: "Number of beds",
  },
  {
    accessorKey: "baths",
    header: "Number of baths",
  }
]
