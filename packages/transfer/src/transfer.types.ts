export type Key = string | number;

export type DataItem = {
  key: Key,
  label: string,
  disabled: boolean
}

export type Props = {
  key: Key,
  label: string,
  disabled: boolean
}

export interface ITransferProps {
  data: DataItem[], //所有数据
  modelValue: Key[],  //防止有边框的索引
  props: Props  //数据的别名
}

export interface ITransferPanelProps {
  data: any[],
  props?: Props
}

export interface IPanelState {
  checked: Key[],
  allChecked: boolean
}