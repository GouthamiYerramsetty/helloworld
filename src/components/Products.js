const Products = (props) => {
  const { pid, pname, price } = props;
  return (
    <tr>
      <td>{pid}</td>
      <td>{pname}</td>
      <td>{price}</td>
    </tr>
  );
};
export default Products;
