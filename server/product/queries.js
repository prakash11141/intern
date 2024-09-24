export const getProductsdetails =
  "select id,name,price,image,description,c_name from products left join categories on products.category_id=categories.category_id";

export const getProductById = "select * from products where id=$1";
export const addProduct1 =
  "insert into products (name,category_id,price,image,description) values ($1,$2,$3,$4,$5)";
export const byCategory1 =
  "SELECT id,name,c_name,image,price,description FROM products JOIN categories ON products.category_id = categories.category_id WHERE products.category_id =$1;";
export const deleteProduct1 = "delete from products where id=$1";
export const updateProduct1 =
  "UPDATE products SET name = $1, category_id = $2, price = $3 WHERE id = $4";
