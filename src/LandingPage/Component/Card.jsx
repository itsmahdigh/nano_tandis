function card(){

    const products = [
        {
          id: 1,
          name: 'روغن نانو ',
          href: '#',
          price: '48000 تومان',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'روغن نانو',
          href: '#',
          price: '48000 تومان',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'روغن نانو',
          href: '#',
          price: '48000 تومان',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'روغن نانو',
          href: '#',
          price: '48000 تومان',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'روغن نانو',
            href: '#',
            price: '48000 تومان',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
          },
          {
            id: 6,
            name: 'روغن نانو',
            href: '#',
            price: '48000 تومان',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
          },
          {
            id: 7,
            name: 'روغن نانو',
            href: '#',
            price: '48000 تومان',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
          },
          {
            id: 8,
            name: 'روغن نانو',
            href: '#',
            price: '48000 تومان',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
        
      ]

    return<>
    <div className="bg-white">
    <h2 className="sr-only">Prodbbbbbbbbbbbbbbbbbbbbbbbbbbbucts</h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center hover:opacity-75 hover:border-2 border-green-700"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
        <div>
            <button className="mt-12 bg-black w-[15%] p-4 rounded-xl  text-xl font-black  text-white hover:opacity-75 hover:border-4 border-green-700" type="submit">محصولات</button>
        </div>
      </div>
    </div>
    </>
}
export default card;