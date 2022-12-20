import React from 'react';
import { useForm } from 'react-hook-form';
import { registerAccount } from 'src/services/api';
import Input from 'src/components/atoms/Input';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { handleSubmit, register } = useForm();
    const history = useHistory();
    const onSubmit = async (formData) => {
        try {
            await registerAccount(formData);
            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    };
    // TODO: refactor form
    return (
        <div className="h-screen w-screen">
            <div className="flex justify-center items-center flex-col pt-20 m-auto">
                <h1>Account registration</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-8 flex justify-center items-center flex-col"
                    autoComplete="off"
                >
                    <Input
                        id="name"
                        title="Name"
                        type="text"
                        className="mt-2"
                        placeholder="Your name"
                        required
                        {...register('name')}
                    />
                    <div className="mt-4">
                        <Input
                            id="email"
                            title="Email"
                            type="email"
                            className="mt-2"
                            placeholder="example@site.com"
                            required
                            {...register('email')}
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            id="password"
                            title="Password"
                            type="password"
                            className="mt-2"
                            placeholder="type password here"
                            autoComplete="off"
                            {...register('password')}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
