import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHook";
import { increment } from "../redux-toolkit/guestsSlice";
import Button from "@mui/material/Button";
import Table from "../../shared/components/Table";

function Product() {
  const count = useAppSelector((state) => state.guests.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        Producto suma {count}
      </Button>
      <Table
        dataHeader={["test1", "test2", "test3", "test4"]}
        dataRow={[
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
          ["test1", "test2", "test3", "test4"],
        ]}
        option={<>Test</>}
      />
    </>
  );
}

export default Product;
