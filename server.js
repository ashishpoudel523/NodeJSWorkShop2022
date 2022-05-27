// Template Engine


// Template enignes are the way to create dynamic HTML pages in a modular pattern.Engine

// They are not basically the hardware the hardware engines but a library files that helps us to render other codes in our HTML page; 


app.get {
    Response.render() => {
        EJS
    }
}

app.get("/services"), (req, res) => {
    res.render("services", ) {
        title: "Our Services",
        services: "Web Desiginig",
        "SEO",
        "Data Science"
    }
}


app.get("/", (req, res) => {
    res.render("homepage", {
        data: {
            tile: "Homepage | HuddleNepal"
        }
    })
})

app.use((req, res) => {
    res.render("Page not found")
})