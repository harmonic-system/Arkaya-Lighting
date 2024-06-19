import { Link } from "react-router-dom"

const Privacy_Policy = () => {
  return (
    <>
      <div className="container my-5">
        <div className="choose_bg">
          <div className="container">
            <div className="white_bg">
              <div className="row">
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Privacy Notice</h1>
                  <hr />
                  <p className="p-4 text-dark">Thanks for placing orders on our arkayalighting online store. We sincerely wish you have a great shopping experience here. And we have committed to protecting the privacy of our customers. </p>
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">CONTACT OUR AFTER-SALES SUPPORT TEAM</h3>
                    <p className="p-4 text-dark">Please mail our dedicated After-Sales Support Email at <a href="mailto:">sales@arkayalighting.com</a> for immediate help with: Technical issues, Installation questions, returns, and product exchanges.</p>
                    <p className="p-4 text-dark">Alternatively, fill out this form and we'll get back to you within one business day.</p>
                    <p className="p-4 text-dark">Help us assist you better:&nbsp;<Link to="/contact">Contact</Link></p>
                    <p className="p-4 text-dark">For returns and exchanges, list the products and the reason for the return. Please also understand our terms before you submit.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">Your Privacy Information:</h3>
                    <p className="p-4 text-dark">We value your privacy information, so your privacy information will be protected, Our arkayalighting online store is committed to safeguarding your privacy when making online purchases. When registering our account, users shall provide the personal registration information. And as part of the order process, we only collect following essential customer information: Name, Shipping/Billing Address, Email Address, Phone Number, Credit/Debit Card Information. The contact information is only used to get in touch with you when necessary. The information you provide to us is not given or sold to any outside party except for the shipping company delivering your order. We only share your shipping address and phone number with the shipping company. The information we collect from you is used only to process and ship your order. Your email address is used only to provide you with an order confirmation and tracking number. Your phone number is used to contact you in case of a problem with the fulfillment or delivery of your order. Your Credit Card information is only used to confirm whether the billing address is the same with the shipping address.</p>
                    <p className="p-4 text-dark"></p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">Your Cookies:</h3>
                    <p className="p-4 text-dark">Cookies are alphanumeric identifier text files that we transfer to your computer’s hard drive through your Web browser to enable our systems to recognize your browser and to provide features such as storage of items in your Shopping Cart between visits</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">Automatic Information collected by us:</h3>
                    <p className="p-4 text-dark">Whenever you visit our Web site we collect and store information such as &quot;cookies&quot; which remember information about a visitor from one page to the next and from one visit to the next. We collect and analyze the IP address used to connect your computer to the Internet; login; password; computer and connection information such as your browser type and version; operating system and platform; purchase history; confirmation when you open e-mail that we send you; the URLs which lead you to and around our Web site including the date and time; the pages and or products you viewed or searched for and the phone number used to call our voice telephone numbers. Your browser allows you to reject cookies and software is available from third parties which will allow you to visit our Web site without providing this information. You are welcomed at our Web site if you use this software but we will not be able to offer you our personalized services.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">Security:</h3>
                    <p className="p-4 text-dark">Our Web site protects the security of personal information you transmit to us by using Secure Sockets Layer (SSL) software, which encrypts the information you input during the transmission to us. We do not reveal your credit card number when we confirm your order. In order to protect against unauthorized access to your account you should sign off when you finish visiting our site.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <div className="cart-section">
                    <h3 className="p-4 text-dark">Contact Us with Any Question:</h3>
                    <p className="p-4 text-dark">If you have any questions, concerns, or comments about our privacy notice, please kindly E-mail us. We respect your privacy and we will not share the information you provide us with outside companies or organizations. We have your best interest at heart and believe you will appreciate our conviction to your security. This is our commitment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy_Policy