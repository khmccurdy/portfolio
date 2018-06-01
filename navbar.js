var $navDiv = d3.select("#navBar");

var externalLinkTarget = d=>d.link.startsWith("http")?"_blank":"";

var navDropdownElements = [
    {label: "Census Data Interactive Chart", 
        link: "census.html",
        img: "images/census_thumb.png",
        skills: "D3, JavaScript, HTML, CSS, SVG, Excel"},
    {label: "Bacteria Dashboard", 
        link: "bacteria.html",
        img: "images/bacteria_thumb.png",
        skills: "Flask, Python, SQLAlchemy, SQLite, JavaScript, Plotly, HTML, Bootstrap, Heroku"},
    {label: "WeatherPy", 
        link: "weatherpy.html",
        img: "images/weatherpy_thumb.png",
        skills: "Python, Pandas, OpenWeatherMap API, Matplotlib, HTML, Bootstrap"},
    {label: "UFO Table", 
        link: "ufo.html",
        img: "images/ufo_thumb.png",
        skills: "JavaScript, Bootstrap, D3, JQuery, HTML"},
    {label: "Midi DF", 
        link: "https://github.com/khmccurdy/midi_df", // @ReplaceMe
        img: "images/mididf_thumb.png",
        skills: "Python, Pandas, Midi, JSON, module documentation, music theory"},
    {label: "Directed Game-State Graph", 
        link: "dirgraph.html", 
        img: "images/dirgraph_thumb.png",
        skills: "D3, JavaScript, SVG, HTML"},
];

var navTopLinks = [
    {label: "Contact", link: "contact.html"},
]

d3.text("navbar_skeleton.html", (error,response)=>{
    if (error) throw error;

    $navDiv.html(response);

    d3.select("#navDropdown")
        .selectAll("a")
        .data(navDropdownElements)
        .enter()
        .append("a")
        .attr("class", "dropdown-item")
        .attr("href", d=>d.link)
        .attr("target", externalLinkTarget)
        .text(d=>d.label)
    
    d3.select("#navTopLinks")
        .selectAll("li")
        .data(navTopLinks)
        .enter()
        .append("li")
        .attr("class","nav-item")
        .append("a")
        .attr("class", "nav-link")
        .attr("href", d=>d.link)
        .attr("target", externalLinkTarget)
        .text(d=>d.label)
})