
export interface ICheckboxProps {
  indeterminate?: boolean,  //是否半选
  checked?: boolean,  //是否选中
  name?: string,  //原生的name
  disabled?: boolean, //是否禁用
  label?: string | number | boolean,  //目前没有group中使用
  modalValue?: string | number | boolean  //绑定checkbox的值
}

// ts中接口中的可有可无