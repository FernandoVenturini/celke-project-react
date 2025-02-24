import { ReactNode } from "react";

interface UserProps {
    name: string;
    children?: ReactNode;
}

const User = ({name, children}: UserProps) => {
//const User: React.FC<UserProps> = ({name, children}) => {
    return (
        <>
            <p>Usuario: {name}</p>
            {children && <div>{children}</div>}
        </>
    );
}

export default User;