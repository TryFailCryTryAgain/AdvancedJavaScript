import axios from "axios";

function Input() {

    const SendRequest = async () => {
        try {
            const customApiCall = `http://localhost:3000/order`;
            const response = await axios.get(customApiCall);
            const formatted_response = response.data;
            console.log(formatted_response);
        } catch (err) {
            console.log(err, "Error");
        }
    }

    return (
        <>
            <div>Hello World!</div>
            <button onClick={() => SendRequest()}>Send Request</button>
        </>
    );
};

export default Input;