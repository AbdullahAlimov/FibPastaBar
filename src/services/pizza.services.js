import data from "./db.json";

export const PizzaService = {
    getAll() {
        return data.pizzas;
    }
}

export const DrinksService = {
    getAll() {
        return data.drinks;
    }
}

export const StocksService = {
    getAll() {
        return data.stocks;
    }
}

export const IngridientService = {
    getAll() {
        return data.ingridients;
    }
}

export const DessertsService = {
    getAll() {
        return data.desserts;
    }
}

export const SaucesService = {
    getAll() {
        return data.sauces;
    }
}