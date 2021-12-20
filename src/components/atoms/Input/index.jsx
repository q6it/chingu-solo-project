import React from 'react';

const Input = React.forwardRef(({ title, type, name, id, value, placeholder, onChange }, ref) => (
    <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {title}
        </label>
        <div className="mt-1">
            <input
                type={type}
                name={name}
                id={id}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                // {...register(name)}
                // ref={register(name, { required })}
                ref={ref}
            />
        </div>
    </div>
));

Input.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    title: '',
    type: 'text',
    name: '',
    id: '',
    placeholder: '',
    value: undefined,
};

export default Input;
