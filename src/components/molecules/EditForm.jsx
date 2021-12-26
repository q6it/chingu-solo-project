import React, { useState } from 'react';
import { updatePost } from 'src/services/api';
import { useForm } from 'react-hook-form';
import Input from '@components/atoms/Input';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/services/authentication/selectors';

const EditForm = ({ post, posts, setPosts, setPostEdit }) => {
    const { register, handleSubmit } = useForm();
    const { token, email } = useSelector(selectUser);
    const [currentPost, setCurrentPost] = useState(post);
    console.log('🚀 ~ file: EditForm.jsx ~ line 12 ~ EditForm ~ currentPost', currentPost);

    const handleTitleChange = (e) => {
        setCurrentPost({ ...currentPost, title: e.target.value });
    };
    const handleBodyChange = (e) => {
        setCurrentPost({ ...currentPost, body: e.target.value });
    };

    const onSubmit = async (formData) => {
        try {
            await updatePost({ ...formData, id: post.id, userId: email }, token);
            setPosts([...posts, currentPost]);
            setPostEdit(false);
        } catch (error) {
            console.log('🚀 ~ file: EditForm.jsx ~ line 25 ~ onSubmit ~ error', error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id="title"
                title="Title"
                type="text"
                className="mt-1"
                {...register('title')}
                value={currentPost.title}
                onChange={(e) => handleTitleChange(e)}
            />
            <div className="mt-3">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                    Body
                </label>
                <textarea
                    rows={4}
                    name="body"
                    id="body"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...register('body')}
                    value={currentPost.body}
                    onChange={(e) => handleBodyChange(e)}
                />
            </div>
            <div className="mt-3">
                <button
                    type="submit"
                    className="px-3 py-1 border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Done
                </button>
            </div>
        </form>
    );
};

export default EditForm;
