
import classes from './Footer.module.css';

function Footer() {

    return (
        <footer className={classes.footer}>
            <p>Author: Devin Knight</p>
            <p>Source Code on <a target="_blank" href="https://github.com/devin-L-knight/nextJS-training-site">Github</a></p>
        </footer>
    )
}

export default Footer;