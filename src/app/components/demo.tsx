import { useState } from 'react'
import { Loading } from './loading'

export function DemoPage() {
  const [file, setFile] = useState<File | null>(null)
  const [recipe, setRecipe] = useState<recipeResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const generateRecipe = async () => {
    if (!file) {
      console.error('No file selected')
      return
    }

    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/generate', {
      method: 'POST',
      body: formData
    })

    setLoading(false)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setRecipe(data)
    } else {
      console.error('Failed to generate recipe')
    }
  }

  return (
    <div className="w-full h-full overflow-auto">
      <div className="p-4 flex justify-center items-center space-x-2">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs cursor-pointer"
          accept="image/png, image/jpeg"
          onChange={event => setFile(event.target.files ? event.target.files[0] : null)}
        />
        <div>
          <button className="btn btn-primary" onClick={generateRecipe}>
            Upload
          </button>
        </div>
      </div>

      {loading && (
        <>
          <div className="w-full flex justify-center items-center">
            <Loading />
          </div>
        </>
      )}

      {recipe && (
        <div className="flex flex-col items-center px-4 py-2 md:px-20 md:py-10">
          <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <img src={recipe.imageUrl} alt="Pancakes" className="w-full object-cover rounded-lg" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-4">
              <div className="flex flex-col w-full justify-center items-center">
                <p className="text-3xl font-bold">{recipe.name}</p>
                <p>{recipe.description}</p>
              </div>
              <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-4 justify-between">
                <div>
                  <label className="text-xl md:text-2xl font-bold">Prepare</label>
                  <p>{recipe.prep_time}</p>
                </div>

                <div>
                  <label className="text-xl md:text-2xl font-bold">Cook</label>
                  <p>{recipe.cook_time}</p>
                </div>

                <div>
                  <label className="text-xl md:text-2xl font-bold">Servings</label>
                  <p>Serves {recipe.servings}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-full">
            <div className="w-full md:w-1/3 h-full md:border-r border-gray-600/10">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Ingredient</th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.ingredients.map((ingredient, index) => (
                    <tr key={index}>
                      <td>{ingredient.quantity}</td>
                      <td>{ingredient.item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full md:w-2/3 flex flex-col space-y-4">
              <label className="text-2xl font-bold">Method</label>
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="">
                  {index + 1}. {instruction}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
