import { MaterialReactTable } from "material-react-table";

export default function Root(props) {
  return (
    <MaterialReactTable
      columns={[{ header: "name", accessorKey: "name" }]}
      data={[{ name: "string" }, { name: "strong" }]}
    />
  );
}
