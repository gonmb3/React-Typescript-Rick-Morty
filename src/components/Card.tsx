import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { setItem } from "../utils/localStorage";

type CardProps = {
  id:number 
  image: string;
  name: string;
  status: string;
  species: string;
};

const CardComponent: React.FC<CardProps> = ({image, name, status, species, id}) => {
  {/*disabled button add to favorites */}
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

  const navigate = useNavigate();

  const dispatch = useAppDispatch()
  {/**add to favorties (cart)*/}
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      image,
      info: status,
    }))
  }

  const itemExist = useAppSelector(state => state.cartReducer);
{/* if the item is added (exist inside cart), button disabled */}
  useEffect(() => {
    setDisabledBtn( itemExist.some((item) => item.id === id))
    setItem("favoritos", itemExist)
  }, [itemExist, id])



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component={"img"} height={200} image={image} alt="card-image" />
      <CardContent>
      <Typography sx={{ mb: 2 }} variant="h6">
        {name}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h6">
          Especie: {species}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 2 }}>Estado: {status} </Typography>
      </CardContent>
      <CardActions>
        <Button
        onClick={() => navigate(`/personaje/${id}`)}
         fullWidth variant="contained" size="small" >
          Ver Más
        </Button>
        <Button fullWidth variant="outlined" size="small" disabled={disabledBtn} onClick={handleAddToCart}>
          Agregar a Favoritos
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
