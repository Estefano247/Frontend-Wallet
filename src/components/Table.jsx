
const Table = ({ columns, data=[], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-6 py-3 border-b">
                {col.header}
              </th>
            ))}
            <th className="px-6 py-3 border-b text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">
                No hay datos disponibles.
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 border-t">
                    {row[col.accessor]}
                  </td>
                ))}
                <td className="px-6 py-4 border-t text-center space-x-2">
                  <button
                    onClick={() => onEdit(row)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
