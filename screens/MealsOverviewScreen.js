import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import MealItem from "../components/MealsList/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displyedMeals = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displyedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
