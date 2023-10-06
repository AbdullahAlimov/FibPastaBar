import React, { useEffect } from 'react';
import classes from "./BuyingPizza.module.scss"
import { useRef, useMemo, useState } from 'react';
import { useDispatch} from "react-redux"
import YellowButton from '../../UI/button/YellowButton/YellowButton';
import { IngridientService } from '../../../services/pizza.services';
import EmptyButton from '../../UI/button/EmptyButton/EmptyButton';
import { actions } from '../../../store/cart.slice';


const BuyingPizza = ({ item, setModalValue }) => {
    const dispatch = useDispatch();

    const sizeMultiplierRef = useRef({
        price: null,
        size: null,
        weight: null,
    })

    const [pizzaSize, setPizzaSize] = useState("small");
    const [pizzaDough, setPizzaDough] = useState("traditional");
    const [addIngredients, setAddIngredients] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setIngredients(await IngridientService.getAll())
        }
        fetchData();
    }, [])

    useMemo(() => {
        switch (pizzaSize) {
            case "small":
                sizeMultiplierRef.current = { price: 1, size: 1, weight: 1 };
                break;
            case "medium":
                sizeMultiplierRef.current = { price: 1.5, size: 1.2, weight: 1.5 };
                break;
            case "large":
                sizeMultiplierRef.current = { price: 2, size: 1.4, weight: 2 };
                break;
            default:
                break;
        }
    }, [pizzaSize])

    const pizzaInCart = {
        ...item,
        size: sizeMultiplierRef.current.size * item.size,
        price: sizeMultiplierRef.current.price * (item.price + addIngredients.reduce((acc, item) => acc + item.price, 0)),
        weight: sizeMultiplierRef.current.weight * item.weight,
        addedIngridients: addIngredients
    }

    return (
        <div className={classes.content}>
            <div className={classes.imageContainer}>
                <div className={classes.image} style={{ width: `${(window.innerWidth < 425 && 160 * sizeMultiplierRef.current.size) || (window.innerWidth < 1024 && 210 * sizeMultiplierRef.current.size) || 350 * sizeMultiplierRef.current.size}px` }}>
                    <img src={`./image/${item.image}`} alt=''></img>
                </div>
                {pizzaSize === "medium" || pizzaSize === "large" ? <div></div> : <div className={classes.circle}></div>}
                {pizzaSize === "large" ? <div></div> : <div className={classes.bigCircle}></div>}
            </div>
            <div className={classes.infoContainer}>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.info}>{`${item.size * sizeMultiplierRef.current.size} см, ${pizzaDough === "traditional" ? "традиционное тесто" : "тонкое тесто"}, ${item.weight * sizeMultiplierRef.current.weight} г`}</p>
                <form className={classes.sizeButton}>
                    <label >
                        <div className={pizzaSize === "small" ? `${classes.buttonActive}` : `${classes.button}`}>Маленькая</div>
                        <input type="radio" name="radioDough" onChange={() => setPizzaSize("small")} defaultChecked={true}></input>
                    </label>
                    <label >
                        <div className={pizzaSize === "medium" ? `${classes.buttonActive}` : `${classes.button}`}>Средняя</div>
                        <input type="radio" name="radioDough" onChange={() => setPizzaSize("medium")}></input>
                    </label>
                    <label >
                        <div className={pizzaSize === "large" ? `${classes.buttonActive}` : `${classes.button}`}>Большая</div>
                        <input type="radio" name="radioDough" onChange={() => setPizzaSize("large")}></input>
                    </label>
                </form>
                <form className={classes.doughButton}>
                    <label >
                        <div className={pizzaDough === "traditional" ? `${classes.buttonActive}` : `${classes.button}`}>Традиционное</div>
                        <input type="radio" name="radioDough" onChange={() => setPizzaDough("traditional")} defaultChecked={true}></input>
                    </label>
                    <label >
                        <div className={pizzaDough === "thin" ? `${classes.buttonActive}` : `${classes.button}`}>Тонкое</div>
                        <input type="radio" name="radioDough" onChange={() => setPizzaDough("thin")}></input>
                    </label>
                </form>
                <ul className={classes.ingredientList}>
                    {ingredients.map(((ingredient) => {
                        return (
                            <li key={ingredient.id}>
                                <EmptyButton>
                                    <div
                                        className={!addIngredients.includes(ingredient) ? `${classes.ingredientContainer}` : `${classes.ingredientContainerActive}`}
                                        onClick={!addIngredients.includes(ingredient) ? () => { setAddIngredients(prev => [...prev, ingredient]) } : () => { setAddIngredients(addIngredients.filter((item) => { return item !== ingredient })) }}>
                                        <div className={classes.image}>
                                            <img src={`./image/${ingredient.image}`} alt=''></img>
                                        </div>
                                        <p className={classes.ingredientName}>{ingredient.name}</p>
                                        <p className={classes.ingredientPrice}>{`${ingredient.price * sizeMultiplierRef.current.price} ₽`}</p>
                                    </div>
                                </EmptyButton>
                            </li>
                        )
                    }))}
                </ul>
                <div className={classes.shadow}></div>
                <YellowButton height="59px" width="100%" onClick={() => {
                    dispatch(actions.addToCart(pizzaInCart));
                    setModalValue(false);
                }}>{`Добавить в корзину ${(item.price + addIngredients.reduce((acc, item) => acc + item.price, 0)) * sizeMultiplierRef.current.price} ₽`}</YellowButton>
            </div>
        </div>
    );
};

export default BuyingPizza;