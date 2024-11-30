import { useEffect, useState } from "react";
import { api } from "../services/api";

export enum Category {
    APPETIZER = "appetizer",
    MAIN_COURSE = "main_course",
    DESSERT = "dessert",
    BEVERAGE = "beverage",
    OTHER = "other",
}

export interface Dish {
    id: string;
    name: string,
    slug: string,
    description: string | null,
    category: Category,
    price: number,
    stock: number,
    imageUrl: string | null
}

export const useDishesByCategory = () => {

    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.MAIN_COURSE);
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchDishesByCategory();
    }, [selectedCategory]);

    const fetchDishesByCategory = async () => {
        setLoading(true);
        const { data } = await api.get(`/dishes/${selectedCategory.toUpperCase()}/available`);
        setDishes(data.dishes);
        setLoading(false);
    };

    return {
        selectedCategory,
        setSelectedCategory,
        dishes,
        loading,
    };
};