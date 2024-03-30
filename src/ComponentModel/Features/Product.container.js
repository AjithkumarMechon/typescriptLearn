import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { ProductSelector } from "../Redux/selector";
import { fetchProductsData } from "../Redux/action";
import { connect } from "react-redux";
import ProductComponent from "./ProductComponent";
const mapStateToProps = createStructuredSelector({
  productData: ProductSelector,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchProductsData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
