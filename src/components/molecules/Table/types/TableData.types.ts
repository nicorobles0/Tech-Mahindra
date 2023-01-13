export type TableDataType = {
  head: HeadTableType[];
  body: BodyTableType[];
};
export type HeadTableType = {
  name: string;
  width: string;
};

export type BodyTableType = {
  id: string;
  names: string;
  address: string;
  date: string;
  age: string;
  state: string;
  role: string;
};
