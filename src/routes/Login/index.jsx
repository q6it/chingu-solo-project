import React from 'react';

import { useForm } from 'react-hook-form';
// import { login } from 'src/services/api';
import { useHistory, Link } from 'react-router-dom';
// import { useDispatch /* , useSelector */ } from 'react-redux';
import { useAuth } from '@hooks/useAuth';
import jsCookie from 'js-cookie';
// import { selectUser } from '@services/authentication/selectors';

import Input from '@components/atoms/Input';

// import { setCredentials } from '@services/authentication';

const Login = () => {
    const history = useHistory();
    // const dispatch = useDispatch();
    const auth = useAuth();

    const { register, handleSubmit } = useForm();
    // const user = useSelector(selectUser);

    const onSubmit = async ({ email, password }) => {
        try {
            // const { email: userEmail, name, refreshToken } = await login(email, password);
            const userData = await auth.signIn(email, password);
            // const { email: userEmail, name, refreshToken } = auth.user;
            // dispatch(setCredentials({ email: userEmail, name, token: refreshToken }));
            if (userData.refreshToken) {
                jsCookie.set('token', userData.refreshToken);
                history.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };
    // TODO: refactor form, button as atom
    return (
        <div className="h-screen w-screen">
            <div className="flex justify-center items-center flex-col pt-20 m-auto">
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-8 flex justify-center items-center flex-col"
                >
                    <div>
                        <Input
                            id="email"
                            title="Email"
                            type="email"
                            className="mt-2"
                            placeholder="example@site.com"
                            // register={register}
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
                            // register={register}
                            {...register('password')}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm italic text-right text-purple-600">
                    Not a member yet?{' '}
                    <Link to="/register" className="text-primary-500 underline hover:text-blue-400">
                        Register!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
