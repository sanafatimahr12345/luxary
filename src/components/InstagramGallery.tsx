import React from 'react';
import { Instagram, ArrowUpRight, BookOpen } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const GALLERY_POSTS = [
  {
    image: '/src/assets/images/hero_luxury_watch_gentleman_1793957424652.jpg',
    tag: 'Regency Chronograph',
    handle: '@crownanddial',
    caption: 'Evening strolls by Lake Zurich with the Regency on the wrist.'
  },
  {
    image: '/src/assets/images/banner_autumn_refinement_1793957426303.jpg',
    tag: 'Autumn Edit',
    handle: '@crownanddial',
    caption: 'Sunburst forest emerald paired with aged Tuscan leather.'
  },
  {
    image: '/src/assets/images/banner_new_arrivals_craft_1793957425671.jpg',
    tag: 'Calibre CD-7750',
    handle: '@crownanddial',
    caption: 'Geneva stripes and heat-blued screws under 20x magnification.'
  },
  {
    image: '/src/assets/images/banner_signature_collection_1793957424709.jpg',
    tag: 'Solaria Automatic',
    handle: '@crownanddial',
    caption: 'Quiet confidence in tailored wool. Moments that matter.'
  }
];

const JOURNAL_ARTICLES = [
  {
    title: 'The Art of the Column Wheel',
    category: 'HOROLOGY ARCHIVE',
    date: 'Autumn 2026',
    readTime: '5 min read',
    snippet: 'Why master watchmakers revere the tactile click of mechanical column-wheel chronographs over standard cam systems.'
  },
  {
    title: 'A Journey Through Geneva’s Valleé de Joux',
    category: 'ATELIER DIARY',
    date: 'Autumn 2026',
    readTime: '7 min read',
    snippet: 'Exploring the serene snow-capped valleys where watchmaker workshops have honed their secrets for nearly three centuries.'
  },
  {
    title: 'Caring for Vegetable-Tanned Italian Leather',
    category: 'LEATHER & CARE',
    date: 'Autumn 2026',
    readTime: '4 min read',
    snippet: 'How natural oils and gentle conditioning allow your watch strap to develop an incomparable personal patina over decades.'
  }
];

export const InstagramGallery: React.FC = () => {
  const { addToast } = useStore();

  const handlePostClick = (tag: string) => {
    addToast(`Viewing ${tag}`, 'Opening gallery post from @crownanddial');
  };

  return (
    <section id="journal-section" className="w-full bg-[#111113] text-[#f5f2eb] py-20 border-b border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-[#262420]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-2">
              <Instagram className="w-4 h-4" />
              <span>@CROWNANDDIAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Moments from the Atelier &amp; World
            </h2>
          </div>

          <a
            href="#journal-section"
            onClick={(e) => {
              e.preventDefault();
              addToast('@crownanddial', 'Follow our official journal on Instagram');
            }}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#c5a880] hover:text-white transition-colors"
          >
            <span>FOLLOW @CROWNANDDIAL</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 4-Column Instagram Grid */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_POSTS.map((post, idx) => (
            <div
              key={idx}
              onClick={() => handlePostClick(post.tag)}
              className="group relative aspect-square overflow-hidden bg-[#18181a] border border-[#2b2a26] cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                  {post.tag}
                </span>
                <p className="text-xs text-white/90 line-clamp-2 mt-1 font-light">
                  {post.caption}
                </p>
                <div className="mt-2 text-[10px] text-[#c5a880] font-medium flex items-center gap-1">
                  <span>View Post</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journal / Editorial Articles Preview */}
        <div className="mt-20 pt-12 border-t border-[#242220]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#c5a880]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                THE CROWN &amp; DIAL JOURNAL
              </span>
            </div>
            <span className="text-xs text-[#8c857b]">Curated Horology Essays</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.map((article, i) => (
              <div
                key={i}
                className="group border border-[#242220] p-6 bg-[#141416] hover:border-[#c5a880]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => addToast(article.title, 'Full article available in our physical journal')}
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#8c857b] tracking-wider mb-2">
                    <span className="text-[#c5a880] font-medium">{article.category}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#c5a880] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#a9a397] font-light leading-relaxed mt-2.5">
                    {article.snippet}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-1.5 text-xs text-[#c5a880] font-medium tracking-wider uppercase group-hover:underline">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
