import './style.scss';

import mars from '../../assets/images/mars-symbol.svg';
import marsWhite from '../../assets/images/mars-symbol--white.svg';
import venus from '../../assets/images/venus-symbol.svg';
import venusWhite from '../../assets/images/venus-symbol--white.svg';
import card from '../../assets/images/card.svg';
import cardWhite from '../../assets/images/card--white.svg';

import { useState } from 'react';
import Radio from './radio';
import FormItem from './formItem';
import Button from './button';

interface IFormData {
  name: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  customerID: string;
  membership: string;
}

interface IProps {
  contentVisible: boolean;
}

const FormPanel = ({ contentVisible }: IProps) => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedMembership, setSelectedMembership] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [customerID, setCustomerID] = useState<string>('');

  const genderOptions = [
    {
      displayName: 'Male',
      value: 'Male',
      uncheckedImage: mars,
      checkedImage: marsWhite,
    },
    {
      displayName: 'Female',
      value: 'Female',
      uncheckedImage: venus,
      checkedImage: venusWhite,
    },
  ];

  const membershipOptions = [
    {
      displayName: 'Classic',
      value: 'Classic',
      uncheckedImage: card,
      checkedImage: cardWhite,
    },
    {
      displayName: 'Silver',
      value: 'Silver',
      uncheckedImage: card,
      checkedImage: cardWhite,
    },
    {
      displayName: 'Gold',
      value: 'Gold',
      uncheckedImage: card,
      checkedImage: cardWhite,
    },
  ];

  const handleCancel = () => {
    setSelectedGender('');
    setSelectedMembership('');
    setName('');
    setDateOfBirth('');
    setEmail('');
    setPhone('');
    setCustomerID('');
  };

  const handleSave = () => {
    console.log('Form Data => ', {
      selectedGender,
      selectedMembership,
      name,
      dateOfBirth,
      email,
      phone,
      customerID,
    });
  };

  return (
    <div className={`form-container ${contentVisible ? 'hide' : 'show'}`}>
      <form>
        <FormItem type='text' label='Name' placeholder='Kendall Jenner' itemValue={name} setItemValue={setName} />
        <FormItem type='radio' label='Gender'>
          <Radio options={genderOptions} checkedState={selectedGender} handleStateChange={setSelectedGender} />
        </FormItem>
        <FormItem
          type='date'
          label='Date of Birth'
          placeholder='14/08/1989'
          itemValue={dateOfBirth}
          setItemValue={setDateOfBirth}
        />
        <FormItem
          type='email'
          label='Email'
          placeholder='kendall@email.com'
          itemValue={email}
          setItemValue={setEmail}
        />
        <FormItem type='phone' label='Mobile' placeholder='+91 98765 43210' itemValue={phone} setItemValue={setPhone} />
        <FormItem
          type='text'
          label='Customer ID'
          placeholder='576802-ERD0348 45'
          itemValue={customerID}
          setItemValue={setCustomerID}
        />
        <FormItem type='radio' label='Membership'>
          <Radio
            options={membershipOptions}
            checkedState={selectedMembership}
            handleStateChange={setSelectedMembership}
          />
        </FormItem>
        <FormItem type='buttons'>
          <div>
            <Button displayName='Cancel' onClick={handleCancel} />
            <Button displayName='Save' primary onClick={handleSave} />
          </div>
        </FormItem>
      </form>
    </div>
  );
};

export default FormPanel;
