function Blog() {
    const posts = [
        {
            id: 1,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        },
        {
            id: 2,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 3,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 4,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 5,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 6,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 7,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl:
                    'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }
        }, {
            id: 8,
            title: 'نانو چیست؟!',
            href: '#',
            description:
                " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            date: '16آبان,1402',
            datetime: '2020-03-16',
            category: { title: 'مارکتینگ', href: '#' },
            author: {
                name: 'سیداکبر موسوی',
                role: 'مدیرعامل',
                href: '#',
                imageUrl: 'https://www.boreshha.ir/wp-content/uploads/2019/05/%D8%B4%D9%87%DB%8C%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B1%D8%B6%D8%A7-%D8%A8%DB%8C%D8%B6%D8%A7%DB%8C%DB%8C4.jpg'
            }

        },
    ]
    return <>
        <div className=" ">
            <div className=" mx-auto ">
                <div className="bg-[#2D893E] mx-auto text-white p-8 ">
                    <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">نانوتندیس مگ</h2>
                    <p className="mt-2 text-lg leading-8 ">
                        اینجا قراره در مورد دنیای جذاب نانو یاد بگیریم!
                        <br />
                        پس همراه ما باشید...
                    </p>
                </div>
                <div className="mx-auto w-[92%] pb-8  grid  grid-cols-1 gap-x-8 gap-y-16  border-gray-200 mt-4  lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex border-2 p-1 hover:border-green-900 rounded-lg flex-col items-start justify-between ">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </>
} export default Blog;