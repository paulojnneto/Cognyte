import { useNavigate } from 'react-router';
import { formatDate } from '../../utils';

export const TableLine = ({ content }) => {
  const navigate = useNavigate();
  const { id, title = "", startDate = "", status = "", endDate = "", price = "" } = content || {};
  return (
    <tr key={id} onClick={() => navigate(`edit/${id}`)} className="border-b border-custom-dark-blue bg-gray-50 font-semibold hover:bg-custom-light-blue hover:cursor-pointer">
      <td className="text-center py-3 px-4">{title}</td>
      <td className="text-center py-3 px-4">{`R$ ${price}`}</td>
      <td className="text-center py-3 px-4">{formatDate(startDate)}</td>
      <td className="text-center py-3 px-4">{formatDate(endDate)}</td>
      <td className="text-center py-3 px-4">{status}</td>
    </tr>
  )
}