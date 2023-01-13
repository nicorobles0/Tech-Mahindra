import { TableList, TableTr, TableHead, TableBody } from "./Table.style";
import { ThItem } from "../../atoms/ThItem/ThItem";
import {
  BodyTableType,
  HeadTableType,
  TableDataType,
} from "./types/TableData.types";
import TdItem from "@/components/atoms/TdItem/TdItem";

const Table = () => {
  const tableData: TableDataType = require("./mocks/table.mocks.json");
  const tableBody: BodyTableType[] = tableData.body;

  return (
    <TableList>
      <TableHead>
        <TableTr>
          {tableData?.head.map((title: HeadTableType, index: number) => {
            return (
              <ThItem
                width={title?.name}
                key={`TableTh~${index}`}
                title={title?.name}
              />
            );
          })}
        </TableTr>
      </TableHead>
      <TableBody>
        {tableBody.map((item: BodyTableType, index: number) => {
          return (
            <TableTr key={`TableTr~${index}`}>
              <TdItem text={item.id}/>
              <TdItem text={item.names}/>
              <TdItem text={item.address}/>
              <TdItem text={item.date} />
              <TdItem text={item.age} />
              <TdItem text={item.state} />
              <TdItem text={item.role} />
            </TableTr>
          );
        })}
      </TableBody>
    </TableList>
  );
};
export default Table;
