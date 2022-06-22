import './style.scss'

interface IRadioOption {
  displayName: string;
  value: string;
  checkedImage: string;
  uncheckedImage: string;
}

interface IRadio {
  options: IRadioOption[];
  checkedState: string;
  handleStateChange: (value: string) => void;
}

const Radio = ({ options, checkedState, handleStateChange }: IRadio) => {
  return (
    <div className='radio'>
      {options.map(({ displayName, value, checkedImage, uncheckedImage }: IRadioOption) => (
        <div key={value} className='radio-button' onClick={() => handleStateChange(value)}>
          <div className={`radio-icon ${checkedState === value ? 'checked' : ''}`}>
            <img src={checkedState === value ? checkedImage : uncheckedImage} alt='' />
          </div>
          <label className='radio-label'>{displayName}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;