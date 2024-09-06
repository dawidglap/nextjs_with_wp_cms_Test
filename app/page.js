import axios from "axios";

// Funzione per recuperare i post dal tuo WordPress
async function getPosts() {
  const res = await axios.get(
    "https://public-api.wordpress.com/wp/v2/sites/tuosito.wordpress.com/posts"
  );
  return res.data;
}

export default async function Home() {
  // Recupera i post
  const posts = await getPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Welcome to Your Award-Winning Blog
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Experience the world of clean design, amazing user interfaces, and
          easy-to-read articles.
        </p>
        <a
          href="#posts"
          className="bg-white text-black rounded-full py-3 px-8 font-semibold text-lg hover:bg-gray-100 transition"
        >
          Read the Latest Posts
        </a>
      </section>

      {/* Blog Posts Section */}
      <section id="posts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Latest Blog Posts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="https://source.unsplash.com/600x400/?nature,water" // Image placeholder (puoi usare un campo API per la tua immagine)
                  alt="Post Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {post.title.rendered}
                  </h3>
                  <p
                    className="text-gray-600 mb-5"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
