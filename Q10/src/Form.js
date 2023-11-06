export default function Form(){
    const handleSubmit=()=>{
        alert("Form submitted successfully !");
    }
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <div style={{textAlign:"center"}}>
                <span>Name</span><br/>
                <input type="text" id="Name"/><br/>
                <span>Email</span><br/>
                <input type="email" id="Email"/><br/>
                <span>Phone</span><br/>
                <input type="number" id="Phone"/><br/>
                <span>Password</span><br/>
                <input type="password" id="Password"/><br/>
                </div>
                <div style={{textAlign:"center"}}><br/>
                <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}