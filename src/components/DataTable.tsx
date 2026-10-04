import React from "react";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  align?: "left" | "right" | "center";
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  className?: string;
}

export default function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  caption,
  className = "",
}: DataTableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto my-6 ${className}`}>
      {caption && (
        <p className="text-xs uppercase tracking-folio text-maroon font-semibold mb-2">
          {caption}
        </p>
      )}
      <table className="editorial-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`${col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"} ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIdx) => (
            <tr key={item.id ? String(item.id) : rowIdx}>
              {columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className={`${col.align === "right" ? "text-right font-mono" : col.align === "center" ? "text-center" : "text-left"} ${col.className || ""}`}
                >
                  {typeof col.accessor === "function"
                    ? col.accessor(item)
                    : (item[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
