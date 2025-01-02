type LLMResponse = {
  name: string
  description: string
  prep_time: string
  cook_time: string
  servings: string
  ingredients: ingredient[]
  instructions: string[]
}

type recipeResponse = LLMResponse & {
  imageUrl: string
}

type ingredient = {
  quantity: string
  item: string
}
