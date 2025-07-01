import { TableLine } from "./TableLine"

export const Table = ({ items = [] }) => {
  const titles = ["Title", "price", "Starting Date", "Ending Date", "status"]
  return (
    <div className="py-8 w-full">
      <div className="shadow overflow-hidden rounded border-black">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              {titles.map((item, index) => {
                return (<th key={index} className="text-center py-3 px-4 uppercase font-semibold text-sm">{item}</th>)
              })}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {items.map(
              (product, index) => {
                return (
                  <TableLine key={index} content={product} />
                )
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}