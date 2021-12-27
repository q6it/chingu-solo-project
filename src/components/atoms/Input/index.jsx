import React from 'react';

const Input = React.forwardRef(
    ({ title, type, name, id, value, placeholder, autoComplete, className, onChange }, ref) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className={className}>
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    ref={ref}
                />
            </div>
        </div>
    ),
);

Input.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
    title: '',
    type: 'text',
    name: '',
    id: '',
    placeholder: '',
    value: undefined,
    autoComplete: 'off',
    className: '',
};

export default Input;
