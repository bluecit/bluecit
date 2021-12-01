import PageHeading from "@/components/PageHeading";
import {
  Divider,
  Typography,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Steps,
} from "antd";
import styled from "styled-components";
import { EmailOutline } from "@styled-icons/evaicons-outline/";

const { Title } = Typography;
const { Option } = Select;
const { Step } = Steps;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 26 },
  },
};
const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Email = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.showcaseText};
  font-size: 2.5rem;
`;

const CustomeTitle = styled(Title)`
  color: var(--light_3) !important;
  border-bottom: ${({ border }) => (border ? "1px solid var(--light_2)" : "")};
  margin-bottom: 1rem;
`;
const headingContent = {
  title: "Contact Us",
  text: "Do you want to create something spectacular? Please let us know how we can assist you",
};

const Container = styled.div`
  padding: var(--paddingLayout);
  background: ${(props) => props.theme.background};
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: block;
  margin: 2rem auto;
  max-width: 870px;
  text-align: center;

  border-radius: var(--borderRadius);
`;
const Contacts = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <PageHeading title={headingContent.title} text={headingContent.text} />
      <Container>
        <CustomeTitle level={5} border>
          Please email us with any questions you have about any of BlueCIT's
          services.
        </CustomeTitle>
        <EmailContainer>
          <EmailOutline size='40' />
          <Email>contact@bluecit.io</Email>
        </EmailContainer>
        <CustomeTitle level={3} border>
          Fill in our contact form
        </CustomeTitle>
        <Form
          {...formItemLayout}
          form={form}
          style={{ display: "block", margin: "auto" }}
          size='large'
          layout='vertical'
          name='register'
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name='What can we help you with?'
            label='What can we help you with? What can we help you with?'
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>
          <Form.Item
            name='budget'
            label='What is your budget? (US Dollars)'
            rules={[{ required: true, message: "Please select your budget" }]}
          >
            <Select placeholder='Select your budget'>
              <Option value='budget_one_thousand_to_ten_thousand'>
                1,000 to 10,000
              </Option>
              <Option value='budget_ten_thousand_to_fifty_thousand'>
                10,000 to 50,000
              </Option>
              <Option value='budget_more_than_fifty_thousand'>50,000 ++</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='name'
            label='Your Name'
            rules={[
              {
                required: true,
                message: "Name is required",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='how_did_you_hear_bluecit'
            label='How did you hear about BlueCIT?'
            style={{ color: "blue" }}
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};

export default Contacts;
