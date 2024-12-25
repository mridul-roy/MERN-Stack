import Input from "./Input";

function Registration(){
    return (
        <div>
            <h1>Registration</h1>
            <form>
                <Input 
                type="text" 
                placeholder="Username" 
                />
              <Input 
                type="password" 
                placeholder="Password" 
                />
                <Input 
                type="password" 
                placeholder="Confirm Password" 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration;