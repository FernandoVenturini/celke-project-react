const User = ({ name, children }) => {
    //const User: React.FC<UserProps> = ({name, children}) => {
    return (<>
            <p>Usuario: {name}</p>
            {children && <div>{children}</div>}
        </>);
};
export default User;
