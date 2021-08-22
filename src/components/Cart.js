import { useContext, useEffect, useState } from "react";
import { Button, Drawer, List, ListItem } from "@material-ui/core";
import CartContext from "../CartContext";
const Cart = () => {
  //const [open, setOpen] = useState(false);
  const { cartArr, setCartArr, open, setOpen } = useContext(CartContext);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        My Cart
      </Button>
      <Drawer open={open}>
        <Button onClick={() => setOpen(false)}>X</Button>
        <div>
          <h2>My Cart:</h2>
        </div>
        <List>
          {cartArr.map((item) => (
            <ListItem>
              <div>
                <h5>{item.title}</h5>
                <h5>{item.price} $</h5>
                <br />
                <h3>{item.amount}</h3>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Cart;
