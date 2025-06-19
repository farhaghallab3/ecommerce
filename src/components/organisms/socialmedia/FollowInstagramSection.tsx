import type { FC } from "react";
import InstagramPostCard from "../../molecules/socialmedia/InstagramPostCard";


interface InstagramPost {
  id: string;
  imageSrc: string;
  showInstagramIcon?: boolean;
}

interface FollowInstagramSectionProps {
  title: string;
  posts: InstagramPost[];
}

const FollowInstagramSection: FC<FollowInstagramSectionProps> = ({ title, posts }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        {title}
      </h2>

      {/* Instagram Posts Grid (Horizontal scrollable) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar space-x-4">
        {posts.map((post) => (
          <div key={post.id} className="flex-shrink-0 snap-start" style={{ width: 'calc(100% / 6 - 16px)' }}> {/* Adjust width for 6 items with gap */}
            <InstagramPostCard {...post} />
          </div>
        ))}
      </div>

      {/* Custom scrollbar styles (hide scrollbar) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default FollowInstagramSection;