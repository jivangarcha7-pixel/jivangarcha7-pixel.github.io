export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  price: number;
}

export const PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    title: 'Parisian Streets',
    category: 'Architecture',
    price: 45
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Serenity',
    category: 'Landscape',
    price: 60
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    title: 'Forest Mist',
    category: 'Nature',
    price: 35
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    title: 'Sunlight through Trees',
    category: 'Nature',
    price: 50
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    title: 'Lakeside View',
    category: 'Landscape',
    price: 55
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
    title: 'Golden Valley',
    category: 'Landscape',
    price: 40
  }
];
