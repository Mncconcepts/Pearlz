import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const title = 'About Pearl';
const desc = 'Pearl is your one stop shopify skin care site.';
const ItemTitle = 'Categories';
const quickTitle = 'Top skin care';
const tweetTitle = 'Recent Trends';

const addressList = [
    { iconName: 'fa-google', text: 'Lagos, Nigeria.' },
    { iconName: 'fa-phone', text: '+234 913 319 4835 ' },
    { iconName: 'fa-globe', text: 'info@Pearlz.com' },
];

const socialList = [
    { iconName: 'fa-facebook', siteLink: '#', className: 'fa-brands' },
    { iconName: 'fa-twitter', siteLink: '#', className: 'fa-brands' },
    { iconName: 'fa-linkedin', siteLink: '#', className: 'fa-brands' },
    { iconName: 'fa-instagram', siteLink: '#', className: 'fa-brands' },
    { iconName: 'fa-pinterest', siteLink: '#', className: 'fa-brands' },
];

const ItemList = [
    { text: 'All Products', link: '/shop' },
    { text: 'Shop', link: '/shop' },
    { text: 'Blog', link: '/blog' },
    { text: 'About', link: '/about' },
    { text: 'Policy', link: '#' },
    { text: 'FAQs', link: '/about' },
];

const quickList = [
    { text: 'Summer Sessions', link: '#' },
    { text: 'Events', link: '#' },
    { text: 'Gallery', link: '#' },
    { text: 'Forums', link: '#' },
    { text: 'Privacy Policy', link: '#' },
    { text: 'Terms of Use', link: '#' },
];

const tweetList = [
    {
        iconName: 'fa-x-twitter',
        desc: `Pearlz Store Greetings! you'all, Grab your item, 50% Big Sale Offer!!`,
    },
    {
        iconName: 'fa-x-twitter',
        desc: '@Pearlz Hey! fellas Grab your item, 50% Big Sale Offer !!',
    },
];

const footerbottomList = [
    { text: 'shopify', link: '#' },
    { text: 'workers', link: '#' },
    { text: 'customers', link: '#' },
    { text: 'trends', link: '#' },
];

const Footer = () => {
    return (
        <footer className="style-2">
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        {/* About Section */}
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-content">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <ul className="lab-ul">
                                        {addressList.map((val, i) => (
                                            <li key={i}>
                                                <i className={`fa ${val.iconName}`}></i> {val.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul mt-4 social-iconss">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.siteLink} className={val.className}>
                                                    <i className={`fa ${val.iconName}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Top Wears */}
                        <div className="col">
                            <div className="footer-item">
                                <h2>{quickTitle}</h2>
                                <ul className="lab-ul">
                                    {quickList.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.link}>{val.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="col">
                            <div className="footer-item">
                                <h2>{ItemTitle}</h2>
                                <ul className="lab-ul">
                                    {ItemList.map((val, i) => (
                                        <li key={i}>
                                            <Link to={val.link}>{val.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trends */}
                        <div className="col">
                            <div className="footer-item">
                                <h2>{tweetTitle}</h2>
                                <ul className="lab-ul">
                                    {tweetList.map((val, i) => (
                                        <li key={i}>
                                            <i className={`fa ${val.iconName}`}></i> {val.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>
                            &copy; 2025{' '}
                            <Link to="/">Pearlz</Link>. all right reserved{' '}
                            <a
                                href="https://pearlz.com.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.pearlz.com
                            </a>
                        </p>
                        <div className="footer-bottom-list">
                            {footerbottomList.map((val, i) => (
                                <Link key={i} to={val.link}>
                                    {val.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
