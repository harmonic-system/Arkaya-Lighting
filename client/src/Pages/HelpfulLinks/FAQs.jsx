import { Link } from "react-router-dom";

const FAQs = () => {

  return (
    <>
      <div className="container my-5">
        <div className="choose_bg">
          <div className="container">
            <div className="white_bg">
              <div className="row">
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Frequently Asked Questions :</h1>
                  <hr />
                  <h6>Thank you for visiting our online store. Here we are providing the frequently asked questions as well as the answers to assist you. We hope it make clear and informative for you online shopping. Honest seller, 100% satisfaction, easy return policy, safe payment and fast shipping.</h6>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>1. Question: </strong>&nbsp;Is it safe to order online?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;Our website is secured with the latest protective security. Arkaya Lighting chooses products to sell based on their excellent designs and proven hardware reliability. So the quality is guaranteed. We check all of your orders during the packing stage to make sure that the right accessories are included and that the adapters and other standards are correct for your country. We have a OQC team who tests your ordered products are functioning correctly before they are packed and sent to you. This is in addition to the normal quality assurance checks that all the goods have passed in the factory line.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>2. Question: </strong>&nbsp;  Why Buy from Arkaya Lighting?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;We have the lowest prices. We cut out the middle man and sell at wholesale prices directly to the public. This means big savings on quality products. Show us a lower price on lights or any item we sell. At Arkaya Lighting, we sell only the finest quality merchandise. Our lights products have been sold in the Worldwide.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>3. Question: </strong>&nbsp;How to contact us?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; We believe in the timeliness of customer service, and will do everything possible to satisfy our customers. If you have any problems, comments, or suggestions, please contact our customer service representatives. Click <Link to="/contact"><b>here</b></Link> for any questions, We normally respond to all enquiries within 1 working day expect the holiday</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <strong>4. Question: </strong>&nbsp;Does it scram for your site?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; We do not cheat any customers. We have engaged in online retail products for years. We hope do business with you for long terms and create a pleasant shopping experience so that you will get your contact about us. That you can be rest assured buy from us</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <strong>5. Question: </strong>&nbsp;How long does shipping take?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; The time of receipt will be order processing time plus shipping time. A rough estimate for delivering to any major city in the world would be as below: Stock Orders with Air Parcel Shipment: ~ 10 to 15 working days Stock Orders with Express Shipment: ~4 to 7 working days Alteration or Custom-made Orders with Air Parcel Shipment: ~ 15 to 20 working days Alteration or Custom-made Orders with Express Shipment: ~ 7 to 12 working days</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          <strong>6. Question: </strong>&nbsp;Which payment method do you support?
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; We're working on our payment methods. Soon You can Order Lighting Products from website</p>
                          {/* <p className="text-secondary"><strong>Answer:</strong>&nbsp; We accept credit cards(via Paypal), T/T, Western Union. you can choose your favorite method when you check out.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          <strong>7. Question: </strong>&nbsp;Can I have my order shipped to a P.O Box?
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; No, unfortunately not. Since we deliver by courier to your door, upon receipt of the product an adult must be available to sign for the package, so we can't ship to P.O Boxes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          <strong>8. Question: </strong>&nbsp;How long will it take for my order to be processed?
                        </button>
                      </h2>
                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; Most of the orders are processed and shipped within 2-5 days. However there could be delay if any error happens.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          <strong>9. Question: </strong>&nbsp;What is the process if I want to buy your product?
                        </button>
                      </h2>
                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary mb-3"><strong>Answer:</strong><strong>1</strong>&nbsp; For now you have to follow these steps </p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 1 - :&nbsp;</strong>&nbsp; When you want to buy the product you find, get the product name or product model then fill the query box and send to us.</p>
                        </div>
                        {/* <div className="accordion-body">
                          <p className="text-secondary mb-3"><strong>Answer:</strong><strong>1</strong>&nbsp; Please see the 5 steps - </p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 1 - :&nbsp;</strong>&nbsp; When you want to buy the product you find, choose the appropriate quantities, sizes, etc. then add the items to your cart. </p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 2 - :&nbsp;</strong>&nbsp; When you want to checkout, click the Checkout button on the shopping cart page.</p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 3 - :&nbsp;</strong>&nbsp; Fill all of the required information on the shipping and billing pages.</p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 4 - :&nbsp;</strong>&nbsp; Review your order before submitting, to verify all information is correct and to get your total order.</p>
                          <p className="text-secondary px-4 mb-2"><strong>Step 5 - :&nbsp;</strong>&nbsp; We will ship your Product in 48 hours after your payment by PAYPAL or Credit card.</p>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          <strong>10. Question: </strong>&nbsp;How do I know if you have shipped my order?
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;After we shipped your order, we will send you a tracking number, and you can track online, which will show you where your order is</p>
                        </div>
                      </div>
                    </div> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                          <strong>11. Question: </strong>&nbsp;Which shipping method do you use?
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;All international shipments are shipped via DHL,UPS,TNT,FedEx express. Save more money now enjoying real brand new quality .</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                          <strong>12. Question: </strong>&nbsp;Can delivery address be different from the billing address?
                        </button>
                      </h2>
                      <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;To change your address after order or any issue regarding address, you can <a href="mailto:arkayalighting@gmail.com"><b>mail</b></a> us or <a href="tel:+912255889966"><b>make a call</b></a> to our support executive</p>
                          {/* <p className="text-secondary"><strong>Answer:</strong>&nbsp;When your order shipping address differs from the billing address, we will send a confirm email to ask for your confirmation. After we confirm your order details, we will deliver merchandise ASAP!</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                          <strong>13. Question: </strong>&nbsp;When and how can I check on my order status?
                        </button>
                      </h2>
                      <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;Soon we'll launch this features in our website.</p>
                          {/* <p className="text-secondary"><strong>Answer:</strong>&nbsp;Normally, when we deliver items, you will receive the tracking number via e-mail. And you can check it on line.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                          <strong>14. Question: </strong>&nbsp;Can I exchange or cancel an order?
                        </button>
                      </h2>
                      <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;Customer satisfaction is important to all of us at Arkaya Lighting. We will ship your merchandise as quickly as possible. If your order has not yet shipped, we can cancel it for you. However, we shall not be able to process a cancellation once your order has been shipped.</p>
                        </div>
                      </div>
                    </div>
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

export default FAQs