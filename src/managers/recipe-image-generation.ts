import OpenAI from 'openai'

export async function generateRecipeImage(recipe: string): Promise<string | undefined> {
  const openai = new OpenAI()

  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: `Based on the following recipe description, generate an image of the recipe:\n\n${recipe}`,
    n: 1,
    size: '1024x1024'
  })

  const imageUrl = response.data[0].url

  return imageUrl
}
