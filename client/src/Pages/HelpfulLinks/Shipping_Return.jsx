import { Link } from "react-router-dom"

const Shipping_Return = () => {
  return (
    <>
      <div className="container my-5">
        <div className="choose_bg">
          <div className="container">
            <div className="white_bg">
              <div className="row">
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Shipping & Returns</h1>
                  <hr />
                  <div className="cart-section">
                    <p className="p-4 text-dark">Arkaya Lighting products are shipped out every day, from Monday to Friday, except holidays. Most orders placed will be dispatched within 1-5 business days (except the products with "Delivery lead time"). </p>
                    {/* <p className="p-4 text-dark">Arkaya Lighting products are shipped out every day, from Monday to Friday, except holidays. Most orders placed will be dispatched within 1-5 business days (except the products with "Delivery lead time"),You will receive an e-mail confirmation with your tracking number (if you choose shipping by carrier like DHL,UPS). Please check your junk box if you can't receive the e-mails, after you receive your tracking number, you will be able to track your order online. </p> */}
                    <p className="p-4 text-dark">If your goods were shipped by air cargo, please contact us at <a href="mailto:sales@arkayalighting.com"><b>sales@arkayalighting.com</b></a>, should there be a delay.</p>
                    <p className="p-4 text-dark">Please feel free to <Link to="/contact"><b>contact us</b></Link> , should you encounter any difficulties while trying to track your goods on line.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Return & Exchange Policy:</h1>
                  <hr />
                  <div className="cart-section">
                    <p className="p-4 text-dark">Your satisfaction is the goal we are after. If you are not satisfied with the merchandise you have bought, you may return within 30 days from shipping date. All returned merchandise must be in original package and must have all original tags attached. Refunds will not include shipping charges. <br />
                      Exchanges are only acceptable for the same series merchandise in a different available type. We cannot exchange completely different merchandise. Exchanged merchandise can only be shipped out after we receive the returned goods and have a quality check. Customers are responsible for the shipping cost back to us, and we will not cover the shipping cost back to you.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Return Procedure:</h1>
                  <hr />
                  <div className="cart-section">
                    <p className="p-4 text-dark">Email us the reason why you want to return the merchandise.<br />
                      Delivery the item to the address we specify in the shipment (or another place we tell you). Please state all your information clearly inside your return including the original order number, buyer's name, address and telephone number.<br />
                      Returned merchandise must be in the same condition as we shipped out. We reserve the right to assess additional fees if the returned item is not in proper condition.</p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 mt-3">
                  <h1>Frequently Asked Questions about Shipping and Returns:</h1>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>1. Question: </strong>&nbsp;How much is the cost for shipping.
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {/* <p className="text-secondary"><strong>Answer:</strong>&nbsp; Hongkong Post Air Mail with Tracking Number (Under 1 KG) $12.0 for All over the world<br />
                            Worldwide Express(UPS,DHL): Strating at $25. Please give us your phone number, because Express required for this information.</p> */}
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; While ordering the product our, executive will give all these details.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>2. Question: </strong>&nbsp; What happens after I place my order?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; Our ordering system immediately emails you a copy of your latest order once you're placed an order . You will also receive another email from us in about 1-5 business days to inform you of the status of your order. Please ensure that you are using your correct email account to view your email copy(i.e. the same email address you specified while ordering).</p>
                          {/* <p className="text-secondary"><strong>Answer:</strong>&nbsp; Our ordering system immediately emails you a copy of your latest order once you're placed an order through our online order form. You will also receive another email from us in about 1-5 business days to inform you of the status of your order. Please ensure that you are using your correct email account to view your email copy(i.e. the same email address you specified when filling out our online order form).</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>3. Question: </strong>&nbsp;Can I cancel my order?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; Customer satisfaction is important to all of us at&nbsp;<b />Arkaya Lighting<b />. We will ship your merchandise as quickly as possible. If your order has not yet shipped, we can cancel it for you. However, we shall not be able to process a cancellation once your order has been shipped.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <strong>4. Question: </strong>&nbsp;What should I do if the goods received are damaged?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; All products are carefully wrapped with utmost care to ensure a safe delivery to its destination. In case of damage during shipment, please file your damage claims to the delivering carrier immediately, and notify us within 72 hours of receipt of damaged merchandise by you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <strong>5. Question: </strong>&nbsp;Are delivery dates guaranteed?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; We cannot guarantee delivery dates for circumstances beyond our control (e.g.,&nbsp;&nbsp; unsuccessful delivery attempts, carrier weather delays, incorrect addresses, etc.) NO refunds will be issued under these circumstances.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          <strong>6. Question: </strong>&nbsp;Can I specify a future delivery date?
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; yes,you can specify a future delivery date. please <Link to="/contact"><b>contact us.</b></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          <strong>7. Question: </strong>&nbsp;Where will you ship your products?
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; Right now, we will ship to all over the world.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          <strong>8. Question: </strong>&nbsp;How long would it take to receive my items after placing order?
                        </button>
                      </h2>
                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; The total time required would be order processing time plus shipping time. A rough estimate for delivering to any major city in the world would be as below:<br />
                            Stock Orders with Air Parcel Shipment: ~ 11 to 16 working days<br />
                            Stock Orders with Express Shipment: ~3 to 6 working days<br />
                            Alteration or Custom-made Orders with Air Parcel Shipment: ~ 14 to 19 working days<br />
                            Alteration or Custom-made Orders with Express Shipment: ~ 8 to 13 working days</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          <strong>9. Question: </strong>&nbsp;When will my order be shipped?
                        </button>
                      </h2>
                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; All stock merchandise will be dispatched for shipment within 1-3 working days of receipt of order. Please allow an additional 3-5 working days for custom-made or alteration service. You will be notified via email of any back orders, or other delays in shipping your order.We offer delivery via Registered International air parcel which takes up to 11-16 working days for you to receive your goods. We also offer Worldwide Express service which takes up to 3-6 working days for you to receive your goods.</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          <strong>10. Question: </strong>&nbsp;What payments do you accept?
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;Our website accepts most forms of paypal payments.<br />
                            We accept credit cards(via Paypal), T/T, Western Union. you can choose your favorite method when you check out. </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                          <strong>11. Question: </strong>&nbsp;What will happen if I give an incorrect shipping address?
                        </button>
                      </h2>
                      <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; PLEASE be certain of your address before ordering!&nbsp; Unfortunately, your product will probably not get to its destination in time for the important occasion if you supply an incorrect address when ordering. Make sure that you include apartment or suite numbers if applicable. and most important is give us your phone nubmer<br />
                            If a package is returned to us because of an address problem, we will reship the package to you or a corrected recipient address. You will be charged for the additional shipping fees.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                          <strong>12. Question: </strong>&nbsp;What happens in the event of lost packages?
                        </button>
                      </h2>
                      <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;Although we offer Express and registered postings, we would suggest delivery by UPS or DHL In an effort to further your shopping experience with us, arkayalighting has decided to protect customers on any loss of packages sent to you via UPS or Registered Post. For registered postings, simply wait 3 months, so we can determine and confirm that the package has been lost, and we will reimburse you a full store credit up to the value of the product that you chose. For UPS deliveries, it may take 1 month to claim for reimbursements. We remain as always 100% dedicated to customer service. </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                          <strong>13. Question: </strong>&nbsp;I still haven't received my package within the time you spec?
                        </button>
                      </h2>
                      <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; We usually need 1-3 working days to process your order before it is shipped out. Once it's shipped, it will take another 7-10 working days for your package to arrive at its shipping address. Packages on express deliveries will take about 3-4 working days in shipping time to reach the recipient. In the rare event that the recipient faces unexpected delays in receiving our products, this could be due to a customs holdup. These holdups are usually temporary before the goods are re-released to the recipient. The holdups are part of random checks conducted by customs staff to ensure that packages originating from overseas do not contain harmful ammunitions or chemical products. Please allow a grace waiting period of about 1 week if there happen to be cases of such unusual delays. After which, you can always contact us again for help.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                          <strong>14. Question: </strong>&nbsp;I haven't received any information about my order status?
                        </button>
                      </h2>
                      <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; You should have received an acknowledgement approximately the status of your order in about 1-5 business days after you had placed your order. This message will inform you whether your package has been dispatched or of available options in the rare event that your order cannot be processed. Please ensure that you are using the correct email account to view our acknowledgement email directed to you(i.e. the same email address you specified while ordering ).</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                          <strong>15. Question: </strong>&nbsp;Can I have refund if I reject my package when it is delivere?
                        </button>
                      </h2>
                      <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp; If customers reject the package because of customs issue or other issues arouse at their side, we will not be responsible for arranging any refund towards the rejected package as we have fulfilled our obligation to complete and ship the orders to customers.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                          <strong>16. Question: </strong>&nbsp;How do I exchange items?
                        </button>
                      </h2>
                      <div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="text-secondary"><strong>Answer:</strong>&nbsp;The best way to arrange for an exchange is to contact our staff who will give you correct instructions pertaining to your particular order. Every exchange scenario can be different and there may be times when we can help you avoid unnecessary costs of sending your items back to us </p>
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

export default Shipping_Return