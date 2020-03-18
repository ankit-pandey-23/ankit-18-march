export interface ApiResult{
  hits: Hits[],
  nbHits: number,
  page: number,
  nbPages: number,
  hitsPerPage: number,
  exhaustiveNbHits: boolean,
  query: string,
  params: string,
  processingTimeMS: number
}

export interface Hits{
  created_at: string,
  title: string,
  url: string,
  author: string,
  points: number,
  story_text: null,
  comment_text: null,
  num_comments: number,
  story_id: null,
  story_title: null,
  story_url: null,
  parent_id: null,
  created_at_i: number,
  _tags: any,
  objectID: number,
  _highlightResult: any
}

