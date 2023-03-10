import '../Styles/AppointmentStyle.css';
import React from 'react';
import { Form, Input, Button, Select, DatePicker, placeholder, Option, rules} from 'antd';

const Appointment = () => {

  const [price, setPrice] = useState(0);
  const onFinishHandler = (value) => {
    console.log(value);

     // calculate price based on selected service
     if (values.service === 'haircut') {
        setPrice(25);
      } else if (values.service === 'Hair color') {
        setPrice(50);
      } else if (values.service === 'Massage') {
        setPrice(75);
      } else if (values.service === 'Facial') {
        setPrice(45);
      } else if (values.service === 'Manicure & Padicure') {
        setPrice(50);
      } else {
        setPrice(0);
      }
 };

return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
        <h3>Appointment Booking</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required/>
        </Form.Item>

        <Form.Item label="Phone-number" name="phone">
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item label="Birth Date" name="birthdate" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input.TextArea rows={4} required/>
        </Form.Item>

        <Form.Item label="Age" name="age">
          <Input type="number" required/>
        </Form.Item>
        
        

        <Form.Item label="gender" name="gender">
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Client Service Name" name="serviceName" rules={[{ required: true }]}>
          <Select placeholder="Select a service">
            <Option value="cHair Spa">Hair Spa</Option>
            <Option value="cMassage">Massage</Option>
            <Option value="cHair Cut">Hair Cut</Option>
            <Option value="cHair Colour">Hair Colour</Option>
            <Option value="Facial">Facial</Option>
            <Option value="Manicure & Padicure">Manicure & Padicure</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Client Service Category" name="category" rules={[{ required: true }]}>
          <Select placeholder="Select a service">
            <Option value="Hair care">Hair care</Option>
            <Option value="sFace & Body">Face & Body</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Employee" name="employee" required>
          <Select placeholder="Select an employee">
            <Option value="john">John</Option>
            <Option value="jane">Jane</Option>
            <Option value="bob">Bob</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Price" name="price">
          <Input disabled value={`$${price}`} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Appointment;
