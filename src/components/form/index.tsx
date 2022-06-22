import './style.scss';

import { useState } from 'react';
import Radio from './radio';
import FormItem from './formItem';
import Button from './button';
import { genderOptions, membershipOptions } from '../../constants';

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
