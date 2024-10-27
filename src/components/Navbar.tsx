import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">
          <Link href="/">
            BlogApp
          </Link>
        </h1>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/add-post" className="text-white hover:text-gray-200">
            Add Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
