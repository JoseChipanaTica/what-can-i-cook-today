import OpenAI from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

export async function imageDataExtraction(file: File): Promise<LLMResponse | null> {
  const buffer = await file.arrayBuffer()
  const base64Image = arrayBufferToBase64Image(buffer, file.type)
  const openai = new OpenAI()

  const schema = z.object({
    name: z.string().describe('Name of the recipe'),
    description: z.string().describe('A detailed description of the recipe'),
    prep_time: z.string().describe('Preparation time of the recipe'),
    cook_time: z.string().describe('Cooking time of the recipe'),
    servings: z.string().describe('Number of servings'),
    ingredients: z
      .array(
        z.object({
          quantity: z.string().describe('Quantity of the ingredient'),
          item: z.string().describe('Name of the ingredient')
        })
      )
      .describe('List of ingredients'),
    instructions: z.array(z.string()).describe('List of instructions')
  })

  const completion = await openai.beta.chat.completions.parse({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Extract all ingredients from this image' },
          {
            type: 'image_url',
            image_url: {
              url: base64Image
            }
          },
          { type: 'text', text: `and generate a recipe based only on the fridge's ingredients` }
        ]
      }
    ],
    response_format: zodResponseFormat(schema, 'schema')
  })

  const response = completion.choices[0].message.parsed

  return response
}

function arrayBufferToBase64Image(arrayBuffer: ArrayBuffer, mimeType: string = 'image/png'): string {
  const uint8Array = new Uint8Array(arrayBuffer)
  let binary = ''
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i])
  }
  const base64String = btoa(binary)
  return `data:${mimeType};base64,${base64String}`
}
