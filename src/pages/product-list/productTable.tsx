import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { productTable as styles } from "./styles";

import { useAppSelector } from "../../hooks/useAppSelector";
import { Product } from "./services/types";
import useProductHelper from "./helper";

const ProductTable = () => {
  const { productList } = useAppSelector((state) => state.products);
  const { handleNavigate, handleDelete } = useProductHelper();

  return (
    <TableContainer>
      <Table sx={styles.table}>
        <TableHead sx={styles.tableHeader}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Discount Percentage</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.products && productList.products.length > 0 ? (
            productList.products.map((product: Product) => {
              const {
                id,
                title,
                brand,
                category,
                stock,
                thumbnail,
                price,
                rating,
                discountPercentage,
              } = product;
              return (
                <TableRow key={id} sx={styles.row}>
                  <TableCell>
                    <Box sx={styles.name}>
                      <Avatar
                        sx={styles.avatar}
                        alt="Profile"
                        src={thumbnail}
                      />
                      {title ?? ""}
                    </Box>
                  </TableCell>
                  <TableCell>{brand ?? ""}</TableCell>
                  <TableCell>{category ?? ""}</TableCell>
                  <TableCell>{stock ?? ""}</TableCell>
                  <TableCell>{price ?? ""}</TableCell>
                  <TableCell>{rating ?? ""}</TableCell>
                  <TableCell>{discountPercentage ?? ""}</TableCell>
                  <TableCell>
                    <VisibilityIcon onClick={() => handleNavigate(id)} />
                    <DeleteIcon onClick={() => handleDelete(id)} />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={15} sx={styles.noDataCell}>
                <Box>No Data Found</Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
