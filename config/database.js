const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Products");
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Fail to connect to MongoDB");
  }
};

module.exports = { connect };

/*  
[{
  "_id": {
    "$oid": "67299e7af771259390fc140e"
  },
  "title": "Essence Mascar",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "price": 9.99,
  "img": "images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg",
  "catego": "beautifull"
},
{
  "_id": {
    "$oid": "67299e7af771259390fc140f"
  },
  "title": "Eyeshadowor",
  "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
  "price": 19.99,
  "img": "images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg",
  "catego": "be beautiful"
},
{
  "_id": {
    "$oid": "67299e7af771259390fc1410"
  },
  "title": "Powder Canister",
  "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
  "price": 14.99,
  "img": "images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg",
  "catego": "bea bea ddj beautiful"
}]
*/
