import PropTypes from 'prop-types';
const Priceoption = ({product}) => {

    const {name, price, feature} = product;

    return (
        <div className='bg-yellow-300 rounded-xl p-6 w-96'>
            <h2>
            <span className='text-5xl'>${price}</span>
            <span className="text-3xl">/year</span>
            </h2>
            <h4 className='mt-6 font-bold text-xl'>{name}</h4>
            <p className='mt-2'>{feature}</p>
            <button className='btn mt-4'>Order Now</button>
        </div>
    );
};

Priceoption.propTypes = {
    product: PropTypes.object
};

export default Priceoption;