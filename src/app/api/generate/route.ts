import { imageDataExtraction } from '@/managers/recipe-generation'
import { generateRecipeImage } from '@/managers/recipe-image-generation'

export async function POST(request: Request) {
  try {
    const data = await request.formData()
    const file = data.get('file') as File

    const recipe = await imageDataExtraction(file)

    if (!recipe) {
      return new Response('No recipe found', { status: 500 })
    }

    const recipeImage = await generateRecipeImage(recipe.description)

    if (!recipeImage) {
      return new Response('Recipe image', { status: 500 })
    }

    const response: recipeResponse = {
      ...recipe,
      imageUrl: recipeImage
    }
    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    return new Response(error, { status: 500 })
  }
}
