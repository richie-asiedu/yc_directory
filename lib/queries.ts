import { groq } from 'next-sanity'
import { StartupCard } from '@/components/StartupCards'

// Query to get all startups with author information
export const getAllStartupsQuery = groq`
  *[_type == "startup"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      email,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
`

// Query to get a single startup by ID
export const getStartupByIdQuery = groq`
  *[_type == "startup" && _id == $id][0] {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      email,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
`

// Query to search startups by title or description
export const searchStartupsQuery = groq`
  *[_type == "startup" && (title match $query || description match $query || category match $query)] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      email,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
`

// Query to get startups by category
export const getStartupsByCategoryQuery = groq`
  *[_type == "startup" && category == $category] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      email,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
`



