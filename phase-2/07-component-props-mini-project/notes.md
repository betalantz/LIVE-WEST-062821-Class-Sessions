## Component Hierarchy
```text
└─ App
   ├─ Header
   ├─ About
   └─ ArticleList
      |  Article
      |  Article
      └─ Article
```

## Data Shape
```javascript
blogData = {
    name: String,
    image: svg,
    about: String,
    posts: [{},{}]
}
post = {
    id: Integer,
    title: String,
    date: String,
    preview: String,
    minutes: Integer
}
```