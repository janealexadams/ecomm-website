const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Shirts' },
    { name: 'Pants' },
    { name: 'Onesies' },
    
  
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "2-Piece Outfit Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168570/2-Piece-Outfit-Set_s7edd8.png",
      gender: "boys",
      category: "onesies",
      price: 24.95,
      description: "Super trendy and super comfy, this pull-on sets is perfect for your little cutie.",
      payBtn: "https://buy.stripe.com/7sI17z72FdVP5Gw7sz"
    },
    {
      name: "Hoodie Sweat Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168572/Hoodie-Sweat-Set_zvkoyh.png",
      gender: "boys",
      category: "onesies",
      price: 19.95, 
      description: "Made for the changing season, this relaxed fit set is a cozy new addition to a fall wardrobe.",
      payBtn: "https://buy.stripe.com/aEU8A15YB3hbglaaEJ"
    },
   
    {
      name: "Sweater Outfit Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168626/Sweater_Outfit_Set_uiqbsb.png",
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Designed with an easy on waistband and lots of stretch, this cute Onesie set is perfect for your active girl.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
   
    {
      name: "Favorites Quilted Outfit Set",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168625/Favorites_Quilted_Outfit_Set_nhkmsu.png", 
      gender: "girls",
      category: "onesies",
      price: 15.95,
      description: "Super trendy and super comfy, this Quilted Onesie set is perfect for your little cutie.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    {
      name: "Pocket Henley Long Sleeve Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168506/Pocket-Henley_owrbel.png",
      gender: "boys",
      category: "shirts",
      price: 15.95,
      description: "Crafted in super soft slub jersey, this striped henley makes the perfect layer.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    
    {
      name: "Striped Heather T-Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168509/Striped-Heather-T-Shirt_zi48g3.png",
      gender: "boys",
      category: "shirts",
      price: 24.95,
      description: "This tee is so easy to throw on and go. It pairs well with jeans, cargos and joggers too! Plus the long sleeves will keep him cozy all season long.",
      payBtn: "https://buy.stripe.com/7sI17z72FdVP5Gw7sz"
    },
    {
      name: "Cotton T-Shirt",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168630/Cotton-Tee_neb0pf.jpg",
      gender: "girls",
      category: "shirts",
      price: 19.95,
      description: "Lightweight with short sleeves, this basic tee is perfect for layered looks or starting play outfits!",
      payBtn: "https://buy.stripe.com/aEU8A15YB3hbglaaEJ"
    },
    
    {
      name: "Love Bug Graphic Tee",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168631/Love-Bug-Graphic-Tee_psibyz.png",
      gender: "girls",
      category: "shirts",
      price: 34.95,
      description: "Crafted in soft cotton, this tee is perfect for your little love bug.",
      payBtn: "https://buy.stripe.com/8wM9E5aeR7xr8SIdQU"
    },
    {
      name: "Everyday Pull-On Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168559/Everyday-Pull-On-Pants_wrohs2.jpg",
      gender: "boys",
      category: "pants",
      price: 24.95,
      description: "Perfect for today, tomorrow and yesterday, these easy on pants are perfect for your active one.",
      payBtn: "https://buy.stripe.com/dR68A1aeR6tngla146"
    },
    
    {
      name: "Relaxed Fit Pull-On Joggers",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168560/Relaxed-Fit-Pull-On-Joggers_u2r1b8.jpg",
      gender: "boys",
      category: "pants",
      price: 19.95, 
      description: "Made for the changing season, these relaxed fit joggers are a cozy new addition to their fall wardrobe. Plus, a functional drawstring makes them the perfect fit every time.",
      payBtn: "https://buy.stripe.com/cN27vX86J4lf9WMcMP"
    },
   
    {
      name: "Heart Leggings",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168612/Heart-Leggings_k4ydtz.jpg",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "Designed with an easy on waistband and lots of stretch, these cute leggings are perfect for your active girl.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    },
    
    {
      name: "Pull-On Flare Pants",
      img: "https://res.cloudinary.com/deqzppd4t/image/upload/v1700168614/Pull-On-Flare-Pants_pkxikl.png",
      gender: "girls",
      category: "pants",
      price: 15.95,
      description: "Super trendy and super comfy, these pull-on flare pants are perfect for your little cutie.",
      payBtn: "https://buy.stripe.com/bIY4jLfzb2d70mc28e"
    }
  
   
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
   
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
