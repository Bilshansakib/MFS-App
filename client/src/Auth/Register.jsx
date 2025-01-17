import {
  Alert,
  Button,
  Card,
  Flex,
  Form,
  Input,
  message,
  Spin,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/MFSAppRegPage.jpg";
import useSignUp from "../hooks/useSignUp";

const Register = () => {
    const {loading,error,registerUser} = useSignUp()
  const handleRegister = (values) => {
    registerUser(values);
  };
  return (
    <Card className=" w-[1000px] flex items-center justify-start border-2 ">
      <Flex gap="large" align="center">
        <Flex vertical flex={1}>
          {/* form */}
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" level={3} strong className="title">
            Join for excluesive access
          </Typography.Text>
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
              <Input size="large" placeholder="Enter your full name"></Input>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              size="large"
              rules={[
                {
                  required: true,
                  message: "please input your email",
                },
                {
                  type: "email",
                  message: "Invalid email, Sweet Tit for Sweet Tat",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email"></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              size="large"
              rules={[
                {
                  required: true,
                  message: "please input your password",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
              ></Input.Password>
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirm"
              size="large"
              rules={[
                {
                  required: true,
                  message: "please input your Confirm password",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-Enter your password"
              ></Input.Password>
            </Form.Item>

            {error && (
                <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
                >

                </Alert>
            )}

            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn w-full"
              >
                {loading ? <Spin></Spin> : " Create Account"}
               
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn btn-link w-full">
                  {" "}
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        <Flex flex={1}>
          <img src={registerImage} className="w-full rounded-lg"></img>
        </Flex>

        {/* Image */}
      </Flex>
    </Card>
  );
};

export default Register;
