import { useAuth } from "../contexts/AuthProvider";

const useSignUp = () => {
    const {login} = useAuth()
    return {}
};

export default useSignUp;