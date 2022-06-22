import './style.scss';

interface IFormItem {
  label?: string;
  placeholder?: string;
  type: string;
  children?: React.ReactNode;
  end?: boolean;
  center?: boolean;
  itemValue?: any;
  setItemValue?: (value: string) => void;
}

const FormItem = ({ label = '', placeholder, type, children, end, center, itemValue, setItemValue }: IFormItem) => (
  <div className={`form-item ${end ? 'flex-end' : center ? 'flex-center' : ''}`}>
    <label htmlFor=''>{label}</label>
    {type === 'text' && (
      <input
        type='text'
        placeholder={placeholder}
        value={itemValue}
        onChange={(event) => setItemValue && setItemValue(event.target.value)}
      />
    )}
    {type === 'date' && (
      <input
        type='date'
        placeholder={placeholder}
        value={itemValue}
        onChange={(event) => setItemValue && setItemValue(event.target.value)}
      />
    )}
    {type === 'email' && (
      <input
        type='email'
        placeholder={placeholder}
        value={itemValue}
        onChange={(event) => setItemValue && setItemValue(event.target.value)}
      />
    )}
    {type === 'phone' && (
      <input
        type='phone'
        placeholder={placeholder}
        value={itemValue}
        onChange={(event) => setItemValue && setItemValue(event.target.value)}
      />
    )}
    {(type === 'radio' || type === 'buttons') && children}
  </div>
);

export default FormItem;
