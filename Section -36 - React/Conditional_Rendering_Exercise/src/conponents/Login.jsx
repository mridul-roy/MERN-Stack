import Input from "./Input";

function Login(){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <Input 
                type="text" 
                placeholder="Username" 
                />
              <Input 
                type="password" 
                placeholder="Password" 
                />
               
                <button type="submit">Login</button>
            </form>
        </div>
    );
    
}

export default Login;