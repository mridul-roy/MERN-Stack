const d = new Date()
var year = d.getFullYear()

function Footer(){
    return <footer>
        <p>copyright@ {year}</p>
    </footer>
}

export default Footer;