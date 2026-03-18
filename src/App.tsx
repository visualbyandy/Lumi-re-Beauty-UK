import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook,
  Plus,
  Minus,
  Trash2,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, Product } from './constants';
import { CartItem } from './types';

import { AboutPage, ContactPage, ShippingPage, FAQPage } from './components/InfoPages';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1728727375957-b67c0468ca1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsJTIwc2tpbmNhcmUlMjBiZWF1dHl8ZW58MHwwfDB8fHwy",
    tag: "Spring Collection 2026",
    title: <>Reveal Your <br /><span className="italic">Natural Radiance</span></>,
    description: "Curated skincare and beauty essentials from the world's most prestigious laboratories, now available across the UK."
  },
  {
    image: "https://cdn.pixabay.com/photo/2026/03/16/22/36/22-36-11-80__340.jpg",
    tag: "New Arrival",
    title: <>The Science of <br /><span className="italic">Glow</span></>,
    description: "Discover our latest vitamin-enriched serums designed to brighten and protect your skin all day long."
  },
  {
    image: "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Luxury Essentials",
    title: <>Timeless <br /><span className="italic">Elegance</span></>,
    description: "Experience the ultimate in luxury beauty with our curated selection of premium makeup and hair care."
  }
];

const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Body', 'Hair'];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('lumiere_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Persistence
  useEffect(() => {
    localStorage.setItem('lumiere_cart', JSON.stringify(cart));
  }, [cart]);

  // Scroll Lock
  useEffect(() => {
    if (isCartOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, isMobileMenuOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const scrollToProducts = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for re-render then scroll
      setTimeout(() => {
        const element = document.getElementById('product-catalog');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('product-catalog');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = CATEGORIES;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'shipping': return <ShippingPage />;
      case 'faq': return <FAQPage />;
      default: return (
        <>
          {/* Hero Section Carousel */}
          <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#f3f2ee]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
              >
                <img 
                  src={HERO_SLIDES[currentSlide].image} 
                  alt="Beauty Background" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-accent mb-4 block">
                    {HERO_SLIDES[currentSlide].tag}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
                    {HERO_SLIDES[currentSlide].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    {HERO_SLIDES[currentSlide].description}
                  </p>
                  <button 
                    onClick={scrollToProducts}
                    className="bg-ink text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-ink/90 transition-all group"
                  >
                    Shop the Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors text-ink"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-accent w-6' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors text-ink"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Product Grid */}
          <section id="product-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h3 className="text-3xl font-serif mb-2">Our Curated Catalog</h3>
                <p className="text-gray-500">Showing {filteredProducts.length} premium products</p>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                      activeCategory === cat 
                        ? 'bg-accent text-white shadow-md' 
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-accent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.tags.map(tag => (
                          <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => addToCart(product)}
                        className="absolute bottom-4 left-4 right-4 bg-ink text-white py-3 rounded-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add to Bag
                      </button>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{product.brand}</p>
                      <h4 className="font-medium text-gray-900 group-hover:text-accent transition-colors">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-lg">£{product.price.toFixed(2)}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-500">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h4 className="text-xl font-serif mb-2">No products found</h4>
                <p className="text-gray-500">Try adjusting your search or category filters.</p>
              </div>
            )}
          </section>

          {/* Features Section */}
          <section className="bg-white py-20 border-y border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f3f2ee] rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <h5 className="font-serif text-xl">Premium Quality</h5>
                  <p className="text-gray-500 text-sm">Sourced from the finest laboratories across Europe and the UK.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f3f2ee] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6 text-accent" />
                  </div>
                  <h5 className="font-serif text-xl">Free UK Delivery</h5>
                  <p className="text-gray-500 text-sm">Complimentary standard shipping on all orders over £50.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f3f2ee] rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h5 className="font-serif text-xl">Expert Advice</h5>
                  <p className="text-gray-500 text-sm">Consult with our beauty experts for a personalized routine.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 md:hidden hover:bg-gray-100 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div 
              onClick={() => { setCurrentPage('home'); setActiveCategory('All'); window.scrollTo(0,0); }}
              className="flex-shrink-0 cursor-pointer group"
            >
              <h1 className="text-2xl font-serif font-bold tracking-tighter group-hover:text-accent transition-colors">LUMIÈRE</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setCurrentPage('home');
                    setActiveCategory(cat);
                    scrollToProducts();
                  }}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent ${
                    activeCategory === cat && currentPage === 'home' ? 'text-accent' : 'text-gray-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 group focus-within:bg-white focus-within:ring-1 focus-within:ring-accent/20 transition-all">
                <Search className="w-4 h-4 text-gray-400 group-focus-within:text-accent" />
                <input 
                  type="text" 
                  placeholder="Search beauty..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (currentPage !== 'home') setCurrentPage('home');
                  }}
                  className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-gray-400"
                />
              </div>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-serif font-bold tracking-tight mb-6">LUMIÈRE</h2>
              <p className="text-gray-400 max-w-md mb-8">
                Elevating your daily ritual with science-backed beauty and skincare. 
                Based in London, shipping nationwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h6>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => { setCurrentPage('home'); setActiveCategory('Skincare'); }} className="hover:text-white transition-colors">Skincare</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setActiveCategory('Makeup'); }} className="hover:text-white transition-colors">Makeup</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setActiveCategory('Body'); }} className="hover:text-white transition-colors">Body Care</button></li>
                <li><button onClick={() => { setCurrentPage('home'); setActiveCategory('Hair'); }} className="hover:text-white transition-colors">Hair Care</button></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h6>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => { setCurrentPage('contact'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => { setCurrentPage('shipping'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Shipping & Returns</button></li>
                <li><button onClick={() => { setCurrentPage('faq'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Lumière Beauty UK. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-serif">Your Bag ({cartCount})</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 text-gray-300" />
                    </div>
                    <p className="text-gray-500">Your bag is currently empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-accent font-medium hover:underline"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{item.brand}</p>
                          <h5 className="font-medium text-sm">{item.name}</h5>
                          <p className="font-serif text-accent">£{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 gap-3">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span>£{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Shipping</span>
                      <span>{cartTotal > 50 ? 'FREE' : '£4.95'}</span>
                    </div>
                    <div className="flex justify-between text-lg font-serif pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>£{(cartTotal + (cartTotal > 50 ? 0 : 4.95)).toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-ink text-white py-4 rounded-full font-medium hover:bg-ink/90 transition-all shadow-lg shadow-ink/10">
                    Checkout Now
                  </button>
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                    Secure payment powered by Stripe
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full max-w-[280px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-serif font-bold">LUMIÈRE</h3>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6">
                <div className="flex flex-col gap-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Categories</h4>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-lg font-medium text-left transition-colors ${
                        activeCategory === cat ? 'text-accent' : 'text-gray-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col gap-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Quick Links</h4>
                  <ul className="space-y-4 text-gray-600 font-medium">
                    <li><button onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="hover:text-accent">About Us</button></li>
                    <li><button onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="hover:text-accent">Contact</button></li>
                    <li><button onClick={() => { setCurrentPage('shipping'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="hover:text-accent">Shipping & Returns</button></li>
                    <li><button onClick={() => { setCurrentPage('faq'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="hover:text-accent">FAQ</button></li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <div className="flex gap-4 justify-center">
                  <a href="#" className="p-2 text-gray-400 hover:text-accent"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-2 text-gray-400 hover:text-accent"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-2 text-gray-400 hover:text-accent"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
