import { Card,Flex, Typography } from "antd";

const Register = () => {
    return (
        <Card className="flex items-center justify-start border-2 ">
            <Flex>
                <Flex>
                    {/* form */}
                    <Typography.Title level={3} strong className="title">
                        Create an account
                    </Typography.Title>
                    <Typography.Text type="secondary" level={3} strong className="title">
                        Join for excluesive access
                    </Typography.Text>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Register;