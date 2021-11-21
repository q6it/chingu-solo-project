import { useEffect, useState } from 'react';
import { getItems } from 'src/services/api';

const announcements = [
    {
        id: 1,
        title: 'Office closed on July 2nd',
        preview:
            'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
    },
    {
        id: 2,
        title: 'New password policy',
        preview:
            'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
    },
    {
        id: 3,
        title: 'Office closed on July 2nd',
        preview:
            'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
    },
];

export default function ItemsList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const postsData = await getItems();
            console.log('🚀 ~ file: ItemsList.jsx ~ line 30 ~ postsData', postsData);
            setPosts(postsData);
        })();
    }, []);
    return (
        <div>
            <div className="flow-root mt-6">
                <ul className="-my-5 divide-y divide-gray-200">
                    {posts.map((announcement) => (
                        <li key={announcement.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    <button
                                        type="button"
                                        className="hover:underline focus:outline-none"
                                    >
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {announcement.title}
                                    </button>
                                    {/* <a href="#" className="hover:underline focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {announcement.title}
                                    </a> */}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                    {announcement.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <button
                    type="button"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    View all
                </button>
            </div>
        </div>
    );
}
