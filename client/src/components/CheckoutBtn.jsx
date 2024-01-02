import axios from 'axios'
import { useSelector }  from 'react-redux'
const url = local

const checkoutButton = ({ cartItems }) =>  { 

    const user = useSelector((state) => state.auth)

    const handleCheckout = () => {
    axios.post('http://localhost:3000//stripe/create-checkout-session', {
    cartItems,
    userId: user.id
    }).then((res) => {
    if(res.data.url){window.location.href = res.data.url}
    }).catch((err) => console.log(err.message))}
    return (
        <>
            <button onClick={() => handleCheckout()}> Checkout! </button>
        </>
    );
}

export default checkoutButton;

