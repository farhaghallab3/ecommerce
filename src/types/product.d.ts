interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating?: number;
  stock: number;
  brand?: string;
  origin?: string;
}

interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'rating' | 'name';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}



interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}


export type { Product, Testimonial, ProductFilters };
