import { Listing, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Listing[]> {
  const res = await fetch(
    'https://660b41f0ccda4cbc75dc9be3.mockapi.io/api/v1/listing'
  )
  const data = await res.json()
  return data

  // return [
  //   {
  //       address: "1234 Street", 
  //       beds: 1, 
  //       baths: 2, 
  //       area: 3, 
  //       lotAreaValue: 4,
  //       zestimate: 5, 
  //       rentZestimate: 6,
  //       monthlyHoaFee: 6,
  //       thirtyYearFixedRate: 6,
  //       propertyTaxRate: 6,
  //   },
    // ...
  //]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
