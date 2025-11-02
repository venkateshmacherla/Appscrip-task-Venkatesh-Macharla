import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import FilterSidebar from '../components/FilterSidebar';
import FilterControlRow from '../components/FilterControlRow';
import Footer from '../components/Footer';


export default function Home({ products = [], fetchError }) {
  // Safe initial state: always array
  const [filtered, setFiltered] = useState(products || []);

  // Show/hide sidebar filter
  const [showFilter, setShowFilter] = useState(false);

  // Sorting option
  const [sort, setSort] = useState("recommended");

  // Checkbox filter state
  const [checked, setChecked] = useState({
    men: false,
    women: false,
    kids: false,
  });

  // Liked products (product IDs)
  const [likedProducts, setLikedProducts] = useState(new Set());

  // Toggle filter checkbox
  function handleChange(option) {
    setChecked(prev => ({ ...prev, [option]: !prev[option] }));
  }

  // Handle sort dropdown change
  function handleSortChange(val) {
    setSort(val);
  }

  // Toggle liked products by product id
  function handleToggleLike(productId) {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) newSet.delete(productId);
      else newSet.add(productId);
      return newSet;
    });
  }

  // Show only liked products or all
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  // Filter and sort logic
  useEffect(() => {
    const selectedCategories = [];
    if (checked.men) selectedCategories.push("men's clothing");
    if (checked.women) selectedCategories.push("women's clothing");
    if (checked.kids) selectedCategories.push("kids clothing");

    let filteredProducts = products || [];

    // Filter by liked if toggled
    if (showLikedOnly) {
      filteredProducts = filteredProducts.filter(p => likedProducts.has(p.id));
    }

    // Filter by category if checked
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(p =>
        selectedCategories.includes(p.category)
      );
    }

    // Sort
    switch (sort) {
      case "newest":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        filteredProducts.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
        break;
      case "priceHighLow":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "priceLowHigh":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        filteredProducts.sort((a, b) => a.id - b.id);
    }

    setFiltered(filteredProducts);
  }, [products, checked, sort, likedProducts, showLikedOnly]);

  const count = filtered ? filtered.length : 0;

  return (
    <>
      <Head>
        <title>Appscrip PLP | Venkatesh Macharla</title>
        <meta name="description" content="PLP - Browse curated products with SSR using FakeStoreAPI. Responsive and SEO-friendly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/" />
      </Head>
      <Navbar
        likedCount={likedProducts.size}
        onShowLiked={() => setShowLikedOnly(true)}
        onShowAll={() => setShowLikedOnly(false)}
      />
      <main className="main">
        <header style={{ textAlign: 'center', paddingBottom: 22 }}>
          <h1 className='main-heading'>DISCOVER OUR PRODUCTS</h1>
          <p className='main-subheading' style={{ margin: "0 auto", maxWidth: 650 }}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </header>
        <FilterControlRow
          count={count}
          showFilter={showFilter}
          onHideFilter={() => setShowFilter(false)}
          onShowFilter={() => setShowFilter(true)}
          sort={sort}
          onSortChange={handleSortChange}
        />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: "36px" }}>
          {showFilter && (
            <FilterSidebar
              checked={checked}
              onChange={handleChange}
            />
          )}
          <div style={{ flex: 1 }}>
            {fetchError ? (
              <div style={{ padding: 18, background: '#fff4f4', border: '1px solid #ffd6d6', borderRadius: 8 }}>
                <strong>Data load error:</strong> Unable to fetch products. The page is running in fallback mode.
              </div>
            ) : (
              <ProductList
                products={filtered}
                columns={showFilter ? 3 : 4}
                likedProducts={likedProducts}
                onLikeToggle={handleToggleLike}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    console.log('Fetched products:', products);
    return { props: { products } };
  } catch (e) {
    console.error("API error:", e);
    return { props: { products: [], fetchError: true } };
  }
}
