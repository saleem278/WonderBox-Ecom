import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import { clearCart } from "../../redux/cart/cart.actions";
const CheckoutPage = ({ cartItems, total, clearCart }) => (
  <>
    <div style={cartItems.length===0?{ display: "none" }:{ display: "flex", justifyContent: "flex-end" }}>
      <CustomButton type="button" onClick={clearCart}>
        Clear Cart
      </CustomButton>
    </div>
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <WarningContainer>Cart is Empty</WarningContainer>
      )}
      {cartItems.length > 0 ? (
        <>
          <TotalContainer>TOTAL: ₹{total}</TotalContainer>
          <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: UPCOMING MM/YY - CVV: 123
          </WarningContainer>
          <StripeCheckoutButton price={total} />
        </>
      ) : (
        ""
      )}
    </CheckoutPageContainer>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
