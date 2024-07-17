import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`port is running on ${port}.`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs });
});

app.get("/blog/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blogIndex = id - 1; // Adjust for zero-based indexing
  if (blogIndex >= 0 && blogIndex < blogs.length) {
    const blogData = blogs[blogIndex];
    res.render("blog.ejs", { blogData });
  } else { 
    res.status(404).send("Blog not found");
  }
});

const blogs = [
  { id: 1, title: "How to study effectively", excerpt: "we also heard that smartwork is better than hardwork...", content: "coming soon" },
  { id: 2, title: "The Art of Mindful Living", excerpt: "Mindful living is about being present in the moment and fully engaging with your surroundings. It can transform your life in unexpected ways.", content: "coming soon" },
  { id: 3, title: "How to Boost Your Productivity at Work", excerpt: "Boosting productivity at work is essential for achieving your goals and maintaining a healthy work-life balance. Here are some effective strategies.", content: "coming soon" },
  { id: 4, title: "Understanding Cryptocurrency: A Beginner's Guide", excerpt: "Cryptocurrency has taken the financial world by storm. This beginner's guide will help you understand the basics of cryptocurrency and how it works.", content: "coming soon" },
  { id: 5, title: "The Importance of Mental Health Awareness", excerpt: "Mental health awareness is crucial for creating a supportive environment where individuals feel empowered to seek help and support each other.", content: "coming soon" },
  { id: 6, title: "The Future of Renewable Energy", excerpt: "Renewable energy is transforming the way we power our world. Explore the future of renewable energy and its potential to combat climate change.", content: "coming soon" },
  { id: 7, title: "The Benefits of a Plant-Based Diet", excerpt: "Adopting a plant-based diet offers numerous health benefits, including improved digestion, increased energy levels, and reduced risk of chronic diseases.", content: "coming soon" },
  { id: 8, title: "Top 10 Travel Destinations for 2024", excerpt: "Explore the top 10 travel destinations for 2024, from pristine beaches to bustling cities, and start planning your next adventure today!", content: "coming soon" }
];
