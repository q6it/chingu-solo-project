import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useAuth } from 'src/hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import jsCookie from 'js-cookie';

import { selectUser } from '@services/authentication/selectors';
import { savePost, getItems } from '@services/api';

import Input from 'src/components/atoms/Input';
import ItemsList from 'src/components/organisms/ItemsList';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Layout() {
    // 10 is used cause of mocked db on backend
    const [postId, setPostId] = useState(10);
    const [posts, setPosts] = useState([]);
    const auth = useAuth();
    const { register, handleSubmit } = useForm();

    const history = useHistory();
    const user = useSelector(selectUser);
    const token = jsCookie.get('token');

    useEffect(() => {
        (async () => {
            const postsData = await getItems(token);
            setPosts(postsData);
        })();
    }, []);

    useEffect(() => {
        if (!user.name) {
            history.push('/login');
        }
    }, []);

    const onSubmit = async (formData) => {
        setPostId(postId + 1);
        try {
            await savePost({ ...formData, id: postId, userId: user.email }, token);
            setPosts([...posts, { ...formData, id: postId, userId: user.email }]);
        } catch (error) {
            console.error(error);
        }
    };

    const onLogout = () => {
        auth.signOut();
        jsCookie.remove('token');
        history.push('/login');
    };

    return (
        <>
            {user && (
                <div className="min-h-full">
                    <Disclosure as="nav" className="bg-white border-b border-gray-200 p-1">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex justify-between h-16">
                                        <div className="flex">
                                            <div className="flex-shrink-0 flex items-center">
                                                <img
                                                    className="block lg:hidden h-12 w-auto"
                                                    src="https://cdn.cdnlogo.com/logos/e/39/ethereum.svg"
                                                    alt="Workflow"
                                                />
                                                <img
                                                    className="hidden lg:block h-16 w-auto"
                                                    src="https://cdn.cdnlogo.com/logos/e/39/ethereum.svg"
                                                    alt="Workflow"
                                                />
                                            </div>
                                        </div>
                                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <span className="sr-only">
                                                            Open user menu
                                                        </span>
                                                        {user.name}
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    type="button"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700 w-full',
                                                                    )}
                                                                    onClick={() => {
                                                                        onLogout();
                                                                    }}
                                                                >
                                                                    Log out
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <div className="-mr-2 flex items-center sm:hidden">
                                            <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <MenuIcon
                                                        className="block h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="sm:hidden">
                                    <div className="pt-4 pb-3 border-t border-gray-200">
                                        <div className="flex items-center px-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={user.imageUrl}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-gray-800">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm font-medium text-gray-500">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            <Disclosure.Button>
                                                {({ active }) => (
                                                    <button
                                                        type="button"
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700 w-full',
                                                        )}
                                                        onClick={() => {}}
                                                    >
                                                        Log out
                                                    </button>
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <div className="flex flex-col m-auto justify-center py-10">
                        <header>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                    Postboard
                                </h1>
                            </div>
                        </header>
                        <main>
                            <div className="container m-auto ">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div className="px-4 py-8 sm:px-0">
                                        <div className="border-4 border-collapse border-gray-200 rounded-lg h-auto p-5">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Input
                                                    id="title"
                                                    title="Title"
                                                    type="text"
                                                    className="mt-1"
                                                    {...register('title')}
                                                ></Input>
                                                <div className="mt-3">
                                                    <label
                                                        htmlFor="body"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Body
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        name="body"
                                                        id="body"
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        defaultValue=""
                                                        {...register('body')}
                                                    />
                                                </div>
                                                <div className="mt-6 flex justify-center items-center ">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Add post
                                                    </button>
                                                </div>
                                            </form>
                                            <ItemsList posts={posts} setPosts={setPosts} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
