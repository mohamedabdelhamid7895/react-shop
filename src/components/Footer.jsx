import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4 mt-5" style={{backgroundColor:'black',color:"white"}}>
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Our Content</h5>
                <p>Here you can </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Contact Us </a></li>
                    <li><a href="#!"> About Us </a></li>
                    <li><a href="#!">Products</a></li>
                    <li><a href="#!">Forms</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">our social media </a></li>
                    <li><a href="#!">Twitter</a></li>
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
    </div>

</footer>

export default Footer