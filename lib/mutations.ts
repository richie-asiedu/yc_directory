import { clientForMutations } from './sanity'
import { StartupCard, Author } from '@/components/StartupCards'

// Create a new startup
export async function createStartup(startupData: {
  title: string;
  description: string;
  category: string;
  image: string;
  pitch: string;
  authorId?: string;
  views?: number;
}) {
  try {
    const result = await clientForMutations.create({
      _type: 'startup',
      title: startupData.title,
      slug: {
        _type: 'slug',
        current: startupData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      },
      author: startupData.authorId ? { _ref: startupData.authorId, _type: 'reference' } : undefined,
      views: startupData.views || 0,
      description: startupData.description,
      category: startupData.category,
      image: startupData.image,
      pitch: startupData.pitch,
    })

    return result
  } catch (error) {
    console.error('Error creating startup:', error)
    throw new Error('Failed to create startup')
  }
}

// Create a new author
export async function createAuthor(authorData: {
  name: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
}) {
  try {
    const result = await clientForMutations.create({
      _type: 'author',
      name: authorData.name,
      username: authorData.username,
      email: authorData.email,
      image: authorData.image,
      bio: authorData.bio,
    })

    return result
  } catch (error) {
    console.error('Error creating author:', error)
    throw new Error('Failed to create author')
  }
}

// Update startup views
export async function updateStartupViews(startupId: string) {
  try {
    const result = await clientForMutations
      .patch(startupId)
      .inc({ views: 1 })
      .commit()

    return result
  } catch (error) {
    console.error('Error updating startup views:', error)
    throw new Error('Failed to update startup views')
  }
}

// Update startup
export async function updateStartup(startupId: string, updates: Partial<{
  title: string;
  description: string;
  category: string;
  image: string;
  pitch: string;
}>) {
  try {
    const result = await clientForMutations
      .patch(startupId)
      .set(updates)
      .commit()

    return result
  } catch (error) {
    console.error('Error updating startup:', error)
    throw new Error('Failed to update startup')
  }
}

// Delete startup
export async function deleteStartup(startupId: string) {
  try {
    const result = await clientForMutations.delete(startupId)
    return result
  } catch (error) {
    console.error('Error deleting startup:', error)
    throw new Error('Failed to delete startup')
  }
}



