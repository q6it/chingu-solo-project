import { useEffect, useState } from 'react';
import { deletePost, getItems } from 'src/services/api';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/services/authentication/selectors';
import EditForm from '../molecules/EditForm';

export default function ItemsList({ posts, setPosts }) {
    // const [posts, setPosts] = useState([]);

    console.log('🚀 ~ file: ItemsList.jsx ~ line 28 ~ ItemsList ~ posts', posts);
    const [postEdit, setPostEdit] = useState({ id: null, edit: false });
    console.log('🚀 ~ file: ItemsList.jsx ~ line 29 ~ ItemsList ~ postEdit', postEdit);
    const { token, email } = useSelector(selectUser);

    // useEffect(() => {
    //     (async () => {
    //         const postsData = await getItems(user.token);
    //         setPosts(postsData);
    //     })();
    // }, [])
    const handleDelete = async ({ id }) => {
        await deletePost({ id, userId: email }, token);
        setPosts([...posts.filter((p) => p.id !== id)]);
    };

    const handleEdit = async ({ id }) => {
        await setPostEdit({ id, edit: !postEdit.edit });
    };

    // TODO: handle post data in redux, too many components relay on it

    return (
        <div>
            <div className="mt-3 divide-y-2 divide-gray-800">
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="py-5">
                            {postEdit.id === post.id && postEdit.edit ? (
                                <EditForm
                                    post={post}
                                    posts={posts}
                                    setPosts={setPosts}
                                    setPostEdit={setPostEdit}
                                />
                            ) : (
                                <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        <button
                                            type="button"
                                            className="hover:underline focus:outline-none"
                                        >
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </button>
                                        {/* <a href="#" className="hover:underline focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {announcement.title}
                                    </a> */}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                        {post.body}
                                    </p>
                                </div>
                            )}
                            {postEdit.edit || (
                                <div className="flex mt-2">
                                    <div>
                                        <button
                                            type="button"
                                            className="px-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5000"
                                            onClick={() => handleEdit(post)}
                                        >
                                            {/* {postEdit.id === post.id && !postEdit.edit ? 'Edit' : null} */}
                                            Edit
                                        </button>
                                    </div>
                                    <div className="ml-8">
                                        <button
                                            type="button"
                                            className="px-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5000"
                                            onClick={() => handleDelete(post)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
