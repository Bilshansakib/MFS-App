import { Card, Flex, Form, Input, message, Typography } from "antd";

const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };
  return (
    <Card className="h-screen w-[1000px] flex items-center justify-start border-2 ">
      <Flex>
        <Flex vertical flex={1}>
          {/* form */}
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" level={3} strong className="title">
            Join for excluesive access
          </Typography.Text>
        </Flex>
        <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "please input your full name",
              },
            ]}
          >
            <Input placeholder="Enter your full name"></Input>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "please input your full email",
              },
            ]}
          >
            <Input placeholder="Enter your full name"></Input>
          </Form.Item>
        </Form>

        {/* Image */}
      </Flex>
    </Card>
  );
};

export default Register;
