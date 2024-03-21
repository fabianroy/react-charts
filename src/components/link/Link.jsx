import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="px-4 py-2"><a href={route.path}>{route.component}</a></li>
    ); 
};

Link.propTypes = {
    route: PropTypes.object 
};

export default Link;