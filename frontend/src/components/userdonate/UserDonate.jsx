import React, { Component } from 'react';

class UserDonate extends Component {
  render() {
    return ( <div>
 <div class="donate">
<button>Donate</button>
<form name="donAmount" id="donAmount">
  <input type="radio" value="3" name="amount" id="three" />
  <label for="three">$3</label>
  <input type="radio" value="25" name="amount" id="twentyfive" />
  <label for="twentyfive">$25</label>
  <input type="radio" value="100" name="amount" id="hundred" />
  <label for="hundred">$100</label>
  <input type="radio" value="other" name="amount" id="other" />
  <label for="other">Other</label>
</form>
</div>
<div id="custom">
  <h2>Donation Amount</h2>
  <form name="customDonation" id="customDonation">
  <div class="input-group-1">
    <label for="custom-amount">$</label>
    <input id="custom-amount" name="custom-amount" type="text" /> 
    <div class="warn"></div>
  </div>
  </form>
  <div class="clearfix">
    <button class="back" type="button">Back
      <span></span>
      <span></span>
      <span></span>
    </button>
    <button class="next" type="button">Next</button>
  </div>
</div>

  <h2>Basic Information</h2>
   <div class="input-group-2">
    <label>First Name</label>
    <input type="text" />
    </div>
    <div class="input-group-2">
    <label>Last Name</label>
    <input type="text" />
    </div>
    <div class="input-group-1">
    <label>Email Address</label>
    <input type="text" />
    </div>
    <div class="input-group-1">
    <label>Street Address</label>
    <input type="text" />
    </div>
    <div class="input-group-3">
    <label>City</label>
    <input type="text" />
    </div>
    <div class="input-group-3">
    <label>State</label>
    <input type="text" />
    </div>
    <div class="input-group-3">
    <label>Zip Code</label>
    <input type="text" />
    </div>
    <div class="clearfix">
    <button class="back" type="button">Back
      <span></span>
      <span></span>
      <span></span>
    </button>
    <button class="next" type="button">Next</button>
  </div>
  <div class="contact-info">
  <h2>Payment Information</h2>
  <div class="input-group-1">
    <label>Card Number</label>
    <input type="text" />
    </div>
    
    <div class="input-group-2">
    <label>Expiration Date</label>
    <input type="text" />
    </div>
    <div class="input-group-2">
    <label>Security Code (CVV)</label>
    <input type="text" />
    </div>
    <div class="input-group-1">
    <label>Employer</label>
    <input type="text" />
    </div>
    <div class="input-group-1">
    <label>Occupation</label>
    <input type="text" />
    </div>
    
    <button class="back" type="button">Back
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    </div>
    <button class="next" type="button">Review</button>
    <div class="check">
  <span></span>
  <div class="mask">
  </div>
  <span></span>
</div>
<span class="message">Processing</span>

<section id="check">
  <h2>Confirm Payment</h2>
  <p>Please confirm your contribution of</p>
  <span>$8888</span>
  <button class="next" type="button">Confirm</button>
</section>
<section id="confirm">
  <h2>Thank You!</h2>
  <p>Your <span class="amount">$25</span> donation will help us reach <strong>570</strong>!</p>
</section>
  

</div>


      
    );
  }
}

export default UserDonate;