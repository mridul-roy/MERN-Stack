import Input from "./Input";


function Login (){
    return (
        <div>
            <from>
                <Input 
                type="text" 
                placeholder="Username" 
                />
                <Input
                type="password"
                placeholder="Password"
                />
                <button type="submit">Login</button>
            </from>
        </div>
    )
}


export default Login;