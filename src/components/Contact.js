const Contact = ()=>{
    return (
        <div>
            <h3 className="font-bold text-2xl p-4 m-4"> Contact Us </h3>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"

                />
                <input type="text" className="border border-black p-2 m-2" placeholder="message"
                />
                <button className="border rounded-md border-black p-1 m-1 bg-gray-200 ">Submit</button>
            </form>
        </div>
    )
    
};
export default Contact;

// rafc