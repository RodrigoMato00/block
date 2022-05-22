// web/pages/api/erc721/[id].js

const metadata = {
    1: {
      attributes: [
        {
          trait_type: "Shape",
          value: "Circle",
        },
        {
          trait_type: "Mood",
          value: "appy",
        },
      ],
      description: "Mi casa",
      image: "https://inico.usal.es/wp-content/uploads/2019/07/p1-1024x768.jpg",
      name: "Marcelo",
    },
  };

  export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || {});
  }