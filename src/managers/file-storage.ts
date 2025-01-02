import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export async function uploadFile(audio: Blob | Buffer, ext: string): Promise<string | null> {
  const uuid: string = crypto.randomUUID()

  const { data, error } = await supabase.storage.from(process.env.SUPABASE_STORAGE!).upload(`${uuid}.${ext}`, audio)

  if (error) {
    console.log(error)
    return null
  }

  return `${process.env.SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`
}
