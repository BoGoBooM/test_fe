import React from 'react';

function ItemsTable({ items, onEdit }) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemsTable;
